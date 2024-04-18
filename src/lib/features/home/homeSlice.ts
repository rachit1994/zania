import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import fallback, { MyData } from "./fallbackJson";
import { fetchData, updateData } from './homeAPI';

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface CounterSliceState {
  value: MyData[];
  status: Status.IDLE | Status.LOADING | Status.FAILED;
  updatedAt: string;
  updated: boolean;
  error?: string | null;
}

const initialState: CounterSliceState = {
  value: fallback,
  status: Status.IDLE,
  updatedAt: new Date().toISOString(),
  updated: false,
  error: null,
};

export const homeSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    updatedata: create.reducer( (state, action: PayloadAction<MyData[]>) => {
      localStorage.setItem("data", JSON.stringify(action.payload));
      state.updated = true;
      state.value = action.payload;
    }),
    fetchFirstData: create.asyncThunk(async () => {
      const data = localStorage.getItem("data");
      if (data && Object.keys(data).length > 0) {
        return JSON.parse(data);
      }
      const response = await fetchData();
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data);
      return response.data;
    },
    {
      pending: (state) => {
        state.status = Status.LOADING;
      },
      fulfilled: (state: CounterSliceState, action: PayloadAction<MyData[]>) => {
        state.status = Status.IDLE;
        state.value = action.payload;
      },
      rejected: (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message;
      },
    },),
    updateAsync: create.asyncThunk(
      async (data: MyData[]) => {
        const response = await updateData(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = Status.LOADING;
        },
        fulfilled: (state: CounterSliceState, action: any) => {
          state.status = Status.IDLE;
          state.updated = false;
          state.updatedAt = new Date().toISOString();
          state.value = action.payload;
        },
        rejected: (state, action) => {
          state.status = Status.FAILED;
          // TODO: since the api do not exist right now, not to break the UI not setting error state
          // state.error = action.error.message;
        },
      },
    ),
  }),
  selectors: {
    getData: (state) => state.value,
    getStatus: (state) => state.status,
    ifUpdated: (state) => state.updated,
    getUpdatedAt: (state) => state.updatedAt,
    getError: (state) => state.error,
  },
});

export const { updatedata, updateAsync, fetchFirstData } =
  homeSlice.actions;

export const { getData, getStatus, ifUpdated, getUpdatedAt, getError } = homeSlice.selectors;

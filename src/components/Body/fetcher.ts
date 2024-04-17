import fallbackJson from "./fallbackJson";

// since there is just one API as of now fixing it like this, can be changed later
export interface MyData {
  type: string;
  title: string;
  position: number;
}

interface FetchError extends Error {
  info?: string;
  status?: number;
}

const fetcher = async (url: string): Promise<MyData[]> => {
  const res = await fetch(url);
 
  if (!res.ok) {
    // TODO: uncomment this later
    // const error: FetchError = new Error('An error occurred while fetching the data.');
    // error.info = await res.json();
    // error.status = res.status;
    // throw error;
    return fallbackJson;
  }
 
  return res.json();
}

export default fetcher;

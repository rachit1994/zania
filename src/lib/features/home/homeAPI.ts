import fallback, { MyData } from "./fallbackJson";

export const updateData = async (data: MyData[]) => {
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const result: { data: MyData } = await response.json();
  
    return result;
  } catch (error) {
    throw new Error("Failed to update data");
  }
};

export const fetchData = async () => {
  try {
    const response = await fetch("/api/data");
    const result: { data: MyData } = await response.json();
    return result;
  } catch (error) {
    return { data: fallback };
  }
};

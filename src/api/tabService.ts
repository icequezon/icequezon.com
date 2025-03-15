import apiClient from "./api";
import { TabsResponse } from "../types/tab";

export const fetchTabs = async (): Promise<TabsResponse> => {
  const response = await apiClient.get<TabsResponse>("/tabs?populate=*&sort[0]=order");
  return response.data;
};


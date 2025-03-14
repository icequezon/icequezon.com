import apiClient from "./api";
import { TabsResponse } from "../types/tab";

export const fetchTabs = async (): Promise<TabsResponse> => {
  const response = await apiClient.get<TabsResponse>("/tabs");
  return response.data;
};


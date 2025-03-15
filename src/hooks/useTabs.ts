import { useQuery } from "@tanstack/react-query";
import { fetchTabs } from "../api/tabService";
import { TabsResponse } from "../types/tab";

export const useTabs = () => {
  return useQuery<TabsResponse, Error>({
    queryKey: ["tabs"],
    queryFn: fetchTabs,
    staleTime: 30000,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};


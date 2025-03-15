import { Pagination } from "./pagination";

// Type for the metadata structure
export interface Meta {
  pagination: Pagination;
}

export interface TabData {
  id: number;
  key: string;
  type: string;
  value: string;
  display: string;
}

// Type for individual Tab
export interface Tab {
  id: number;
  documentId: string;
  name: string;
  url: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  data: TabData[];
}

// Type for the full response, including `data` and `meta`
export interface TabsResponse {
  data: Tab[];
  meta: Meta;
}

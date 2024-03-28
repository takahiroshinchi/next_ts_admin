import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  done: boolean;
  genre: string[];
  createAt: string;
} & MicroCMSDate;

export type Blogs = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

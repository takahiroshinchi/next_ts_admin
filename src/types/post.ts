import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

type Body = {
  fieldId: "richlink" | "markdown" | "richeditor";
  // richeditor
  richText: string;
  // richlink
  title: string;
  url: string;
  image: MicroCMSImage;
  // markdown
  markdownText: string;
} & MicroCMSDate;

type Topic = {
  fieldId: "tech" | "note";
  title: string;
  body: Body[];
};

type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Post = {
  id: string;
  title: string;
  caption: string;
  body: string;
  target: string[];
  done: boolean;
  topic: Topic[];
  category: Category[];
  createAt: string;
};

export type Posts = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Post[];
};

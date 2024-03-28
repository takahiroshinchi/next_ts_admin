import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk"; //ES6
import { Blog } from "src/types/blog";
import { Post } from "src/types/post";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

// ポスト一覧を取得
export const getPostList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Post>({
    endpoint: "post",
    queries,
  });

  return listData;
};

// ポストの詳細を取得
export const getPostDetail = async (contentId: string) => {
  const detailData = await client.getListDetail<Post>({
    endpoint: "post",
    contentId,
  });

  return detailData;
};

import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { Auth } from "src/components/Auth";
import { Sign } from "src/components/Sign";
import MicroCMSImage from "src/components/ui/MicroCMSImage";
import { Tab } from "src/components/ui/Tab";
import { getBlogList } from "src/lib/microcms";
import { supabase } from "src/lib/supabase";
import { Blog } from "src/types/blog";

import useStore from "../store";

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const contents = props.contents;
  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  return (
    <>
      <Head>
        <title>デザイン管理画面</title>
      </Head>
      <Tab />
      <div className="flex gap-x-2 pb-8">
        <section className="mt-4 space-y-4 [&>*]:rounded-lg [&>*]:bg-white [&>*]:p-4 [&>*]:shadow">
          {contents.map((content) => {
            return (
              <div key={content.id}>
                <div className="flex flex-wrap items-center justify-between bg-gray-600 p-6">
                  <h2 className="mr-6 flex-1 font-semibold text-white">
                    {content.title}
                  </h2>
                  <time
                    className="flex-shrink-0 text-sm text-white"
                    dateTime={content.publishedAt}
                  >
                    {dayjs(content.publishedAt).format("YYYY年MM月DD日")}
                  </time>
                </div>
                <p className="flex flex-shrink-0 gap-x-2 pl-2 text-sm text-gray-700">
                  {content.genre.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </p>
                <div className="flex flex-wrap items-center justify-between bg-white p-6"></div>
                <div
                  className="prose rounded-lg border p-8"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
                {content.eyecatch && (
                  <MicroCMSImage
                    src={content.eyecatch.url}
                    width={content.eyecatch.width}
                    height={content.eyecatch.height}
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </section>
        {!session ? <Auth /> : <Sign />}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogResponse = await getBlogList({ offset: 0, limit: 100 });

  return {
    props: blogResponse,
  };
};

export default Home;

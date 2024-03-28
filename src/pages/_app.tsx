import "src/styles/globals.css";
import "src/lib/tailwind.css";

import { createEmotionCache, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ScrollTrigger } from "src/components/ui/ScrollTrigger";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // default three times
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const myCache = createEmotionCache({ key: "mantine", prepend: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
        <div className="mx-auto max-w-full px-8">
          <header className="flex flex-wrap items-center justify-between bg-gray-50 p-6 shadow-md">
            <div className="mr-6 flex flex-1 items-center text-slate-900">
              <Link href="/" className="py-8 text-xl font-bold">
                デザイン管理画面
              </Link>
            </div>
          </header>
          <main className="mt-8 max-w-prose">
            <Component {...pageProps} />
          </main>
          <ScrollTrigger />
        </div>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

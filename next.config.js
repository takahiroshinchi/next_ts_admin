/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "picsum.photos"],
    // loader: 'imgix',
    // path: '',
  },
  async headers() {
    const headers = [];
    // if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    headers.push({
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex",
        },
      ],
      source: "/:path*",
    });
    // }
    return headers;
  },
};

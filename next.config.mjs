import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "excalidraw.com" }],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
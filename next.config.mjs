import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "images.beta.cosmos.so" ,  }, { hostname: "github.com",  }],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
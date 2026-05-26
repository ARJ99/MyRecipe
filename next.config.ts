import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "www.allrecipes.com",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // allowedDevOrigins: ["lesia-arrestive-bettyann.ngrok-free.dev"],
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   // port: "",
      //   // pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "dyudu89p4mpyq6md.public.blob.vercel-storage.com",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

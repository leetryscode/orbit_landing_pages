/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Served extensionless per Apple's spec (iOS Universal Links, for
        // Susie's List's susieslist:// invite flow) - explicit content-type
        // since Next.js can't infer one for a file with no extension.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;

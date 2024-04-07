/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig; // remove after creating db

// export default {
//   ...nextConfig,
//   env: {
//     DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,
//     AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
//     AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// };

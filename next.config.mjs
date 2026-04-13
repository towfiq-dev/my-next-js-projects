/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //https://images.filmibeat.com/ph-big/2025/09/ritika-nayak1757913064_1.jpg
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUOLtkLQ4c1qGzoZ0i_Q3nqXDd1lRM_p01g&s
  //https://upload.wikimedia.org/wikipedia/te/2/20/Ritika_Nayak.jpg
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.filmibeat.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upload.wikimedia.org',
  //       port: '',
  //       pathname: '/wikipedia/te/2/20/**',
  //       search: '',
  //     },
  //   ],
  // },
};

export default nextConfig;

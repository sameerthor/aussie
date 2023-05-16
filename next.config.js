/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['aussie.thor.work'],
	},
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

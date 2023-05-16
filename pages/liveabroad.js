import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
const Footer = dynamic(() => import('./compnents/footer'));
const Header = dynamic(() => import('./compnents/Header'));
const Content = dynamic(() =>
	import('./compnents/liveabroadPageComponent/content')
);
const DiscoverIsland = dynamic(() =>
	import('./compnents/liveabroadPageComponent/discoverIsland')
);
const FirstBanner = dynamic(() =>
	import('./compnents/liveabroadPageComponent/firstBanner')
);
const SecondBanner = dynamic(() =>
	import('./compnents/liveabroadPageComponent/secondBanner')
);
const StorySection = dynamic(() => import('./compnents/storySection'));

const liveabroad = (props) => {
	return (
		<div>
			<Head>
				{props.titleobj && props.titleobj?.title && (
					<title>props.titleobj?.title?.rendered</title>
				)}
			</Head>
			<Header
				headerData={props?.data?.commonData}
				menuData={props?.data?.menuData}
			/>
			<FirstBanner />
			<Content />
			<DiscoverIsland />
			<SecondBanner />
			{/* <StorySection /> */}
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default liveabroad;
export async function getServerSideProps(context) {
	let route = context.resolvedUrl.split('?')[0];
	let data = {
		commonData: [],
		menuData: [],
		error: false,
		titleobj: '',
	};
	await axios
		.get('https://aussie.thor.work/wp-json/acf/v2/options/')
		.then(async (res) => {
			data.commonData = res.data.acf;
			await axios
				.get(
					`https://aussie.thor.work/wp-json/menus/v1/menus/${res?.data?.acf?.menu_items?.slug}`
				)
				.then((res) => {
					data.menuData = res?.data?.items;
				})
				.catch((err) => {
					data.error = true;
					console.log(err);
				});
		})
		.catch((err) => {
			data.error = true;
			console.log(err);
		});
	await axios
		.get('https://aussie.thor.work/wp-json/wp/v2/posts')
		.then((res) => {
			data.titleobj = res.data.filter((itm) => itm.slug === route);
		})
		.catch((err) => {
			data.error = true;
			console.log(err);
		});
	return {
		props: {
			data: data,
		},
	};
}

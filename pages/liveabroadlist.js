import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Footer = dynamic(() => import('./compnents/footer'));
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));
const FirstBanner = dynamic(() =>
	import('./compnents/liveabroadlistPageComponent/firstBanner')
);
const Content = dynamic(() =>
	import('./compnents/liveabroadlistPageComponent/content')
);
const SecondBanner = dynamic(() =>
	import('./compnents/liveabroadlistPageComponent/secondBannner.js')
);
const Package = dynamic(() =>
	import('./compnents/liveabroadlistPageComponent/package')
);

const liveabroadlist = (props) => {
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
			<Package />
			<SecondBanner />
			<StorySection />
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default liveabroadlist;
export async function getServerSideProps(context) {
	let route = context.resolvedUrl.split('?')[0];
	let data = {
		commonData: [],
		error: false,
		titleobj: '',
		menuData: [],
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

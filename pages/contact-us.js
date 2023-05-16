import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));
const Footer = dynamic(() => import('./compnents/footer'));
const SecondBanner = dynamic(() =>
	import('./compnents/contactusPageComponent/secondBanner')
);
const MapSection = dynamic(() =>
	import('./compnents/contactusPageComponent/mapSection')
);
const Content = dynamic(() =>
	import('./compnents/contactusPageComponent/content')
);
const FirstBanner = dynamic(() =>
	import('./compnents/contactusPageComponent/firstBanner')
);

const contactus = (props) => {
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
			<FirstBanner bannerData={props?.data?.pageData?.banner} />
			<Content contentData={props?.data?.pageData?.details} />
			<MapSection />
			<SecondBanner bannnerData={props?.data?.pageData?.banner_2} />
			<StorySection stories={props?.data?.pageData?.stories} />
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default contactus;
export async function getServerSideProps(context) {
	const route = context.resolvedUrl.split('?')[0];
	const data = {
		commonData: [],
		menuData: [],
		pageData: [],
		error: false,
		titleobj: '',
	};

	try {
		const res1 = await axios.get(
			'https://aussie.thor.work/wp-json/acf/v2/options/'
		);
		const menuSlug = res1.data.acf.menu_items.slug;
		const res2 = await axios.get(
			`https://aussie.thor.work/wp-json/menus/v1/menus/${menuSlug}`
		);
		data.commonData = res1.data.acf;
		data.menuData = res2.data.items;
	} catch (err) {
		data.error = true;
		console.log(err);
	}

	try {
		const res3 = await axios.get('https://aussie.thor.work/wp-json/wp/v2/posts');
		data.titleobj = res3.data.filter((item) => item.slug === route);
	} catch (err) {
		data.error = true;
		console.log(err);
	}

	try {
		const res4 = await axios.get(
			'https://aussie.thor.work/wp-json/wp/v2/pages/545?acf_format=standard'
		);
		data.pageData = res4.data.acf;
	} catch (err) {
		data.error = true;
		console.log(err);
	}

	return {
		props: {
			data,
		},
	};
}

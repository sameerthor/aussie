import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
const Footer = dynamic(() => import('./compnents/footer'));
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));
const FirstBanner = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/firstBanner')
);
const SecondBanner = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/secondBanner')
);
const FirstContent = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/firstContent')
);
const Package = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/package')
);
const SecondContent = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/secondContent')
);
const Gallery = dynamic(() =>
	import('./compnents/liveabroadbookingPageComponent/gallery')
);

const liveabroadbooking = (props) => {
	return (
		<div>
			<Head>
				<title>Liveabroad Booking</title>
			</Head>
			<Header
				headerData={props?.data?.commonData}
				menuData={props?.data?.menuData}
			/>
			<FirstBanner bannerData={props?.data?.pageData?.banner} />
			<FirstContent firstContent={props?.data?.pageData?.content?.content} />
			<Package packageDetail={props?.data?.pageData?.content?.cabin_details} />
			<SecondContent contentData={props?.data?.pageData?.content?.content_2} />
			<Gallery galleryData={props?.data?.pageData?.gallery} />
			{/* <SecondBanner bannerCont={props?.data?.pageData?.} /> */}
			<StorySection stories={props?.data?.pageData?.stories} />
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default liveabroadbooking;
export async function getServerSideProps(context) {
	const route = context.resolvedUrl.split('?')[0];
	const data = {
		commonData: [],
		menuData: [],
		error: false,
		pageData: [],
	};

	try {
		const optionsRes = await axios.get(
			`https://aussie.thor.work/wp-json/acf/v2/options/`
		);
		data.commonData = optionsRes.data.acf;
		const menuRes = await axios.get(
			`https://aussie.thor.work/wp-json/menus/v1/menus/${optionsRes?.data?.acf?.menu_items?.slug}`
		);
		data.menuData = menuRes.data.items;
		const pageRes = await axios.get(
			`https://aussie.thor.work/wp-json/wp/v2/liveaboard/707`
		);
		data.pageData = pageRes.data.acf;
	} catch (error) {
		data.error = true;
		console.log(error);
	}

	return {
		props: {
			data,
		},
	};
}

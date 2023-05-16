import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import FirstBanner from './compnents/courseListPageComponent/firstBanner';
const SecondBanner = dynamic(() =>
	import('./compnents/courseListPageComponent/secondBanner')
);
const SkillSection = dynamic(() =>
	import('./compnents/courseListPageComponent/skillSection')
);
const ThirdBanner = dynamic(() =>
	import('./compnents/courseListPageComponent/thirdBanner')
);
const Footer = dynamic(() => import('./compnents/footer'));
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));

const courses = (props) => {
	return (
		<div>
			<Head>
				<title>Scuba Diving</title>
			</Head>
			<Header
				headerData={props?.data?.commonData}
				menuData={props.data?.menuData}
			/>
			<FirstBanner />
			<SecondBanner />
			<SkillSection />
			<ThirdBanner />
			{/* <StorySection /> */}
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default courses;
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
			`https://aussie.thor.work/wp-json/wp/v2/Scuba_Diving/525`
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

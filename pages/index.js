import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';

const ErrorPage = dynamic(() => import('./compnents/errorPage'));
const SliderBanner = dynamic(() =>
	import('./compnents/homePageCompnent/sliderBanner')
);
const FirstBanner = dynamic(() =>
	import('./compnents/homePageCompnent/firstBanner')
);
const Header = dynamic(() => import('./compnents/Header'));
const PackageSection = dynamic(() =>
	import('./compnents/homePageCompnent/packageSection')
);
const SecondBanner = dynamic(() =>
	import('./compnents/homePageCompnent/secondBanner')
);
const DivingLicense = dynamic(() =>
	import('./compnents/homePageCompnent/divingLicense')
);
const ThirdBanner = dynamic(() =>
	import('./compnents/homePageCompnent/thirdBanner')
);
const StorySection = dynamic(() => import('./compnents/storySection'));
const Footer = dynamic(() => import('./compnents/footer'));

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js/dist/wow.js') : null;

const Home = (props) => {
	useEffect(() => {
		new WOW().init();
	}, []);

	const { titleobj, data } = props;
	const { error, pageData, commonData, menuData } = data;

	return (
		<div>
			<Head>
				{titleobj?.title?.rendered && <title>{titleobj.title.rendered}</title>}
			</Head>
			{error ? (
				<ErrorPage />
			) : (
				<>
					<Header headerData={commonData} menuData={menuData} />
					{pageData.slider && <SliderBanner slider={pageData.slider} />}
					{pageData.first_banner && (
						<FirstBanner bannerData={pageData.first_banner} />
					)}
					{pageData.package && <PackageSection package={pageData.package} />}
					{pageData.second_banner && (
						<SecondBanner bannerData={pageData.second_banner} />
					)}
					{pageData.license && <DivingLicense license={pageData.license} />}
					{pageData.third_banner && (
						<ThirdBanner bannerData={pageData.third_banner} />
					)}
					{pageData.stories && <StorySection stories={pageData.stories} />}

					<Footer footerData={commonData} />
				</>
			)}
		</div>
	);
};

export default Home;

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
		data.commonData = res1.data.acf;

		const res2 = await axios.get(
			`https://aussie.thor.work/wp-json/menus/v1/menus/${data.commonData.menu_items.slug}`
		);
		data.menuData = res2.data.items;

		const res3 = await axios.get('https://aussie.thor.work/wp-json/wp/v2/posts');
		data.titleobj = res3.data.filter((itm) => itm.slug === route);

		const res4 = await axios.get(
			`https://aussie.thor.work/wp-json/wp/v2/pages/14?acf_format=standard`
		);
		data.pageData = res4.data.acf;
	} catch (err) {
		data.error = true;
		console.log(err);
	}

	return {
		props: {
			data: data,
		},
	};
}

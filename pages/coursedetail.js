import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
const PackageBottom = dynamic(() =>
	import('./compnents/courseDetailPageComponent/packageBottom')
);
const PackageTop = dynamic(() =>
	import('./compnents/courseDetailPageComponent/packageTop')
);
const Footer = dynamic(() => import('./compnents/footer'));
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));
const Gallery = dynamic(() =>
	import('./compnents/courseDetailPageComponent/gallery')
);
const MoreCourses = dynamic(() =>
	import('./compnents/courseDetailPageComponent/moreCourses')
);
const FirstBanner = dynamic(() =>
	import('./compnents/courseDetailPageComponent/firstBanner')
);
const CourseDetailDesc = dynamic(() =>
	import('./compnents/courseDetailPageComponent/courseDetailDesc')
);
const CourseExperience = dynamic(() =>
	import('./compnents/courseDetailPageComponent/courseExperience')
);
const CourseRequisite = dynamic(() =>
	import('./compnents/courseDetailPageComponent/courseRequisite')
);

const coursedetail = (props) => {
	return (
		<div>
			<Head>
				<title>Scuba Diving</title>
			</Head>
			<Header
				headerData={props?.data?.commonData}
				menuData={props?.data?.menuData}
			/>
			<FirstBanner bannerData={props?.data?.pageData?.banner} />
			<PackageTop activityData={props.data.pageData.activity_heading} />
			<CourseExperience experienceData={props?.data?.pageData?.experience} />
			<PackageBottom packageData={props?.data?.pageData?.packages} />
			<CourseDetailDesc coursedetail={props?.data?.pageData?.more_details} />
			<CourseRequisite requisiteData={props?.data?.pageData?.booking} />
			<Gallery galleryData={props?.data?.pageData?.galley} />
			<MoreCourses courseData={props?.data?.pageData?.find_out_more} />
			<StorySection stories={props?.data?.pageData?.stories} />
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default coursedetail;
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

import dynamic from 'next/dynamic';
import Head from 'next/head';
const Header = dynamic(() => import('./compnents/Header'));
const StorySection = dynamic(() => import('./compnents/storySection'));
const Footer = dynamic(() => import('./compnents/footer'));
const SecondBanner = dynamic(() =>
	import('./compnents/storyPageComponent/secondBanner')
);

const Story = (props) => {
	return (
		<div>
			<Head>
				{props.titleobj && props.titleobj?.title && (
					<title>props.titleobj?.title?.rendered</title>
				)}
			</Head>
			<Header headerData={props?.data?.commonData} />
			<SecondBanner />
			<StorySection />
			<Footer footerData={props?.data?.commonData} />
		</div>
	);
};
export default Story;
export async function getServerSideProps(context) {
	let route = context.resolvedUrl.split('?')[0];
	let data = {
		commonData: [],
		error: false,
		titleobj: '',
	};
	await axios
		.get('https://aussie.thor.work/wp-json/acf/v2/options/')
		.then((res) => {
			data.commonData = res.data.acf;
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

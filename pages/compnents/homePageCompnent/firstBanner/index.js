import Image from 'next/image';

const FirstBanner = (props) => {
	return (
		<div className='first_banner_sec'>
			<Image src={props.bannerData?.image?.url} alt='' fill={true} priority />
			<div className='bnrSection'>
				<div className='container'>
					<h1 className='wow fadeInUp'>{props.bannerData?.title}</h1>
					<h1 className='wow fadeInUp'>{props.bannerData?.subtitle}</h1>
					<p className='wow fadeInUp'>{props.bannerData?.content}</p>
					<button className='wow fadeInUp'>{props.bannerData?.button_text}</button>
				</div>
			</div>
		</div>
	);
};
export default FirstBanner;

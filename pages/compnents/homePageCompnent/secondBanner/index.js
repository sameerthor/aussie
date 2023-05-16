import Image from 'next/image';

const SecondBanner = (props) => {
	return (
		<div className='first_banner_sec'>
			<Image src={props.bannerData?.image?.url} alt='' fill={true} />
			<div className='bnrSection'>
				<div className='container'>
					<h1 style={{ width: '55%' }} className='wow fadeInUp'>
						{props.bannerData?.title}
					</h1>
					<p className='wow fadeInUp'>{props.bannerData?.content}</p>
					<button style={{ width: '265px' }} className='wow fadeInUp'>
						{props.bannerData?.button_text}
					</button>
				</div>
			</div>
		</div>
	);
};
export default SecondBanner;

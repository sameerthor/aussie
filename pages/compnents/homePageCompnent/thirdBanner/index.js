import Image from 'next/image';

const ThirdBanner = (props) => {
	return (
		<div className='first_banner_sec'>
			<Image src={props.bannerData?.image?.url} alt='' fill={true} />
			<div
				className='bnrSection'
				style={{
					backgroundImage:
						'linear-gradient( to left, #000000 -30%, rgba(0, 0, 0, 0) 85.57% )',
					backgroundRepeat: 'no-repeat',
					backgroundSize: ' 70% 100%',
					backgroundPosition: '100% 0',
				}}
			>
				<div className='container'>
					<div style={{ display: 'flex' }}>
						<div className='third_banner_cont'></div>
						<div className='thrd_banner_cont'>
							<h1 className='wow fadeInUp'>{props.bannerData?.title}</h1>
							<p style={{ width: '80%' }} className='wow fadeInUp'>
								{props.bannerData?.content}
							</p>
							<button className='wow fadeInUp'>{props.bannerData?.button_text}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ThirdBanner;

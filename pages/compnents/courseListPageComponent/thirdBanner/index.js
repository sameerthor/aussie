import Image from 'next/image';

const ThirdBanner = () => {
	return (
		<div className='first_banner_sec'>
			<Image src='/list_banner3.jpg' alt='' fill={true} priority />
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
							<h1>A DIVING</h1>
							<h1>COMMUNITY</h1>
							<h1>IN PHUKET</h1>
							<p style={{ width: '80%' }}>
								Here at Aussie Divers we don't just consider ourselves a dive shop, we
								think of it as more, a big family of like minded individuals coming
								together to enjoy the marine environment here in Phuket & Thailand.
							</p>
							<button>READ MORE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ThirdBanner;

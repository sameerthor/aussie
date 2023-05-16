import Image from 'next/image';

const SecondBanner = () => {
	return (
		<div className='first_banner_sec'>
			<Image src='/list_banner3.jpg' alt='' fill={true} priority />
			<div className='bnrSection'>
				<div className='container'>
					<div style={{ display: 'flex' }}>
						<div style={{ width: '50%' }}></div>
						<div style={{ width: '50%' }}>
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
export default SecondBanner;

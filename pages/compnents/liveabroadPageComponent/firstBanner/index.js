import Image from 'next/image';

const FirstBanner = () => {
	return (
		<div className='list_banner_first'>
			<Image src='/liveabraod.jpg' alt='' fill={true} priority />
			<div className='list_banner_text'>
				<h1 style={{ textAlign: 'center' }}>
					LIVEABOARD DIVING PHUKET, <br />
					Thailand
				</h1>
				<p>
					Imagine a holiday where you eat, sleep and scuba dive – That’s liveaboard
					diving in Phuket, Thailand
				</p>
				<button>KNOW MORE</button>
			</div>
		</div>
	);
};
export default FirstBanner;

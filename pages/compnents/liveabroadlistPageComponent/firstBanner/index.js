import Image from 'next/image';

const FirstBanner = () => {
	return (
		<div className='list_banner_first'>
			<Image src='/lva_banner1.png' alt='' fill={true} priority />
			<div className='list_banner_text'>
				<h1>Similan Island</h1>
				<p>
					Eat, sleep, dive and repeat. Enjoy a scuba diving liveaboard adventure
					today
				</p>
				<button>KNOW MORE</button>
			</div>
		</div>
	);
};
export default FirstBanner;

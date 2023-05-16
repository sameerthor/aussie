import Image from 'next/image';

const SecondBanner = () => {
	return (
		<div className='first_banner_sec'>
			<Image src='/list_banner2.jpg' alt='' fill={true} priority />
			<div className='bnrSection'>
				<div className='container'>
					<h1>WHAT IS PADI?</h1>
					<p>
						Ever wonder why so many people come to Thailand every year to learn how to
						scuba dive? Well the answer to that is simple, waters here are warm,
						currents here are mild and the fish, critter &amp; coral life are truly
						world class.
					</p>
					<button>READ MORE</button>
				</div>
			</div>
		</div>
	);
};
export default SecondBanner;

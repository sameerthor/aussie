import Image from 'next/image';

const FirstBanner = () => {
	return (
		<div className='list_banner_first'>
			<Image src='/teams.jpg' alt='' fill={true} priority />
			<div
				className='list_banner_text'
				style={{ background: 'rgba(0, 0, 0, 0.3' }}
			>
				<h1>AUSSIE DIVERS TEAM</h1>
				<p>Introducing You To The Aussie Divers Phuket Team</p>
			</div>
		</div>
	);
};
export default FirstBanner;

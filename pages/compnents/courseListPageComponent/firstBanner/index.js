import Image from 'next/image';

const FirstBanner = () => {
	return (
		<div className='list_banner_first'>
			<Image src='/course_list.jpg' fill={true} alt='' priority />
			<div className='list_banner_text'>
				<h1>SCUBA DIVING COURSES</h1>
				<p>
					Get your PADI scuba diving license or check out our continuing education
					courses
				</p>
				<button>KNOW MORE</button>
			</div>
		</div>
	);
};
export default FirstBanner;

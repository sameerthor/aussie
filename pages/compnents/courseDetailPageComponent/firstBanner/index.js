import Image from 'next/image';
import { useRouter } from 'next/router';

const FirstBanner = (props) => {
	const router = useRouter();
	return (
		<div className='list_banner_first'>
			<Image
				src={props?.bannerData?.banner_image?.url}
				fill={true}
				alt=''
				priority
			/>
			<div className='list_banner_text'>
				<h3>{props?.bannerData?.title_1}</h3>
				<h1>{props?.bannerData?.title_2}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: props?.bannerData?.test,
					}}
				/>
				<button onClick={() => router.push(`${props?.bannerData?.button_url}`)}>
					{props?.bannerData?.button_text}
				</button>
			</div>
		</div>
	);
};
export default FirstBanner;

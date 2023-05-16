import Image from 'next/image';
import { useRouter } from 'next/router';

const FirstBanner = (props) => {
	const router = useRouter();
	return (
		<div className='list_banner_first'>
			<Image src={props?.bannerData?.image?.url} alt='' fill={true} priority />
			<div className='list_banner_text'>
				<h1>{props?.bannerData?.heading}</h1>
				<p>{props?.bannerData?.sub_heading}</p>
				<button onClick={() => router.push(`${props.bannerData.button_link}`)}>
					{props?.bannerData?.button_text}
				</button>
			</div>
		</div>
	);
};
export default FirstBanner;

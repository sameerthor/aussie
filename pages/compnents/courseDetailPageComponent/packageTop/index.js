import Image from 'next/image';
import { useRouter } from 'next/router';

const PackageTop = (props) => {
	const router = useRouter();
	return (
		<div className='package_detil_sec'>
			<div className='container'>
				<h1 className='package_head'>{props?.activityData?.activity_heading}</h1>
				<p className='package_subhead'>{props?.activityData?.activity_text}</p>
				<div className='row'>
					{props?.activityData?.activities &&
						props?.activityData?.activities.map((itm, id) => {
							return (
								<div className='col-md-4' key={id}>
									<div className='package_detail'>
										<div className='detail_img'>
											<Image src={itm.image.url} alt='' fill={true} />
											<span className='price'>{itm.price}</span>
										</div>
										<div className='package_dtl'>
											<span className='packagenme'>{itm.title}</span>
											<div className='packae_dtl_bot'>
												<span
													className='moredetail_link'
													onClick={() => router.push(`${itm.button_1_url}`)}
												>
													{itm.button_1_text}
												</span>
												<button onClick={() => router.push(`${itm.button_2_url}`)}>
													{itm.button_2_text}
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
export default PackageTop;

import Image from 'next/image';
import { useRouter } from 'next/router';

const PackageBottom = (props) => {
	const router = useRouter();
	return (
		<div className='package_detil_sec'>
			<div className='container'>
				<h1 className='package_head' style={{ fontSize: '52px' }}>
					{props?.packageData?.packages_heading}
				</h1>
				<div className='row'>
					{props?.packageData?.packages &&
						props?.packageData?.packages.map((itm, id) => {
							return (
								<div className='col-md-4' key={id}>
									<div className='package_detail'>
										<div className='detail_img'>
											<Image src={itm.images.url} alt='' fill={true} />
											<span className='price'>{itm.price}</span>
										</div>
										<div className='package_dtl'>
											<span
												className='packagenme'
												style={{ fontSize: '20px', textAlign: 'center' }}
											>
												{itm.title}
											</span>
											<div className='course_detail'>
												{itm.packages_details &&
													itm.packages_details.map((itx, idx) => {
														return (
															<div key={idx}>
																<span className='detail_head'>{itx.title}</span>
																<div
																	dangerouslySetInnerHTML={{
																		__html: itx.text,
																	}}
																/>
															</div>
														);
													})}
											</div>
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
export default PackageBottom;

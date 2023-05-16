import Image from 'next/image';

const FirstBanner = (props) => {
	return (
		<div className='list_banner_first'>
			<Image
				src={props?.bannerData?.banner_image?.url}
				alt=''
				fill={true}
				priority
			/>
			<div
				className='list_banner_text'
				style={{ background: 'rgba(0, 0, 0, 0.3)' }}
			>
				<h1>{props?.bannerData?.heading}</h1>
				<p>{props?.bannerData?.content}</p>
				<div className='container' style={{ width: '76%' }}>
					<div className='row'>
						<div className='col-md-6'>
							<div className='contact_dtl'>
								<Image src='/phone-call.png' alt='' width={36} height={36} />
								<span className='contact_dtl_head'>
									{props?.bannerData?.contact?.title}
								</span>
								<div
									className='conatct_cont'
									dangerouslySetInnerHTML={{
										__html: props?.bannerData?.contact?.content,
									}}
								/>
								<div className='contact_infor'>
									{props?.bannerData?.contact?.call &&
										props?.bannerData?.contact?.call.map((itm, id) => {
											return (
												<p key={id}>
													{itm.title} {itm.contact_detail_text}
												</p>
											);
										})}
								</div>
								<div className='social_icon'>
									{props?.bannerData?.contact?.social_media &&
										props?.bannerData?.contact?.social_media.map((item, id) => {
											return (
												<Image
													src={item?.social_icon?.url}
													alt=''
													width={item?.width}
													height={item?.height}
													key={id}
												/>
											);
										})}
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='contact_dtl'>
								<Image
									src={props.bannerData?.location?.location_icon?.url}
									alt=''
									width={36}
									height={36}
								/>
								<span className='contact_dtl_head'>
									{props.bannerData?.location?.title}
								</span>
								<div
									className='conatct_cont'
									dangerouslySetInnerHTML={{
										__html: props?.bannerData?.location?.content,
									}}
								/>
								{props?.bannerData?.location?.address &&
									props?.bannerData?.location?.address.map((itx, id) => {
										return (
											<div className='office_dir' key={id}>
												<div className='office_location'>
													<p className='lloc'>
														{itx.title}{' '}
														<em style={{ fontStyle: 'inherit', color: '#25afe8' }}>
															{itx.address}
														</em>
													</p>
													<span className='dir_link'>{itx.address_button_text}</span>
												</div>
											</div>
										);
									})}
								<button className='contct_btm'>
									{props.bannerData?.location?.button_text}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FirstBanner;

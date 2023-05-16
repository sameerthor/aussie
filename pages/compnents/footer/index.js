import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = (props) => {
	const router = useRouter();
	return (
		<div className='footer'>
			<div className='container'>
				<div className='row wow fadeInUp'>
					<div className='col-md-3'>
						<h3>{props.footerData?.mission?.heading}</h3>
						<div className='missionimg'>
							<Image
								src={props.footerData?.mission?.mission_image}
								alt=''
								fill={true}
							/>
						</div>
						<p>{props.footerData?.mission?.mission_desc}</p>
						<br />
					</div>
					<div className='col-md-3' style={{ paddingLeft: '10px' }}>
						<h3>
							{props.footerData?.location?.heading}{' '}
							<Image
								src={props.footerData?.location?.location_icon}
								alt=''
								width={10.5}
								height={15}
							/>
						</h3>
						<br />
						{props?.footerData?.location?.office_locations &&
							props?.footerData?.location?.office_locations.map((item, idx) => {
								return <p key={idx}>{item.location}</p>;
							})}
						<br />
					</div>
					<div className='col-md-3' style={{ paddingLeft: '10px' }}>
						<h3>
							{props?.footerData?.contact?.heading}{' '}
							<Image
								src={props?.footerData?.contact?.contact_icon}
								alt=''
								width={13}
								height={15}
							/>
						</h3>
						<br />
						{props?.footerData?.contact?.contact_details &&
							props?.footerData?.contact?.contact_details.map((itx, it) => {
								return <p key={it}>{itx.detail}</p>;
							})}
						<br />
					</div>
					<div className='col-md-3' style={{ paddingLeft: '10px' }}>
						<div className='footer_img'>
							<Image
								src={props.footerData?.trip_advisor?.footer_logo}
								alt=''
								fill={true}
							/>
						</div>
						<div className='fot_trip_advisor_text'>
							<Image
								src={props?.footerData?.trip_advisor?.tripadvisor_logo}
								alt=''
								width={43}
								height={25}
							/>
							<p>{props?.footerData?.trip_advisor?.tripadvisor_para}</p>
							<span
								className='trip_adisor_link'
								onClick={() =>
									router.push(
										`${props?.footerData?.trip_advisor?.tripadvisor_link?.url}`
									)
								}
							>
								{' '}
								{props?.footerData?.trip_advisor?.tripadvisor_link?.title}
							</span>
						</div>
					</div>
				</div>
				<div className='footer_bottom wow fadeInUp'>
					<div className='footer_left_link'>
						{props.footerData &&
							props.footerData?.footer_links &&
							props.footerData?.footer_links.map((itm, id) => {
								return (
									<span
										className='footer_links'
										key={id}
										style={{
											cursor: 'pointer',
											color:
												props.footerData?.footer_links.length === id + 1
													? '#25AFE8'
													: '#fff',
										}}
										// onClick={() => {
										// 	router.push(`/${itm.call_to_action}`);
										// }}
									>
										{itm.name}
									</span>
								);
							})}
					</div>
					<div className='footer_right'>{props.footerData?.copyright_text}</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;

import Image from 'next/image';
import { useRouter } from 'next/router';

const CourseRequisite = (props) => {
	const router = useRouter();
	return (
		<div className='course_nedd'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5'>
						<div className='requisite'>
							<h1>{props?.requisiteData?.booking_heading}</h1>
							<p>
								<strong>{props?.requisiteData?.booking_title}</strong> <br />
								{props?.requisiteData?.booking_text}
							</p>
							<button
								onClick={() =>
									router.push(`${props?.requisiteData?.booking_button_url}`)
								}
							>
								{props?.requisiteData?.booking_button_text}
							</button>
							{props?.requisiteData?.booking_links &&
								props?.requisiteData?.booking_links.map((itm, id) => {
									return (
										<span
											className='req_linl'
											onClick={() => router.push(`${itm.course_url}`)}
											key={id}
										>
											{itm.course_text}
										</span>
									);
								})}
						</div>
					</div>
					<div className='col-md-7'>
						<div className='req_img'>
							<Image
								src={props?.requisiteData?.booking_image?.url}
								fill={true}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CourseRequisite;

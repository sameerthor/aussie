import Image from 'next/image';

const MoreCourses = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>{props?.courseData?.heading}</h1>
				<p className='package_subhead'>{props?.courseData?.text}</p>
				<div className='row'>
					{props?.courseData?.more &&
						props?.courseData?.more.map((itm, id) => {
							return (
								<div className='col-md-4' key={id}>
									<div className='packages'>
										<Image src={itm.image.url} alt='' fill={true} />
										<span className='package_content'>{itm.text}</span>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
export default MoreCourses;

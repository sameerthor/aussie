const CourseExperience = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head' style={{ fontSize: '52px' }}>
					{props?.experienceData?.heading}
				</h1>
				<br />
				<div
					dangerouslySetInnerHTML={{
						__html: props?.experienceData?.text,
					}}
				/>
			</div>
		</div>
	);
};

export default CourseExperience;

const CourseDetailDesc = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				{props?.coursedetail &&
					props?.coursedetail.map((itm, id) => {
						return (
							<div key={id}>
								<h1 className='package_head' style={{ fontSize: '52px' }}>
									{itm.title}
								</h1>
								<br />
								<div
									className='more_detail'
									dangerouslySetInnerHTML={{
										__html: itm.text,
									}}
								/>
								<br />
								<br />
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default CourseDetailDesc;

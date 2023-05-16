const SecondContent = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				{props?.contentData &&
					props?.contentData?.map((item, index) => {
						return (
							<div key={index}>
								<h1
									className='package_head'
									style={{ fontSize: '52px', textAlign: 'left' }}
								>
									{item?.title}
								</h1>
								<br />
								<div
									className='more_detail'
									dangerouslySetInnerHTML={{
										__html: item?.content,
									}}
								/>
								{index + 1 !== props?.contentData.length && <br />}
								{index + 1 !== props?.contentData.length && <br />}
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default SecondContent;

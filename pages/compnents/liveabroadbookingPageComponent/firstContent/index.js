const FirstContent = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				{props?.firstContent?.map((item, index) => {
					return (
						<div key={index}>
							<h1
								className='package_head'
								style={{ fontSize: '52px', textAlign: index === 0 ? 'center' : 'left' }}
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
							{index + 1 !== props?.firstContent.length && <br />}
							{index + 1 !== props?.firstContent.length && <br />}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default FirstContent;

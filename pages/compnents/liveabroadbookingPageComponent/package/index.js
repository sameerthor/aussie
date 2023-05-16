import Image from 'next/image';

const Package = (props) => {
	return (
		<div className='package_sec' style={{ paddingTop: '0' }}>
			<div className='container'>
				<div className='row'>
					{props?.packageDetail?.map((item, index) => {
						return (
							<div className='col-md-4'>
								<div className='packages'>
									<Image src={item?.images?.url} alt='' fill={true} />
									<div className='pkg_cnt'>
										<div className='pkg_cnt_left'>
											<span className='pkg_name'>{item?.title}</span>
											<span className='pkg_desc'>{item?.details}</span>
										</div>
										<div className='pkg_cont_right'>
											{index + 1 === props.packageDetail.length && 'More Details'}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className='paginationp'>
					<div className='pagination'>
						<div className='pages'>
							<span className='disabled'>1</span>
							<span>2</span>
							<span>3</span>
						</div>
						<span className='active'>Next</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Package;

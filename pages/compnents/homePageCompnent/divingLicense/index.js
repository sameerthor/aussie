import Image from 'next/image';

const DivingLicense = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>{props.license?.heading}</h1>
				<p className='package_subhead'>{props.license?.content}</p>
				<div className='row'>
					{props.license &&
						props.license?.license &&
						props.license?.license?.length > 0 &&
						props.license?.license.map((itm, id) => {
							return (
								<div className='col-md-4' key={id}>
									<div className='packages'>
										<Image src={itm.image?.url} alt='' fill={true} />
										<span className='package_content'>{itm.title}</span>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
export default DivingLicense;

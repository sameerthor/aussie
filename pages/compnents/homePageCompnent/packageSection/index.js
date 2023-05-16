import Image from 'next/image';

const PackageSection = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>{props.package?.heading}</h1>
				<p className='package_subhead'>{props.package?.content}</p>
				<div className='row'>
					{props.package?.packages &&
						props.package?.packages.length > 0 &&
						props.package?.packages.map((itm, id) => {
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
export default PackageSection;

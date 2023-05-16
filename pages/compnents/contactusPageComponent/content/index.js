import Image from 'next/image';

const Content = (props) => {
	return (
		<div className='contact_content'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='contact_cont'>
							<h1>{props.contentData?.title}</h1>
							<p>{props.contentData?.content}</p>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='cont_img'>
							<Image src='/cont_img.jpg' fill={true} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Content;

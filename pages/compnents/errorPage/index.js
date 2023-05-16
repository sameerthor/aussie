import Image from 'next/image';

const ErrorPage = () => {
	return (
		<div className='wrong_image'>
			<span style={{ position: 'relative', width: '100vh', height: '60%' }}>
				<Image src='/somthingwrong.jpg' fill={true} />
			</span>
		</div>
	);
};
export default ErrorPage;

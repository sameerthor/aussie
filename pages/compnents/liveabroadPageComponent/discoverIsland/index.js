import Image from 'next/image';

const DiscoverIsland = () => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>Discover your Favourite Island</h1>
				<p className='package_subhead'>
					Our beautiful spots that we have grouped together, find out your favourite
					to dive!
				</p>
				<div className='skill_sec'>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island1.jpg' alt='' fill={true} priority />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island2.jpg' alt='' fill={true} priority />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island4.jpg' fill={true} priority />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island3.jpg' fill={true} priority />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island5.jpg' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/island6.jpg' alt='' fill={true} priority />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DiscoverIsland;

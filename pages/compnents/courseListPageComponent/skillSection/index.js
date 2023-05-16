import Image from 'next/image';

const SkillSection = () => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>Select your skill level</h1>
				<p className='package_subhead'>
					Padi have a plethora of courses so we have grouped them together into diver
					experience levels
				</p>
				<div className='skill_sec'>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
					<div className='skill'>
						<div className='packages'>
							<Image src='/package1_bg.png' alt='' fill={true} />
							<span className='package_content'>Learn to Dive</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SkillSection;

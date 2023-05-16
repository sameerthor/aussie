import Image from 'next/image';

const StorySection = (props) => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head'>{props.stories?.title}</h1>
				<div className='story_sec'>
					<div className='story_left'>
						<div className='story_image'>
							<Image
								src={props.stories?.stories[0]?.acf?.featured_image?.url}
								alt=''
								fill={true}
							/>
						</div>
						<h1>{props.stories?.stories[0]?.post_title}</h1>
						<p>{props.stories?.stories[0]?.post_content}</p>
						<button>{props.stories?.button_text}</button>
					</div>
					<div className='story_right'>
						{props.stories?.stories &&
							props.stories?.stories.length > 0 &&
							props.stories?.stories?.slice(1).map((itm, id) => {
								return (
									<div className='story' key={id}>
										<div className='story_lis_img'>
											<Image src={itm?.acf?.featured_image?.url} alt='' fill={true} />
										</div>
										<div className='story_desc'>
											<h1>{itm.post_title}</h1>
											<button>{props.stories?.button_text}</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default StorySection;

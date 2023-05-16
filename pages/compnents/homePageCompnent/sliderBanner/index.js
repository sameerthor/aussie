import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const SliderBanner = (props) => {
	return (
		<div className='slider'>
			<Carousel
				showArrows={false}
				infiniteLoop={true}
				interval={3000}
				showThumbs={false}
			>
				{props.slider &&
					props.slider.length > 0 &&
					props.slider.map((itm, id) => {
						return (
							<div key={id}>
								<Image src={itm.image?.url} alt='' sizes='100vw' fill={true} priority />
								<div className='legend'>
									<div className='container'>
										<div className='firscont'>
											<div className='first_cont'></div>
											<div className='second_cont'>
												<h1 className='wow fadeInUp animated'>{itm.title}</h1>
												<Image
													src={itm.TitleImage}
													className='wow fadeInUp animated'
													alt=''
													width={303}
													height={107}
													priority
												/>
												<h1 className='wow fadeInUp animated'>{itm.subtitle}</h1>
												<p className='wow fadeInUp animated'>{itm.content}</p>
												<button className='wow fadeInUp animated'>{itm.button_text}</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</Carousel>
		</div>
	);
};
export default SliderBanner;

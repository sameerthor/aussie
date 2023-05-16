import Image from 'next/image';
import Slider from 'react-slick';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: true,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Image src='/next.svg' alt='' width={10} height={20} />
		</div>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Image src='/prev.svg' alt='' width={10} height={20} />
		</div>
	);
}

const Gallery = (props) => {
	return (
		<div className='gallery'>
			<div className='container'>
				<h1>{props?.galleryData?.heading}</h1>
				<Slider {...settings}>
					{props.galleryData?.gallery &&
						props?.galleryData?.gallery.map((itm, id) => {
							return (
								<div className='item' key={id}>
									<Image src={itm?.acf?.featured_image?.url} alt='' fill={true} />
								</div>
							);
						})}
				</Slider>
			</div>
		</div>
	);
};
export default Gallery;

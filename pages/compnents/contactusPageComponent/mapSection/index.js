import Rater from 'react-rater';

const MapSection = () => {
	return (
		<div className='map_section'>
			<div className='map_sec'>
				<div className='map_top'>
					<div className='container'>
						<span className='loc_name'>Chalong Office</span>
						<div className='rating_sec'>
							<span className='rating'>5.0</span>
							<Rater total={5} rating={5} />
							<span className='review_count'>255 reviews</span>
						</div>
					</div>
					<iframe
						width='100%'
						height='450'
						style={{ border: 0 }}
						loading='lazy'
						allowfullscreen
						referrerpolicy='no-referrer-when-downgrade'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7044086890874!2d98.34020921474873!3d7.821078894364288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f1aa4051c21%3A0xb11f712f12619f!2sAussie%20Divers%20Phuket!5e0!3m2!1sen!2sth!4v1598251397521!5m2!1sen!2sth'
					></iframe>
				</div>
				<div className='map_top'>
					<div className='container'>
						<span className='loc_name'>
							Aussie Divers at Sensi Paradise Beach Resort Koh Tao
						</span>
						<div className='rating_sec'>
							<span className='rating'>4.5</span>
							<Rater total={5} rating={4.5} />
							<span className='review_count'>255 reviews</span>
						</div>
					</div>
					<iframe
						width='100%'
						height='450'
						style={{ border: 0 }}
						loading='lazy'
						allowfullscreen
						referrerpolicy='no-referrer-when-downgrade'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.2179068649034!2d99.81857341476541!3d10.081223492795457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f04fc282763f%3A0x38840bca970e5674!2sSensi%20Paradise%20Beach%20Resort!5e0!3m2!1sen!2sth!4v1598251448882!5m2!1sen!2sth'
					></iframe>
				</div>
			</div>
		</div>
	);
};
export default MapSection;

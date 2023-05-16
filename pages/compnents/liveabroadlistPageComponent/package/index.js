import Image from 'next/image';

const Package = () => {
	return (
		<div className='package_sec'>
			<div className='container'>
				<h1 className='package_head' style={{ fontSize: '52px' }}>
					Similan Island Packages and Boats
				</h1>
				<p className='package_subhead'>
					For the best experience at Similan Island Diving, Find out your favourite
					package here!
				</p>
				<div className='row'>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd1.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>The Smiling Seahorse</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd2.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>MV Lapat Similan Islands Liveaboard</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd3.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>Deep Andaman Queen</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd4.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>The Smiling Seahorse</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd5.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>MV Lapat Similan Islands Liveaboard</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='lvabd_card'>
							<div className='lvabd_img'>
								<Image src='/lvabd6.jpg' alt='' fill={true} />
							</div>
							<div className='content_lvbd'>
								<span className='lvabd_name'>Deep Andaman Queen</span>
								<diiv className='package_detl'>
									<div className='package_dur'>
										<span className='package_ttl'>Package</span>
										<span className='package_span' style={{ color: '#25AFE8' }}>
											5 Days 4 Nights
										</span>
									</div>
									<div className='package_exp'>
										<span className='package_ttl'>THB</span>
										<span className='package_span' style={{ color: '#FFC700' }}>
											25,500
										</span>
									</div>
								</diiv>
								<div className='lvbd_card_bot'>
									<span>More Details</span>
									<button>Book Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='paginationp'>
					<div className='pagination'>
						<span className='disabled'>Previous</span>
						<div className='pages'>
							<span className='disabled'>1</span>
							<span>2</span>
							<span>3</span>
						</div>
						<span className='active'>Next</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Package;

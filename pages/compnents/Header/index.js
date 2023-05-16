import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const Header = (props) => {
	const [showDropdown, setShowDropdown] = useState(null);
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();

	const toggle = (id) => {
		setShowDropdown(showDropdown === id ? null : id);
	};

	return (
		<div>
			<header className='header_desk'>
				<div className='header_top'>
					<div className='container'>
						<div className='header_topcon'>
							<div className='header_top_left'>
								<span
									className='email_lin'
									onClick={() => {
										router.push(`mailto:${props.headerData?.email}`);
									}}
								>
									<Image
										src={props.headerData?.email_icon}
										alt=''
										width={14}
										height={11}
										priority
									/>
									<span className='text_email'>Email: {props.headerData?.email}</span>
								</span>
								<span
									className='email_lin'
									onClick={() => {
										router.push(`tel:${props.headerData?.phone_number}`);
									}}
								>
									<Image
										src={props.headerData?.phone_logo}
										alt=''
										width={11}
										height={11}
										priority
									/>
									<span className='text_email'>{props.headerData?.phone_number}</span>
								</span>
							</div>
							<div className='header_top_right'>
								{props.headerData?.social_links &&
									props.headerData?.social_links.map((item, id) => {
										return (
											<span
												className='social_link'
												key={id}
												onClick={() => router.push(`${item.social_link}`)}
											>
												<Image
													src={item.social_icon}
													alt=''
													width={item.width}
													height={item.height}
													priority
												/>
											</span>
										);
									})}
							</div>
						</div>
					</div>
				</div>
				<div className='header_bottom'>
					<div className='container'>
						<div className='header_bottom_cont'>
							<div className='logo_sec'>
								<Image
									src={props.headerData?.logo}
									alt=''
									width={254}
									height={53}
									priority
									style={{ cursor: 'pointer' }}
									onClick={() => {
										router.push('/');
									}}
								/>
							</div>
							<div className='header_bottom_right'>
								{props.menuData &&
									props.menuData.length > 0 &&
									props.menuData.map((itm, id) => {
										if (itm.child_items) {
											return (
												<Dropdown
													toggle={() => {
														toggle(id + 1, itm);
													}}
													isOpen={showDropdown === id + 1 ? true : false}
													key={id}
												>
													<DropdownToggle tag='span' className='menu_item'>
														{itm.post_title} &nbsp;
														<Image
															src='/downArrow.png'
															alt=''
															width={10}
															height={5}
															priority
														/>
													</DropdownToggle>
													<DropdownMenu>
														{itm.child_items &&
															itm.child_items.map((item, it) => {
																return (
																	<div
																		onClick={() => {
																			router.push(`/${item.url ? item.url : ''}`);
																		}}
																		key={it}
																		className='menu_list'
																	>
																		{item.post_title}
																	</div>
																);
															})}
													</DropdownMenu>
												</Dropdown>
											);
										} else {
											return (
												<span
													className='menu_item'
													key={id}
													onClick={() => router.push(`/${itm.url}`)}
												>
													{itm.post_title}
												</span>
											);
										}
									})}
								<span className='menu_item'>
									<Image
										src={props.headerData?.search_icon}
										alt=''
										width={16}
										height={16}
										priority
									/>
								</span>
								<span className='menu_item'>
									<Image
										src={props.headerData?.locale_icon}
										alt=''
										width={15}
										height={14}
										priority
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<header className='header_mob'>
				<div className='mob_logo'>
					<Image
						src={props.headerData?.logo}
						alt=''
						width={254}
						height={53}
						priority
						style={{ cursor: 'pointer' }}
						onClick={() => {
							router.push('/');
						}}
					/>
				</div>
				<div className='mobheader_bottom'>
					<div className='container'>
						<div className='menu_mob'>
							<div className='menu'>
								<div className='menu_icon' onClick={() => setShowMenu(!showMenu)}>
									<Image
										src={props.headerData?.menu_icon}
										width={22}
										height={22}
										priority
									/>
									{showMenu ? (
										<span className='menu_text'>Close</span>
									) : (
										<span className='menu_text'>Menu</span>
									)}
								</div>
								{showMenu && (
									<div className='menu_list_mob'>
										<ul>
											{props.menuData &&
												props.menuData.length > 0 &&
												props.menuData.map((item, id) => {
													if (item.child_items) {
														return (
															<>
																<li
																	onClick={() => toggle(id + 3)}
																	className={showDropdown === id + 3 ? 'active' : ''}
																	key={id}
																>
																	<span>{item.post_title}</span>
																	<Image
																		src='/downArrow.png'
																		alt=''
																		width={10}
																		height={5}
																		priority
																	/>
																</li>
																{showDropdown === id + 3 &&
																	item.child_items.map((itm, id) => {
																		return (
																			<li
																				key={id}
																				className='menu_drop'
																				onClick={() => {
																					router.push(`/${item.url ? item.url : ''}`);
																				}}
																			>
																				<span>{itm.post_title}</span>
																			</li>
																		);
																	})}
															</>
														);
													} else {
														return (
															<li
																key={id}
																onClick={() => {
																	router.push(`/${item.url ? item.url : ''}`);
																}}
															>
																<span>{item.post_title}</span>
															</li>
														);
													}
												})}
										</ul>
									</div>
								)}
							</div>
							<div className='menu_right'>
								<Image
									src={props.headerData?.mobile_search_icon}
									width={22}
									height={22}
									priority
								/>
								<Image
									src={props.headerData?.mobile_locale_icon}
									width={22}
									height={22}
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
export default Header;

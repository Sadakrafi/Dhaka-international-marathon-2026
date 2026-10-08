import { StrictMode, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Outlet, RouterProvider, createFileRoute, createMemoryHistory, createRootRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
var Header_module_default = {
	headerWrapper: "_headerWrapper_rn4kq_1",
	header: "_header_rn4kq_1",
	logoArea: "_logoArea_rn4kq_25",
	logoOval: "_logoOval_rn4kq_31",
	logoImage: "_logoImage_rn4kq_42",
	nav: "_nav_rn4kq_48",
	navLink: "_navLink_rn4kq_56",
	active: "_active_rn4kq_68",
	btnArea: "_btnArea_rn4kq_72",
	loginBtn: "_loginBtn_rn4kq_78",
	iconCircle: "_iconCircle_rn4kq_102"
};
//#endregion
//#region src/assets/logo.png
var logo_default = "/assets/logo-DfIbLF56.png";
//#endregion
//#region src/components/Header/Header.tsx
function Header() {
	return /* @__PURE__ */ jsx("div", {
		className: Header_module_default.headerWrapper,
		children: /* @__PURE__ */ jsxs("header", {
			className: Header_module_default.header,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: Header_module_default.logoArea,
					children: /* @__PURE__ */ jsx("div", {
						className: Header_module_default.logoOval,
						children: /* @__PURE__ */ jsx("img", {
							src: logo_default,
							alt: "Dhaka International Marathon Logo",
							className: Header_module_default.logoImage
						})
					})
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: Header_module_default.nav,
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: `${Header_module_default.navLink} text-b1`,
							activeProps: { className: Header_module_default.active },
							activeOptions: { exact: true },
							children: "Home"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/events",
							className: `${Header_module_default.navLink} text-b1`,
							activeProps: { className: Header_module_default.active },
							children: "Events"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							hash: "about-events",
							className: `${Header_module_default.navLink} text-b1`,
							children: "About us"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: `${Header_module_default.navLink} text-b1`,
							activeProps: { className: Header_module_default.active },
							children: "Contact us"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: `${Header_module_default.navLink} text-b1`,
							activeProps: { className: Header_module_default.active },
							children: "Blog"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: Header_module_default.btnArea,
					children: /* @__PURE__ */ jsxs("button", {
						className: Header_module_default.loginBtn,
						children: ["Login", /* @__PURE__ */ jsx("span", {
							className: Header_module_default.iconCircle,
							children: /* @__PURE__ */ jsx("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
							})
						})]
					})
				})
			]
		})
	});
}
var CTA_module_default = {
	section: "_section_1yrnb_1",
	container: "_container_1yrnb_21",
	title: "_title_1yrnb_31",
	subtitle: "_subtitle_1yrnb_41",
	arrowBtn: "_arrowBtn_1yrnb_51"
};
//#endregion
//#region src/components/CTA/CTA.tsx
function CTA() {
	return /* @__PURE__ */ jsx("section", {
		className: CTA_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: CTA_module_default.container,
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: CTA_module_default.title,
					children: [
						"Let's make something",
						/* @__PURE__ */ jsx("br", {}),
						"great together."
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: CTA_module_default.subtitle,
					children: [
						"Let us know what challenges you are",
						/* @__PURE__ */ jsx("br", {}),
						"trying to solve so we can help."
					]
				}),
				/* @__PURE__ */ jsx("button", {
					className: CTA_module_default.arrowBtn,
					"aria-label": "Let's go",
					children: /* @__PURE__ */ jsx("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})
				})
			]
		})
	});
}
var Footer_module_default = {
	section: "_section_uk3tp_1",
	container: "_container_uk3tp_11",
	topRow: "_topRow_uk3tp_23",
	logo: "_logo_uk3tp_30",
	newsletter: "_newsletter_uk3tp_37",
	newsTitle: "_newsTitle_uk3tp_44",
	newsForm: "_newsForm_uk3tp_51",
	newsInput: "_newsInput_uk3tp_56",
	newsBtn: "_newsBtn_uk3tp_66",
	middleRow: "_middleRow_uk3tp_84",
	colTitleWhite: "_colTitleWhite_uk3tp_90",
	colTitleAmber: "_colTitleAmber_uk3tp_98",
	colText: "_colText_uk3tp_106",
	socialRow: "_socialRow_uk3tp_115",
	socialCircle: "_socialCircle_uk3tp_121",
	linksList: "_linksList_uk3tp_138",
	paymentStrip: "_paymentStrip_uk3tp_160",
	paymentImg: "_paymentImg_uk3tp_167",
	copyright: "_copyright_uk3tp_174"
};
//#endregion
//#region src/assets/footer-logo.png
var footer_logo_default = "/assets/footer-logo-u9MCClha.png";
//#endregion
//#region src/assets/payment-strip.png
var payment_strip_default = "/assets/payment-strip-BCoHFFgC.png";
//#endregion
//#region src/components/Footer/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: Footer_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: Footer_module_default.container,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: Footer_module_default.topRow,
					children: [/* @__PURE__ */ jsx("img", {
						src: footer_logo_default,
						alt: "Dhaka International Marathon",
						className: Footer_module_default.logo
					}), /* @__PURE__ */ jsxs("div", {
						className: Footer_module_default.newsletter,
						children: [/* @__PURE__ */ jsx("h4", {
							className: Footer_module_default.newsTitle,
							children: "Subscribe to Newsletter"
						}), /* @__PURE__ */ jsxs("div", {
							className: Footer_module_default.newsForm,
							children: [/* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "Enter email address",
								className: Footer_module_default.newsInput
							}), /* @__PURE__ */ jsx("button", {
								className: Footer_module_default.newsBtn,
								children: "Join"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: Footer_module_default.middleRow,
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: Footer_module_default.colTitleWhite,
								children: "Transparent"
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "The purpose of a FAQ is generally to provide information on frequent questions or concerns."
							}),
							/* @__PURE__ */ jsx("div", {
								className: Footer_module_default.socialRow,
								children: /* @__PURE__ */ jsx("a", {
									href: "https://www.facebook.com/profile.php?id=61571669241155",
									target: "_blank",
									rel: "noopener noreferrer",
									className: Footer_module_default.socialCircle,
									children: /* @__PURE__ */ jsx("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ jsx("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" })
									})
								})
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: Footer_module_default.colTitleAmber,
							children: "Quick Links"
						}), /* @__PURE__ */ jsxs("ul", {
							className: Footer_module_default.linksList,
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about",
									children: "About us"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/refund-policy",
									children: "Return and Refund Policy"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/delivery-policy",
									children: "Delivery Policy"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/terms-conditions",
									children: "Terms and condition"
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: Footer_module_default.colTitleAmber,
								children: "Contact us"
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "Army Sports Control Board."
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "Registered Address: Bangladesh Army Headquarters, Dhaka Cantonment, Dhaka, Bangladesh"
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "Trade License No: 03-097531"
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "Mobile: 01329931605"
							}),
							/* @__PURE__ */ jsx("p", {
								className: Footer_module_default.colText,
								children: "Email: info@dhakainternationalmarathon.org"
							})
						] })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: Footer_module_default.paymentStrip,
					children: /* @__PURE__ */ jsx("img", {
						src: payment_strip_default,
						alt: "Payment Methods",
						className: Footer_module_default.paymentImg
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: Footer_module_default.copyright,
					children: "© 2025 DHAKA INTERNATIONAL MARATHON."
				})
			]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
var Route$8 = createRootRoute({ component: () => /* @__PURE__ */ jsxs("div", {
	className: "app-root",
	children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
		/* @__PURE__ */ jsx(CTA, {}),
		/* @__PURE__ */ jsx(Footer, {})
	]
}) });
var Hero_module_default = {
	heroSection: "_heroSection_1q67r_1",
	contentWrapper: "_contentWrapper_1q67r_20",
	badge: "_badge_1q67r_31",
	badgeIcon: "_badgeIcon_1q67r_46",
	heading: "_heading_1q67r_53",
	subtitle: "_subtitle_1q67r_67",
	buttonGroup: "_buttonGroup_1q67r_79",
	btnOutline: "_btnOutline_1q67r_87",
	btnSolid: "_btnSolid_1q67r_110",
	iconCircle: "_iconCircle_1q67r_133"
};
//#endregion
//#region src/components/Hero/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		className: Hero_module_default.heroSection,
		children: /* @__PURE__ */ jsxs("div", {
			className: Hero_module_default.contentWrapper,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: Hero_module_default.badge,
					children: [/* @__PURE__ */ jsx("svg", {
						className: Hero_module_default.badgeIcon,
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ jsx("path", { d: "M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" })
					}), "Organized by Bangladesh Army"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: Hero_module_default.heading,
					children: "Dhaka International\nMarathon 2025"
				}),
				/* @__PURE__ */ jsx("p", {
					className: Hero_module_default.subtitle,
					children: "Run for Unity, Run for Humanity. Together, we run for a stronger tomorrow, for peace, hope, and a better world for everyone."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: Hero_module_default.buttonGroup,
					children: [/* @__PURE__ */ jsx("button", {
						className: Hero_module_default.btnOutline,
						onClick: () => document.getElementById("about-events")?.scrollIntoView({ behavior: "smooth" }),
						children: "Learn more"
					}), /* @__PURE__ */ jsxs("button", {
						className: Hero_module_default.btnSolid,
						children: ["Registration Now", /* @__PURE__ */ jsx("span", {
							className: Hero_module_default.iconCircle,
							children: /* @__PURE__ */ jsx("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
							})
						})]
					})]
				})
			]
		})
	});
}
var BannerSlider_module_default = {
	sliderSection: "_sliderSection_e7mc9_1",
	sliderContainer: "_sliderContainer_e7mc9_8",
	slide: "_slide_e7mc9_1",
	activeSlide: "_activeSlide_e7mc9_30",
	sideSlide: "_sideSlide_e7mc9_38",
	slideImg: "_slideImg_e7mc9_45",
	navBtn: "_navBtn_e7mc9_52",
	prevBtn: "_prevBtn_e7mc9_73",
	nextBtn: "_nextBtn_e7mc9_79",
	pagination: "_pagination_e7mc9_86",
	dot: "_dot_e7mc9_94",
	activeDot: "_activeDot_e7mc9_102",
	placeholderText: "_placeholderText_e7mc9_108"
};
//#endregion
//#region src/assets/banner-center.jpg
var banner_center_default = "/assets/banner-center-CFg0IT9T.jpg";
//#endregion
//#region src/assets/banner-left.jpg
var banner_left_default = "/assets/banner-left-DlXwbQwd.jpg";
//#endregion
//#region src/assets/banner-right.jpg
var banner_right_default = "/assets/event-2-C0Qws2l0.jpg";
//#endregion
//#region src/components/BannerSlider/BannerSlider.tsx
function BannerSlider() {
	const images = [
		{
			id: 0,
			src: banner_left_default,
			alt: "Army Sports Control Board"
		},
		{
			id: 1,
			src: banner_center_default,
			alt: "Dhaka International Marathon Banner"
		},
		{
			id: 2,
			src: banner_right_default,
			alt: "Bangladesh Table Tennis Federation"
		}
	];
	const [activeIndex, setActiveIndex] = useState(1);
	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % images.length);
	};
	const handlePrev = () => {
		setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	const getSlideIndex = (offset) => {
		return (activeIndex + offset + images.length) % images.length;
	};
	return /* @__PURE__ */ jsxs("section", {
		className: BannerSlider_module_default.sliderSection,
		children: [/* @__PURE__ */ jsxs("div", {
			className: BannerSlider_module_default.sliderContainer,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: `${BannerSlider_module_default.slide} ${BannerSlider_module_default.sideSlide}`,
					onClick: handlePrev,
					style: { cursor: "pointer" },
					children: /* @__PURE__ */ jsx("img", {
						src: images[getSlideIndex(-1)].src,
						className: BannerSlider_module_default.slideImg,
						alt: images[getSlideIndex(-1)].alt
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: `${BannerSlider_module_default.slide} ${BannerSlider_module_default.activeSlide}`,
					children: /* @__PURE__ */ jsx("img", {
						src: images[activeIndex].src,
						className: BannerSlider_module_default.slideImg,
						alt: images[activeIndex].alt
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: `${BannerSlider_module_default.slide} ${BannerSlider_module_default.sideSlide}`,
					onClick: handleNext,
					style: { cursor: "pointer" },
					children: /* @__PURE__ */ jsx("img", {
						src: images[getSlideIndex(1)].src,
						className: BannerSlider_module_default.slideImg,
						alt: images[getSlideIndex(1)].alt
					})
				}),
				/* @__PURE__ */ jsx("button", {
					className: `${BannerSlider_module_default.navBtn} ${BannerSlider_module_default.prevBtn}`,
					onClick: handlePrev,
					"aria-label": "Previous slide",
					children: /* @__PURE__ */ jsx("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" })
					})
				}),
				/* @__PURE__ */ jsx("button", {
					className: `${BannerSlider_module_default.navBtn} ${BannerSlider_module_default.nextBtn}`,
					onClick: handleNext,
					"aria-label": "Next slide",
					children: /* @__PURE__ */ jsx("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: BannerSlider_module_default.pagination,
			children: images.map((img, index) => /* @__PURE__ */ jsx("span", {
				className: `${BannerSlider_module_default.dot} ${index === activeIndex ? BannerSlider_module_default.activeDot : ""}`,
				onClick: () => setActiveIndex(index),
				style: { cursor: "pointer" }
			}, img.id))
		})]
	});
}
var UpcomingEvents_module_default = {
	section: "_section_1dmf3_1",
	container: "_container_1dmf3_13",
	headerRow: "_headerRow_1dmf3_22",
	titleBlock: "_titleBlock_1dmf3_29",
	ticketIcon: "_ticketIcon_1dmf3_36",
	titleContent: "_titleContent_1dmf3_44",
	title: "_title_1dmf3_29",
	subtitle: "_subtitle_1dmf3_60",
	navArrows: "_navArrows_1dmf3_70",
	arrowBtn: "_arrowBtn_1dmf3_76",
	arrowOutline: "_arrowOutline_1dmf3_87",
	arrowSolid: "_arrowSolid_1dmf3_97",
	cardsGrid: "_cardsGrid_1dmf3_108",
	card: "_card_1dmf3_108",
	dateBadge: "_dateBadge_1dmf3_136",
	dateDay: "_dateDay_1dmf3_150",
	dateMonth: "_dateMonth_1dmf3_159",
	dateNum: "_dateNum_1dmf3_171",
	cardOverlay: "_cardOverlay_1dmf3_177",
	cardContent: "_cardContent_1dmf3_189",
	price: "_price_1dmf3_197",
	eventTitle: "_eventTitle_1dmf3_205",
	registerBtn: "_registerBtn_1dmf3_213",
	btnIconCircle: "_btnIconCircle_1dmf3_230"
};
//#endregion
//#region src/assets/ticket-icon.png
var ticket_icon_default = "/assets/ticket-icon-Ck8g6H2t.png";
//#endregion
//#region src/assets/event-1.jpg
var event_1_default = "/assets/event-1-D_6jorCG.jpg";
//#endregion
//#region src/assets/event-2.jpg
var event_2_default = "/assets/event-2-C0Qws2l0.jpg";
//#endregion
//#region src/assets/event-3.jpg
var event_3_default = "/assets/event-3-CpzpMvuP.jpg";
//#endregion
//#region src/assets/event-4.jpg
var event_4_default = "/assets/event-4-DDIbxrFT.jpg";
//#endregion
//#region src/components/UpcomingEvents/UpcomingEvents.tsx
function UpcomingEvents() {
	const events = [
		{
			id: 1,
			image: event_1_default,
			price: "৳ 00",
			title: "Marathon (42.2 KM)",
			dateDay: "Thu",
			dateNum: "15",
			dateMon: "Oct"
		},
		{
			id: 2,
			image: event_2_default,
			price: "৳ 00",
			title: "Marathon (42.2 KM)",
			dateDay: "Thu",
			dateNum: "15",
			dateMon: "Oct"
		},
		{
			id: 3,
			image: event_3_default,
			price: "৳ 00",
			title: "Marathon (42.2 KM)",
			dateDay: "Thu",
			dateNum: "15",
			dateMon: "Oct"
		},
		{
			id: 4,
			image: event_4_default,
			price: "৳ 00",
			title: "Marathon (42.2 KM)",
			dateDay: "Thu",
			dateNum: "15",
			dateMon: "Oct"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: UpcomingEvents_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: UpcomingEvents_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: UpcomingEvents_module_default.headerRow,
				children: [/* @__PURE__ */ jsxs("div", {
					className: UpcomingEvents_module_default.titleBlock,
					children: [/* @__PURE__ */ jsx("img", {
						src: ticket_icon_default,
						alt: "Ticket Icon",
						className: UpcomingEvents_module_default.ticketIcon
					}), /* @__PURE__ */ jsxs("div", {
						className: UpcomingEvents_module_default.titleContent,
						children: [/* @__PURE__ */ jsx("h2", {
							className: UpcomingEvents_module_default.title,
							children: "Upcoming events"
						}), /* @__PURE__ */ jsx("p", {
							className: UpcomingEvents_module_default.subtitle,
							children: "Don't Miss Out—Secure Your Ticket Today Limited seats available Book now to guarantee your spot for an unforgettable experience"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: UpcomingEvents_module_default.navArrows,
					children: [/* @__PURE__ */ jsx("button", {
						className: `${UpcomingEvents_module_default.arrowBtn} ${UpcomingEvents_module_default.arrowOutline}`,
						"aria-label": "Previous events",
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" })
						})
					}), /* @__PURE__ */ jsx("button", {
						className: `${UpcomingEvents_module_default.arrowBtn} ${UpcomingEvents_module_default.arrowSolid}`,
						"aria-label": "Next events",
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: UpcomingEvents_module_default.cardsGrid,
				children: events.map((event) => /* @__PURE__ */ jsxs("div", {
					className: UpcomingEvents_module_default.card,
					style: { backgroundImage: `url(${event.image})` },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: UpcomingEvents_module_default.dateBadge,
							children: [/* @__PURE__ */ jsx("div", {
								className: UpcomingEvents_module_default.dateDay,
								children: event.dateDay
							}), /* @__PURE__ */ jsxs("div", {
								className: UpcomingEvents_module_default.dateMonth,
								children: [/* @__PURE__ */ jsx("span", {
									className: UpcomingEvents_module_default.dateNum,
									children: event.dateNum
								}), event.dateMon]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: UpcomingEvents_module_default.cardOverlay }),
						/* @__PURE__ */ jsxs("div", {
							className: UpcomingEvents_module_default.cardContent,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: UpcomingEvents_module_default.price,
									children: event.price
								}),
								/* @__PURE__ */ jsx("h3", {
									className: UpcomingEvents_module_default.eventTitle,
									children: event.title
								}),
								/* @__PURE__ */ jsxs("button", {
									className: UpcomingEvents_module_default.registerBtn,
									children: ["Register Now", /* @__PURE__ */ jsx("span", {
										className: UpcomingEvents_module_default.btnIconCircle,
										children: /* @__PURE__ */ jsx("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})
									})]
								})
							]
						})
					]
				}, event.id))
			})]
		})
	});
}
var AboutEvents_module_default = {
	section: "_section_1aj96_1",
	container: "_container_1aj96_12",
	header: "_header_1aj96_20",
	title: "_title_1aj96_27",
	subtitle: "_subtitle_1aj96_35",
	grid: "_grid_1aj96_44",
	card: "_card_1aj96_50",
	cardTall: "_cardTall_1aj96_60",
	cardWhite: "_cardWhite_1aj96_64",
	cardGreen: "_cardGreen_1aj96_68",
	cardImage: "_cardImage_1aj96_94",
	img: "_img_1aj96_101",
	cardTitle: "_cardTitle_1aj96_109",
	cardText: "_cardText_1aj96_119",
	floatBtn: "_floatBtn_1aj96_135"
};
//#endregion
//#region src/assets/about-events-3.jpg
var about_events_3_default = "/assets/about-events-3-CaKxlx_w.jpg";
//#endregion
//#region src/components/AboutEvents/AboutEvents.tsx
function AboutEvents() {
	return /* @__PURE__ */ jsx("section", {
		id: "about-events",
		className: AboutEvents_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: AboutEvents_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: AboutEvents_module_default.header,
				children: [/* @__PURE__ */ jsx("h2", {
					className: AboutEvents_module_default.title,
					children: "About Events"
				}), /* @__PURE__ */ jsx("p", {
					className: AboutEvents_module_default.subtitle,
					children: "Shared Vision, Real Growth. We collaborate closely, make clear decisions, and deliver measurable results together."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: AboutEvents_module_default.grid,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: `${AboutEvents_module_default.card} ${AboutEvents_module_default.cardWhite}`,
						children: [/* @__PURE__ */ jsxs("h3", {
							className: AboutEvents_module_default.cardTitle,
							children: [
								"DHAKA INTERNATIONAL",
								/* @__PURE__ */ jsx("br", {}),
								"MARATHON 2025"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: AboutEvents_module_default.cardText,
							children: "Is an inaugural Marathon Race by Bangladesh Army with a view to engage students, youths, veterans and all classes of people in active and healthy lifestyle! Bangladesh Army has been organizing large scale Marathon races since 2021."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `${AboutEvents_module_default.card} ${AboutEvents_module_default.cardWhite}`,
						children: [/* @__PURE__ */ jsxs("h3", {
							className: AboutEvents_module_default.cardTitle,
							children: [
								"DHAKA INTERNATIONAL",
								/* @__PURE__ */ jsx("br", {}),
								"MARATHON 2025"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: AboutEvents_module_default.cardText,
							children: "Over the years, the races organized by this prestigious institution has significantly impacted the society and thousand lives to remain active, positive and agile to drive the society to a sustainable future."
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: `${AboutEvents_module_default.card} ${AboutEvents_module_default.cardImage} ${AboutEvents_module_default.cardTall}`,
						children: /* @__PURE__ */ jsx("img", {
							src: about_events_3_default,
							alt: "People shaking hands",
							className: AboutEvents_module_default.img
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `${AboutEvents_module_default.card} ${AboutEvents_module_default.cardGreen} ${AboutEvents_module_default.cardTall}`,
						children: [/* @__PURE__ */ jsx("p", {
							className: AboutEvents_module_default.cardText,
							children: "Bangladesh Army is organizing the DHAKA INTERNATIONAL MARATHON for the first time- exploiting it's years long expertise, skill and experience. With the kind directive of Respected Chief of Army Staff, Bangladesh Army, the race is going to be organized with an intention to inspire people and involve them more in the physical fitness domain. The race will be a Full Marathon (42.2 KM), a Half Marathon (21.1 KM) and a 10K run at 300 ft road area, Purbachal."
						}), /* @__PURE__ */ jsx("button", {
							className: AboutEvents_module_default.floatBtn,
							"aria-label": "Learn more about marathon",
							children: /* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ jsx("path", { d: "M7 17l9.2-9.2M17 17V7H7" })
							})
						})]
					})
				]
			})]
		})
	});
}
var PastEvents_module_default = {
	section: "_section_1mn0c_1",
	container: "_container_1mn0c_11",
	headerRow: "_headerRow_1mn0c_19",
	headerLeft: "_headerLeft_1mn0c_26",
	title: "_title_1mn0c_33",
	titleHighlight: "_titleHighlight_1mn0c_42",
	subtitle: "_subtitle_1mn0c_46",
	viewAll: "_viewAll_1mn0c_55",
	viewAllText: "_viewAllText_1mn0c_67",
	viewAllBtn: "_viewAllBtn_1mn0c_74",
	grid: "_grid_1mn0c_85",
	card: "_card_1mn0c_92",
	img: "_img_1mn0c_107",
	iconBtn: "_iconBtn_1mn0c_114"
};
//#endregion
//#region src/assets/past-real-1.jpg
var past_real_1_default = "/assets/past-real-1-khChp-rr.jpg";
//#endregion
//#region src/assets/past-real-2.jpg
var past_real_2_default = "/assets/past-real-2-CFLfBRUp.jpg";
//#endregion
//#region src/assets/past-real-3.jpg
var past_real_3_default = "/assets/past-real-3-C8H2nUyo.jpg";
//#endregion
//#region src/assets/past-real-4.jpg
var past_real_4_default = "/assets/past-real-4-BAYQ83d0.jpg";
//#endregion
//#region src/assets/past-real-5.jpg
var past_real_5_default = "/assets/past-real-5-BiQPPcF0.jpg";
//#endregion
//#region src/assets/past-real-6.jpg
var past_real_6_default = "/assets/past-real-6-BH8Cb2Lc.jpg";
//#endregion
//#region src/components/PastEvents/PastEvents.tsx
function PastEvents() {
	const events = [
		{
			id: 1,
			image: past_real_1_default
		},
		{
			id: 2,
			image: past_real_2_default
		},
		{
			id: 3,
			image: past_real_3_default
		},
		{
			id: 4,
			image: past_real_4_default
		},
		{
			id: 5,
			image: past_real_5_default
		},
		{
			id: 6,
			image: past_real_6_default
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: PastEvents_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: PastEvents_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: PastEvents_module_default.headerRow,
				children: [/* @__PURE__ */ jsxs("div", {
					className: PastEvents_module_default.headerLeft,
					children: [/* @__PURE__ */ jsxs("h2", {
						className: PastEvents_module_default.title,
						children: [/* @__PURE__ */ jsx("span", {
							className: PastEvents_module_default.titleHighlight,
							children: "Some of our"
						}), " past events"]
					}), /* @__PURE__ */ jsx("p", {
						className: PastEvents_module_default.subtitle,
						children: "\"Relive the Highlights—Where Every Past Event Moment Becomes a Lasting Memory.\""
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: PastEvents_module_default.viewAll,
					children: [/* @__PURE__ */ jsx("span", {
						className: PastEvents_module_default.viewAllText,
						children: "View all"
					}), /* @__PURE__ */ jsx("div", {
						className: PastEvents_module_default.viewAllBtn,
						children: /* @__PURE__ */ jsx("svg", {
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: PastEvents_module_default.grid,
				children: events.map((event) => /* @__PURE__ */ jsxs("div", {
					className: PastEvents_module_default.card,
					children: [event.image ? /* @__PURE__ */ jsx("img", {
						src: event.image,
						alt: `Past Event ${event.id}`,
						className: PastEvents_module_default.img
					}) : /* @__PURE__ */ jsx("div", {
						className: PastEvents_module_default.img,
						style: { backgroundColor: "#D0DCD5" }
					}), /* @__PURE__ */ jsx("button", {
						className: PastEvents_module_default.iconBtn,
						"aria-label": "View Event",
						children: /* @__PURE__ */ jsx("svg", {
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})
					})]
				}, event.id))
			})]
		})
	});
}
var ManageTickets_module_default = {
	section: "_section_630ww_1",
	container: "_container_630ww_9",
	card: "_card_630ww_14",
	header: "_header_630ww_26",
	title: "_title_630ww_32",
	subtitle: "_subtitle_630ww_40",
	actionsRow: "_actionsRow_630ww_50",
	actionBtn: "_actionBtn_630ww_57",
	btnLeft: "_btnLeft_630ww_76",
	iconPlaceholder: "_iconPlaceholder_630ww_82",
	btnText: "_btnText_630ww_94",
	btnTitle: "_btnTitle_630ww_102",
	btnSubtitle: "_btnSubtitle_630ww_111",
	arrowRight: "_arrowRight_630ww_123"
};
//#endregion
//#region src/components/ManageTickets/ManageTickets.tsx
function ManageTickets() {
	return /* @__PURE__ */ jsx("section", {
		className: ManageTickets_module_default.section,
		children: /* @__PURE__ */ jsx("div", {
			className: ManageTickets_module_default.container,
			children: /* @__PURE__ */ jsxs("div", {
				className: ManageTickets_module_default.card,
				children: [/* @__PURE__ */ jsxs("div", {
					className: ManageTickets_module_default.header,
					children: [/* @__PURE__ */ jsx("h2", {
						className: ManageTickets_module_default.title,
						children: "Manage Your Tickets"
					}), /* @__PURE__ */ jsxs("p", {
						className: ManageTickets_module_default.subtitle,
						children: [
							"Transfer, verify, or access your passes,",
							/* @__PURE__ */ jsx("br", {}),
							"all in one place."
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: ManageTickets_module_default.actionsRow,
					children: [
						/* @__PURE__ */ jsxs("button", {
							className: ManageTickets_module_default.actionBtn,
							children: [/* @__PURE__ */ jsxs("div", {
								className: ManageTickets_module_default.btnLeft,
								children: [/* @__PURE__ */ jsx("div", {
									className: ManageTickets_module_default.iconPlaceholder,
									children: /* @__PURE__ */ jsx("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ jsx("path", { d: "M17 3v4M21 7h-14M7 21v-4M3 17h14" })
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: ManageTickets_module_default.btnText,
									children: [/* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnTitle,
										children: "Transfer Ticket"
									}), /* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnSubtitle,
										children: "Share with friends or family in a tap"
									})]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: ManageTickets_module_default.arrowRight,
								children: /* @__PURE__ */ jsx("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							className: ManageTickets_module_default.actionBtn,
							children: [/* @__PURE__ */ jsxs("div", {
								className: ManageTickets_module_default.btnLeft,
								children: [/* @__PURE__ */ jsx("div", {
									className: ManageTickets_module_default.iconPlaceholder,
									children: /* @__PURE__ */ jsxs("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4" })]
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: ManageTickets_module_default.btnText,
									children: [/* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnTitle,
										children: "Verify pass"
									}), /* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnSubtitle,
										children: "Confirm Ticket validity before entry"
									})]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: ManageTickets_module_default.arrowRight,
								children: /* @__PURE__ */ jsx("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							className: ManageTickets_module_default.actionBtn,
							children: [/* @__PURE__ */ jsxs("div", {
								className: ManageTickets_module_default.btnLeft,
								children: [/* @__PURE__ */ jsx("div", {
									className: ManageTickets_module_default.iconPlaceholder,
									children: /* @__PURE__ */ jsxs("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("rect", {
											x: "3",
											y: "11",
											width: "18",
											height: "11",
											rx: "2",
											ry: "2"
										}), /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })]
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: ManageTickets_module_default.btnText,
									children: [/* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnTitle,
										children: "Secure pass"
									}), /* @__PURE__ */ jsx("span", {
										className: ManageTickets_module_default.btnSubtitle,
										children: "Access your digital passes safely"
									})]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: ManageTickets_module_default.arrowRight,
								children: /* @__PURE__ */ jsx("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})
							})]
						})
					]
				})]
			})
		})
	});
}
var FAQ_module_default = {
	section: "_section_1ru5b_1",
	container: "_container_1ru5b_9",
	leftCol: "_leftCol_1ru5b_18",
	badge: "_badge_1ru5b_24",
	badgeIcon: "_badgeIcon_1ru5b_39",
	title: "_title_1ru5b_43",
	contactCard: "_contactCard_1ru5b_53",
	contactTitle: "_contactTitle_1ru5b_65",
	contactText: "_contactText_1ru5b_73",
	contactBtn: "_contactBtn_1ru5b_82",
	rightCol: "_rightCol_1ru5b_101",
	faqItem: "_faqItem_1ru5b_107",
	faqHeader: "_faqHeader_1ru5b_114",
	faqQuestion: "_faqQuestion_1ru5b_127",
	iconCircle: "_iconCircle_1ru5b_137",
	iconClosed: "_iconClosed_1ru5b_148",
	iconOpen: "_iconOpen_1ru5b_153",
	faqAnswerWrapper: "_faqAnswerWrapper_1ru5b_158",
	open: "_open_1ru5b_164",
	faqAnswerInner: "_faqAnswerInner_1ru5b_168",
	faqAnswerText: "_faqAnswerText_1ru5b_172"
};
//#endregion
//#region src/components/FAQ/FAQ.tsx
var faqData = [
	{
		question: "What is the minimum preparation someone should have to take part in a marathon?",
		answer: "Regular running practice, gradually increasing distance, getting enough rest, wearing proper shoes, and warming up before running."
	},
	{
		question: "How do you build stamina safely for a marathon?",
		answer: "Start slow, maintain a consistent running schedule, incorporate interval training, and ensure you're hydrating well."
	},
	{
		question: "What common mistakes do new marathon runners make that you wanna avoid?",
		answer: "Starting too fast, ignoring nutrition during the race, wearing new shoes, and neglecting rest days."
	},
	{
		question: "Third, how should someone pace themselves on race day to avoid burning out too early?",
		answer: "Stick to a consistent target pace, avoid the temptation to speed up early, and use a pacing strategy like negative splits."
	},
	{
		question: "What common mistakes do new marathon runners make that you wanna avoid?",
		answer: "Starting too fast, ignoring nutrition during the race, wearing new shoes, and neglecting rest days."
	}
];
function FAQ() {
	const [openIndex, setOpenIndex] = useState(0);
	const toggleItem = (index) => {
		setOpenIndex((prev) => prev === index ? null : index);
	};
	return /* @__PURE__ */ jsx("section", {
		className: FAQ_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: FAQ_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: FAQ_module_default.leftCol,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: FAQ_module_default.badge,
						children: [/* @__PURE__ */ jsx("svg", {
							className: FAQ_module_default.badgeIcon,
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" })
						}), "Organized by Bangladesh Army"]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: FAQ_module_default.title,
						children: [
							"Frequently asked",
							/* @__PURE__ */ jsx("br", {}),
							"questions"
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: FAQ_module_default.contactCard,
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: FAQ_module_default.contactTitle,
								children: "Still have a questions?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: FAQ_module_default.contactText,
								children: "Can't find the answer to your question? Send us an email and well get back to you as soon as possible!"
							}),
							/* @__PURE__ */ jsx("button", {
								className: FAQ_module_default.contactBtn,
								children: "Send mail"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: FAQ_module_default.rightCol,
				children: faqData.map((item, index) => {
					const isOpen = openIndex === index;
					return /* @__PURE__ */ jsxs("div", {
						className: FAQ_module_default.faqItem,
						children: [/* @__PURE__ */ jsxs("button", {
							className: FAQ_module_default.faqHeader,
							onClick: () => toggleItem(index),
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ jsx("span", {
								className: FAQ_module_default.faqQuestion,
								children: item.question
							}), /* @__PURE__ */ jsx("div", {
								className: `${FAQ_module_default.iconCircle} ${isOpen ? FAQ_module_default.iconOpen : FAQ_module_default.iconClosed}`,
								children: isOpen ? /* @__PURE__ */ jsx("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
								}) : /* @__PURE__ */ jsx("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M19 12l-7 7-7-7" })
								})
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: `${FAQ_module_default.faqAnswerWrapper} ${isOpen ? FAQ_module_default.open : ""}`,
							children: /* @__PURE__ */ jsx("div", {
								className: FAQ_module_default.faqAnswerInner,
								children: /* @__PURE__ */ jsx("p", {
									className: FAQ_module_default.faqAnswerText,
									children: item.answer
								})
							})
						})]
					}, index);
				})
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var Route$7 = createFileRoute("/")({ component: Index });
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "home-page",
		children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(BannerSlider, {}),
			/* @__PURE__ */ jsx(UpcomingEvents, {}),
			/* @__PURE__ */ jsx(AboutEvents, {}),
			/* @__PURE__ */ jsx(PastEvents, {}),
			/* @__PURE__ */ jsx(ManageTickets, {}),
			/* @__PURE__ */ jsx(FAQ, {})
		]
	});
}
var AboutUs_module_default = {
	section: "_section_bamxy_1",
	container: "_container_bamxy_10",
	title: "_title_bamxy_19",
	subtitle: "_subtitle_bamxy_27",
	textBlock: "_textBlock_bamxy_35",
	list: "_list_bamxy_43",
	bold: "_bold_bamxy_56"
};
//#endregion
//#region src/components/AboutUs/AboutUs.tsx
function AboutUs() {
	return /* @__PURE__ */ jsx("section", {
		className: AboutUs_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: AboutUs_module_default.container,
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: AboutUs_module_default.title,
					children: "About Us"
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "Welcome to the official page of the Dhaka International Marathon 2025, an inaugural event proudly organized by the Bangladesh Army. This marathon is more than just a race; it is a celebration of health, unity, and resilience, designed to inspire and engage individuals from all walks of life in adopting an active and healthy lifestyle."
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "Since 2021, the Bangladesh Army has been a trailblazer in organizing large-scale marathon events, leaving an indelible mark on society. Over the years, these events have transformed countless lives, fostering a culture of fitness and positivity while contributing to a sustainable and vibrant future."
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "The Dhaka International Marathon 2025 represents the culmination of years of expertise, skill, and passion. Under the visionary guidance of the Respected Chief of Army Staff, this race is set to become a landmark event that promotes physical fitness, community involvement, and international camaraderie."
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "This AIMS (Association of International Marathons and Distance Races) certified event will feature three race categories:"
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: AboutUs_module_default.list,
					children: [
						/* @__PURE__ */ jsx("li", { children: "Full Marathon (42.2 KM)" }),
						/* @__PURE__ */ jsx("li", { children: "Half Marathon (21.1 KM)" }),
						/* @__PURE__ */ jsx("li", { children: "10K Run" }),
						/* @__PURE__ */ jsx("li", { children: "10K Veteran Category" }),
						/* @__PURE__ */ jsx("li", { children: "10K First Timers" })
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "The meticulously planned course is set in the stunning 300 ft road area of Purbachal, featuring a well-connected road network with scenic routes and multiple bridges, offering runners a dynamic and memorable experience."
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: "Join us in this extraordinary journey of endurance and achievement, and let's move towards a healthier, more active future together. Whether you're a student, youth, veteran, or a fitness enthusiast, the Dhaka International Marathon 2025 welcomes you to be part of this historic event."
				}),
				/* @__PURE__ */ jsx("p", {
					className: AboutUs_module_default.textBlock,
					children: /* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Run for Unity. Run for Humanity."
					})
				}),
				/* @__PURE__ */ jsx("h2", {
					className: AboutUs_module_default.subtitle,
					children: "Company & Management Details"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Event Organizer & Management:"
					}), " Bangladesh Army (Army Sports Control Board)"]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Registered Address:"
					}), " Bangladesh Army Headquarters, Dhaka Cantonment, Dhaka, Bangladesh"]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Trade License No:"
					}), " 03-097531"]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: AboutUs_module_default.bold,
							children: "Online Registration and Chip Timing Partner:"
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: AboutUs_module_default.bold,
							children: "Sports Bangla"
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						"Partner Trade License No- 381"
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Dhaka Office:"
					}), " Ka-166, South Badda, Badda, Gulshan -1212. Mobile: 01333341612"]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: AboutUs_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: AboutUs_module_default.bold,
						children: "Registered Office Address:"
					}), " Vill: Barail, PO: Salimganj, PS: Nabinagar, Dist: Brahmanbaria"]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/about.tsx
var Route$6 = createFileRoute("/about")({ component: AboutComponent });
function AboutComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx("div", {
			style: { paddingTop: "150px" },
			children: /* @__PURE__ */ jsx(AboutUs, {})
		})
	});
}
var Blog_module_default = {
	section: "_section_op09b_1",
	container: "_container_op09b_8",
	header: "_header_op09b_15",
	title: "_title_op09b_20",
	subtitle: "_subtitle_op09b_28",
	grid: "_grid_op09b_37",
	card: "_card_op09b_43",
	postImage: "_postImage_op09b_58",
	content: "_content_op09b_66",
	date: "_date_op09b_73",
	postTitle: "_postTitle_op09b_83",
	excerpt: "_excerpt_op09b_92",
	readMore: "_readMore_op09b_101"
};
//#endregion
//#region src/assets/blog-1.jpg
var blog_1_default = "/assets/blog-1-B_Bi3bom.jpg";
//#endregion
//#region src/assets/blog-2.jpg
var blog_2_default = "/assets/blog-2-BflDmuAE.jpg";
//#endregion
//#region src/assets/blog-3.jpg
var blog_3_default = "/assets/blog-3-CJN8B2pM.jpg";
//#endregion
//#region src/assets/blog-4.jpg
var blog_4_default = "/assets/blog-4-CMuzcmf7.jpg";
//#endregion
//#region src/assets/blog-5.jpg
var blog_5_default = "/assets/blog-5-DcwUYmzp.jpg";
//#endregion
//#region src/components/Blog/Blog.tsx
function Blog() {
	const posts = [
		{
			id: 1,
			image: blog_1_default,
			title: "Training Tips for Your First Full Marathon",
			date: "OCTOBER 10, 2025",
			excerpt: "Preparing for 42.2 KM is no small feat. Discover our top expert tips to build endurance, avoid injury, and cross the finish line strong."
		},
		{
			id: 2,
			image: blog_2_default,
			title: "The Importance of Hydration on Race Day",
			date: "SEPTEMBER 28, 2025",
			excerpt: "Water stations are strategically placed along the Purbachal route. Learn how to plan your hydration strategy to maintain peak performance."
		},
		{
			id: 3,
			image: blog_3_default,
			title: "Meet the Purbachal Course: What to Expect",
			date: "SEPTEMBER 15, 2025",
			excerpt: "Take a virtual tour of the stunning 300 ft road area. We break down the elevation, scenic spots, and where the cheering zones will be."
		},
		{
			id: 4,
			image: blog_4_default,
			title: "Nutrition Guide: Carbo-Loading Explained",
			date: "AUGUST 30, 2025",
			excerpt: "What should you eat the week before the race? We consult with sports nutritionists to bring you the ultimate pre-race meal plan."
		},
		{
			id: 5,
			image: blog_5_default,
			title: "Highlights from the 2024 Marathon",
			date: "FEBRUARY 12, 2025",
			excerpt: "Look back at the incredible moments, record-breaking finish times, and the unbreakable spirit of humanity from our last event."
		},
		{
			id: 6,
			image: blog_2_default,
			title: "Why We Run: Stories from the Community",
			date: "JANUARY 05, 2025",
			excerpt: "Every runner has a reason. Read inspiring stories from veterans, students, and first-timers who run for health, unity, and hope."
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: Blog_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: Blog_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: Blog_module_default.header,
				children: [/* @__PURE__ */ jsx("h1", {
					className: Blog_module_default.title,
					children: "Latest News & Articles"
				}), /* @__PURE__ */ jsx("p", {
					className: Blog_module_default.subtitle,
					children: "Stay updated with the latest announcements, training guides, and inspiring stories from the Dhaka International Marathon community."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: Blog_module_default.grid,
				children: posts.map((post) => /* @__PURE__ */ jsxs("article", {
					className: Blog_module_default.card,
					children: [/* @__PURE__ */ jsx("img", {
						src: post.image,
						alt: post.title,
						className: Blog_module_default.postImage
					}), /* @__PURE__ */ jsxs("div", {
						className: Blog_module_default.content,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: Blog_module_default.date,
								children: post.date
							}),
							/* @__PURE__ */ jsx("h3", {
								className: Blog_module_default.postTitle,
								children: post.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: Blog_module_default.excerpt,
								children: post.excerpt
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#",
								onClick: (e) => e.preventDefault(),
								className: Blog_module_default.readMore,
								children: ["Read Article", /* @__PURE__ */ jsx("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})]
							})
						]
					})]
				}, post.id))
			})]
		})
	});
}
//#endregion
//#region src/routes/blog.tsx
var Route$5 = createFileRoute("/blog")({ component: BlogComponent });
function BlogComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx("div", {
			style: { paddingTop: "150px" },
			children: /* @__PURE__ */ jsx(Blog, {})
		})
	});
}
var ContactUs_module_default = {
	section: "_section_u5n0j_1",
	container: "_container_u5n0j_8",
	infoPanel: "_infoPanel_u5n0j_16",
	infoTitle: "_infoTitle_u5n0j_24",
	infoSubtitle: "_infoSubtitle_u5n0j_31",
	contactItem: "_contactItem_u5n0j_39",
	contactLabel: "_contactLabel_u5n0j_45",
	contactDetail: "_contactDetail_u5n0j_54",
	formPanel: "_formPanel_u5n0j_60",
	formTitle: "_formTitle_u5n0j_68",
	formGroup: "_formGroup_u5n0j_76",
	label: "_label_u5n0j_82",
	input: "_input_u5n0j_90",
	textarea: "_textarea_u5n0j_90",
	submitBtn: "_submitBtn_u5n0j_111"
};
//#endregion
//#region src/components/ContactUs/ContactUs.tsx
function ContactUs() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
		setTimeout(() => {
			setIsSubmitted(false);
		}, 5e3);
	};
	return /* @__PURE__ */ jsx("section", {
		className: ContactUs_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: ContactUs_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: ContactUs_module_default.infoPanel,
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: ContactUs_module_default.infoTitle,
						children: "Get in Touch"
					}),
					/* @__PURE__ */ jsx("p", {
						className: ContactUs_module_default.infoSubtitle,
						children: "Have questions about the marathon, registration, or sponsorships? We'd love to hear from you."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: ContactUs_module_default.contactItem,
						children: [/* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactLabel,
							children: "Dhaka Office"
						}), /* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactDetail,
							children: "Ka-166, South Badda, Badda, Gulshan -1212."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: ContactUs_module_default.contactItem,
						children: [/* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactLabel,
							children: "Phone"
						}), /* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactDetail,
							children: "01333341612"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: ContactUs_module_default.contactItem,
						children: [/* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactLabel,
							children: "Email"
						}), /* @__PURE__ */ jsx("span", {
							className: ContactUs_module_default.contactDetail,
							children: "info@dhakainternationalmarathon.com"
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: ContactUs_module_default.formPanel,
				children: [/* @__PURE__ */ jsx("h2", {
					className: ContactUs_module_default.formTitle,
					children: "Send us a Message"
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: ContactUs_module_default.formGroup,
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "name",
								className: ContactUs_module_default.label,
								children: "Full Name"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								type: "text",
								id: "name",
								value: formData.name,
								onChange: handleChange,
								className: ContactUs_module_default.input,
								placeholder: "John Doe"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: ContactUs_module_default.formGroup,
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "email",
								className: ContactUs_module_default.label,
								children: "Email Address"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								type: "email",
								id: "email",
								value: formData.email,
								onChange: handleChange,
								className: ContactUs_module_default.input,
								placeholder: "john@example.com"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: ContactUs_module_default.formGroup,
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "subject",
								className: ContactUs_module_default.label,
								children: "Subject"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								type: "text",
								id: "subject",
								value: formData.subject,
								onChange: handleChange,
								className: ContactUs_module_default.input,
								placeholder: "How can we help you?"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: ContactUs_module_default.formGroup,
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "message",
								className: ContactUs_module_default.label,
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								required: true,
								id: "message",
								value: formData.message,
								onChange: handleChange,
								className: ContactUs_module_default.textarea,
								placeholder: "Write your message here..."
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: ContactUs_module_default.submitBtn,
							children: "Send Message"
						}),
						isSubmitted && /* @__PURE__ */ jsx("div", {
							style: {
								marginTop: "16px",
								color: "#0A3C19",
								fontWeight: "500",
								backgroundColor: "#E8F0EB",
								padding: "12px",
								borderRadius: "8px",
								textAlign: "center"
							},
							children: "Thank you! Your message has been sent successfully."
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/contact.tsx
var Route$4 = createFileRoute("/contact")({ component: ContactComponent });
function ContactComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx("div", {
			style: { paddingTop: "150px" },
			children: /* @__PURE__ */ jsx(ContactUs, {})
		})
	});
}
var DeliveryPolicy_module_default = {
	section: "_section_2jwv6_1",
	container: "_container_2jwv6_10",
	title: "_title_2jwv6_19",
	textBlock: "_textBlock_2jwv6_27",
	bold: "_bold_2jwv6_35"
};
//#endregion
//#region src/components/DeliveryPolicy/DeliveryPolicy.tsx
function DeliveryPolicy() {
	return /* @__PURE__ */ jsx("section", {
		className: DeliveryPolicy_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: DeliveryPolicy_module_default.container,
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: DeliveryPolicy_module_default.title,
					children: "Delivery Policy"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: DeliveryPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: DeliveryPolicy_module_default.bold,
						children: "Race Kit Collection:"
					}), " We do not offer home delivery for Race Kits (Race Jersey and BIB/Timing Chip). Runners must collect their kits in person from the designated pre-race Expo. Details regarding the Expo date, time, and venue will be communicated via email or SMS."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: DeliveryPolicy_module_default.textBlock,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: DeliveryPolicy_module_default.bold,
							children: "Standard Delivery Time (If Applicable):"
						}),
						" For any physical merchandise or promotional items eligible for delivery, the standard delivery time is ",
						/* @__PURE__ */ jsx("span", {
							className: DeliveryPolicy_module_default.bold,
							children: "Inside Dhaka - 5 days"
						}),
						" and ",
						/* @__PURE__ */ jsx("span", {
							className: DeliveryPolicy_module_default.bold,
							children: "Outside Dhaka - 10 days"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: DeliveryPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: DeliveryPolicy_module_default.bold,
						children: "Finisher Medals:"
					}), " Finisher medals will be awarded exclusively at the finish line to runners who successfully complete the race within the designated cut-off time. Medals will not be delivered elsewhere."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: DeliveryPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: DeliveryPolicy_module_default.bold,
						children: "E-Certificates:"
					}), " Upon the publication of the final race results, official e-certificates will be available for download directly from our website."]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/delivery-policy.tsx
var Route$3 = createFileRoute("/delivery-policy")({ component: DeliveryPolicyComponent });
function DeliveryPolicyComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx(DeliveryPolicy, {})
	});
}
//#endregion
//#region src/routes/events.tsx
var Route$2 = createFileRoute("/events")({ component: EventsComponent });
function EventsComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsxs("div", {
			style: { paddingTop: "150px" },
			children: [/* @__PURE__ */ jsx(UpcomingEvents, {}), /* @__PURE__ */ jsx(PastEvents, {})]
		})
	});
}
var RefundPolicy_module_default = {
	section: "_section_2jwv6_1",
	container: "_container_2jwv6_10",
	title: "_title_2jwv6_19",
	textBlock: "_textBlock_2jwv6_27",
	bold: "_bold_2jwv6_35"
};
//#endregion
//#region src/components/RefundPolicy/RefundPolicy.tsx
function RefundPolicy() {
	return /* @__PURE__ */ jsx("section", {
		className: RefundPolicy_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: RefundPolicy_module_default.container,
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: RefundPolicy_module_default.title,
					children: "Return and Refund Policy"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: RefundPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: RefundPolicy_module_default.bold,
						children: "Strictly Non-Refundable:"
					}), " The registration fee is generally strictly non-refundable. Under normal circumstances, once registered, fees cannot be refunded for inability to participate, or personal reasons."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: RefundPolicy_module_default.textBlock,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: RefundPolicy_module_default.bold,
							children: "Standard Timeline for Exception Cases:"
						}),
						" If a return or refund is exceptionally approved due to payment gateway errors or duplicate transactions, the standard timeline for completing the refund is ",
						/* @__PURE__ */ jsx("span", {
							className: RefundPolicy_module_default.bold,
							children: "7 to 10 working days"
						}),
						" after claiming the refund."
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: RefundPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: RefundPolicy_module_default.bold,
						children: "Disqualification:"
					}), " If a runner is disqualified before or after the race for providing false information (e.g., incorrect age), registering in multiple categories, or transferring their BIB, no refund will be issued."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: RefundPolicy_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: RefundPolicy_module_default.bold,
						children: "No Category Changes:"
					}), " Once the registration is completed, changing the race category is not permitted."]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/refund-policy.tsx
var Route$1 = createFileRoute("/refund-policy")({ component: RefundPolicyComponent });
function RefundPolicyComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx(RefundPolicy, {})
	});
}
var TermsConditions_module_default = {
	section: "_section_2jwv6_1",
	container: "_container_2jwv6_10",
	title: "_title_2jwv6_19",
	textBlock: "_textBlock_2jwv6_27",
	bold: "_bold_2jwv6_35"
};
//#endregion
//#region src/components/TermsConditions/TermsConditions.tsx
function TermsConditions() {
	return /* @__PURE__ */ jsx("section", {
		className: TermsConditions_module_default.section,
		children: /* @__PURE__ */ jsxs("div", {
			className: TermsConditions_module_default.container,
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: TermsConditions_module_default.title,
					children: "Terms and Conditions"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "Age Criteria:"
					}), " Participants must strictly meet the age requirements for their selected category (e.g., General Category: 18 years and above; 10K Run: 14 to below 50 years; 10K Veteran: 50 years and above). Anyone not meeting the age criteria must not register."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "BIB Transfer:"
					}), " BIB transfer is strictly forbidden. Anyone found using another runner's BIB before, during, or after the race will be penalized and disqualified."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "Single Registration:"
					}), " A runner may only register for one category. Anyone found registering in multiple categories will be disqualified."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "10K First Timers:"
					}), " This category is exclusively for novices participating in an official running event for the first time. Anyone with prior participation in any race, locally or internationally, will be disqualified if substantial proof is found."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "Expected Time:"
					}), " Runners must provide accurate information for their \"expected time to finish\" during registration to assist with accurate race organization."]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: TermsConditions_module_default.textBlock,
					children: [/* @__PURE__ */ jsx("span", {
						className: TermsConditions_module_default.bold,
						children: "Health and Safety:"
					}), " Marathon running is a physically demanding activity. Participants register at their own risk and are responsible for assessing their physical fitness before taking part."]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/terms-conditions.tsx
var Route = createFileRoute("/terms-conditions")({ component: TermsConditionsComponent });
function TermsConditionsComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "home-page",
		children: /* @__PURE__ */ jsx(TermsConditions, {})
	});
}
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	BlogRoute: Route$5.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	DeliveryPolicyRoute: Route$3.update({
		id: "/delivery-policy",
		path: "/delivery-policy",
		getParentRoute: () => Route$8
	}),
	EventsRoute: Route$2.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$8
	}),
	RefundPolicyRoute: Route$1.update({
		id: "/refund-policy",
		path: "/refund-policy",
		getParentRoute: () => Route$8
	}),
	TermsConditionsRoute: Route.update({
		id: "/terms-conditions",
		path: "/terms-conditions",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/entry-server.tsx
async function render(url) {
	const memoryHistory = createMemoryHistory({ initialEntries: [url] });
	const router = createRouter({
		routeTree,
		history: memoryHistory
	});
	await router.load();
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(RouterProvider, { router }) }));
}
//#endregion
export { render };

import React, { useState, useEffect } from "react";
import { useAuth } from '../../utils/contexts/AuthContext';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import API from "../../utils/API";
import './carousel.css'


// import testImage1 from './testImages/testKnifeImg1.jpeg'
// import testImage2 from './testImages/testKnifeImg2.webp'
// import testImage3 from './testImages/testKnifeImg3.jpeg'

const CarouselViewer = () => {

	const { newsletterInfo } = useAuth()

	const [featuredImagesState, setFeaturedImagesState] = useState([]);
	const [indexState, setIndexState] = useState(0);

	useEffect(() => {
		if (!featuredImagesState) {
			setCarouselImages()
		}
	}, [])


	const setCarouselImages = () => {
		let images = newsletterInfo.photos;
		setFeaturedImagesState(images);
		console.log(featuredImagesState);
	};


	// handles the advancing of the slides
	const handleSelect = (selectedIndex, e) => {
		setIndexState(selectedIndex);
	};

	return (
		<Container fluid className='containerFluid'>
			<Row className='carouselWrapper'>
				<Carousel activeIndex={indexState} onSelect={handleSelect}>
					{featuredImagesState.map(
						(image, indexState) => {
							console.log('image url', image);
							return (
								<Carousel.Item key={indexState}>
									<CloudinaryContext cloudName="makerspotlight">
										<Image
											publicId={image}
											// publicId='https://res.cloudinary.com/makerspotlight/image/upload/c_pad,h_800,w_800/v1615655489/testKnifeImg1_gzlddh.jpg'
											className="d-block w-100 carouselImg"
											alt="First slide"
											// width="300"
											// height="300"
											background="auto" crop="pad"
										>
										</Image>
										{/* <Image publicId={image} >
											<Transformation width="300" height="300" background="white" crop="pad" />
											<Transformation border="10px_solid_red" />
										</Image> */}
									</CloudinaryContext>
									{/* <Carousel.Caption>
									<section className='caption'>
										<h3>First slide label</h3>
										<p>{image.caption}</p>
									</section>
								</Carousel.Caption> */}
									<figcaption className='carouselCaption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.
								</figcaption>
								</Carousel.Item>
							)
						}
					)}
				</Carousel>
			</Row>
		</Container>

	)
}

export default CarouselViewer;

{/* <img
		className="d-block w-100"
		src={image.src}
		alt="Slide"
	/> */}


// https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp
// https://res.cloudinary.com/makerspotlight/image/upload/c_pad,h_800,w_800/v1615655489/testKnifeImg1_gzlddh.jpg
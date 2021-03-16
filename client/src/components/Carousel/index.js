import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import API from "../../utils/API";
import './carousel.css'


// import testImage1 from './testImages/testKnifeImg1.jpeg'
// import testImage2 from './testImages/testKnifeImg2.webp'
// import testImage3 from './testImages/testKnifeImg3.jpeg'

const CarouselViewer = () => {

	const [featuredImagesState, setFeaturedImagesState] = useState([]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		getUserInfo();
	}, [])

	// function setDummyImages() {
	// 	setFeaturedImages([
	// 		{
	// 			src: './testImages/testKnifeImg1.jpeg',
	// 			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 		},
	// 		{
	// 			src: './testImages/testKnifeImg2.jpeg',
	// 			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 		},
	// 		{
	// 			src: './testImages/testKnifeImg3.jpeg',
	// 			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 		},
	// 	])
	// }

	//use firebase id to get user info from mongodb
	const getUserInfo = async () => {
		let dbResults;
		try {
			dbResults = await API.getUsers();
		} catch (err) {
			console.error(err);
		} finally {
			// console.log('ALL USERS', dbResults.data);
			setFeaturedImagesState(dbResults.data[0].images)
			// updateState();
		}
	};


	// handles the advancing of the slides
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Container fluid className='containerFluid'>
			<Row className='carouselWrapper'>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					{featuredImagesState.map(
						(image, index) => {
							console.log('image url', image);
							return (
								<Carousel.Item key={index}>
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
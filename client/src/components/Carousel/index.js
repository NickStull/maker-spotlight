import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import API from "../../utils/API";
import './carousel.css'


import testImage1 from './testImages/testKnifeImg1.jpeg'
// import testImage2 from './testImages/testKnifeImg2.webp'
// import testImage3 from './testImages/testKnifeImg3.jpeg'

const CarouselViewer = () => {

	const [featuredImagesState, setFeaturedImagesState] = useState([testImage1]);
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
			console.log('ALL USERS', dbResults.data);
			setFeaturedImagesState(dbResults.data[0].images)
			// updateState();
		}
	};


	// handles the advancing of the slides
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Container fluid>
			<Row>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					{featuredImagesState.map(
						(image, index) => {
							return (
								<Carousel.Item key={index}>
									<CloudinaryContext cloudName="makerspotlight">
										<Image
											publicId={image}
											className="d-block w-100 carouselImg"
											// src="holder.js/800x400?text=First slide&bg=373940"
											alt="First slide"
										// aspect-ratio="3:2" 
										// width="1200"
										// height="900"
										// mode="Pad"
										>
											{/* <Transformation aspect-ratio="3:2" mode="ad" /> */}
										</Image>
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

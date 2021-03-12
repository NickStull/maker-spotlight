import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'


import testImage1 from './testImages/testKnifeImg1.jpeg'
import testImage2 from './testImages/testKnifeImg2.webp'
import testImage3 from './testImages/testKnifeImg3.jpeg'

const CarouselViewer = () => {

	// const [loggedInState, setLoggedInState] = useState(false);
	// const { currentUser } = useAuth();
	const [featuredImages, setFeaturedImages] = useState([]);

	// useEffect(() => {
	// 	setDummyImages();
	// 	// getNewsletterImages();
	// }, [])

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
	let images = [
		{
			src: testImage1,
			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
		},
		{
			src: testImage3,
			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
		},
		{
			src: testImage3,
			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
		},
	]

	// const getImgurImages = async () => {
	// 	try {
	// 		dbResults = await API.getCurrentNewsLetter();
	// 	} catch (err) {
	// 		console.error(err);
	// 	} finally {
	// 		setImgurImages(dbResults.data.)
	// 	}
	// };



	//check to see if user is logged in via context provider
	// useEffect(() => {
	// 	if (currentUser) {
	// 		setLoggedInState(true);
	// 	}
	// }, [currentUser])

	return (
		<main className='carouselWrapper'>
			<Carousel>
				{images.map(image => {
					return (
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={image.src}
								alt="Slide"
							/>
							<Carousel.Caption>
								<section className='caption'>
									<h3>First slide label</h3>
									<p>{image.caption}</p>
								</section>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</main>
	)
}

export default CarouselViewer;
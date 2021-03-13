import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import Carousel from 'react-bootstrap/Carousel';
import { Image, CloudinaryContext } from 'cloudinary-react';
import API from "../../utils/API";
import './carousel.css'


import testImage1 from './testImages/testKnifeImg1.jpeg'
// import testImage2 from './testImages/testKnifeImg2.webp'
// import testImage3 from './testImages/testKnifeImg3.jpeg'

const CarouselViewer = () => {

	// const [loggedInState, setLoggedInState] = useState(false);
	const { currentUser } = useAuth();
	const [featuredImagesState, setFeaturedImagesState] = useState([testImage1]);

	// useEffect(() => {
	// 	setDummyImages();
	// 	// getNewsletterImages();
	// }, [])

	// useEffect(() => {
	// 	console.log('CURRENT USER', currentUser);
	// 	if (currentUser) {
	// 		console.log('CURRENT USER INSIDE IF', currentUser);
	// 		getUserInfo();
	// 	}
	// }, [currentUser])

	// useEffect(() => {
	// console.log('USE EFFECT');
	// if (featuredImagesState) {
	// 	addFeaturedImagesToArr();
	// }
	// }, [featuredImagesState])

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

	let featuredImages = [testImage1];
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
	getUserInfo();

	function updateState() { setFeaturedImagesState(featuredImages) };

	// let featuredImages = [];
	// function addFeaturedImagesToArr() {

	// 	console.log('IMAGES ARRAY ', featuredImages);
	// }


	// let dummyImages = [
	// 	{
	// 		src: testImage1,
	// 		caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 	},
	// 	{
	// 		src: testImage3,
	// 		caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 	},
	// 	{
	// 		src: testImage3,
	// 		caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus vel a, modi quidem, enim eveniet aliquid delectus molestias corrupti quo in earum blanditiis maxime. Hic inventore ducimus magni sed.'
	// 	},
	// ]



	//check to see if user is logged in via context provider
	// useEffect(() => {
	// 	if (currentUser) {
	// 		setLoggedInState(true);
	// 	}
	// }, [currentUser])

	return (
		<main className='carouselWrapper'>
			<Carousel>
				{featuredImagesState.map(
					image => {
						return (
							<Carousel.Item>
								<CloudinaryContext cloudName="makerspotlight">
									<Image publicId={image} />
								</CloudinaryContext>
								<Carousel.Caption>
									<section className='caption'>
										<h3>First slide label</h3>
										<p>{image.caption}</p>
									</section>
								</Carousel.Caption>
							</Carousel.Item>
						)
					}
				)}
			</Carousel>
			{/* <img src={featuredImages[0]} alt="" /> */}
		</main>
	)
}

export default CarouselViewer;

{/* <img
		className="d-block w-100"
		src={image.src}
		alt="Slide"
	/> */}

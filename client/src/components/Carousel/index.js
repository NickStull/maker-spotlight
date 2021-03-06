import React, { useState } from "react";
import { useAuth } from '../../utils/contexts/AuthContext';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import './carousel.css'

const CarouselViewer = () => {

	const { newsletterInfo, currentUser } = useAuth()
	const [indexState, setIndexState] = useState(0);

	// handles the advancing of the slides
	const handleSelect = (selectedIndex, e) => {
		setIndexState(selectedIndex);
	};

	return (

		<Container fluid className='containerFluid'>
		{ currentUser ?
			<Row className='carouselWrapper'>
			<Carousel activeIndex={indexState} onSelect={handleSelect}>
				{newsletterInfo.photos.map(
				(image, indexState) => {
					return (
					<Carousel.Item key={indexState}>
						<CloudinaryContext cloudName="makerspotlight">
						<Image
							publicId={image.link}
							className="d-block w-100 carouselImg"
							alt={`Knives ${indexState}`}
							background="auto" crop="pad"
						/>
						</CloudinaryContext>
						<figcaption className='carouselCaption'>
						{image.description}
						</figcaption>
					</Carousel.Item>
					)
				}
				)}
			</Carousel>
			</Row>
			: <> </>
		}
		</Container>

	)
}

export default CarouselViewer;

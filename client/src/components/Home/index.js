import React from 'react';
import CarouselViewer from '../Carousel';
import Voting from '../Voting'
import MakerBio from '../MakerBio';
import MakerInfo from '../MakerInfo';

const Home = () => {
  return (
    <>
      <MakerBio />
      <CarouselViewer />
      <MakerInfo />
    </>
  )
}

export default Home;

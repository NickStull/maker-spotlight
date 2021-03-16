import React from 'react';
import CarouselViewer from '../Carousel';
import Voting from '../Voting'
import MakerBio from '../MakerBio';

const Home = () => {
  return (
    <>
      <div>
        {/* <CarouselViewer /> */}
        <Voting />
      </div>
      <MakerBio />
      <CarouselViewer />
    </>
  )
}

export default Home;

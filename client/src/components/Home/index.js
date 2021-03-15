import React from 'react';
import CarouselViewer from '../Carousel';
import Voting from '../Voting'

const Home = () => {
  return (
    <>

      <div>
        {/* <CarouselViewer /> */}
        <Voting />
      </div>
      <CarouselViewer />
    </>
  )
}

export default Home;

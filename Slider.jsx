import React, { useEffect, useState } from 'react';
import data from '../data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const App = () => {
  const [swiper, setSwiper] = useState(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true); // Initialize to true

  useEffect(() => {
    const handleSlideChange = () => {
      setShowPrevButton(swiper?.activeIndex > 0);
      setShowNextButton(swiper?.activeIndex < data.length - 1);
    };

    swiper?.on('slideChange', handleSlideChange);

    return () => {
      swiper?.off('slideChange', handleSlideChange);
    };
  }, [swiper, data]);

  const handleNextButtonClick = () => {
    swiper?.slideNext();
    setShowPrevButton(true); // Ensure the prev button is visible after clicking
  };

  const handlePrevButtonClick = () => {
    swiper?.slidePrev();
    setShowNextButton(true); // Ensure the next button is visible after clicking
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative bg-zinc-100 aspect-square overflow-hidden rounded-xl w-[22vw] h-[44vh]'>
        <div className='absolute z-10 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300'>
          {showNextButton && (
            <button
              onClick={handleNextButtonClick}
              className='active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 right-3 transform -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full bg-white transition'
              aria-label='next-image'
            >
              <IoIosArrowForward />
            </button>
          )}
          {showPrevButton && (
            <button
              onClick={handlePrevButtonClick}
              className='active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 left-3 transform -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full bg-white transition'
              aria-label='prev-image'
            >
              <IoIosArrowBack />
            </button>
          )}
        </div>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          direction={'horizontal'}
          modules={[Mousewheel, Pagination]}
          speed={350} // Set the speed to control the smoothness of transition
          className='mySwiper w-full h-full'
        >
          {data.map((imageData, index) => (
            <SwiperSlide key={index} className='-z-10 relative h-full w-full'>
              <img loading='lazy' className='object-cover w-full h-full object-center -z-10 rounded-xl' src={imageData.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
     <div className='h-[500px]'>
       <Swiper
       style={{ width: '100%', height: '100%' }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex items-center justify-center h-full relative">
            <img src="https://i.ibb.co/9p7Xdry/pexels-rafael-cosquiere-2041540.jpg" alt="" className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-white text-center space-y-8">
              <h2 className="text-xl md:text-5xl font-bold">Inventory management software <br /> for growing businesses</h2>
              <p className='text-base md:text-2xl font-bold'>Increase your sales and keep track of every unit <br /> with our powerful stock management, <br /> order fulfillment, and inventory control software.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center justify-center h-full relative">
            <img src="https://i.ibb.co/9p7Xdry/pexels-rafael-cosquiere-2041540.jpg" alt="" className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-white text-center space-y-8">
              <h2 className="text-xl md:text-5xl font-bold">Inventory management software <br /> for growing businesses</h2>
              <p className='text-base md:text-2xl font-bold'>Increase your sales and keep track of every unit <br /> with our powerful stock management, <br /> order fulfillment, and inventory control software.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center justify-center h-full relative">
            <img src="https://i.ibb.co/9p7Xdry/pexels-rafael-cosquiere-2041540.jpg" alt="" className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-white text-center space-y-8">
              <h2 className="text-xl md:text-5xl font-bold">Inventory management software <br /> for growing businesses</h2>
              <p className='text-base md:text-2xl font-bold'>Increase your sales and keep track of every unit <br /> with our powerful stock management, <br /> order fulfillment, and inventory control software.</p>
            </div>
          </div>
                  </SwiperSlide>
    
      </Swiper>

     </div>
    );
};

export default Banner;
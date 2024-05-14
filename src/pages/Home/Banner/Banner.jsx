import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';

AOS.init();

const Banner = () => {
    return (
      <div className='mt-6'>
      <Swiper className='' navigation={true} pagination={{clickable:true}} modules={[Navigation, Autoplay, Pagination]} loop={true}>
        <SwiperSlide><div data-aos="zoom-out" data-aos-duration="3000"  style={{backgroundImage: `url("https://i.ibb.co/HqR218k/banner1.jpg")`}} className='bg-center w-full bg-cover bg-no-repeat h-[500px] flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 bg-blend-overlay'>
      
        <div className='space-y-2'>
              <h2 data-aos="fade-left" data-aos-duration="2000" className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Let's Plan Your Next Target Together</h2>
              <p  data-aos="fade-right" data-aos-duration="2000" className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>We are passionate about creating experiences that lasts forever. Explore wide range of services and start planning your next big moment</p>
              <Link to="/services"><button className='btn mt-4 btn-outline btn-success'>Explore Now</button></Link>
          </div>
         
          </div>
      </SwiperSlide>
        <SwiperSlide><div  style={{backgroundImage: `url("https://i.ibb.co/3cCmsJ8/banner2.jpg")`}} className='bg-center w-full bg-cover bg-no-repeat h-[500px] flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 bg-blend-overlay'>
      
        <div className='space-y-2'>
              <h2 className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Unforgettable Experiences Awaits</h2>
              <p  className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>Looking to make your next event stand out? Let us help you to create an event that will be remembered for years to come</p>
              <Link to="/services"><button className='mt-4 btn btn-outline btn-success'>Explore Now</button></Link>
          </div>
         
          </div>
      </SwiperSlide>
        <SwiperSlide><div  style={{backgroundImage: `url("https://i.ibb.co/V3T8dd7/banner4.jpg")`}} className='bg-center w-full bg-cover bg-no-repeat h-[500px] flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 bg-blend-overlay'>
      
        <div className='space-y-2'>
              <h2 className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Your Event, Our Passion</h2>
              <p  className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>We believe every event is an opportunity to create something special. Discover the easiest way to plan your next event</p>
              <Link to="/services"><button className='mt-4 btn btn-outline btn-success'>Explore Now</button></Link>
          </div>
         
          </div>
      </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
const Banner = () => {
    return (
        <div className='mt-8'>
        <Swiper className='rounded-xl' navigation={true} pagination={{clickable:true}} modules={[Navigation, Autoplay, Pagination]} loop={true} autoplay={{delay:3000}}>
          <SwiperSlide><div data-aos="zoom-out" data-aos-duration="2000"  style={{backgroundImage: `url("https://i.ibb.co/HqR218k/banner1.jpg")`}} className='bg-center w-full bg-cover bg-no-repeat h-[500px] rounded-lg flex flex-col justify-center items-center gap-3'>
        
          <div className='bg-black bg-opacity-60 rounded-lg'>
                <h2 data-aos="fade-down" data-aos-duration="1000" className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Let's Plan Your Next Target Together</h2>
                <p  data-aos="fade-up" data-aos-duration="1000" className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>We are passionate about creating experiences that lasts forever. Explore wide range of services and start planning your next big moment</p>
            </div>
           
            </div>
        </SwiperSlide>
          <SwiperSlide><div data-aos-delay="2900" data-aos="zoom-out" data-aos-duration="2000" style={{backgroundImage: `url("https://i.ibb.co/3cCmsJ8/banner2.jpg")`}} className='bg-center w-full bg-cover h-[500px]  bg-no-repeat rounded-lg flex flex-col justify-center items-center gap-3'>
          <div className=' bg-black bg-opacity-60 rounded-lg'>
                <h2 data-aos="fade-left" data-aos-delay="3000" data-aos-duration="1000"  className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Unforgettable Experiences Awaits</h2>
                <p  data-aos="fade-right" data-aos-delay="3000" data-aos-duration="1000" className='text-white max-w-[587px] px-3 mx-auto pb-3 opacity-90'>Looking to make your next event stand out? Let us help you to create an event that will be remembered for years to come.</p>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div data-aos-delay="5900" data-aos="zoom-out" data-aos-duration="2000"  style={{backgroundImage: `url("https://i.ibb.co/V3T8dd7/banner4.jpg")`}} className='bg-cover bg-center w-full h-[500px] bg-no-repeat rounded-lg flex flex-col justify-center items-center gap-3'>
          <div className=' bg-black bg-opacity-60 rounded-lg'>
                <h2 data-aos-delay="6000" data-aos="fade-down" data-aos-duration="1000" className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Your Event, Our Passion</h2>
                <p data-aos-delay="6000"  data-aos="fade-up" data-aos-duration="1000" className='text-white max-w-[550px] px-3 mx-auto pb-3 opacity-90'>We believe every event is an opportunity to create something special. Discover the easiest way to plan your next event.</p>
            </div>
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;
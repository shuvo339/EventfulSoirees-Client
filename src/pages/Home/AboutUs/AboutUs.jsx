
const AboutUs = () => {
    return (
        <div className="md:mt-24 mt-12 px-2"> 
            <div>
            <h2 className="text-3xl md:text-5xl font-bold">About Us</h2>
            <h2 className="text-xl text-gray-400 font-bold pb-8">Learn more about our story and mission</h2>
            {/* main div  */}
            <div className="grid md:grid-cols-1 lg:grid-cols-4 md:gap-4 grid-rows-2">
                {/* text div  */}
                <div className="col-span-1 row-span-2">
                <p className="opacity-80 text-justify"> Eventful Soirees, we believe that every event is an opportunity to create lasting memories. Founded in 2020, our platform was born out of a passion for connecting people and creating unforgettable experiences. Our journey began with a simple idea: to make event planning seamless and enjoyable. We are driven by our core values of transparency, quality, and customer satisfaction. Our team is dedicated to ensuring that every interaction on our platform is smooth and hassle-free. </p>
                <br />
                <p className="opacity-80 text-justify"> Event planning can be stressful, but we are here to make it easier. What sets us apart is our unwavering commitment to personalized service and attention to detail. From intimate gatherings to grand galas, we approach each event with the same level of dedication, ensuring that every aspect is meticulously planned and flawlessly executed.</p>
                </div>

                {/* img div  */}
                <div className="col-span-2 row-span-2">
                    <div className="h-48 w-48 mx-auto"><img className="w-48 h-48 object-cover translate-y-12 rotate-45 border-4" src="https://i.ibb.co/6NkRXrR/gala-dinner.jpg" alt="" /></div>
                    <div className="flex md:flex-row flex-col justify-center items-center ">
                    <div className="w-1/2"><img className="h-48 w-48 -rotate-45 object-cover mx-auto   border-4" src="https://i.ibb.co/jJjr6Rm/weddind2.jpg" alt="" /></div>
                    <div className="w-1/2"><img className="h-48 w-48 rotate-45 object-cover mx-auto border-4" src="https://i.ibb.co/v1D45d0/holidat-party.png" alt="" /></div>
                    </div>
                    <div  className="h-48 w-48 mx-auto -translate-y-12"><img className="h-48 rotate-45  w-48 object-cover border-4" src="https://i.ibb.co/3cCmsJ8/banner2.jpg" alt="" /></div>
                </div>
                {/* text div  */}
                <div className="col-span-1 row-span-2">
                    <p className="opacity-80 text-justify">But beyond our expertise lies our genuine passion for what we do. We believe that every event is an opportunity to create lasting memories and foster meaningful connections. Whether it is a wedding, corporate function, or milestone celebration, We are here to transform your dreams into reality, infusing each moment with joy, elegance, and sophistication. We're not just event planners; we're trusted partners invested in bringing your vision to life.</p>
                    <br />
                    <p className="opacity-80 text-justify">Our team comprises skilled professionals who thrive on creativity, collaboration. Whether it is a lavish wedding, a corporate extravaganza, or an intimate gathering, we approach every event with the same level of enthusiasm and expertise. Join us on this journey, and let's make your next event an unforgettable masterpiece.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
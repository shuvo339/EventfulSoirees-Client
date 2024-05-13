import { FaHandshake } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";

const Highlights = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/C8pQ9CT/add-bg.jpg")`}} className='md:mt-24 mt-12 min-h-72 bg-cover bg-center w-full bg-no-repeat bg-opacity-50 bg-black bg-blend-overlay rounded-lg flex flex-col md:py-0 py-4 space-y-8 md:space-y-0 md:flex-row justify-around items-center'>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaHandshake className="text-emerald-400 text-4xl" />
                        <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-emerald-400 text-5xl font-bold">
                            <CountUp end={300} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Successfull <br />Service <br /> Deals</p>
            </div>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaMapLocationDot className="text-emerald-400 text-4xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-emerald-400 text-5xl font-bold">
                            <CountUp end={30} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Service <br />Area <br />Coverage</p>
            </div>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaPeopleCarry className="text-emerald-400 text-4xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-emerald-400 text-5xl font-bold">
                            <CountUp end={50} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Faithful <br />Service <br />Providers</p>
            </div>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaPeopleRobbery className="text-emerald-400 text-4xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-emerald-400 text-5xl font-bold">
                            <CountUp end={200} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Satisfied <br />Service <br />Takers</p>
            </div>
        </div>
    );
};

export default Highlights;
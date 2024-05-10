import { useEffect, useState } from 'react';
import faqImg from '../../../assets/faq.png';
const Faqs = () => {
    const [faqs, setFaqs]=useState([]);
    useEffect(()=>{
        fetch('/faqs.json')
        .then(res=>res.json())
        .then(data=>setFaqs(data))
    }, [])
    return (
        <div className='my-20'>
           <div className='flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-2/3 flex flex-col justify-center'>
                <h2 className="text-3xl font-semibold mb-2">Eventful Soirees FAQ</h2>
                <p className='opacity-85'>Get quick answers to common questions about Eventful Soirees. Learn how to create an account, book services, manage your listings, and much more. Our FAQ section is designed to provide you with all the information you need to make the most of your experience on is here to help.</p>
            </div>
            <div className='w-full md:w-1/3 h-full'>
                <img className='h-full' src={faqImg} alt="" />
            </div>
           </div>

            <div className=' grid md:grid-cols-2 gap-4'>  
                {
                    faqs?.map((faq, idx)=>
                    
                    <div key={idx} className="collapse collapse-arrow bg-green-100 bg-opacity-70">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        {faq.question}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.answer}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};


export default Faqs;
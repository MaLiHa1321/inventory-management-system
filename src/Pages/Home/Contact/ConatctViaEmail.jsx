import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ConatctViaEmail = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qx88w9k', 'template_1jjfncu', form.current, 'xSSZRgEE9FfNesAYo')
        .then((result) => {
            console.log(result.text);
            toast.success('Successfully sent message!')
        }, (error) => {
            console.log(error.text);
        });
    };

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
    return (
        <div name="contact" className="bg-gray-200">
         <Toaster
  position="top-center"
  reverseOrder={false}/>

            <div className="w-10/12 mx-auto mt-12">
                <div className="flex flex-col md:flex-row justify-center items-center">
    
                <div className="flex-1" data-aos="zoom-out-down">
                    <h2 className="text-2xl md:text-5xl font-bold text-emerald-500 text-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mb-3">Lets Connect</h2>
                    <p>Please fill out the form on this section to contact with me.</p>
                </div>
                <div className='flex-1'>

                <div className="hero min-h-screen flex items-center justify-center">
  <div className="hero-content flex-col">
    <div className="card w-full bg-gray-100 p-4">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label>Name</label>
        <input type="text" name="from_name" className="mb-4 p-3 w-full rounded" />
        <label>Email</label>
        <input type="email" name="from_email" className="mb-4 p-3 rounded" />
        <label>Message</label>
        <textarea name="message" className="mb-4 p-5 w-full rounded"></textarea>
        <input type="submit" value="Send" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4 rounded" />
      </form>
    </div>
  </div>
</div>
                </div>
              

                </div>
                </div>
                
        </div>
    );
};

export default ConatctViaEmail;






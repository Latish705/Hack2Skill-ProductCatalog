import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className='overflow-visible'>
            <section className='relative text-white min-h-screen flex items-center bgImage'>
                <div className='absolute -z-10 max-h-screen overflow-hidden -ml-10' >
                    <img src='/images/background.png' alt='background image' className=' overflow-hidden'/>
                </div>
                <header className='w-fit ml-56 leading-[70px]'>
                    <h1 className='popB text-[64px]'>
                        Commerce for <br/> everyone
                    </h1>
                    <p className='popS text-[28px] leading-[40px] mt-6'>
                        A one stop solution for buyers <br/> and merchants
                    </p>
                    <div className='popS text-xl mt-6'>
                        <Button>Explore</Button>
                    </div>
                </header>
            </section>

            <section className='my-44'>
                <div className='flex items-center justify-center gap-24'>
                    <div className='max-w-[510px] max-h-[580px]'>
                        <img src='/images/illustration.jpg' alt='analysis illustration on page' />
                    </div>
                    <div className=' max-w-[384px] text-textBlue'>
                        <h2 className='popB text-[44px]'>Our Process</h2>
                        <p className='popS text-22 leading-[33px]'>we have a thorough checking process for catalogue with use of latest technologies that helps us identify legitamacy of the products. This fosters trust and healthy relation between sellers and buyers</p>
                    </div>
                </div>

                <div className='flex items-center flex-col gap-6 mt-36'>
                    <h2 className='popS text-[69px]' >Explore As</h2>
                    <div className='flex gap-8 text-2xl'>
                        <Button>Buyer</Button>
                        <Button>Seller</Button>
                    </div>
                </div>
            </section>

            <section className='bg-footerBlue text-white p-8'>
                <div className=' flex justify-between'>
                    <div className='popB text-4xl'>
                        Company Name
                    </div>

                    <div>
                        <h3 className='popB text-2xl mb-3'>Connect</h3>
                        <div className='flex flex-col popS text-lg gap-1'>
                            <span className='hoverEffect relative  cursor-pointer max-w-fit'>Twitter</span>
                            <span className='hoverEffect relative  cursor-pointer max-w-fit'>Linkedin</span>
                            <span className='hoverEffect relative  cursor-pointer max-w-fit'>Facebook</span>
                            <span className='hoverEffect relative  cursor-pointer max-w-fit'>Instagram</span>
                        </div>
                    </div>

                    <div>
                        <h3 className='popB text-2xl mb-3'>About</h3>
                        <span className='hoverEffect relative cursor-pointer popS text-lg'>Know more</span>
                    </div>

                    <div>
                        <h3 className='popB text-2xl mb-3'>Contact</h3>
                        <div className='flex flex-col gap-1 popS text-lg'>
                            <span className='hoverEffect relative cursor-pointer max-w-fit'>mail@example.com</span>
                            <span className='hoverEffect relative cursor-pointer max-w-fit'>442-4576-XXX</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p>©Copyright. All rights reserved</p>
                </div>
            </section>

        </div>
    )
}
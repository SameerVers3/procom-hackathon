import React from 'react';
import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <>
            <div className='m-8'>
                <div className='flex gap-32'>
                    <div className='flex'>
                        <div>
                            <img className='' src={logo} />
                        </div>
                        <div className='pt-2'>
                            <span className='text-xl font-sans'><b>PayHabib</b></span>
                        </div>
                    </div>

                    <div>
                        <div className='flex-col'>
                            <div className='text-center text-xl font-sans pt-2'><b>Product</b></div>
                            <br />
                            <div className='mb-2 text-slate-500'>
                                <p>Services</p>
                            </div>

                            <div className='mb-2 text-slate-500'>
                                <p>Solutions</p>
                            </div>

                            <div className='mb-2 text-slate-500'>
                                <p>Pricing</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex-col'>
                            <div className='text-center text-xl font-sans pt-2'><b>Resources</b></div>
                            <br />
                            <div className='mb-2 text-slate-500'>
                                <p>Blog</p>
                            </div>

                            <div className='mb-2 text-slate-500'>
                                <p>User Guides</p>
                            </div>

                            <div className='mb-2 text-slate-500'>
                                <p>Webinars</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex-col'>
                            <div className='text-center text-xl font-sans pt-2'><b>Company</b></div>
                            <br />
                            <div className='mb-2 text-slate-500'>
                                <p>About</p>
                            </div>

                            <div className='mb-2 text-slate-500'>
                                <p>Join Us</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex-col w-96'>
                            <div className='text-center text-xl font-sans pt-2 text-purple-600'><b>Subscribe to our newsletter</b></div>
                            <div className='mb-2'>
                                <p className='text-sm text-center text-slate-500 mt-1 ml-10'>For product announcement and exclusive insights</p>
                            </div>

                            <div className='mb-2 text-slate-500 ml-20 mt-5'>
                                <input type="email" placeholder='Input your email' className='bg-slate-50 text-center p-1 rounded-s-lg'/>
                                <button className='bg-purple-600 p-1 px-3 rounded-e-lg'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 justify-center items-center text-center flex gap-4'>
                    <span className='text-center text-sm text-slate-500'>@ 2022 Brand, Inc</span>
                    <span className='text-center text-sm text-slate-500'>&#8226; Privacy</span>
                    <span className='text-center text-sm text-slate-500'>&#8226; Terms</span>
                    <span className='text-center text-sm text-slate-500'>&#8226; Sitemap</span>
                </div>
            </div>
        </>
    );
}

export default Footer;
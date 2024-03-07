import React from 'react';
import home from "../../assets/home.png";
import monitor from "../../assets/monitor.png";
import manage from "../../assets/manage.png";
import { CiCircleCheck } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
const Home = () => {
    return (
        <>
            <div className="relative bg-[url('././assets/home.png')] bg-cover h-screen flex justify-center items-center">
                <button className="ease-in duration-150 absolute text-purple-500 bg-white border-2 hover:border-purple-500 hover:bg-purple-500 hover:text-white font-bold py-4 px-9 rounded focus:outline-none focus:shadow-outline" style={{ top: '66.3%', left: '15.2%', transform: 'translate(-50%, -50%)' }}>
                    Open Account
                </button>
            </div>

            <div className='flex gap-24'>
                <div className='w-5/12 mt-24 ml-28'>
                    <img src={monitor}/>
                </div>

                <div className='mt-56'>
                    <span className='text-md text-slate-400'>YOU CAN</span>
                    <br />
                    <br />
                    <div className='flex gap-2'>
                    <h1 className='text-5xl text-pink-500 font-sans'><b>Monitor</b></h1>
                    <h1 className='text-5xl'><b>Payments</b></h1>
                    </div>
                    <br />
                    <br />
                    <p className='text-md text-slate-400'>View real-time updates on successful payments,
                    <br />
                    refunds, and other transaction-related activities.
                    </p>
                    <br />
                    <br />
                    <a href="#" className='text-pink-500 text-lg'>Learn More</a>
                </div>
            </div>

            <div className='flex gap-56'>
            <div className='mt-56 ml-24'>
                    <span className='text-md text-slate-400'>YOU CAN</span>
                    <br />
                    <br />
                    <div className='flex gap-2'>
                    <h1 className='text-5xl text-purple-500 font-sans'><b>Monitor</b></h1>
                    <h1 className='text-5xl'><b>Payments</b></h1>
                    </div>
                    <br />
                    <br />
                    <p className='text-md text-slate-400'>View real-time updates on successful payments,
                    <br />
                    refunds, and other transaction-related activities.
                    </p>
                    <br />
                    <br />
                    <a href="#" className='text-purple-500 text-lg'>Learn More</a>
                </div>
                <div className='w-5/12 mt-28'>
                    <img src={manage}/>
                </div>

            </div>

            <div className='mt-28'>
                <h1 className='text-5xl text-center font-sans'><b>Pricing</b></h1>
            </div>

            <div className='mt-20 mb-10 flex gap-16'>

                <div className='p-10 border-2 border-white rounded-lg ease-in duration-150 w-80 flex-col bg-slate-50 ml-32 hover:border-purple-600'>
                    <h1 className='text-3xl font-sans text-center'><b>Personal</b></h1>
                    <br />
                    <p className='text-center'>Perfect for side and hobby</p>
                    <br />
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='font-sans text-4xl text-center'><b>4%</b></h1>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Service fee
                                <br />
                                /payment
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Process Unlimited Payments</p>
                    <br />
                    </div>
                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Activate Three Business Services</p>
                    <br />
                    </div>
                    <div className='flex w-64'>
                    <MdCancel className='mt-1'></MdCancel><p className='text-center text-sm ml-2'>Analyze and Predict Financial Trends</p>
                    <br />
                    </div>

                    <div className='mt-5 ml-4'>
                        <button className='py-2 w-52 rounded-lg ease-in duration-150 text-center text-purple-600 hover:bg-purple-600 hover:text-white'>Get Started</button>
                    </div>
                </div>

                <div className='p-10 border-2 border-white rounded-lg ease-in duration-150 w-80 flex-col bg-slate-50 ml-32 hover:border-purple-600'>
                    <h1 className='text-3xl font-sans text-center'><b>Start Up</b></h1>
                    <br />
                    <p className='text-center'>Perfect for small teams</p>
                    <br />
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='font-sans text-4xl text-center'><b>5%</b></h1>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Service fee
                                <br />
                                /payment
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Process Unlimited Payments</p>
                    <br />
                    </div>
                    <div className='flex 2-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Activate Three Business Services</p>
                    <br />
                    </div>
                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Analyze and Predict Financial Trends</p>
                    <br />
                    </div>

                    <div className='mt-5 ml-4'>
                        <button className='py-2 w-52 rounded-lg ease-in duration-150 text-center text-purple-600 hover:bg-purple-600 hover:text-white'>Get Started</button>
                    </div>
                </div>

                <div className='p-10 border-2 border-white rounded-lg ease-in duration-150 w-80 flex-col bg-slate-50 ml-32 hover:border-purple-600'>
                    <h1 className='text-3xl font-sans text-center'><b>Organization</b></h1>
                    <br />
                    <p className='text-center'>Perfect for small teams</p>
                    <br />
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='font-sans text-4xl text-center'><b>$150</b></h1>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500 mt-3 ml-1">/Month
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Process Unlimited Payments</p>
                    <br />
                    </div>
                    <div className='flex 2-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Activate Three Business Services</p>
                    <br />
                    </div>
                    <div className='flex w-64'>
                    <CiCircleCheck className='mt-1 text-purple-600'></CiCircleCheck><p className='text-center text-sm ml-2'>Analyze and Predict Financial Trends</p>
                    <br />
                    </div>

                    <div className='mt-5 ml-4'>
                        <button className='py-2 w-52 rounded-lg ease-in duration-150 text-center text-purple-600 hover:bg-purple-600 hover:text-white'>Contact Sale</button>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default Home;

import React from 'react';
import Image from 'next/image';
import Badge from './Badges';
import Button from '../UI/Button';

const CoolStuff = () => {
    return (
        <section className='bg-gradient-to-b from-white sm:via-0% via-50% via-[#FBE8FF] to-[#FBE8FF] sm:p-20 px-5'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='text-center md:text-left'>
                    <h2 className='text-4xl font-bold mb-4'>
                        Wanna Build <span className='text-fuchsia-800'>
                            Cool Stuff</span> With Us?
                    </h2>
                    <p className='text-sm text-gray-700 max-w-md'>
                        Be part of something big—innovate, grow, and shape the future with us. Join a team that values creativity, collaboration, and cutting-edge technology to drive meaningful change.
                    </p>
                    <Button
                        text="Join Us"
                        className="hidden sm:inline-block mt-4 px-6 py-2 border border-[#6F1877] text-[#6F1877] rounded-full hover:bg-[#6F1877] hover:text-white transition"
                    />
                </div>

                <div className='relative flex justify-center sm:px-0 px-5'>
                    <Image
                        alt=''
                        src={'/assets/image.png'}
                        width={300}
                        height={500}
                        className='rounded-lg sm:w-[300px] w-[250px]'
                    />

                    <Badge text="100+" subText={`Projects\nDelivered`} position="top-[5%] right-[5%]" width='w-[150]' />
                    <Badge text="" subText="Shape Your Tomorrow" position="left-[20%] top-[10%] translate-x-[-50%]" width="w-28" />
                    <Badge text="" subText="24/7 Learning" position="left-[-5%] bottom-[30%]" bgColor="bg-[#D444F1]" textColor="text-white" width="w-24" />
                    <Badge text="" subText="Break Boundaries" position="left-[10%] bottom-[15%]" width="w-24" />
                    <Badge text="50+" subText={`Experts\nDriving Change`} position="bottom-[5%] right-[0%]" bgColor="bg-[#D444F1]" textColor="text-white" width="w-40 p-4" />
                </div>

            </div>

            <Button
                text="Join Us"
                className="sm:hidden mt-4 px-6 py-1 border border-[#6F1877] text-[#6F1877] rounded-full hover:bg-[#6F1877] hover:text-white transition justify-center items-center mx-auto block"
            />

        </section>
    );
};

export default CoolStuff;
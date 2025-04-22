import { Button } from '@/components/ui/button'
import React from 'react'
const Home = () => {
    return (
        <div>
            <div className='h-[94vh] flex items-center justify-center'>
                <div className='mx-auto w-4/5'>
                    <h1 className='text-5xl md:text-7xl font-bold text-center mt-10'>Welcome to <span className='px-7 inline-block bg-blue-400 text-3xl md:text-6xl rounded-2xl'>InfoLand</span></h1>
                    <p className='text-center mt-5'>Your one-stop destination for all your information needs.</p>
                    <Button className='bg-black text-white px-4 py-2 rounded mt-5 block mx-auto cursor-pointer'>Get Started</Button>
                    <div className='mt-10'>
                        <div className='w-full h-[1rem] bg-[var(--blue)] opacity-[.1] rounded-2xl'></div>
                        <div className='w-4/5 h-[1rem] bg-[var(--blue)] opacity-[.2] mx-auto rounded-2xl'></div>
                        <div className='w-3/5 h-[1rem] bg-[var(--blue)] opacity-[.3] mx-auto rounded-2xl'></div>
                        <div className='w-2/5 h-[1rem] bg-[var(--blue)] opacity-[.4] mx-auto rounded-2xl'></div>
                        <div className='w-1/5 h-[1rem] bg-[var(--blue)] opacity-[.5] mx-auto rounded-2xl'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
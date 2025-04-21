import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='mx-auto w-4/5'>
                <h1 className='text-3xl font-bold text-center mt-10'>Welcome to InfoLand</h1>
                <p className='text-center mt-5'>Your one-stop destination for all your information needs.</p>
                <Button className='bg-black text-white px-4 py-2 rounded mt-5 block mx-auto cursor-pointer'>Get Started</Button>
            </div>
        </div>
    )
}

export default Home
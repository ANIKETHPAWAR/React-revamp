import React from 'react'
import { LogIn } from 'lucide-react';
const RightCard = () => {
  return (
    <div className='h-full w-80 relative overflow-hidden bg-black rounded-3xl shrink-0'><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000" alt="" />
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ' ><h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold'>1</h2>
    <div>
        <p className='font-bold text-blue-950 text-2xl mb-10 '>Join us to bring your ideas to life </p> <div className='flex justify-between'>
            <button className='bg-black text-white px-4 py-2 rounded-2xl'>Satisfied</button>
            <button className='bg-black text-white px-4 py-2 rounded-2xl'><LogIn /></button>
        </div>
    </div>
    </div></div>
  )
}

export default RightCard
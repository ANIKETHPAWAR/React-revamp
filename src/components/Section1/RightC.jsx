import React from 'react'
import RightCard from './RightCard'
const RightC = () => {
  return (
    <div id='right'className='h-full w-2/3  p-6 flex-nowrap flex gap-8 overflow-x-auto rounded-3xl '>
        <RightCard />
    <RightCard />
    <RightCard />
    <RightCard />
    </div>
  )
}

export default RightC
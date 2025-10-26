import React from 'react'
import LeftC from './LeftC'
import RightC from './RightC'

const Page1Content = (props) => {
  return (
    <div className='py-3 h-[90vh] items-center flex justify-between px-18 gap-4'>
<LeftC/>
<RightC users={props.users}/>

    </div>
  )
}

export default Page1Content
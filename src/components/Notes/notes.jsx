import React from 'react'
import { useState } from 'react'
import { Trash2 } from 'lucide-react';

const Notes = () => {
    const submitHandler=(e)=>{
        e.preventDefault()
        let copyTask=[...task];
        copyTask.push({
            text1,text2
        })
        settask(copyTask)
        console.log('form submitted')
         settext1('')
            settext2('')
    }
    const [text1, settext1] = useState('')
        const [text2, settext2] = useState('')
    const [task, settask] = useState([])
const deleteNote=(idx)=>{
const copyTask=[...task]
copyTask.splice(idx,1)
settask(copyTask)

}
localStorage.setItem('user','aniketh')
localStorage.clear()

  return (
    <div className='h-screen lg:flex'>

        <form action="" className='flex flex-col gap-2 m-4 items-start lg:w-1/2' onSubmit={(e)=>{
            submitHandler(e)

           
        }}>
            <input type="text" placeholder='enter task'className='bg-black text-white border-5 border-blue-300 px-5 py-2 rounded-sm w-full' value={text1} onChange={(e)=>{
                settext1(e.target.value)
            }}/>
            <input name="" id="" placeholder='Enter details' className='bg-black text-white border-blue-300 border-5 px-5 py-2 w-full' value={text2} onChange={(e)=>{
                settext2(e.target.value)
            }}></input>
<button className='bg-black text-white border-blue-300 border-5 px-5 py-2'>Add Note</button>
        </form>
        <div className='  p-10 lg:w-1/2'>
            <h1 className=''>Your notes</h1>
            <div className=''>
<div className='flex items-start justify-start flex-wrap gap-5 overflow-auto h-full'>
   {task.map(function(val,idx){
    return <div key={idx} className='h-38 w-38 p-4  bg-black text-white relative'>
        <h2 onClick={()=>{deleteNote(idx)}} className='absolute top-2 right-2 p-1 active:scale-95 '>< Trash2 />
</h2>
        <h2 className='leading-tight text-xl font-bold'>{val.text1}</h2>
    <p>{val.text2}</p>
    </div>
   })}
</div>
            </div>
        </div>
    </div>
  )
}

export default Notes
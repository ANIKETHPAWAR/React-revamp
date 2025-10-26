import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Gallery = () => {
    const [data, setdata] = useState([])
    const [index, setindex] = useState(1)


  async  function getData(){
   const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
setdata(res.data)
console.log(res.data)
    }

    useEffect(()=>{
        getData()
    },[index])
    let printData=<h2 className='-translate-x-1/2 translate-y-1/2 absolute top-1/2 left-1/2'>Loading...</h2>
    if(data.length>0){
        printData =data.map((elem,idx)=>{
return <div key={idx}>
    <div className='h-40 w-44 rounded-2xl overflow-hidden'>
    <img  className='object-cover w-full  h-full ' src={elem.download_url} alt="" />
    </div>
    <h2>{elem.author}</h2>
</div>
        })
    }
  return (
    <div className='bg-black h-screen text-white overflow-auto'>

<div className='flex flex-wrap gap-4'>
    {printData}
</div>
<div className='flex justify-center items-center p-4 gap-5 '>
    <button className='bg-amber-600 text-amber-50 px-4 py-2 rounded font-semibold' onClick={()=>{
        if(index>0){
            setindex(index-1)
            setdata([])
        }

    }}>prev</button>
 <h4>Page {index}</h4>

        <button className='bg-amber-600 text-amber-50 px-4 py-2 rounded font-semibold' onClick={()=>{
setindex(index+1)
setdata([])

        }}>next</button>

</div>
    </div>
  )
}

export default Gallery
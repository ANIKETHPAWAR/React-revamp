import React from 'react'

const Function1 = () => {
    function btnc(){
        console.log('button clicked')
    }
  return (
    <div>

        <button onClick={btnc}>click</button>
    </div>
  )
}

export default Function1
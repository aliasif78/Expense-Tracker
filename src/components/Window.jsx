import React from 'react'

const Window = () => {
  return (
    <div>
      <div className='window flex items-center gap-3 h-9 rounded-t-3xl'>
          <div class="btn h-3 w-3 hover:bg-black cursor-pointer bg-white transition-all duration-300 rounded-full ml-5"></div>
          <div class="btn h-3 w-3 hover:bg-black cursor-pointer bg-white transition-all duration-300 rounded-full"></div>
          <div class="btn h-3 w-3 hover:bg-black cursor-pointer bg-white transition-all duration-300 rounded-full"></div>
        </div>
    </div>
  )
}

export default Window

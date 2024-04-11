import React from 'react'
import { MdEdit } from "react-icons/md";
import "./loans.css"
import { useCallback } from 'react';
const Loans = () => {
  return (
    <div className="loans shadow-2xl flex flex-col h-full w-full rounded-xl bg-white">
      <div className="heading flex flex-row justify-between">
        <div className='h-1/4 text-md font-semibold text-neutral-600 pl-3 pt-2'>Loans</div>

        <div className='flex flex-row'>
          <div className="editDiv size-5 mt-2.5 mr-2 flex items-center justify-center bg-black rounded-full cursor-pointer">
            <MdEdit className='invert size-3' />
          </div>

          <div className="plus bg-black text-white text-center rounded-full size-5 text-sm mt-2.5 mr-2 cursor-pointer">+</div>
        </div>
      </div>

      <div className="myLoans mx-4 mt-3 pb-3 flex flex-row overflow-x-auto overflow-y-hidden gap-3">
        <div className="loan flex flex-col items-center flex-shrink-0 gap-1 cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQ2ZXG4vLJaVzJhVgW1g4vRu0-TL9flvY6fUZkpHv1A&s" alt="img" className='size-10 rounded-full' />
          <span className='text-red-600 text-xs -ml-2'>- $23</span>
        </div>

        <div className="loan flex flex-col items-center flex-shrink-0 gap-1 cursor-pointer">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee219434-7993-43a9-98d6-238ee165ae53/dg1rsqf-a30bfd1b-be48-443e-9eac-03832c92dbae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlMjE5NDM0LTc5OTMtNDNhOS05OGQ2LTIzOGVlMTY1YWU1M1wvZGcxcnNxZi1hMzBiZmQxYi1iZTQ4LTQ0M2UtOWVhYy0wMzgzMmM5MmRiYWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YdvIGYCk0pZVzjOrSE4P6jZrPAJoGK5LamHK8xpAIEE" alt="img" className='size-10 rounded-full' />
          <span className='text-green-700 text-xs -ml-2'>+ $74</span>
        </div>

        <div className="loan flex flex-col items-center flex-shrink-0 gap-1 cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_JAWNJtwhIZCM2FEOjaR5hpIXvsNjPiQsQSJyRsx4g&s" alt="img" className='size-10 rounded-full' />
          <span className='text-red-600 text-xs -ml-2'>- $5</span>
        </div>

        <div className="loan flex flex-col items-center flex-shrink-0 gap-1 cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKLo41Nxf5WzYvOMQiqFEgf41SLt40IzQPefHwScCyw&s" alt="img" className='size-10 rounded-full' />
          <span className='text-red-600 text-xs -ml-2'>- $16</span>
        </div>

        <div className="loan flex flex-col items-center flex-shrink-0 gap-1 cursor-pointer">
          <img src="https://storage.googleapis.com/pai-images/837b854e24604c239f6ec90e6bb1ea16.jpeg" alt="img" className='size-10 rounded-full' />
          <span className='text-green-700 text-xs -ml-2'>+ $100</span>
        </div>
      </div>

    </div>
  )
}

export default Loans

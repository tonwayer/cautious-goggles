import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'
import { increment, decrement, incrementByAmount } from './counterSlice'
export default () => {

  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <span>{count}</span>
        <button 
          type="submit"
          className="
            inline-flex
            justify-center
            py-2
            px-4
            border
            border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
          onClick={() => dispatch(increment())}
        >
          Increment
          </button>
      </div>
    </div>
  )
}

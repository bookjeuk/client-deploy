"use client"
import OutlineButton from '@/components/source/Button/OutlineButton'
import FillButton from '@/components/source/Button/FillButton'
import React from 'react'
import BasicButton from '@/components/source/Button/BasicButton'

const Test = () => {
  return (
    <main>
      <div>
        <h2 className='text-xl'>Button</h2>
        <OutlineButton
          title="OutlineButton"
          onClick={() => console.log("Hello, World")}
        /> 
        <FillButton
          title="FillButton"
          onClick={() => console.log("Hello, World")}
        /> 
        <BasicButton
          title='BasicButton'
          onClick={() => console.log("Hello, World")}
        />
      </div>
    </main>
  )
}

export default Test
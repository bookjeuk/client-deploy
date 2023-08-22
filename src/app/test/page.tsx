"use client"
import OutlineButton from '@/components/source/Button/OutlineButton'
import FillButton from '@/components/source/Button/FillButton'
import React from 'react'
import BasicButton from '@/components/source/Button/BasicButton'
import ReviewCard from '@/components/common/ReviewCard/ReviewCard'
import OutlineInput from '@/components/source/Input/OutlineInput'
import BasicInput from '@/components/source/Input/BasicInput'
import UnderlineInput from '@/components/source/Input/UnderlineInput'

const Test = () => {
  const tags = [
    {
      tag_idx: "201787",
      tag_name: "Rust",
      tag_type: 3,
      tag_count: 55
    }
  ]
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
      <div>
        <h2 className='text-xl'>Review</h2>
        <ReviewCard
          title='title'
          like={4}
          body='Hello, World'
          username='재훈'
          date='2023.08.22'
          tags={tags}
        />
      </div>
      <div>
        <h2 className='text-xl'>Input</h2>
        <div className='w-96'>
          <OutlineInput
            type='text'
            placeholder='Hello, World'
            submitInput={() => console.log("submitInput")}
            updateInput={() => console.log("updateInput")}
          />
          <BasicInput
            type='text'
            placeholder='Hello, World'
            submitInput={() => console.log("submitInput")}
            updateInput={() => console.log("updateInput")}
          />
          <UnderlineInput
            type='text'
            placeholder='Hello, World'
            submitInput={() => console.log("submitInput")}
            updateInput={() => console.log("updateInput")}
          />
        </div>
      </div>
    </main>
  )
}

export default Test
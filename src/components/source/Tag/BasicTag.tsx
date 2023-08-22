import React from 'react'
import { Tag } from '@/types/Tag'

const styles = {
  tagContainer: `w-20 h-10 mx-4 bg-[#fff] flex justify-center items-center rounded-md border border-light-primary text-light-primary
  hover:bg-light-primary hover:text-[#fff] hover:cursor-pointer duration-100`
}

const BasicTag = ({ title, onClick }: Tag) => {
  return (
    <div className={styles.tagContainer}>
      {title}
    </div>
  )
}

export default BasicTag
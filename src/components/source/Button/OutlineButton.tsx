import React from 'react'
import { Button } from '@/types/Button'

const OutlineButton = ({ title, onClick }: Button) => {
  const styles = {
    buttonContainer: `
    w-full max-w-xs h-full min-h-[30px] border border-light-primary text-sm font-semibold text-light-primary rounded-lg 
    hover:cursor-pointer hover:bg-light-primary hover:text-[#fff] duration-200`,
  }
  return (
    <button 
      className={styles.buttonContainer}
      onClick={onClick}>
        {title}
    </button>
  )
}

export default OutlineButton
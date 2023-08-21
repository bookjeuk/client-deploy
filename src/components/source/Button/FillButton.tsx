import React from 'react'
import { Button } from '@/types/Button'

const FillButton = ({ title, onClick }: Button) => {
  const styles = {
    buttonContainer: `
    w-full max-w-xs h-full min-h-[30px] border border-transparent bg-light-primary text-sm font-semibold text-[#fff] rounded-lg 
    hover:cursor-pointer hover:bg-[#fff] hover:text-light-primary hover:border-light-primary duration-200`,
  }
  return (
    <button 
      className={styles.buttonContainer}
      onClick={onClick}>
        {title}
    </button>  )
}

export default FillButton
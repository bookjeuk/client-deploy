import { Button } from '@/types/Button'
import React from 'react'

const BasicButton = ({ title, onClick }: Button) => {
  const styles = {
    buttonContainer: `
    w-full max-w-xs h-full min-h-[30px] text-sm font-semibold text-light-primary
    hover:cursor-pointer hover:drop-shadow-lg duration-200`,
  }
  return (
    <button 
      className={styles.buttonContainer}
      onClick={onClick}>
        {title}
    </button>
  )
}

export default BasicButton
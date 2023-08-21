"use client"
import Logo from '@/components/common/Logo/Logo'
import BasicButton from '@/components/source/Button/BasicButton'
import OutlineButton from '@/components/source/Button/OutlineButton'
import { Login } from '@/lib/auth/Login'
import { Logout } from '@/lib/auth/Logout'
import { postReview } from '@/lib/review/postReview'
import React from 'react'

const Header = () => {
  const styles = {
    headerContainer: "w-4/5 h-24 my-4 mx-auto flex justify-between items-start",
    buttonContainer: "h-full flex justify-end items-start",
    button: "w-24 h-6 mx-2"
  }
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <OutlineButton 
            title='책 등록'
            onClick={postReview}
          />
        </div>
        <div className={styles.button}>
          <BasicButton
            title='로그인'
            onClick={Login}
          />
        </div>
        <div className={styles.button}>
          <BasicButton
            title='로그아웃'
            onClick={Logout}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
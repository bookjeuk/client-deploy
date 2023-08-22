"use client"
import Logo from '@/components/common/Logo/Logo'
import BasicButton from '@/components/source/Button/BasicButton'
import OutlineButton from '@/components/source/Button/OutlineButton'
import { Login } from '@/lib/auth/Login'
import { Logout } from '@/lib/auth/Logout'
import { postReview } from '@/lib/review/postReview'
import { checkRoutePath } from '@/utils/routeUtils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const styles = {
  headerContainer: "w-4/5 h-218 my-4 mx-auto flex justify-between items-start",
  buttonContainer: "h-full flex justify-end items-start",
  button: "w-24 h-6 mx-2"
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.headerContainer}>
      <Logo />
      {checkRoutePath(pathname) && 
      <div className={styles.buttonContainer}>        
        <div className={styles.button}>
          <OutlineButton 
            title='책 등록'
            onClick={postReview}
          />
        </div>
        <Link
          href={'/login'}
          className={styles.button}>
          <BasicButton
            title='로그인'
            onClick={() => {}}
          />
        </Link>
        <Link
          href={'/signup'}
          className={styles.button}>
          <BasicButton
            title='로그아웃'
            onClick={() => {}}
          />
        </Link>
      </div>
      }
    </header>
  )
}

export default Header
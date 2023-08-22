"use client"
import OutlineButton from '@/components/source/Button/OutlineButton'
import OutlineInput from '@/components/source/Input/OutlineInput'
import Link from 'next/link'
import React, { useState } from 'react'

const styles = {
  page: "w-1/3 h-screen mx-auto",
  inner: "min-w-[500px] h-96 mt-32 mx-auto flex flex-col bg-[#DAF3FB] border border-light-primary rounded-lg",
  loginTitle: "text-xl font-semibold my-8 ml-8",
  inputContainer: "w-2/3 mx-auto my-4",
  buttonContainer: "w-[200px] mt-12 mx-auto",
  lostMessage: 'text-sm text-[#222] mt-4 mx-auto'
}

const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const handleUserId = (text: string) => {
    setUserId(text);
  }
  const handleUserPw = (text: string) => {
    setUserPw(text)
  }
  return (
    <main className={styles.page}>
      <section className={styles.inner}>
        <h2 className={styles.loginTitle}>로그인</h2>
        <div className={styles.inputContainer}>
          <OutlineInput
            type='text'
            placeholder='아이디를 입력해주세요'
            submitInput={() => {}}
            updateInput={handleUserId}
          />
        </div>
        <div className={styles.inputContainer}>
          <OutlineInput
            type='password'
            placeholder='비밀번호를 입력해주세요'
            submitInput={() => {}}
            updateInput={handleUserPw}
          />
        </div>
        <div className={styles.buttonContainer}>
          <OutlineButton
            title='로그인'
            onClick={() => {}}
          />
        </div>
        <Link
          href={'/signup'}
          className={styles.lostMessage}>
          비밀번호를 잊어버리셨나요?
        </Link>
      </section>
    </main>
  )
}

export default Login
import React from 'react'
import Book from '@/components/common/Book/Book'
import BasicTag from '@/components/source/Tag/BasicTag'

const styles = {
  bookContainer: "w-4/5 h-auto mx-auto",
  messageContainer: "w-full my-8 flex justify-start items-center",
  message: "text-xl font-bold",
  tagList: "w-4/5 h-auto my-16 mx-auto flex flex-wrap justify-center items-center",
  bookList: "grid grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-cols-1 auto-cols-auto"
}

const BookContainer = () => {
  return (
    <section className={styles.bookContainer}>
      <div className={styles.messageContainer}>
        <span className={styles.message}>
          Resister-boy님을 위한 추천도서
        </span>
      </div>
      <div className={styles.tagList}>
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
        <BasicTag
          title='Rust'
        />
      </div>
      <div className={styles.bookList}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </section>
  )
}

export default BookContainer
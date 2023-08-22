import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const styles = {
  book: "mx-5 mb-5"
}

const Book = () => {
  return (
    <div className={styles.book}>
      <Link href={`/book/${1}`}>
        <Image
          src={'/sample/sampleBook.jpg'}
          alt='Book'
          width={180}
          height={300}
        />
      </Link>
    </div>    
  )
}

export default Book
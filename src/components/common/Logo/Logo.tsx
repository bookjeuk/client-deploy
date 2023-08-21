import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'/assets/Logo.svg'}
        alt='Home'
        width={120}
        height={90}
        priority={true}
      />
    </Link>
  )
}

export default Logo
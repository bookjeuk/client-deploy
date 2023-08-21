import React from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout
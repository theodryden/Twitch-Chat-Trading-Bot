import React from 'react'
import Navbar from '../components/Navbar'
import StockTable from '../components/StockTable'
import TradingGuide from '../components/TradingGuide'
import Footer from '../components/Footer'

const appGuide = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <TradingGuide />
        <StockTable />
      </main>
      <p></p>
      <Footer />
    </div>

  )
}

export default appGuide

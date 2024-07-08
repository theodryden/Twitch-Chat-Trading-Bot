import React from 'react'
import Navbar from '../components/Navbar'
import StockTable from '../components/stocktable'
import TradingGuide from '../components/TradingGuide'

const appGuide = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <TradingGuide />
        <StockTable />
      </main>
    </div>
  )
}

export default appGuide

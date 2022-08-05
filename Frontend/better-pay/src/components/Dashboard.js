import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DashboardBottom from './DashboadBottom'
import DashboardTop from './DashboardTop'
const Dashboard = () => {
  return (
    <div>
       <Header></Header>
        <DashboardTop></DashboardTop>
        <DashboardBottom>
          
        </DashboardBottom>
        <Footer />
    </div>
  
  )
}

export default Dashboard
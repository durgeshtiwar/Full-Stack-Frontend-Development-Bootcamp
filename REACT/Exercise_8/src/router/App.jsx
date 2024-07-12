import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab,setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
    <div id='App-Container'>
    <Sidebar selectedTab={selectedTab} setSelectedTab = {setSelectedTab} />
    <div id='Container'>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App;

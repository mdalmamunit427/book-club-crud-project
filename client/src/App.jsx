import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { BookProvider } from './context/BookContext'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BookProvider>
      <Navbar/>
      <main className='min-h-[calc(100vh-100px)] mt-16'>
        <Outlet/>
      </main>
      <Footer/>
    </BookProvider>
    </>
  )
}

export default App

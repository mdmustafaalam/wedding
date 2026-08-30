import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { startLenis, stopLenis, scrollToTop } from './utils/lenis'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import BookingModal from './components/BookingModal/BookingModal'
import BackToTop from './components/BackToTop/BackToTop'
import FloatBookBtn from './components/FloatBookBtn/FloatBookBtn'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Gallery from './pages/Gallery/Gallery'
import Testimonials from './pages/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'

import './styles/global.css'

// Smooth scrolling (Lenis) for the whole page
function useSmoothScroll() {
  useEffect(() => {
    startLenis()
    return () => stopLenis()
  }, [])
}

// Scroll to top instantly on every DIFFERENT route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(true)
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading]         = useState(true)
  const [bookingOpen, setBookingOpen]  = useState(false)

  useSmoothScroll()

  const openBooking  = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)



  if (loading) {
    return (
      <ThemeProvider>
        <Loader onDone={() => setLoading(false)} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar onBookNow={openBooking} />

      <Routes>
        <Route path="/"             element={<Home         onBookNow={openBooking} />} />
        <Route path="/about"        element={<About        onBookNow={openBooking} />} />
        <Route path="/services"     element={<Services     onBookNow={openBooking} />} />
        <Route path="/gallery"      element={<Gallery      onBookNow={openBooking} />} />
        <Route path="/testimonials" element={<Testimonials onBookNow={openBooking} />} />
        <Route path="/contact"      element={<Contact      onBookNow={openBooking} />} />
        <Route path="*"             element={<Home         onBookNow={openBooking} />} />
      </Routes>

      <Footer />
      <FloatBookBtn onClick={openBooking} />
      <BackToTop />
      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </ThemeProvider>
  )
}

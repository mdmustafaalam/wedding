import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis = null
let rafId = null

export function startLenis() {
  if (lenis) return lenis

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: true,
    touchMultiplier: 1.4,
    wheelMultiplier: 1,
    autoResize: true,
  })

  const raf = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
  return lenis
}

export function stopLenis() {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

export function getLenis() {
  return lenis
}

export function scrollToTop(immediate = false) {
  if (lenis) {
    lenis.scrollTo(0, { immediate, force: true })
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
  }
}
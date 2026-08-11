import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const { pathname, search } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-5 right-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4F93] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#193F76] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4F93] sm:bottom-7 sm:right-7 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp aria-hidden="true" size={21} strokeWidth={2.5} />
    </button>
  )
}

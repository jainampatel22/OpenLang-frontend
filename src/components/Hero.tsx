'use client'

import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const textRef = useRef<HTMLSpanElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const annotation = annotate(textRef.current, {
        type: 'circle',
        color: 'rgba(0, 0, 0, 0.2)',
        strokeWidth: 3,
        animationDuration: 1500,
      })
      annotation.show()
    }

    if (highlightRef.current) {
      const annotation = annotate(highlightRef.current, {
        type: 'underline',
        color: '#000000',
        strokeWidth: 2,
        animationDuration: 1000,
      })
      annotation.show()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animate-pulse"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-32">
        <div className="text-center">
          {/* Main heading with animated highlight */}
          <h1 className="text-3xl font-bold font-anzo tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block mb-2 sm:mb-3 md:mb-4">Your Gateway to</span>
            <span className="block text-black mb-2 sm:mb-3 relative" ref={textRef}>
              Open Source
            </span>
          </h1>

          {/* Subheading with animated underline */}
          <p className="font-anzo mx-auto mt-4 sm:mt-6 max-w-md text-base sm:text-lg md:text-xl md:mt-8 md:max-w-3xl text-gray-600">
            Discover, contribute, and grow with open source. Find your project in just
            <span ref={highlightRef} className="font-semibold"> one click</span>.
          </p>

          {/* CTA button */}
          <div className="mx-auto mt-6 sm:mt-8 flex justify-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="rounded-full h-10 sm:h-11 text-base sm:text-lg font-anzo hover:text-black hover:bg-white bg-black text-white"
              onClick={() => navigate('/projects')}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

   
          </div>
        </div>
      </div>
   
  )
}


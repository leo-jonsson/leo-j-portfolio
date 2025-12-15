'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

// component from STYLE UI

type CarouselItemType = { url: string; alt?: string }

type ImgSliderProps = {
  carouselItems?: CarouselItemType[]
}

export default function HeroCarousel({ carouselItems }: ImgSliderProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      carousel.classList.add('active')
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }

    const onMouseLeave = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseUp = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    }

    carousel.addEventListener('mousedown', onMouseDown as EventListener)
    carousel.addEventListener('mouseleave', onMouseLeave as EventListener)
    carousel.addEventListener('mouseup', onMouseUp as EventListener)
    carousel.addEventListener('mousemove', onMouseMove as EventListener)

    return () => {
      carousel.removeEventListener('mousedown', onMouseDown as EventListener)
      carousel.removeEventListener('mouseleave', onMouseLeave as EventListener)
      carousel.removeEventListener('mouseup', onMouseUp as EventListener)
      carousel.removeEventListener('mousemove', onMouseMove as EventListener)
    }
  }, [])

  // Ensure carouselItems is always an array
  const items: CarouselItemType[] = Array.isArray(carouselItems) ? carouselItems : []

  const showCarouselButtons = items.length > 1 // Only show buttons if more than 1 item

  return (
    <Carousel className="w-full">
      <CarouselContent ref={carouselRef} className="cursor-grab active:cursor-grabbing mt-5">
        {items.length > 0 ? (
          items.map((item: CarouselItemType, index: number) => (
            <CarouselItem key={index}>
              <Card className={`overflow-hidden border-0 rounded-lg shadow-md`}>
                <CardContent className="p-0 size-full flex flex-col justify-between">
                  <img
                    src={`/assets/me/${item.url}`}
                    alt={item.alt ?? `carousel-${index}`}
                    className="aspect-[3/4]  object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))
        ) : (
          <img src="/placeholder.png" alt="placeholder image" />
        )}
      </CarouselContent>

      {/* Show buttons only if there are more than one image */}
      {showCarouselButtons && (
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </div>
      )}
    </Carousel>
  )
}

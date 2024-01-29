import { register } from 'swiper/element/bundle'
import { useEffect, useRef } from 'preact/hooks'
import { reviewsData } from '@/data/reviews.data'

function SwiperContainer () {
  const swiper = useRef(null)

  useEffect(() => {
    register()

    const swiperParams = {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      breakpoints: {
        500: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      }
    }

    Object.assign(swiper.current, swiperParams)

    swiper.current.initialize()
  },[])

  return (
    <swiper-container
      ref={swiper}
      init="false"
      speed="1000"
      loop="true"
      autoplay="true"
      centered-slides="true"
      centered-slides-bounds="true"
      class="flex aspect-auto w-full cursor-pointer justify-center overflow-x-hidden"
    >
      {
        Object.entries(reviewsData).map(([_, card]) => (
          <swiper-slide class="flex w-[75vw] flex-none flex-col items-center justify-center border-r border-doki-pink p-[1vw_1.5vw] lg:w-[25vw]">
            <p class="w-full text-center font-riffic text-lg font-bold text-doki-light-pink lg:text-xl">
              "
            </p>
            <p class="mb-3 text-center font-riffic text-xl font-bold">
              {card.text}
            </p>
            <card.icon size={card.width} />
          </swiper-slide>
        ))
      }
    </swiper-container>
  )
}

export default SwiperContainer

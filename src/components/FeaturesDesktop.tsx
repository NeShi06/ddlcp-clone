import { useTabs } from '@/hooks/useTabs'
import { featuresData } from '@/data/features.data'
import clsx from 'clsx'

function FeaturesDesktop() {
  const { state, clickHandler } = useTabs<number>({ initialState: 0 })

  return (
    <article className="relative hidden h-full w-full lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center">
      <div>
        {featuresData.map((feat, i) => (
          <article
            className={clsx({ hidden: state !== i }, { flex: state === i })}
          >
            <picture className="relative -right-6 top-7 animate-jump pt-10 animate-duration-[350ms] before:absolute before:left-0 before:top-0 before:z-10 before:h-10 before:w-full before:bg-[linear-gradient(270deg,_#831f8a,_#e61484)]">
              <img
                src={`/banners/Banner_0${i + 1}.webp`}
                className="aspect-video w-full max-w-[768px]"
                alt={feat.alt}
              />
            </picture>

            <article className="absolute bottom-16 right-[1.5%] w-1/5 bg-[#fbedec]">
              <header className="flex items-center border-b-2 border-doki-pink bg-doki-purple px-3 py-2 font-aller text-white">
                <img
                  src={feat.img.white}
                  className="relative left-0 top-0 me-2 h-5 w-5 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {feat.title}
              </header>

              <p className="mx-auto max-w-[25ch] text-pretty px-3 py-6 font-aller text-doki-purple">
                {feat.text}
              </p>
            </article>
          </article>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-20 bg-[#fbeded] pt-1 after:absolute after:top-0 after:z-20 after:h-1 after:w-full after:bg-doki-purple">
        <div className='before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url("/backgrounds/Dot_Pattern_Pink.svg")] before:[background-position:50%] before:[background-size:26px] after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-[linear-gradient(rgba(255,255,255,0)_5%,#fff_50%,#fff)]' />

        <ul className="relative z-20">
          {featuresData.map(({ title, img }, i) => (
            <li key={i}>
              <button
                onClick={() => clickHandler(i)}
                className={clsx(
                  'group flex h-[5vw] w-full items-center whitespace-nowrap bg-transparent px-6 py-4 text-start font-aller text-sm tracking-wide text-doki-purple transition-colors hover:text-white hover:[background:linear-gradient(270deg,_#e61484,_#831f8a)]',
                  {
                    'text-white [background:linear-gradient(270deg,_#e61484,_#831f8a)]':
                      state === i
                  }
                )}
              >
                <div className="me-[1vw] h-[2.2vw] w-[2.6vw]">
                  <img
                    src={img.normal}
                    className={clsx(
                      'relative left-0 top-0 block h-full object-contain group-hover:hidden',
                      { '!hidden': state === i }
                    )}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={img.white}
                    className={clsx(
                      'relative left-0 top-0 hidden h-full object-contain group-hover:block',
                      { '!block': state === i }
                    )}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default FeaturesDesktop

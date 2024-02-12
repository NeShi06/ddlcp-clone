import { useTabs } from '@/hooks/useTabs'
import { charTabs } from '@/data/chartabs.data'
import clsx from 'clsx'

function CharSection() {
  const { state, clickHandler } = useTabs<string>({ initialState: 'sayori' })

  return (
    <section
      id="characters"
      className="relative h-screen w-full overflow-hidden lg:h-screen lg:min-h-screen ipad:h-[50vh]"
      data-background
    >
      {Object.entries(charTabs).map(([key, char]) => (
        <article
          key={key}
          className={clsx(
            `relative h-full w-full ${char.colors.background} -z-30 flex flex-col-reverse [background-attachment:scroll] lg:h-full lg:flex-row`,
            { hidden: char.name.toLowerCase() !== state },
            {
              'flex items-center justify-center':
                char.name.toLowerCase() === state
            }
          )}
        >
          <div
            className={`absolute h-[110vh] w-full ${char.colors.background} absolute -top-[10%] left-0 flex h-[150vh] w-full animate-up bg-[url("/backgrounds/Dot_Pattern_Pink.svg")] transition-transform animate-duration-[1500ms] [background-attachment:scroll] [background-position:50%] [background-size:80px] after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-gradient-to-b md:flex-row ${char.colors.effect} -z-50 block`}
          />

          <div className="relative z-50 flex h-full w-full items-center justify-center lg:w-3/5 lg:justify-end">
            <h2 className="hidden rotate-180 font-riffic text-8xl font-bold tracking-wider text-white [writing-mode:vertical-lr] lg:block ipad:hidden">
              {char.name}
            </h2>

            <picture className="aspect-auto h-full md:w-[500px]">
              <char.images.normal />
            </picture>
          </div>

          <div className="relative z-50 mt-[10%] w-full animate-fade-left px-4 animate-duration-300 lg:top-[unset] lg:mt-0 lg:w-2/5 lg:px-0">
            <h2 className="mb-4 text-center font-riffic text-4xl font-bold text-white md:text-6xl lg:text-start">
              {char.name}
            </h2>
            <p
              className={`mx-auto max-w-[60ch] text-pretty text-center font-aller text-lg font-medium leading-6 lg:mx-[unset] lg:max-w-[35ch] lg:text-start ${char.colors.text}`}
            >
              {char.text}
            </p>
          </div>
        </article>
      ))}

      <ul className="absolute bottom-0 z-20 flex w-full sm:left-1/2 sm:w-max sm:-translate-x-1/2 lg:left-[unset] lg:right-16 lg:w-auto lg:translate-x-[unset]">
        {Object.entries(charTabs).map(([key, char]) => (
          <li
            key={key}
            onClick={() => clickHandler(char.name.toLowerCase())}
            className={clsx(
              'group mx-auto flex min-h-[120px] cursor-pointer justify-center px-3 sm:w-[120px] lg:px-5',
              {
                'bg-gradient-to-t from-white to-transparent':
                  char.name.toLowerCase() === state
              }
            )}
          >
            <button
              className={clsx(
                'h-full w-full translate-y-0 transition-transform group-hover:scale-110',
                { '!-translate-y-5': char.name.toLowerCase() === state }
              )}
            >
              <img
                src={char.images.chibi}
                loading="lazy"
                alt={`${char.name}’s chibi`}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CharSection

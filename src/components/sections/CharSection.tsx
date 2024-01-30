import { useSignal } from '@preact/signals'
import { charTabs } from '@/data/chartabs.data'
import clsx from 'clsx'

type Characters = keyof typeof charTabs

function CharSection() {
  const currentChar = useSignal('sayori')

  const clickHandler = (name: string) => {
    const clickedChar = name.toLowerCase() as Characters

    if (clickedChar in charTabs) {
      if (clickedChar === currentChar.value) return
      return (currentChar.value = clickedChar)
    }
  }

  return (
    <section
      id="characters"
      className="relative h-screen w-full overflow-hidden sm:h-[75vh] lg:h-screen ipad:h-[50vh]"
    >
      {Object.entries(charTabs).map(([key, char]) => (
        <article
          key={key}
          data-background
          className={clsx(
            `relative h-full w-full ${char.colors.background} -z-30 flex flex-col-reverse [background-attachment:scroll] md:flex-row`,
            { hidden: char.name.toLowerCase() !== currentChar.value },
            {
              'flex items-center justify-center':
                char.name.toLowerCase() === currentChar.value
            }
          )}
        >
          <div
            className={`absolute h-full w-full ${char.colors.background} [background-attachment:scroll] absolute left-0 top-0 -z-20 h-[150vh] opacity-30 w-full -translate-y-[var(--top)] animate-bounce bg-[url("/backgrounds/Dot_Pattern_Pink.svg")] transition-transform animate-duration-[1500ms] animate-once [background-position:50%] [background-size:80px] after:absolute after:left-0 after:top-0 after:-z-10 after:block after:h-full after:w-full md:flex-row ${char.colors.effect}`}
          />

          <div className="relative z-50 flex h-full w-full items-center justify-center lg:w-3/5 lg:justify-end">
            <h2 className="hidden rotate-180 font-riffic text-8xl font-bold tracking-wider text-white [writing-mode:vertical-lr] lg:block ipad:hidden">
              {char.name}
            </h2>

            <picture className="aspect-auto h-full md:w-[500px]">
              <char.images.normal />
            </picture>
          </div>

          <div className="relative z-50 mt-[10%] w-full animate-fade-left px-4 animate-duration-300 lg:mt-0 lg:w-2/5 lg:px-0">
            <h2 className="mb-4 text-center font-riffic text-4xl font-bold text-white md:text-6xl lg:text-start">
              {char.name}
            </h2>
            <p
              className={`max-w-[60ch] text-pretty text-center font-aller text-lg leading-6 lg:max-w-[35ch] lg:text-start ${char.colors.text}`}
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
            onClick={() => clickHandler(char.name)}
            className={clsx(
              'mx-auto flex min-h-[120px] justify-center px-3 sm:w-[120px] lg:px-5',
              {
                'bg-gradient-to-t from-white to-transparent':
                  char.name.toLowerCase() === currentChar.value
              }
            )}
          >
            <button
              className={clsx(
                'h-full w-full translate-y-0 transition-transform hover:scale-110',
                {
                  '!-translate-y-5':
                    char.name.toLowerCase() === currentChar.value
                }
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

export const charTabs = {
  sayori: {
    name: 'Sayori',
    text: 'Sayori, your childhood friend, begins your story by recruiting you to the Literature Club! As a daydreamer full of positive energy, Sayori’s greatest passion is to deliver happiness to others.',
    colors: {
      background: 'bg-doki-sayori',
      text: 'text-doki-sayori-text',
      effect:
        'opacity-20 after:from-transparent after:from-5% after:via-[#9ccaff]/60 after:via-25% after:to-[#9ccaff] after:to-70%'
    },
    images: {
      chibi: '/characters/Sayori-Chibi-HC.webp',
      normal: () => (
        <img
          className="relative -bottom-[5%] max-w-[500px] animate-fade-left object-contain animate-delay-150 animate-duration-500 [object-position:50%_50%]"
          src="/characters/Sayori-hc-724.webp"
          srcset="/characters/Sayori-hc-724.webp 724w, /characters/Sayori-hc-724-p-500.webp 500w, /characters/Sayori-hc-724-p-250.webp 250w"
          sizes="100vw"
          alt="Sayori’s image"
          loading="lazy"
        />
      )
    }
  },
  natsuki: {
    name: 'Natsuki',
    text: 'Natsuki tries to act tough, but her cuteness can make it hard to take her too seriously! She might be willing to warm up to good listeners who can respect her love for cute things.',
    colors: {
      background: 'bg-doki-natsuki',
      text: 'text-doki-natsuki-text',
      effect:
        'opacity-20 after:from-transparent after:from-5% after:via-[#ffa7e3]/60 after:via-25% after:to-[#ffa7e3] after:to-70%'
    },
    images: {
      chibi: '/characters/Natsuki-Chibi-HC.webp',
      normal: () => (
        <img
          className="relative bottom-0 max-w-[500px] animate-fade-left object-contain animate-delay-150 animate-duration-500 [object-position:50%_50%]"
          src="/characters/Natsuki-hc-724"
          srcset="/characters/Natsuki-hc-724.webp 724w, /characters/Natsuki-hc-724-p-500.webp 500w, /characters/Natsuki-hc-724-p-250.webp 250w"
          sizes="100vw"
          alt="Natsuki’s image"
          loading="lazy"
        />
      )
    }
  },
  yuri: {
    name: 'Yuri',
    text: 'Yuri, the quiet bookworm, reserves her passionate side for those who can more deeply understand her enigmatic mind.',
    colors: {
      background: 'bg-doki-yuri',
      text: 'text-doki-yuri-text',
      effect:
        'opacity-20 after:from-transparent after:from-5% after:via-[#a9a5ff]/60 after:via-25% after:to-[#a9a5ff] after:to-70%'
    },
    images: {
      chibi: '/characters/Yuri-Chibi-HC.webp',
      normal: () => (
        <img
          className="relative -bottom-[7.5%] max-w-[500px] animate-fade-left object-contain animate-delay-150 animate-duration-500 [object-position:50%_50%] lg:w-full"
          src="/characters/Yuri-hc-724.webp"
          srcset="/characters/Yuri-hc-724.webp 724w, /characters/Yuri-hc-724-p-500.webp 500w, /characters/Yuri-hc-724-p-250.webp 250w"
          sizes="100vw"
          alt="Yuri’s image"
          loading="lazy"
        />
      )
    }
  },
  monika: {
    name: 'Monika',
    text: 'Monika, the superstar President of the Literature Club, will keep you on track for a perfect ending. Monika is always there to give you a guiding hand, both in literature and in love!',
    colors: {
      background: 'bg-doki-monika',
      text: 'text-doki-monika-text',
      effect:
        'opacity-50 after:from-transparent after:from-5% after:via-[#9ff3bc]/60 after:via-25% after:to-[#9ff3bc] after:to-70%'
    },
    images: {
      chibi: '/characters/Monika-Chibi-HC.webp',
      normal: () => (
        <img
          className="relative -bottom-[5%] max-w-[500px] animate-fade-left object-contain animate-delay-150 animate-duration-500 [object-position:50%_50%] lg:left-[5%]"
          src="/characters/Monika-hc-724.webp"
          srcset="/characters/Monika-hc-724.webp 724w, /characters/Monika-hc-724-p-500.webp 500w, /characters/Monika-hc-724-p-250.webp 250w"
          sizes="100vw"
          alt="Monika’s image"
          loading="lazy"
        />
      )
    }
  }
}

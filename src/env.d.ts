/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface IconProps {
  color?: string
  size: string
}

interface IconPropsTSX extends IconProps {
  className: string
}

interface Timers {
  currentTimeout: ReturnType<typeof setTimeout> | null
  currentInterval: ReturnType<typeof setInterval> | null
}
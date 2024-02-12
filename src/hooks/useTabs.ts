import { useSignal } from '@preact/signals'

type ValidTypes = string | number

export function useTabs<Type extends ValidTypes> ({ initialState }: { initialState: Type }) {
  const currentTab = useSignal(initialState)

  const clickHandler = (newState: Type) => {
    currentTab.value = newState
  }

  return { state: currentTab.value, clickHandler }
}

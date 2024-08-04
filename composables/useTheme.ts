const baseTheme = ref<BaseTheme>('baseLight')
const accentTheme = ref<AccentColor>('accentPurple')

export type BaseTheme = 'baseDark' | 'baseLight'
export type AccentColor = 'accentPurple' | 'accentLightBlue'

export const useTheme = () => {
  const setBaseTheme = (theme: BaseTheme) => {
    document.body.classList.remove(baseTheme.value)
    baseTheme.value = theme
    document.body.classList.add(baseTheme.value)
  }

  const setAccentColor = (color: AccentColor) => {
    document.body.classList.remove(accentTheme.value)
    accentTheme.value = color
    document.body.classList.add(accentTheme.value)
  }

  return {
    setBaseTheme,
    setAccentColor
  }
}
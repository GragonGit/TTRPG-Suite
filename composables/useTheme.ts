const baseTheme = useLocalStorage('baseTheme', 'baseLight')
const accentColor = useLocalStorage('accentColor', 'accentPurple')

export type BaseTheme = 'baseDark' | 'baseLight'
export type AccentColor = 'accentPurple' | 'accentLightBlue'

export const useTheme = () => {
  const initThemes = () => {
    document.body.classList.remove('baseLight', 'accentPurple')
    document.body.classList.add(baseTheme.value)
    document.body.classList.add(accentColor.value)
  }

  const setBaseTheme = (theme: BaseTheme) => {
    document.body.classList.remove(baseTheme.value)
    baseTheme.value = theme
    document.body.classList.add(baseTheme.value)
  }

  const isLightBaseTheme = () => baseTheme.value === 'baseLight'

  const toggleBaseTheme = () => setBaseTheme(isLightBaseTheme() ? 'baseDark' : 'baseLight')

  const setAccentColor = (color: AccentColor) => {
    document.body.classList.remove(accentColor.value)
    accentColor.value = color
    document.body.classList.add(accentColor.value)
  }

  return {
    initThemes,
    setBaseTheme,
    isLightBaseTheme,
    toggleBaseTheme,
    setAccentColor
  }
}
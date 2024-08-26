<template>
<div class="container">
  <header>
    <NuxtLink to="/" class="transparentAccentIconButton">
      <TtrpgIcon icon-name="ttrpgSuite" />
    </NuxtLink>
    <button ref="themeButton" class="transparentIconButton" @click.prevent="toggleTheme">
      <TtrpgIcon :icon-name="themeIconName" />
    </button>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <NuxtLink class="legal" to="/legal">{{ $t('layouts.auth.legal') }}</NuxtLink>
  </footer>
</div>
</template>

<script lang="ts" setup>
const { isLightBaseTheme, toggleBaseTheme } = useTheme()

const themeButton = ref<HTMLButtonElement | null>(null)
const themeIconName = computed(() => isLightBaseTheme() ? 'moon' : 'sun')

const toggleTheme = () => {
  toggleBaseTheme()
  if (themeButton.value) { themeButton.value.blur() }
}
</script>

<style lang="sass" scoped>
.container
  min-height: 100dvh
  display: grid
  grid-template-rows: auto 1fr auto
  grid-template-columns: minmax(0, 1fr)

header, footer
  display: flex
  justify-content: space-between
  position: relative

  padding: clamp(0.5rem, 5vw, 1rem) clamp(0.5rem, 10vw, 2rem)

footer
  flex-direction: row-reverse

.legal
  font-size: 0.6rem
  line-height: normal
</style>
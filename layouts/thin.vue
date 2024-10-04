<template>
<div class="container">
  <header>
    <IconButton :icon-name="'ttrpgSuite'" color="--accent-1" color-hover="--accent-1" @ttrpg-click="navigate('/')" />
    <IconButton :icon-name="themeIconName" @ttrpg-click="toggleBaseTheme" />
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

const navigate = navigateTo
const themeIconName = computed(() => isLightBaseTheme() ? 'moon' : 'sun')
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

  padding: clamp(0.5rem, 1.5vw, 1rem) clamp(0.5rem, 10vw, 2rem)

footer
  flex-direction: row-reverse

.legal
  font-size: 0.6rem
  line-height: normal
</style>
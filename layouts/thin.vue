<template>
<header>
  <NuxtLink class="logo" to="/">
    <img src="../public/favicon.ico" alt="TTRPG Suite Logo">
  </NuxtLink>
  <div>
    <!-- TODO Add Theme Change -->
  </div>
</header>
<main class="slot">
  <slot />
</main>
<footer>
  <NuxtLink class="legal" to="/legal">{{ $t('layouts.auth.legal') }}</NuxtLink>
</footer>
</template>

<style lang="sass" scoped>
header, footer
  display: flex
  justify-content: space-between
  position: relative

  padding: clamp(0.5rem, 5vw, 1rem) clamp(0.5rem, 10vw, 2rem)

.slot
  min-height: calc( 100vh - 10rem )

footer
  flex-direction: row-reverse
  padding-bottom: 0.1rem

.legal
  font-size: 1rem
</style>
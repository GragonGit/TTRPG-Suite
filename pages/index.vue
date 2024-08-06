<template>
<section>
  <div class="title">
    <h1>{{ $t('landing.headerFront') }}<span>{{ $t('landing.headerSpan') }}</span>{{ $t('landing.headerBack') }}</h1>
    <p>{{ $t('landing.subheader') }}</p>
  </div>
  <div class="buttons">
    <NuxtLink class="filledAccentButton" to="/auth/login">{{ $t('landing.login') }}</NuxtLink>
    <NuxtLink class="outlinedAccentButton" to="/auth/signup">{{ $t('landing.signup') }}</NuxtLink>
  </div>
</section>
</template>

<style lang="sass" scoped>
  section
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    position: absolute
    top: -15rem
    bottom: 0
    left: 0
    right: 0

    text-align: center

  p
    font-weight: 500

    color: var(--text-2)

    max-width: 40rem
    margin: 0

  .title
    display: flex
    flex-direction: column
    align-items: center
    max-width: 60rem
    gap: 1rem
    margin-bottom: 4rem

  .buttons
    display: flex
    justify-content: center
    gap: 2rem
</style>
<template>
<div class="content">
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
</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style lang="sass" scoped>
section
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  padding-top: clamp(10rem, 50vw, 15rem)

  text-align: center

p
  font-weight: 500

  color: var(--text-2)

  width: clamp(0px, 90vw, 40rem)
  margin: 0

.title
  display: flex
  flex-direction: column
  align-items: center
  width: clamp(0px, 100vw, 60rem)
  gap: 1rem
  margin-bottom: clamp(2rem, 10vw, 4rem)

.buttons
  display: flex
  justify-content: center
  margin: 0 2rem
  gap: 2rem

  @media (max-width: 260px)
    flex-direction: column
</style>
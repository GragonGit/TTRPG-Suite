<template>
<section>
  <div class="titleGroup">
    <div class="scroll">
      <LandingIconScroll />
      <LandingIconScroll :reverse="true" :offset="'-10s'" :seed="7" />
      <LandingIconScroll :offset="'-20s'" :seed="19" />
    </div>
    <div class="title">
      <h1>{{ $t('landing.headerFront') }}<span>{{ $t('landing.headerSpan') }}</span>{{ $t('landing.headerBack') }}</h1>
      <p>{{ $t('landing.subheader') }}</p>
    </div>
  </div>
  <div class="buttons">
    <NuxtLink class="outlinedAccentButton" to="/auth/signup">{{ $t('landing.signup') }}</NuxtLink>
    <NuxtLink class="filledAccentButton" to="/auth/login">{{ $t('landing.login') }}</NuxtLink>
    <button class="filledAccentButton" @click="sendNotification">Push</button>
  </div>
</section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'thin'
})

const {
  isSupported,
  show,
} = useWebNotification({
  title: 'Hello, VueUse world!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})


const sendNotification = () => {
  if (isSupported.value)
    show()
}
</script>

<style lang="sass" scoped>
section
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  padding-top: clamp(1rem, 1vw, 15rem)

  text-align: center

p
  font-weight: 500

  color: var(--text-2)

  width: clamp(0rem, 90vw, 40rem)
  margin: 0

.titleGroup
  display: flex
  justify-content: center
  align-items: center

.scroll
  display: flex
  flex-direction: column
  gap: 1rem
  position: absolute
  margin-bottom: clamp(2rem, 10vw, 4rem)

.title
  display: flex
  flex-direction: column
  align-items: center
  width: clamp(0rem, 100vw, 42rem)
  gap: 1rem
  margin-bottom: clamp(2rem, 10vw, 4rem)
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out
  background-color: var(--background-base)
  box-shadow: -1rem 0 1rem 0 var(--background-base), 1rem 0 1rem 0 var(--background-base)
  z-index: 1

.buttons
  display: flex
  justify-content: center
  margin: 0 2rem
  gap: 2rem

  @media (max-width: 17rem)
    flex-direction: column
</style>
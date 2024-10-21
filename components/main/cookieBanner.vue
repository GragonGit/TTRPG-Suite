<template>
  <div class="cookieWrapper">
    <div v-if="!cookiesAccepted || (Date.now() - lastAcceptedCookiesDate) > ONE_YEAR_IN_MILLISECONDS"
      class="cookieBanner">
      <p>{{ $t('components.main.cookieBanner.text') }}</p>
      <span>
        <NuxtLink type="button" to="https://www.youtube.com/watch?v=qbnt_vmk4fU" class="outlinedAccentButton">{{
          $t('components.main.cookieBanner.decline') }}</NuxtLink>
        <button type="button" class="filledAccentButton" @click="onAcceptCookies">{{
          $t('components.main.cookieBanner.accept') }}</button>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ONE_YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 365

const cookiesAccepted = useLocalStorage<boolean>('cookiesAccepted', false)
const lastAcceptedCookiesDate = useLocalStorage<number>('lastAcceptedCookiesDate', 0)

onMounted(() => {
  if (Date.now() - lastAcceptedCookiesDate.value > ONE_YEAR_IN_MILLISECONDS) {
    cookiesAccepted.value = false
  }
})

const onAcceptCookies = () => {
  cookiesAccepted.value = true
  lastAcceptedCookiesDate.value = Date.now()
}
</script>

<style lang="sass" scoped>
.cookieWrapper
  height: 0
  width: fit-content

  position: sticky
  top: calc( 100dvh - 20rem )
  margin-inline: auto

.cookieBanner
  display: flex
  flex-direction: column
  align-items: center

  padding: 1rem
  gap: 1rem

  width: clamp(0px, 50vw, 40rem)

  border: solid var(--text-1) 1px
  border-radius: 1rem

  background-color: var(--background-base)

span
  display: flex
  gap: 1rem

  @media (max-width: 22rem)
      flex-direction: column

p
  text-align: center
  text-wrap: balance
</style>
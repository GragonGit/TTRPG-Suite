<template>
<section>
  <div class="title">
    <h1>{{ $t('verify.headerFront') }}<span>{{ $t('verify.headerSpan') }}</span>{{ $t('verify.headerBack') }}</h1>
    <p>{{ $t('verify.subheader') }}</p>
    <p>{{ $t('verify.subheader2') }}</p>
  </div>
  <NuxtLink class="filledAccentButton" to="/auth/login">{{ $t('verify.login') }}</NuxtLink>
</section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'thin'
})
</script>

<style lang="sass" scoped>
section
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  padding-top: clamp(1rem, 5vw, 15rem)

  text-align: center

p
  font-weight: 500

  color: var(--text-2)

  margin: 0

.title
  display: flex
  flex-direction: column
  align-items: center
  max-width: 65rem

  padding: 0rem 1rem
  gap: 1rem
  margin-bottom: 4rem
</style>
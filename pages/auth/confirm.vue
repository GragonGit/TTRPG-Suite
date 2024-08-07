<template>
<section>
  <div class="title">
    <h1>{{ $t('confirm.headerFront') }}<span>{{ $t('confirm.headerSpan') }}</span>{{ $t('confirm.headerBack') }}</h1>
    <p>{{ $t('confirm.subheaderFront') }}<span>{{ $t('confirm.subheaderSpan') }}</span>{{ $t('confirm.subheaderBack') }}
    </p>
  </div>
  <NuxtLink class="filledAccentButton" to="/home">{{ $t('confirm.go') }}</NuxtLink>
</section>
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

    position: absolute
    top: -15rem
    bottom: 0
    left: 0
    right: 0

    text-align: center

  p
    font-weight: 500

    color: var(--text-2)

    margin: 0

    span
      color: var(--accent-1)

  .title
    display: flex
    flex-direction: column
    align-items: center
    max-width: 80rem

    gap: 1rem
    margin-bottom: 4rem
</style>
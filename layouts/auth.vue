<template>
  <header>
    <NuxtLink class="logo" to="/">
      <img src="../public/favicon.ico" alt="TTRPG Suite Logo">
    </NuxtLink>
    <div>
      <NuxtLink class="legal" to="/legal">{{ $t('layouts.auth.legal') }}</NuxtLink>
    </div>
  </header>
    <slot />
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
  header
    display: flex
    justify-content: space-between

    z-index: 9
    position: relative

    padding: 1rem 2rem

  .legal
    outline: none
    border-radius: 0.75rem
    padding: 0.5rem 0.75rem

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, opacity 0.2s ease-in-out

    &:hover
      text-decoration: none
      background-color: var(--background-1)
</style>
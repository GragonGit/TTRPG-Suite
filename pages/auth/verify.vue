<template>
<section>
  <div class="title">
    <h1>Just <span>one</span> more step.</h1>
    <p>A verification email will be sent to you shortly. Follow its instructions and you are ready start your next adventure.</p>
    <p>Or log in here after verifying your account by clicking the button below.</p>
  </div>
  <NuxtLink class="filledAccentButton" to="/auth/login">Log In</NuxtLink>
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

    margin: 0

  .title
    display: flex
    flex-direction: column
    align-items: center
    max-width: 60rem

    gap: 1rem
    margin-bottom: 4rem
</style>
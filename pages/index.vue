<template>
<section>
  <div class="title">
    <h1>Welcome to the <br><span>TTRPG Suite</span></h1>
    <p>The tool covering every aspect of table top role playing. From characters to maps to playing together. Start your
      adventure now!</p>
  </div>
  <div class="buttons">
    <NuxtLink class="filledAccentButton" to="/auth/login">Log In</NuxtLink>
    <NuxtLink class="outlinedAccentButton" to="/auth/signup">Sign Up</NuxtLink>
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
    gap: 1rem
    margin-bottom: 4rem

  .buttons
    display: flex
    justify-content: center
    gap: 2rem
</style>
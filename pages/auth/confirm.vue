<template>
<section>
  <div class="title">
    <h1>Thanks for joining us on your next <span>Adventure!</span></h1>
    <p>Your account has been verified and you are now ready to start journey with the <span>TTRPG Suite.</span></p>
  </div>
  <NuxtLink class="filledAccentButton" to="/home">Let's Go!</NuxtLink>
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
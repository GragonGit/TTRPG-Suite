<template>
<section>
  <div class="title">
    <h1>Welcome to the <br><span>TTRPG Suite</span></h1>
    <p>The tool covering every aspect of table top role playing. From characters to maps to playing together. Start your adventure now!</p>
  </div>
  <div class="buttons">
    <NuxtLink id="loginButton" to="/auth/login">Login</NuxtLink>
    <NuxtLink id="signUpButton" to="/auth/signup">Sign Up</NuxtLink>
  </div>
</section>
</template>

<style lang="sass" scoped>
  section
    position: fixed
    top: 0
    bottom: 15rem
    left: 0
    right: 0
    width: fit-content
    height: fit-content
    margin: auto

    text-align: center

  h1
    font-size: 6rem
    line-height: 6rem

    margin: 0rem

    span
      background-clip: text
      background-color: var(--accent-1)
      background-image: linear-gradient(180deg, var(--accent-2) 0, var(--accent-1) 60%)
      background-size: 100%
      font-weight: 600
      color: transparent

  p
    font-size: 1.25rem
    font-weight: 500
    line-height: 2rem

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

  a
    font-size: 1.25rem
    text-decoration: none

    border: solid 1px
    border-radius: 0.75rem

    padding: 0.75rem 1rem

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out

  #loginButton
    border-color: var(--accent-1)
    background-color: var(--accent-1)
    color: var(--accent-1-text)

    &:hover
      background-color: var(--accent-1-hover)

  #signUpButton
    border-color: var(--accent-1)
    color: var(--accent-1)

    &:hover
      background-color: var(--accent-1)
      color: var(--accent-1-text)
</style>
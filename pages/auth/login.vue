<template>
<div class="login">
  <h2>Log In</h2>
  <form @submit.prevent="loginWithPassword()">
    <div class="formLabelTextDiv">
      <label class="formLabel" for="emailInput">Email</label>
      <input id="emailInput" class="formTextField" type="text" name="emailInput" placeholder="Email" v-model="email" />
    </div>

    <div class="formLabelTextDiv">
      <label class="formLabel" for="passwordInput">Password</label>
      <input id="passwordInput" class="formTextField" type="password" name="passwordInput" placeholder="Password"
        v-model="password" />
    </div>

    <div class="loginSignup">
      <input class="filledAccentButton" type="submit" :value="isLoading ? 'Loading' : 'Log In'" :disabled="isLoading" />
      <NuxtLink class="signupLink" to="/auth/signup">Sign up instead</NuxtLink>
    </div>

    <NuxtLink to="/">Back to Start</NuxtLink>
  </form>
</div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const loginWithPassword = async () => {
  isLoading.value = true

  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) {
    password.value = ''
    alert('Your email or password seem to be incorrect.')
  } else {
    return navigateTo('/home')
  }

  isLoading.value = false
}
</script>

<style lang="sass" scoped>
  .login
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    position: absolute
    top: -15rem
    bottom: 0
    left: 0
    right: 0
  
  form
    display: flex
    flex-direction: column
    align-items: center

    width: 32rem
    gap: 2rem
    margin: 4rem

  .loginSignup
    display: flex
    flex-direction: column
    align-items: center

    width: 100%
    margin-top: 0.75rem
    gap: 1rem

  input[type=submit]
    width: 100%

  .signupLink
    color: var(--accent-1)

</style>
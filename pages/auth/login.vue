<template>
<div class="login">
  <h2>{{ $t('login.header') }}</h2>
  <form @submit.prevent="loginWithPassword()">
    <div class="formLabelTextDiv">
      <label class="formLabel" for="emailInput">{{ $t('login.email.label') }}</label>
      <input id="emailInput" class="formTextField" type="text" name="emailInput" :placeholder="$t('login.email.placeholder')" v-model="email" />
    </div>

    <div class="formLabelTextDiv">
      <label class="formLabel" for="passwordInput">{{ $t('login.password.label') }}</label>
      <input id="passwordInput" class="formTextField" type="password" name="passwordInput" :placeholder="$t('login.password.placeholder')"
        v-model="password" />
    </div>

    <div class="loginSignup">
      <input class="filledAccentButton" type="submit" :value="isLoading ? $t('login.login.loading') : $t('login.login.login')" :disabled="isLoading" />
      <NuxtLink class="signupLink" to="/auth/signup">{{ $t('login.signup') }}</NuxtLink>
    </div>

    <NuxtLink to="/">{{ $t('login.landing') }}</NuxtLink>
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
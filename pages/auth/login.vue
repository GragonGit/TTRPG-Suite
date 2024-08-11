<template>
<section>
  <h2>{{ $t('login.header') }}</h2>
  <form @submit.prevent="loginWithPassword()">
    <div class="formLabelTextDiv">
      <label class="formLabel" for="emailInput">{{ $t('login.email.label') }}</label>
      <input id="emailInput" v-model="email" class="formTextField" type="text" name="emailInput"
        :placeholder="$t('login.email.placeholder')" />
    </div>

    <div class="formLabelTextDiv">
      <label class="formLabel" for="passwordInput">{{ $t('login.password.label') }}</label>
      <input id="passwordInput" v-model="password" class="formTextField" type="password" name="passwordInput"
        :placeholder="$t('login.password.placeholder')" />
    </div>

    <div class="loginSignup">
      <input class="filledAccentButton" type="submit"
        :value="isLoading ? $t('login.login.loading') : $t('login.login.login')" :disabled="isLoading" />
      <NuxtLink class="signupLink" to="/auth/signup">{{ $t('login.signup') }}</NuxtLink>
    </div>

    <NuxtLink to="/">{{ $t('login.landing') }}</NuxtLink>
  </form>
</section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'thin'
})

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
section
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  padding-top: 15rem

form
  display: flex
  flex-direction: column
  align-items: center

  width: clamp(5rem, 80vw, 32rem)
  gap: 2rem
  margin: clamp(2rem, 5vw, 4rem)

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
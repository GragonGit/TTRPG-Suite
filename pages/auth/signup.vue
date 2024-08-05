<template>
<div class="signup">
  <h2>Sign Up</h2>
  <form @submit.prevent="signUpWithPassword()">
    <div class="formLabelTextDiv">
      <label class="formLabel" for="usernameInput">Username</label>
      <input id="usernameInput" class="formTextField" type="text" name="usernameInput" placeholder="Username"
        v-model="username" @blur="validateUsername()" />
      <p v-if="!isValidUsername" class="formInvalid">Usernames have to be at least 2 characters long and start and end
        with a letter or number. Within the username _ .- are also allowed.</p>
    </div>

    <div class="formLabelTextDiv">
      <label class="formLabel" for="emailInput">Email</label>
      <input id="emailInput" class="formTextField" type="text" name="emailInput" placeholder="Email" v-model="email"
        @blur="validateEmail()" />
      <p v-if="!isValidEmail" class="formInvalid">Invalid email. Make sure it looks something like this:
        example@email.com</p>
    </div>

    <div class="formLabelTextDiv">
      <label class="formLabel" for="passwordInput">Password</label>
      <input id="passwordInput" class="formTextField" type="password" name="passwordInput" placeholder="Password"
        v-model="password" @blur="validatePassword()" />
      <p v-if="!isValidPassword" class="formInvalid">Password has to be at least 8 characters long and requires at least
        one uppercase letter, one lowercase letter and one number.</p>
    </div>

    <div class="loginSignup">
      <input class="filledAccentButton" type="submit" :value="isLoading ? 'Loading' : 'Sign Up'"
        :disabled="isLoading" />
      <NuxtLink class="loginLink" to="/auth/login">Log in instead</NuxtLink>
    </div>

    <NuxtLink to="/">Back to Start</NuxtLink>
  </form>
</div>
</template>

<script lang="ts" setup>
const VALID_USERNAME_REGEX = '^[a-zA-Z0-9][a-zA-Z0-9_ .-]*[a-zA-Z0-9]$'
const VALID_EMAIL_REGEX = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

const supabase = useSupabaseClient()

const username = ref('')
const isValidUsername = ref(true)

const email = ref('')
const isValidEmail = ref(true)

const password = ref('')
const isValidPassword = ref(true)

const isLoading = ref(false)

const signUpWithPassword = async () => {
  isLoading.value = true

  validateUsername()
  validateEmail()
  validatePassword()
  if (!isValidUsername.value || !isValidEmail.value || !isValidPassword.value) {
    isLoading.value = false
    return
  }

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        display_name: username.value
      },
    },
  })
  if (error) {
    alert('An error occurred please contact me via Discord')
  } else {
    return navigateTo('/auth/verify')
  }

  isLoading.value = false
}

const validateUsername = () => {
  const element: HTMLInputElement = document.getElementById('usernameInput') as HTMLInputElement
  isValidUsername.value = element.value.match(VALID_USERNAME_REGEX) ? true : false
  element.setCustomValidity(isValidUsername.value ? '' : 'Invalid Username')
}

const validateEmail = () => {
  const element: HTMLInputElement = document.getElementById('emailInput') as HTMLInputElement
  isValidEmail.value = element.value.match(VALID_EMAIL_REGEX) ? true : false
  element.setCustomValidity(isValidEmail.value ? '' : 'Invalid Email')
}

const validatePassword = () => {
  const element: HTMLInputElement = document.getElementById('passwordInput') as HTMLInputElement
  const elementValue: string = element.value

  isValidPassword.value =
    elementValue.length >= 8
      && elementValue.match('.*[A-Z].*') // Contains at least one upper case letter
      && elementValue.match('.*[a-z].*') // Contains at least one lower case letter
      && elementValue.match('.*[0-9].*') // Contains at least one number
      ? true : false

  element.setCustomValidity(isValidPassword.value ? '' : 'Invalid Password')
}

</script>

<style lang="sass" scoped>
  .signup
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

  .loginLink
    color: var(--accent-1)

</style>

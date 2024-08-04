<template>
<form @submit.prevent="handleSignUp">
  <div>
    <h1>TTRPG Suite Sign up</h1>
    <div>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Username" v-model="username" />
    </div>
    <div>
      <input type="submit" :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading" />
    </div>
  </div>
</form>
<NuxtLink to="/auth/login">Log in</NuxtLink>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const password = ref('')
const username = ref('')

const handleSignUp = async () => {
  loading.value = true
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        display_name: username.value
      },
    },
  })
  if (error) alert(error.message)
  loading.value = false
}
</script>
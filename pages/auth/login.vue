<template>
<form @submit.prevent="handleLogin">
  <div>
    <h1>TTRPG Suite Log In</h1>
    <div>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <div>
      <input type="submit" :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading" />
    </div>
  </div>
</form>
<NuxtLink to="/auth/signup">Sign up</NuxtLink>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  loading.value = true
  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) alert(error.message)
  loading.value = false
}
</script>
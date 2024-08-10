<template>
<h1>Hello {{ username }}</h1>
<button @click="logout">Log out</button>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const supabaseUser = useSupabaseUser()
const username = ref('')

const { data: users, error } = await supabase
  .from('users')
  .select('display_name')
  .eq('id', supabaseUser.value.id)

if (error) {
  alert(error.message)
} else {
  username.value = users![0].display_name
}

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  return navigateTo('/')
}
</script>
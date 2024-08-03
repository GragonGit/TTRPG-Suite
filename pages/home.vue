<template>
<h1>Hello {{ user.email }}</h1>
<button @click="logout">Log out</button>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}
</script>
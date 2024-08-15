<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</template>

<script lang="ts" setup>
onMounted(() => useTheme().initThemes())
</script>
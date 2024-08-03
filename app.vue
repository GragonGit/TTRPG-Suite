<template>
<body id="topBody" :class="[baseTheme, accentTheme]">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</body>
</template>

<script lang="ts" setup>
const baseTheme = useState('baseTheme', () => 'baseLight')
const accentTheme = useState('accentTheme', () => 'accentPurple')

// TODO Implement properly with more themes
const changeAccent = () => accentTheme.value = accentTheme.value === 'accentPurple' ? 'accentLightBlue' : 'accentPurple'
const changeBase = () => baseTheme.value = baseTheme.value === 'baseDark' ? 'baseLight' : 'baseDark'
</script>
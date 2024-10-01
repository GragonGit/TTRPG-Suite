<template>
<div class="container">
  <div v-for="n in 20" :key="n" class="icons">
    <TtrpgIcon v-for="icon in icons" :key="icon" :icon-name="icon" :width="iconWidth" class="icon" />
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps(
  {
    reverse: {
      type: Boolean,
      default: false
    },
    offset: {
      type: String,
      default: '0s'
    },
    seed: {
      type: Number,
      default: 0
    }
  }
)

function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.PI * Math.pow(10, props.seed + i) % 10) % array.length;
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const iconList = ['d20Wireframe', 'swordOutline', 'scroll', 'characterCreation', 'compass', 'nib', 'magicWand']
const icons = ref(shuffle(iconList))
const iconWidth = '5vw'

</script>

<style lang="sass" scoped>
$iconGap: 1rem

.container
  width: 100vw
  overflow: hidden
  display: flex
  flex-direction: row-reverse
  gap: $iconGap

.icons
  display: flex
  gap: $iconGap

  animation-duration: 30s
  animation-timing-function: linear
  animation-delay: v-bind(offset)
  animation-iteration-count: infinite
  animation-direction: v-bind("reverse ? 'reverse' : 'normal'")
  animation-name: scroll

@keyframes scroll
  0%
    transform: translateX(0)
  100%
    transform: translateX(calc( v-bind('icons.length') * calc( v-bind(iconWidth) + $iconGap )))

.icon
  width: v-bind(iconWidth)
  aspect-ratio: 1

  color: var(--background-1)
  opacity: 60%
  transition: color 0.2s ease-out

  &:hover
    color: var(--accent-1)

</style>
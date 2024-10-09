<template>
  <button ref="button" @click="onButtonClick">
    <TtrpgIcon :icon-name :width="`calc(${size} * 0.75)`" />
  </button>
</template>

<script lang="ts" setup>
defineProps(
  {
    iconName: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '2rem'
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    color: {
      type: String,
      default: '--text-1'
    },
    backgroundColorHover: {
      type: String,
      default: '--background-1'
    },
    colorHover: {
      type: String,
      default: '--text-1'
    }
  }
)
const emit = defineEmits(['ttrpgClick'])

const button = ref<HTMLButtonElement | null>(null)

const onButtonClick = () => {
  if (button.value) { button.value.blur() }
  emit('ttrpgClick')
}

const asCssValue = (value: string): string => {
  return value.startsWith('--') ? `var(${value})` : value
}
</script>

<style lang="sass" scoped>
button
  display: flex
  justify-content: center
  align-items: center

  outline: transparent
  border: none
  border-radius: calc( v-bind(size) * 0.3 )

  height: v-bind(size)
  aspect-ratio: 1
  padding: 0

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, opacity 0.2s ease-in-out

  background-color: v-bind("asCssValue(backgroundColor)")
  color: v-bind("asCssValue(color)")

  &:active, &:focus
    text-decoration: none

    background-color: v-bind("asCssValue(backgroundColorHover)")
    color: v-bind("asCssValue(colorHover)")

  @media (hover: hover)
    &:hover
      text-decoration: none

      background-color: v-bind("asCssValue(backgroundColorHover)")
      color: v-bind("asCssValue(colorHover)")

  &:disabled
    opacity: 80%
</style>
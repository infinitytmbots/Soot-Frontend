<template>
  <div :class="classe">
    <SVGHome v-if="name.toLowerCase() == 'home'" :size="size" />
    <SVGSettings v-if="name.toLowerCase() == 'settings'" :size="size" />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default() {
        return '48'
      },
    },
    classe: {
      type: String,
      default() {
        return ""
      }
    },
  },
}
</script>
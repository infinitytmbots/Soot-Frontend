<template>
  <div>
    <svg :width="width || size "
      :height="height || size " viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8_14)">
<circle cx="28" cy="28" r="27" fill="#282828" stroke="#282828" stroke-width="2"/>
<path d="M28.3609 25.736C24.1489 25.052 22.6729 24.548 22.6729 23.216C22.6729 21.992 23.6449 20.48 27.8929 20.48C33.1129 20.48 33.8689 23.072 33.8689 24.8C35.8129 24.8 39.6289 24.8 39.6289 24.8C39.6289 20.984 37.6849 15.512 27.8929 15.512C19.6489 15.512 17.0209 19.616 17.0209 23.18C17.0209 27.788 20.4049 29.336 27.9649 30.452C32.8969 31.172 34.6249 31.496 34.6249 33.188C34.6249 35.132 32.8969 36.104 28.7569 36.104C25.4809 36.104 22.1329 35.492 22.1329 31.712C19.0369 31.712 17.6329 31.712 16.5169 31.712C16.5169 34.124 16.4809 41 28.9009 41C36.2809 41 40.4569 39.452 40.4569 33.188C40.4569 27.5 34.0129 26.672 28.3609 25.736Z" fill="#D5D9DD"/>
</g>
<defs>
<clipPath id="clip0_8_14">
<rect width="56" height="56" fill="white"/>
</clipPath>
</defs>
</svg>

  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default() {
        return '56'
      },
    },
    width: {
      type: String,
      default() {
        return null
      },
    },
    height: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>



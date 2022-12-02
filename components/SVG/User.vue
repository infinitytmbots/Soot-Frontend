<template>
  <div>
    <svg :width="width || size "
      :height="height || size " viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4.5C14.3488 4.5 11.3889 7.43573 11.3889 11.0571C11.3889 14.6786 14.3488 17.6143 18 17.6143C21.6512 17.6143 24.6111 14.6786 24.6111 11.0571C24.6111 7.43573 21.6512 4.5 18 4.5Z" fill="currentColor"/>
<path d="M21.9014 20.5315C19.3168 20.1224 16.6832 20.1224 14.0986 20.5315L13.8215 20.5753C10.1797 21.1518 7.5 24.2675 7.5 27.9253C7.5 29.8995 9.11364 31.5 11.1042 31.5H24.8958C26.8864 31.5 28.5 29.8995 28.5 27.9253C28.5 24.2675 25.8203 21.1518 22.1785 20.5753L21.9014 20.5315Z" fill="currentColor"/>
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



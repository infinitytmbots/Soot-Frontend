
<template>
  <div class="
      flex flex-col
      min-h-screen
      font-quicksand
      tracking-wide
      bg-white-secondary
      text-black-primary
    ">
    <div class="
        lg:flex lg:flex-row
        w-full
        min-h-screen
      ">
      <LayoutSidebar ref="mobilemenu" :title="route.path.split('/').reverse()[0]" />
      <main class="flex-1 w-full mx-auto lg:max-h-screen overflow-y-auto">
        <div id="content" class=" flex flex-col justify-start">
          <div class="
              mx-auto
              w-full
              flex flex-col
              items-start
            ">
            <div class="w-full">
              <slot />
            </div>
          </div>
        </div>
      </main>
      <LayoutDashBar/>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap");

@font-face {
  font-family: 'Grifter';
  src: url('/fonts/grifter.otf') format('opentype');
}


</style>
<script setup>
const route = useRoute()
</script>

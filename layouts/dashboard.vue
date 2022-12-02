
<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-quicksand
      tracking-wide
      bg-discortics-100
      text-white
    "
  >
    <div
      class="
        lg:flex lg:flex-row
        w-full
        min-h-screen
      "
    >
      <LayoutSidebar
        ref="mobilemenu"
        :title="route.path.split('/').reverse()[0]"
      />
      <LayoutTopbar
        ref="desktopmenu"
        :title="route.path.split('/').reverse()[0]"
      />
      <main class="flex-1 w-full p-2 mx-auto lg:pl-2 pr-4 mt-5 lg:mt-0 lg:max-h-screen overflow-y-auto">
        <div id="content" class="p-2 flex flex-col justify-start">
          <LayoutTopstuff ref="topbar" />
          <div
            class="
              lg:ml-5
              mt-5
              lg:mt-10
              mx-auto
              px-2
              w-full
              flex flex-col
              items-start
            "
          >
            <div class="p-px w-full">
              <slot />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import Navigation from "@/data/DashNav";
const route = useRoute()
const topbar = ref(null)
const desktopmenu = ref(null)
function toggleChild() {
      topbar.toggleOff ?? topbar.toggleOff();
      desktopmenu.toggleOff ??
        desktopmenu.toggleOff();
};
</script>

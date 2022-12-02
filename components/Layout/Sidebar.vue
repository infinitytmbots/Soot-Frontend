<template>
  <div class="p-4 h-screen font-montserrat z-50">
    <div :class="`
        z-40 h-full
        rounded-xl
        hidden lg:block lg:max-h-[95vh]
        flex-none flex
        lg:left-0
        items-center
        overflow-hidden
        transform
        group flex flex-col
        relative
        transition-all
        duration-500
        ease-in-out
        w-24
        top-0           
        bg-transparent
      `">
      <div class="
          block
          top-0
          left-0
          sticky
          flex-1
          p-4
          pt-0
          transition-all
          duration-500
          ease-in-out
          overflow-hidden
        ">
        <div :class="`flex lg:space-y-1 flex-col items-center lg:pt-0 pt-10 mt-10`">
          <div
            :class="`flex flex-col mx-auto justify-start items-center w-full transition-all
        duration-500
        ease-in-out`"
          >
            <SVGLogo
              class="h-12 w-auto"
            />
          </div>
          <div
            v-for="{ heading, routes } in Navigation"
            :key="heading"
            :class="`flex flex-col items-center transition-all
        duration-500
        ease-in-out`"
          >
            <p
              :class="`
                tracking-wide
                px-3
                w-full
                uppercase
                pt-8
                rounded-md
                text-center
                font-semibold
                flex flex-row space-x-4
                items-center
                text-gray-300
                block
                rounded-md transition-all
        duration-500
        ease-in-out
              `">
              <span class="py-1 text-white/50 text-xxs font-medium">{{ heading }}</span>
            </p>
            <div
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :class="`w-full py-1 flex flex-row items-center justify-center justify-start`"
            >
              <!-- <div :class="`${
                  title === key ? 'block' : 'hidden'
                } absolute -left-2 flex flex-row items-center`">
                <SVGNewPointer size="34" />
              </div> -->
              <NuxtLink
                :to="route"
                :class="`${
                  title === key ? 'test-black-primary' : 'text-black-secondary'
                }
                tracking-wide
                transition-all
                duration-500
                ease-in-out
                capitalize
                h-10
                w-10 justify-center
                text-sm
                font-medium
                hover:text-black-primary
                block
                rounded-xl space-x-4 items-center
                flex flex-row`"
              ><span>
                  <SVGWrapper
                    :name="routeIcon"
                    size="36"
                  />
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Navigation from "@/data/SideBarNav.js";
  const { title } = defineProps(["title"]);
</script>
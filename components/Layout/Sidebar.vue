<template>
  <div class="px-4 h-screen font-montserrat z-50 border-r-2 border-black-secondary/50">
    <div :class="`
        z-40 h-full
        rounded-xl
        flex-none flex
        items-center
        overflow-hidden
        transform
        group flex flex-col
        relative
        transition-all
        duration-500
        ease-in-out
        w-24
        bg-transparent
      `">
      <div class="
          block
          sticky
          flex-1
          p-4
          pt-0
          transition-all
          duration-500
          ease-in-out
          overflow-hidden
          h-full
        ">
        <div :class="`flex lg:space-y-1 flex-col items-center justify-between h-full`">
          <div
            :class="`flex flex-col mx-auto justify-start items-center w-full transition-all
        duration-500
        ease-in-out mt-8`"
          >
            <SVGLogoBlack
              class="w-auto"
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
            </p>
            <div
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :class="`w-full py-2 flex flex-row items-center justify-center justify-start`"
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
                    size="34"
                  />
                </span>
              </NuxtLink>
            </div>
          </div>
          <div class="mb-4">
            <img
              class="w-auto"
              src="/img/user.png"
            />
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
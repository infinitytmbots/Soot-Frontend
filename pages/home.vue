<template>
    <div class="w-full h-screen bg-black-primary-2">
        <div class="flex justify-evenly items-center h-auto py-8">
            <div class="flex flex-col w-2/6 h-72 bg-blue-primary rounded-lg">
                <p class="pt-7 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Carbon</p>
                <div class="flex flex-1 flex-col pt-4 content-evenly">
                    <div class="my-5">
                        <p class="text-4xl text-white-primary text-center font-grifter leading-9">{{
                                data.carbon.credit
                            }}</p>
                        <p class="text-xs text-white-primary/60 text-center font-montserrat">Carbon Credits*</p>
                    </div>
                    <div class="my-5">
                        <p class="text-4xl text-white-primary text-center font-grifter leading-9">
                            {{ data.carbon.emission }} Kg</p>
                        <p class="text-xs text-white-primary/60 text-center font-montserrat">Emission</p>
                    </div>
                </div>
            </div>
            <div class="w-3/6 h-72 bg-black-secondary-2 rounded-lg">
                <p class="pt-4 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Performance</p>
                <div class="grid pt-4 grid-cols-2">
                    <div class="mx-5 mt-2">
                        <p class="text-4xl text-white-primary pl-6 font-grifter leading-9">{{
                                data.engine.efficeny
                            }}%</p>
                        <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Engine Efficiency</p>
                    </div>
                    <div class="mx-5 mt-2">
                        <p class="text-4xl text-white-primary pl-6 font-grifter leading-9">{{
                                data.engine.humidity
                            }}%</p>
                        <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Humidity</p>
                    </div>
                </div>
                <p class="pt-3 pl-6 font-montserrat font-semibold text-base text-white-secondary">Badges</p>
                <img src="/img/badges.png" alt="">
            </div>
        </div>
        <div class="object-contain bg-black-secondary-2">

            <p class="pt-6 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Pollution</p>
            <div class="flex justify-center">

                <LayoutChart class="w-2/3 w-2/3"/>
            </div>
        </div>
    </div>
</template>
<script setup>

import longseries from "@/data/UserData";
const data = longseries[0].data

definePageMeta({
    layout: "dashboard",
});
</script>
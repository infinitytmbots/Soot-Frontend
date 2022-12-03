<template>
<div class="w-full h-screen bg-black-primary-2">
    <div class="flex justify-evenly items-center h-auto py-8">
        <div class="flex flex-col w-2/6 h-72 bg-blue-primary rounded-lg">
            <p class="pt-7 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Carbon</p>
            <div class="flex flex-1 flex-col pt-4 content-evenly">
                <div class="my-5">
                    <p class="text-4xl text-white-primary text-center font-grifter leading-9">{{ data.carbon.credit }}</p>
                    <p class="text-xs text-white-primary/60 text-center font-montserrat">Credits</p>
                </div>
                <div class="my-5">
                    <p class="text-4xl text-white-primary text-center font-grifter leading-9">{{ data.carbon.emission }}</p>
                    <p class="text-xs text-white-primary/60 text-center font-montserrat">Emission</p>
                </div>
            </div>
        </div>
        <div class="w-3/6 h-72 bg-black-secondary-2 rounded-lg">
            <p class="pt-4 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Performance</p>
            <div class="grid pt-4 grid-cols-2">
                <div class="mx-5 mt-2">
                    <p class="text-4xl text-white-primary pl-6 font-grifter leading-9">{{ data.engine.life }}%</p>
                    <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Engine Life</p>
                </div>
                <div class="mx-5 mt-2">
                    <p class="text-4xl text-white-primary pl-6 font-grifter leading-9">{{ data.engine.humidity }}%</p>
                    <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Humidity</p>
                </div>
            </div>
            <p class="pt-3 pl-6 font-montserrat font-semibold text-base text-white-secondary">Badges</p>
            <img src="/img/badges.png" alt="">
        </div>
    </div>
    <div class="h-96 bg-black-secondary-2">
        <p class="pt-6 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Pollution</p>
        <LayoutChart/>
    </div>
</div>
</template>
<script setup>
import series from "@/data/ChartData.js";
const sum = $ref(0);
for(let i in series[0].data){
    sum += series[0].data[i];
}
const data = $ref({
    carbon: {
        credit: 500 - sum ,
        emission: sum
    },
    engine: {
        life: "--",
        humidity: "--"
    }
});
    definePageMeta({
        layout: "dashboard",
    });
</script>
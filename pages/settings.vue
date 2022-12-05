<template>
    <div class="w-full h-screen bg-black-primary-2">
<!-- 
        <div class="flex justify-evenly items-center h-auto py-8">
            <div class="flex flex-col w-2/6 h-72 bg-blue-primary rounded-lg">
                <p class="pt-7 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Carbon</p>
                <div class="flex flex-1 flex-col pt-4 content-evenly">
                    <div class="my-5">
                        <p class="text-xs text-white-primary/60 text-center font-montserrat">Carbon Credits*</p>
                    </div>
                    <div class="my-5">
                        <p class="text-xs text-white-primary/60 text-center font-montserrat">Emission</p>
                    </div>
                </div>
            </div>
            <div class="w-3/6 h-72 bg-black-secondary-2 rounded-lg">
                <p class="pt-4 pl-6 font-montserrat font-semibold text-xl text-white-secondary">Performance</p>
                <div class="grid pt-4 grid-cols-2">
                    <div class="mx-5 mt-2">
                        <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Engine Efficiency</p>
                    </div>
                    <div class="mx-5 mt-2">
                        <p class="text-xs text-white-primary/60 pl-6 font-montserrat">Humidity</p>
                    </div>
                </div>
                <p class="pt-3 pl-6 font-montserrat font-semibold text-base text-white-secondary">Badges</p>
                <img src="/img/badges.png" alt="">
            </div>
        </div>
        <div class="object-contain bg-black-secondary-2">
            Hello
        </div> -->








        <div class="p-20 text-white-primary bg-black-primary w-full">
            <p class="p-5 ">Wallet Address</p>
            <div class="p-5 bg-blue-primary full rounded-full self-start">
                <a>0xA454363F6Fbd9401eA420FF05e7856C7b2c0B186</a>
            </div>
        </div>

        <div class="p-10" id="Terms">
            <div class="justify-start p-10 font-2xl ">
                <p class=" text-white-primary text-2xl">These Terms and Conditions have been created to ensure a positive experience for all
                parties using the Project.By selling carbon credits on the Project
                Marketplace you accept these Seller terms and conditions (the “Terms and
                Conditions”).

                To accept and adopt these Terms and Conditions, please click on the ‘I Accept’ box in
                the Submission Form. Upon submission of your project
                information and acceptance of these Terms and Conditions, Soot will review
                your submission.</p>
                <input class="" type="checkbox">
            </div>
        </div>
    </div>

</template>
const credit = $ref("")
<script setup>
definePageMeta({
    layout: "dashboard",
});
</script>
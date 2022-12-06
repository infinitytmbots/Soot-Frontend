<template>
    <div class="w-full h-screen bg-black-primary-2">
        <div class="p-20 text-white-primary bg-black-primary w-full">
            <p class="p-5 ">Wallet Address</p>
            <div class="p-5 bg-blue-primary full rounded-full self-start">
                <a>{{ data.wallet }}</a>
            </div>
            <button class="p-5 text-black-primary bg-white-secondary h-1/2 rounded-full self-start text-l"
                    @click="minter">Mint
            </button>
        </div>

        <div class="p-10" id="Terms">
            <div class="justify-start p-10 font-2xl ">
                <p class=" text-white-primary text-2xl">These Terms and Conditions have been created to ensure a
                    positive experience for all
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

import longseries from "@/data/UserData";

let data = longseries[0].data

async function minter() {
    console.log("bre");
    const res = await fetch(
        "http://localhost:3001/mint",
        {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({credit: data.carbon.credit}),
        },
    ).catch(() => {
    });
    fetch(
        "http://localhost:3001/image",
        {
            method: "POST",
            headers: {"content-type": "application/json"},
        body: JSON.stringify({recipientAddress: data.wallet,name: new Date().toISOString().slice(0, 10),description: "An NFT to prove carbon credits"}),
        },
    ).catch(() => {
    });

}
</script>
<template>
    <div class="w-full h-screen bg-black-primary-2 flex justify-center">
        <div class="w-full h-full grid place-content-center">
            <!--            <img src="" + {{CID}}> -->
            <button class="p-5 text-white-primary bg-blue-primary rounded-full h-fit" @click="minter">Mint
            </button>
            <p>{{ value }}</p>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "dashboard",
});
let CID = "https://gateway.pinata.cloud/ipfs/QmPS1V6bAJxZuHna6L7u434tVzZ3AhPvHrv4DwFaigHoGK";
import longseries from "@/data/UserData";

let value = "MINT NFT"

async function minter() {
//    console.log(CID);
    let data = longseries[0].data
    value = "Awaiting Request"
    const res = await fetch(
        "http://localhost:3001/mint",
        {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({credit: data.carbon.credit}),
        },
    ).catch(() => {
    });
    console.log(typeof(res.message))
    CID = "https://gateway.pinata.cloud/ipfs/" + res.message
    value = CID;
}
</script>
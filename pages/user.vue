<template>
    <div class="w-full h-screen bg-black-primary-2 ">
        <div class="w-full h-full divide-y">
            <button class="p-5 text-white-primary bg-blue-primary w-full h-1/2 text-8xl" @click="minter">Mint</button>
            <button class="p-5 text-white-primary bg-blue-primary w-full h-1/2 text-8xl" @click="view">View</button>
        </div>
    </div>
</template>
<script setup>
import longseries from "@/data/UserData";
definePageMeta({
    layout: "dashboard",
});
let CID = "https://gateway.pinata.cloud/ipfs/QmPS1V6bAJxZuHna6L7u434tVzZ3AhPvHrv4DwFaigHoGK";

function view(){
    location.href = CID; 
}

async function minter() {
    //    console.log(CID);
    let data = longseries[0].data
    value = "Awaiting Request"
    const res = await fetch(
        "http://localhost:3001/mint",
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ credit: data.carbon.credit }),
        },
    ).catch(() => {
    });
    console.log(typeof (res.message.CID))
    // CID = "https://gateway.pinata.cloud/ipfs/" + res.message
    value = CID;
}
</script>
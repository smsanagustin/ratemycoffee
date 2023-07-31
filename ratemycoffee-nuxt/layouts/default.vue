<template>
    <div>
        <header class="m-0">
            <nav class="text-white mx-auto p-8 px-16 flex justify-between">
                <div>
                    <NuxtLink class="font-bold text-4xl" to="/">ratemycoffee</NuxtLink>
                </div>
                <ul class="flex gap-14 mt-2">
                    <li><NuxtLink>HOME</NuxtLink></li>
                    <li><NuxtLink>COFFEE SHOPS</NuxtLink></li>
                    <li><NuxtLink>MOST RATED COFFEES</NuxtLink></li>
                </ul>
                <button class="bg-white rounded-md px-5 py-3 font-bold">
                    <span class="text-maintheme text-sm">WRITE A REVIEW</span>
                </button>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
        <footer>
            <div class="bg-maintheme text-white p-7">
                <p>ratemycoffee</p>
                <p>All rights reserved. 2023</p>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style>
    header {
        background-color: #B08968;
    }
</style>
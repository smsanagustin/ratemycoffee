<template>
    <div>
        <header class="m-0">
            <nav class="text-white mx-auto p-4 px-16 flex justify-between">
                <div>
                    <NuxtLink class="font-bold text-4xl" to="/">ratemycoffee</NuxtLink>
                </div>
                <ul class="flex gap-14 mt-2">
                    <li><NuxtLink to="/" class="hover:underline">HOME</NuxtLink></li>
                    <li><NuxtLink to="/coffeeshops" class="hover:underline">COFFEE SHOPS</NuxtLink></li>
                    <li><NuxtLink to="/coffees" class="hover:underline">COFFEES</NuxtLink></li>
                    <li><NuxtLink to="/saved-reviews" class="hover:underline">SAVED REVIEWS</NuxtLink></li>
                </ul>
                <NuxtLink to="/writereview" class="bg-white rounded-lg px-5 py-2 cursor-pointer">
                    <span class="text-maintheme text-sm">WRITE A REVIEW</span>
                </NuxtLink>
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
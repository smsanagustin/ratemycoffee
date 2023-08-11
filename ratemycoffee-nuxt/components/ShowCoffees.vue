<template>
    <div>
        <div class="mx-20 mb-7"> 
            <div class="coffee-sort-wrapper mt-60 mr-24">
                <CoffeeSort/>
            </div>
        </div>
        <div class="mx-20 mb-10 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <NuxtLink v-for="coffee in coffees" :to="`/coffee/${coffee.name}`">
                <ItemCard :item="coffee"/>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { coffees } = defineProps(["coffees"])
</script>

<style lang="scss" scoped>
    .coffee-sort-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
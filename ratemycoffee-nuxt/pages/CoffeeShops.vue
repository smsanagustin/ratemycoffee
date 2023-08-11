<template>
    <div>
        <SearchCoffeeShop class="my-14"/>
        <p class="text-3xl ml-20">Coffee Shops</p>
        <ShowCoffeeShops :coffeeShops="coffeeShops"/> 
    </div>
</template>

<script setup>
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffeeShops = getCoffeeShops(reviews.value);
</script>

<style scoped> 
</style>
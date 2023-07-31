<template>
    <div>
        <SearchBarCoffee class="my-14"/>
        <div class="rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <ReviewCard v-for="coffeeShop in coffeeShops" :item="coffeeShop"/>
        </div>
    </div>
</template>

<script setup>
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffeeShops = getCoffeeShops(reviews.value);
</script>

<style lang="scss" scoped>

</style>
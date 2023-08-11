<template>
    <div>
        <SearchCoffeeShop class="my-14"/>
        <p class="text-3xl ml-20">Coffee Shops</p>
        <ShowCoffeeShops :coffeeShops="results"/> 
    </div>
</template>

<script setup>
    const searchQuery = useSearchQueryForCoffeeShop()
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffeeShops = getCoffeeShops(reviews.value);

    const results = computed(() => {
        return coffeeShops.filter(coffeeShop => coffeeShop.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
</script>

<style scoped> 
</style>
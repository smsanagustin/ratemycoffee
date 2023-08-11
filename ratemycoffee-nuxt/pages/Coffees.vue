<template>
    <div>
        <SearchCoffee class="my-14"/>
        <p class="mx-20 text-4xl">Coffees</p> 
        <ShowCoffees :coffees="coffees"/>
    </div>
</template>

<script setup>
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffees = getCoffees(reviews.value);
</script>

<style scoped>
    
</style>
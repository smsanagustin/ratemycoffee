<template>
    <div>
        <SearchCoffee class="my-14"/>
        <div class="mx-20 mb-7">
            <p class="text-3xl">Coffees</p>
            <div class="coffee-sort-wrapper mr-24 mt-60">
                <CoffeeSort/>
            </div>
        </div>
        <div class="mx-20 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <ItemCard v-for="coffee in coffees" :item="coffee"/>
        </div>
    </div>
</template>

<script setup>
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffees = getCoffees(reviews.value);
</script>

<style scoped>
    .coffee-sort-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
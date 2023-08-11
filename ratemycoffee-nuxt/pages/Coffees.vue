<template>
    <div>
        <SearchCoffee class="my-14"/>
        <p class="mx-20 text-4xl">Coffees</p> 
        <ShowCoffees :coffees="results"/>
    </div>
</template>

<script setup>
    const searchQuery = useSearchQueryForCoffee()
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')

    const coffees = getCoffees(reviews.value);

    const results = computed(() => {
        return coffees.filter(coffee => coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
</script>

<style scoped>
    
</style>
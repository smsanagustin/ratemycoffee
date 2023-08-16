<template>
    <div> 
        <GeneralSearchBar class="my-14"/>
        <div v-if="searchResults.length">
            <div>
                <p class="text-3xl mt-20 ml-20">Results ({{ searchResults.length }})</p>
            </div>
            <div>
                <ShowCoffees :coffees="searchResults"/>
            </div>
        </div>
        <div v-else>
            <p class="text-3xl my-20 ml-20">No coffee found.</p>
        </div>
    </div>
</template>

<script setup>
    const searchQuery = useSearchQuery()

    const {data: reviews} = await useFetch('http://localhost:3000/reviews')
   
    const coffees = getCoffees(reviews.value);
    const searchResults = computed(() => {
        return coffees.filter(coffee => coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
</script>

<style lang="scss" scoped>

</style>
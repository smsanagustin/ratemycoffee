<template>
    <div>
        <GeneralSearchBar class="my-14"/>
        <div v-if="searchResults.length">
            <p class="text-3xl mt-20 ml-20">Results ({{ searchResults.length }})</p>
            <ShowReviewsLocation :reviews="searchResults" class="mb-7"/>
        </div>
        <div v-else>
            <p class="text-3xl my-20 ml-20">Location not found.</p>
        </div>
    </div>
</template>

<script setup>
    const searchQuery = useSearchQuery()

    const {data: reviews} = await useFetch('http://localhost:3000/reviews')
 
    const searchResults = computed(() => {
        return reviews.value.filter(reviews => reviews.location.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
</script>

<style lang="scss" scoped>

</style>
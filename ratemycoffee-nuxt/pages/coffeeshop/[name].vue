<template>
    <div>
        <BackButton class="ml-14 mt-8 mb-14"/>
        <p class="text-3xl my-8 ml-20">Showing coffee reviews from {{ name }} ({{ results.length }})</p>
        <div class="rounded-xl mb-10 border-2 grid grid-cols-3 gap-x-6 p-8 mx-20">
            <div v-for="review in results">
                <NuxtLink :to="`/reviews/${review.id}`">
                    <ItemCard :item="review"/>
                </NuxtLink>
            </div>
        </div>   
    </div>
</template>

<script setup>
    const { name } = useRoute().params;

    const { data: reviews } = await useFetch("http://localhost:3000/reviews")

    const results = computed(() => {
        return reviews.value.filter(review => review.shop === name)
    })
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <BackButton class="mt-8 ml-20"/>
        <p class="text-3xl ml-20 my-8">Showing {{ name }} Reviews ({{ coffeeReviews.length }})</p>
        <div class="mx-20 mb-10 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8">
            <div v-for="review in coffeeReviews">
                <NuxtLink :to="`/reviews/${review.id}`">
                    <ItemCard :item="review"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { name } = useRoute().params;

    const { data: reviews } = await useFetch("http://localhost:3000/reviews");

    const coffeeReviews = computed(() => {
        return reviews.value.filter(review => review.name === name)
    })
</script>

<style lang="scss" scoped>

</style>

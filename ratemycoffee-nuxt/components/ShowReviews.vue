<template>
    <div>
        <div class="rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8">
            <ReviewCard v-for="review in reviewsByLocation" :item="review" :showLocation="showLocation" :location="location"/>
        </div>
    </div>
</template>

<script setup>
    const { data: reviews } = await useFetch("http://localhost:3000/reviews")
    const { showLocation, location } = defineProps(["showLocation", "location"])
    console.log(location)

    const reviewsByLocation = computed(() => {
        return reviews.value.filter(review => review.location == location)
    })
</script>

<style lang="scss" scoped>

</style>
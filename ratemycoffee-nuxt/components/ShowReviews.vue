<template>
    <div>
        <div class="rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8">
            <ReviewCard v-for="review in reviews" :review="review" :showLocation="showLocation"/>
        </div>
    </div>
</template>

<script setup>
    const { data: reviews } = await useFetch("http://localhost:3000/reviews")
    const { showLocation } = defineProps(["showLocation"])
</script>

<style lang="scss" scoped>

</style>
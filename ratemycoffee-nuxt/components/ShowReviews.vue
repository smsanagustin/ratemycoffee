<template>
    <div>
        <div class="rounded-xl border-2 grid grid-cols-3 gap-x-14">
            <ReviewCard v-for="review in reviews" :review="review"/>
        </div>
    </div>
</template>

<script setup>
    const { data: reviews } = await useFetch("http://localhost:3000/reviews")
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <div class="border-2 m-2 rounded-xl review-container">
            <img :src="review.img" class="review-img rounded-t-xl">
            <p class="text-xl mt-3 ml-5">{{ review.name }} - Review</p>
            <p v-if=showLocation class="ml-5">{{ review.location }}</p>
        </div>
    </div>
</template>

<script setup>
    const { review, showLocation } = defineProps(["review", "showLocation"])
</script>

<style scoped> 
    .review-container {
        height: 320px;
    }
    .review-img {
        width: 100%;
        height: 230px;
        object-fit: cover;
    }
</style>
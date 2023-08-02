<template>
    <div class="mt-20">
        <div class="mx-20 mb-7">
            <p class="text-3xl">Saved Reviews</p>
            <div v-if="savedReviews.length" class="coffee-sort-wrapper mr-24 mt-40">
                <SavedReviewsSort/>
            </div>
        </div>
        <div v-if="savedReviews.length" class="mx-20 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <NuxtLink v-for="review in savedReviews" :to="`/reviews/${review.id}`">
                 <ItemCard :item="review"/>
            </NuxtLink>
        </div>
        <div v-else class="mx-20 text-xl h-screen">
            <p>You haven't saved any reviews. To save a review, click the bookmark button beside the review name.</p> 
        </div>
    </div>
</template>

<script setup>
    const savedReviews = useSavedReviews()
</script>

<style scoped>
    .coffee-sort-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
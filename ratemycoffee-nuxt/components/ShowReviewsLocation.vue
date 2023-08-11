<template>
    <div> 
        <div class="mx-20 mt-8 mb-10 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <NuxtLink v-for="review in reviews" :to="`/reviews/${review.id}`">
                <ItemCard :showLocation="true" :key="review.name" :item="review"/>
            </NuxtLink>
        </div> 
    </div>
</template>

<script setup>
    const {reviews} = defineProps(['reviews'])
</script>

<style lang="scss" scoped>

</style>
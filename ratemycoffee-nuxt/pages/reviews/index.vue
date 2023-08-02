<template>
    <div>
        <GeneralSearchBar class="my-20"/>
        <div class="mx-20 mb-7">
            <p class="text-3xl">Results ({{ reviewsByCoffeeName.length }})</p>
            <div class="coffee-sort-wrapper mr-24 mt-72">
                <AllSort/>
            </div>
        </div>
        <div class="mx-20 rounded-xl border-2 grid grid-cols-3 gap-x-6 p-8" >
            <ItemCard v-for="review in reviewsByCoffeeName" :item="review"/>
        </div>
    </div>
</template>

<script setup>
    const {data: reviews} = await useFetch('http://localhost:3000/reviews')
    const userInput = "latte"

    const reviewsByCoffeeName = reviews.value.filter((review) => review.name.toLowerCase().includes(userInput.toLowerCase()))
</script>

<style scoped>
    .coffee-sort-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
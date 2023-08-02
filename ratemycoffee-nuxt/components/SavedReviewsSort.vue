<template>
    <div class="bg-white rounded-xl sort-box">
        <div @click="toggleShowOptions" v-if="!showOptions">
            <div class="rounded-xl border-black border-2 pl-4 pr-2 py-2 cursor-pointer grid grid-cols-9">
                <p class="col-span-8">Sort by: {{ savedReviewsSort }}</p>
                <span class="col-end-10 col-span-1">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </span>
            </div>
        </div>
        <div v-else>
            <div @click="toggleShowOptions" class="grid grid-cols-9 pl-4 pr-2 rounded-t-xl cursor-pointer border-black border-x-2 border-t-2 px-5 py-2">
                <p class="col-span-8">Sort by: {{ savedReviewsSort }}</p>
                <span class="col-end-10 col-span-1">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </span>
            </div>
            
            <div class="border-black border-2 rounded-b-xl space-y-3">
                <p class="px-5 pt-4" @click="toggleSort">Most recent</p>
                <p class="px-5 pt-4" @click="toggleSort">Highest rating first</p>
                <p class="px-5 pt-3 pb-4" @click="toggleSort">Nearest first</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const showOptions = ref(false)
    const savedReviewsSort = useSavedReviewsSort()

    const toggleShowOptions = () => {
        showOptions.value = !showOptions.value
    }

    const toggleSort = (event) => {
        savedReviewsSort.value = event.target.outerText;
        showOptions.value = !showOptions.value
    }
</script>

<style scoped>
.sort-box {
    width: 280px;
}
</style>
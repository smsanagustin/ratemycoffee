<template>
    <div class="bg-white rounded-xl sort-box">
        <div @click="toggleShowOptions" v-if="!showOptions">
            <div class="rounded-xl border-black border-2 pl-4 px-5 py-2 cursor-pointer grid grid-cols-9">
                <p class="col-span-8">Sort by: {{ allSort }}</p>
                <span class="col-end-10 col-span-1">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </span>
            </div>
        </div>
        <div v-else>
            <div @click="toggleShowOptions" class="grid grid-cols-9 rounded-t-xl cursor-pointer border-black border-x-2 border-t-2 pl-4 py-2">
                <p class="col-span-8">Sort by: {{ allSort }}</p>
                <span class="col-end-10 col-span-1">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </span>
            </div>
            
            <div class="border-black border-2 rounded-b-xl space-y-3">
                <p class="px-5 pt-4" @click="toggleSort">Ratings: low to high</p>
                <p class="px-5" @click="toggleSort">Ratings: high to low</p>
                <p class="px-5" @click="toggleSort">Price: low to high</p>
                <p class="px-5" @click="toggleSort">Price: high to low</p>
                <p class="px-5" @click="toggleSort">Location: nearest</p>
                <p class="px-5 pb-4" @click="toggleSort">Location: farthest</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const showOptions = ref(false)
    const allSort = useAllSort()

    const toggleShowOptions = () => {
        showOptions.value = !showOptions.value
    }

    const toggleSort = (event) => {
        allSort.value = event.target.outerText;
        showOptions.value = !showOptions.value
    }
</script>

<style scoped>
.sort-box {
    width: 300px;
}
</style>
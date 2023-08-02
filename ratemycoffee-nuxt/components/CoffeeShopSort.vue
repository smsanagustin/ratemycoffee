<template>
    <div class="bg-white rounded-xl sort-box">
        <div @click="toggleShowOptions" v-if="!showOptions">
            <div class="rounded-xl border-black border-2 px-5 py-2 cursor-pointer">
                <p>Sort by: 
                    <span class="ml-20">
                         <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </span>
                </p>
            </div>
        </div>
        <div v-else>
            <div @click="toggleShowOptions" class="rounded-t-xl cursor-pointer border-black border-x-2 border-t-2 px-5 py-2">
                <p>Sort by:
                    <span class="ml-20">
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </span>
                </p>
            </div>
            
            <div class="border-black border-2 rounded-b-xl px-5 py-4 space-y-3">
                <p>Most rated</p>
                <p>Nearest</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

   const showOptions = ref(false)

    const toggleShowOptions = () => {
        showOptions.value = !showOptions.value
    }
</script>

<style scoped>
.sort-box {
    width: 200px;
}
</style>
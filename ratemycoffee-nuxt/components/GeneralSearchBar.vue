<template>
    <div class="flex justify-center items-center">
        <div class="w-1/2">
            <div class="text-lg flex pr-5 rounded-xl search-box border-2 border-black">
                <div class="px-4 search-field w-full flex align-center">                
                    <i class="mt-4">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </i>
                    <input class="focus:outline-none ml-3 w-11/12" type="text" placeholder="Search by coffee, coffee shop or location...">
                </div>
                <div class="dropdown">
                    <p class="default-option"><span class="">{{ option }}</span></p>
                    <ul v-if="showCategory">
                        <li @click="switchOption">Search by coffee</li>
                        <li @click="switchOption">Search by coffee shop</li>
                        <li @click="switchOption">Search by location</li>
                    </ul>
                </div>
                <i v-if="!showCategory" class="mt-4" @click="toggleShowCategory">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </i>
                <i v-else class="mt-4" @click="toggleShowCategory">
                    <font-awesome-icon :icon="['fas', 'caret-up']" />
                </i>
            </div>
        </div>
    </div>
</template>

<script setup>
    const option = ref('Search by coffee')
    const showCategory = ref(false);

    const toggleShowCategory = () => {
        showCategory.value = !showCategory.value
    }
    const switchOption = (event) => {
        option.value = event.target.outerText
        toggleShowCategory()
    }
</script>

<style  scoped>
.search-box {
    display: flex;
    justify-content: space-between; 
}

.search-box .dropdown {
    position: relative;
}

.search-box .dropdown .default-option {
    width: 210px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    border-left: 2px solid black;
}

.default-option {
}

.search-box .dropdown ul {
    width: 242px;
    position: absolute;
    border-radius: 10px;
    top: 70px;
    padding-left: 26px;
    background-color: white;
    border: black solid 2px;
    /* padding-top: 19px; */
    /* display: none; */
}

.search-box .dropdown ul li {
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}

.search-box .dropdown ul.active {
    display: block;
}
</style>
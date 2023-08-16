<template>
    <div class="flex justify-center items-center">
        <div class="w-1/2">
            <div class="text-lg flex rounded-xl search-box border-2 border-black">
                <div class="px-4 search-field w-full flex align-center">                
                    <i class="mt-2">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </i>
                    <input v-model="searchQuery" @keyup="handleEnterKey" class="focus:outline-none ml-3 w-11/12" type="text" placeholder="Search by coffee, coffee shop or location...">
                </div>
                <div class="dropdown">
                    <NuxtLink :to="`/${option.replace(/\s/g, '')}`">
                        <div>
                            <p class="default-option"><span class="">{{ option }}</span></p>
                        </div> 
                    </NuxtLink>
                   <ul v-if="showCategory">
                        <li @click="switchOption">
                            Search by coffee
                        </li>
                        <li @click="switchOption">
                            Search by coffee shop
                        </li>
                        <li @click="switchOption">
                            Search by location
                        </li>
                    </ul>
                </div>
                <i v-if="!showCategory" class="mt-2 px-4" @click="toggleShowCategory">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </i>
                <i v-else class="mt-2 px-4" @click="toggleShowCategory">
                    <font-awesome-icon :icon="['fas', 'caret-up']" />
                </i>
            </div>
        </div>
    </div>
</template>

<script setup>
    const option = useOption() 
    const showCategory = ref(false);
    const searchQuery = useSearchQuery()

    const toggleShowCategory = () => {
        showCategory.value = !showCategory.value
    }
    const switchOption = async (event) => {
        option.value = event.target.outerText
        toggleShowCategory()
        await navigateTo(`/${option.value.replace(/\s/g, '')}`);
    }

    const handleEnterKey = async (event) => { 
        if (event.key === 'Enter' && searchQuery.value) {
            await navigateTo(`/${option.value.replace(/\s/g, '')}`);
        }
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

.search-box .dropdown {
    width: 210px;
    height: 40px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
}

.default-option {
    width: 210px;
    height: 41px;
    line-height: 43px;
    text-align: center;
    border-left: 2px solid black;
    cursor: pointer;
    margin-left: 5px;
}

.search-box .dropdown ul {
    text-align: start;
    width: 257px;
    position: absolute;
    border-radius: 10px;
    top: 70px;
    padding-left: 26px;
    background-color: white;
    border: black solid 2px;
    z-index: 1;
    /* padding-top: 19px; */
    /* display: none; */
}

.search-box .dropdown ul li {
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.search-box .dropdown ul.active {
    display: block;
}
</style>
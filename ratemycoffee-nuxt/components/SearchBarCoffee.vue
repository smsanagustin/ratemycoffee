<template>
    <div class="flex justify-center items-center">
        <div class="w-1/2">
            <div class="text-lg flex rounded-xl search-box border-2 border-black">
                <div class="px-4 search-field w-full flex align-center">                
                    <i class="mt-2">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </i>
                    <input class="focus:outline-none ml-3 w-11/12" type="text" placeholder="Search coffee shop">
                </div>
                <div class="search-button">
                    <p class="button-text"><span class="">Search</span></p>
                </div>
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

.button-text {
    width: 150px;
    height: 41px;
    line-height: 43px;
    text-align: center;
    cursor: pointer;
    border-left: 2px solid black;
    margin-left: 5px;
    border-radius: 0px 10px 10px 0px;
}
</style>
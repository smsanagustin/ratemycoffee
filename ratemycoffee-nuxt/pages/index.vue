<template>
    <div>
        <GeneralSearchBar class="m-12"/>
        <div v-if="false" class="image-container">
            <img src="../assets/images//coffee-homepage-bg.jpg">
            <div class="location-sb-div">
                <p class="text-white mb-5 text-2xl">Enter your location to see coffee reviews near you</p>
                <input type="text" v-model="locationInput" class="focus: outline-none focus:shadow-xl location-sb rounded-xl px-4" placeholder="e.g. Silang, Cavite">
                <div v-if="locationInput" class="bg-white mt-4 rounded-xl" >
                    <ul>
                        <li class="px-5 py-3 cursor-pointer" @click="setLocation" v-for="place in placesBasedOnUserInput"> {{ place }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="coffees-near-you mx-20">
                <p class="text-3xl mb-7">Coffee reviews near you</p>
                <ShowReviews :showLocation="true"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    const locationInput = ref(null)
    const location = ref('')

    // list of places
    const places = ['Silang, Cavite', 'Tagaytay, City', 'Los Banos, Laguna', 'Plaridel, Bulacan']

    const placesBasedOnUserInput = computed(() => {
        return places.filter(place => place.toLowerCase().includes(locationInput.value))
    })

    const setLocation = (event) => {
        location.value = event.target.outerText;
    }
</script>

<style scoped>
.image-container {
    position: relative; /* all elements inside will be relative to this div */
}
.location-sb-div {
    position: absolute;
    top: 200px;
    left: 50%;
    z-index: 1;

    /*moves the element to the left by 50% of its own width*/
    transform: translateX(-50%); 
}
.location-sb {
    height: 45px;
    width: 760px;
    margin: 0px auto;

}
</style>
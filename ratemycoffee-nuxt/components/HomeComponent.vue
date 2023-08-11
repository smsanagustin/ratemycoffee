<template>
    <div>
        <div> 
            <div v-if="!userLocation" class="image-container">
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
                <div class="mx-20">
                    <p class="text-3xl mb-7">Coffee reviews near you</p>
                    <ShowReviewsHome :showLocation="true" :location="userLocation" class="mb-7"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const locationInput = ref(null)
    const userLocation = useUserLocation()

    // list of places
    const places = ['Silang, Cavite', 'Tagaytay, Cavite', 'Los Banos, Laguna', 'Plaridel, Bulacan']

    const placesBasedOnUserInput = computed(() => {
        return places.filter(place => place.toLowerCase().includes(locationInput.value.toLowerCase()))
    })

    const setLocation = (event) => {
        userLocation.value = event.target.outerText;
        console.log(userLocation)
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
<template>
    <div>
        <BackButton class="mt-8 ml-8"/>
        <p class="ml-20 mt-12 text-4xl">Write a review</p>
        <form @submit.prevent="validateForm">
            <div class="grid grid-cols-2 mt-10">
                <div class="ml-32">
                    <div>
                        <input v-model="name" required class="input-bars" type="text" placeholder="Coffee name"><br> 
                        <input v-model="price" required class="input-bars" type="text" placeholder="Price in PHP"><br>
                        <input v-model="shop" required class="input-bars" type="text" placeholder="Coffee shop"><br> 
                        <input v-model="location" required class="input-bars" type="text" placeholder="Location"><br> 
                    </div>
                    <div>
                        <input required name="temp-selector" type="radio" id="hot">
                        <label for="hot" class="mr-5 ml-1">Hot</label>
                        <input name="temp-selector" type="radio" id="iced">
                        <label class="ml-1" for="iced">Iced</label>

                        <label class="ml-16">Size</label>
                        <input required class="border-2 border-black rounded-lg h-9 ml-5 p-3" placeholder="e.g. small, grande">
                    </div>
                    <div class="mt-10"> 
                        <div>
                            <p class="text-lg mb-2 font-bold">Attach image / proof:</p>
                            <div class="border-2 rounded-lg border-black w-4/5 flex justify-center p-20">
                                <div>
                                    <font-awesome-icon class="mr-2" :icon="['fas', 'image']" />
                                </div> 
                                <p>Upload</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="text-xl font-bold">*Rate the coffee based on</p>
                    <div class="ml-8 mt-4">
                        <div v-for="category in ratingCategories" :key="category" class="grid grid-cols-2">
                            <p>{{ category }}</p>
                            <div>
                                <NuxtRating @rating-selected="updateTasteRating" :read-only="false" :ratingValue="1.2" activeColor="#000000" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <p class="text-lg font-bold">Other comments (optional):</p>
                        <textarea type="text" class="border-2 border-black rounded-lg w-4/5 h-72 align-text-top p-4"></textarea>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-20 mb-10">
                <button class="text-white text-xl main-theme rounded-lg py-2 px-20">
                    SUBMIT
                </button>
            </div>
        </form>
        <div v-if="formError">
            {{ formError }}
        </div>
    </div>
</template>

<script setup>
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

    const ratingCategories = ['Taste', 'Coldness', 'Caffeine', 'Overall']
    const formError = ref("")
    const name = ref('')
    const shop = ref('')
    const price = ref('')
    const location = ref('')

    const updateTasteRating = (event) => {
        console.log(event)
    }

    const validateForm = () => {
    }
</script>

<style scoped>
.input-bars {
    border: 2px solid black;
    border-radius: 8px;
    height: 40px;
    width: 500px;
    margin-bottom: 20px;
    padding-left: 10px;
}
.main-theme {
    background-color: #B08968;
}
</style>
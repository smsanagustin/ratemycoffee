<template>
    <div>
        <BackButton class="mt-10 ml-10"/>
        <div class="grid grid-cols-2 gap-24 px-24 my-10">
            <div class="image-div">
                <img :src="review.img" class="review-image rounded-xl">
            </div>
            <div class="mt-16">
                <p class="text-5xl font-bold">{{ review.name }}
                <span class="ml-5">
                    <button @click="likeReview" class="mr-4">
                        <font-awesome-icon v-if="!liked" :icon="['far', 'heart']" size="xs" />
                        <font-awesome-icon v-else :icon="['fas', 'heart']" size="xs" />
                    </button>
                    <button @click="saveReview(review.name, review.id, review.img)">
                        <font-awesome-icon v-if="!saved"  size="xs" :icon="['far', 'bookmark']" />
                        <font-awesome-icon v-else size="xs" :icon="['fas', 'bookmark']" />
                    </button>
                </span>
                </p>
                <div class="mt-8 text-lg">
                    <div class="grid grid-cols-2">   
                        <div>
                            <p class="text-3xl mb-3">Details</p>
                            <p><b>Price:</b> {{ review.price }}</p>
                            <p><b>Shop:</b> {{ review.shop }}</p>
                            <p><b>Size:</b> {{ review.size }}</p>
                            <p><b>Location: </b>{{ review.location }}</p>
                            <p><b>Iced or hot: </b>{{ review.temperature }}</p>
                        </div>
                        <div>
                            <p class="text-3xl mb-3">Rating</p>
                            <p><b>Taste: </b>
                                <span v-for="star in parseInt(review.rating.taste)" :key="star">&#9733;</span>
                            </p>
                            <p><b>Caffeine: </b>
                                <span v-for="star in parseInt(review.rating.caffeine)" :key="star">&#9733;</span>
                            </p>
                            <p><b>Coldness/Hotness: </b>
                                <span v-for="star in parseInt(review.rating.coldness)" :key="star">&#9733;</span>
                            </p>
                        </div>
                    </div>
                    <div class="mt-10">
                        <p class="text-3xl">Review</p>
                        <div class="border-2 rounded-xl p-7 mt-5">
                            <p>
                                {{ review.other_comments }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'http://localhost:3000/reviews/' + id

    const saved = ref(false) 
    const liked = ref(false)
    const savedReviews = useSavedReviews()
    const savedReviewsList = useSavedReviewsList()

    // checks if review has been already saved
    for (var i = 0; i < savedReviewsList.value.length; i++) {
        if (savedReviewsList.value[i] === id) {
            saved.value = true;
            break;
        }
    }

    // fetch review details
    const { data: review } = await useFetch(uri)

    const likeReview = () => {
        liked.value = !liked.value
    }
    const saveReview = (name, id, image) => {
        if (!saved.value) {
            saved.value = !saved.value
            let newObj = {
                name: name,
                id: id,
                img: image
            }

            savedReviews.value.push(newObj)
            savedReviewsList.value.push(id)
        }
        else {
            saved.value = !saved.value
            savedReviews.value = savedReviews.value.filter((review) => review.id !== id)
            savedReviewsList.value = savedReviewsList.value.filter((id) => id !== id)
        }
    }
</script>

<style scoped>
    .image-div {
        height: 700px;
    }
    .review-image {
        width: 100%;
        height: 700px;
        object-fit: cover
    }
</style>
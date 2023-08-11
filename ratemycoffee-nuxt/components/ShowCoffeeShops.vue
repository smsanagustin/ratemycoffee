<template>
    <div>
        <div class="mx-20 mb-7 grid grid-cols-5"> 
            <div class="coffee-shop-sort-wrapper mr-24 mt-60">
                <CoffeeShopSort/>
            </div>
        </div>
        <div class="rounded-xl mb-10 border-2 grid grid-cols-3 gap-x-6 p-8 mx-20 coffee-shop-list" >
            <ItemCard v-for="coffeeShop in coffeeShops" :item="coffeeShop"/>
        </div>
    </div>
</template>

<script setup>
    const { coffeeShops } = defineProps(['coffeeShops'])
</script>

<style lang="scss" scoped>
    .coffee-shop-sort-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
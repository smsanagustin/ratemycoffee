// store/index.js
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    location: ''
  }),
  actions: {
    setLocation(location) {
      this.location = location
    }
  }
})

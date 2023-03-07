import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
    state: () => ({
        darkTheme: false as boolean
    }),
    actions: {
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        }
    }
});

export default useMainStore;


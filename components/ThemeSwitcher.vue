<template>
    <!-- Light/Dark Switcher -->
    <div class="deebo_fn_switcher_wrap">
        <label>
            <span class="light">Light</span>
                <span class="checkbox_wrap">
                    <input 
                    :checked="darkTheme === true"
                    type="checkbox" 
                    id="skin_switcher" >
                    <span @click.prevent="changeTheme()" class="slider round"></span>
                </span>
            <span class="dark">Dark</span>
        </label>
    </div>
    <!-- /Light/Dark Switcher -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMainStore from '~~/store';

export default defineComponent({
    setup() {
        const mainStore = useMainStore();
        const { 
            changeTheme
        } = mainStore;
        const darkTheme = computed(() => mainStore.darkTheme);

        return {
            darkTheme,
            changeTheme
        }
    },
})
</script>

<script setup>
import {computed, onMounted, ref} from 'vue'
import drawerContent from '@/layouts/components/drawerContent.vue';
import navItem from '@/layouts/navigations/index'
import { RouterView } from 'vue-router';
import logo from '@/assets/images/hoc-logo.png'
import { hexToRgb } from '@/helpers/utils';
import { useTheme } from 'vuetify/lib/composables/theme';

const { global } = useTheme()
const drawer = ref(null)

const onDrawer = () => {
    return drawer.value = !drawer.value
}

onMounted(() => {
})
</script>
<template>
    <v-app
        :style="`--v-global-theme-primary: ${hexToRgb(
            global.current.value.colors.primary
        )}`"
    >
        <v-navigation-drawer v-model="drawer">
            <div class="text-center pa-2">
                <v-img cover :src="logo"></v-img>
            </div>
            <drawerContent :nav-item="navItem" />
        </v-navigation-drawer>
        <v-app-bar style="background: transparent;" elevation="0" class="py-1">
            <div class="mx-3 pa-0 w-100 d-flex align-center bg-white rounded-sm border border-black">
                <v-app-bar-nav-icon @click="onDrawer"></v-app-bar-nav-icon>   
                <v-app-bar-title style="font-family: muol;">UI Design Concept</v-app-bar-title>            
            </div>
        </v-app-bar>
        <v-main>
            <div class="pa-3">
                <RouterView></RouterView>
            </div>
        </v-main>
        <v-footer
            app
            class=""
            style="background: transparent;"
        >
            <div class="mx-0 pa-2 w-100 d-flex align-center bg-white rounded-sm border border-black">
                &copy; {{ new Date().getFullYear() }} - Made by House of coders 💙            
            </div>
        </v-footer>
    </v-app>
</template>
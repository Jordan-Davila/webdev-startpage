<template>
    <div
        class="w-screen h-screen text-sm text-white flex justify-end items-start p-16"
        style="background: #292d3e"
    >
        <SitesModule />
        <ReposModule />
        <div class="flex flex-col">
            <CalendarModule />
            <FavoritesModule />
        </div>
        <Clock />
    </div>
</template>
<script>
import SitesModule from "./components/SitesModule.vue";
import FavoritesModule from "./components/FavoritesModule.vue";
import ReposModule from "./components/ReposModule.vue";
import CalendarModule from "./components/CalendarModule.vue";
import Clock from "./components/Clock.vue";
export default {
    components: { SitesModule, FavoritesModule, CalendarModule, ReposModule, Clock },
    data() {
        return {
            message: "Hello World!",
        };
    },
};
</script>

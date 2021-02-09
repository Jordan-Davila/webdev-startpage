<template>
    <div
        class="fav-links flex flex-col py-6 px-8 rounded-lg shadow-lg"
        style="background: #303348; min-width: 16rem"
    >
        <div class="title text-sm font-bold uppercase mb-3">Favorites</div>
        <template v-for="favorite in $page.favorites">
            <a :href="favorite.url" class="mb-1 hover:text-indigo-600"> # {{ favorite.name }} </a>
        </template>
    </div>
</template>
<script>
export default {};
</script>

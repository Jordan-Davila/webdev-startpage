<template>
    <div
        class="dev-links flex flex-col py-6 px-8 rounded-lg shadow-lg mr-6 w-64"
        style="background: #303348; min-width: 18rem"
    >
        <div class="title text-sm font-bold uppercase mb-3">Dev Sites</div>
        <template v-for="site in $page.sites">
            <a :href="'http://' + site + $page.config.tld" class="mb-1 hover:text-indigo-600">
                # {{ site + $page.config.tld }}
            </a>
        </template>
    </div>
</template>
<script>
export default {};
</script>

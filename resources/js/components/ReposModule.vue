<template>
    <div
        class="fav-links flex flex-col py-6 px-8 rounded-lg shadow-lg mr-6"
        style="background: #303348; min-width: 16rem"
    >
        <div class="title text-sm font-bold uppercase mb-3">GitHub Repositories</div>
        <template v-for="repo in repos">
            <a :href="repo.clone_url" class="mb-1 hover:text-indigo-500 lowercase">
                # {{ repo.name }}
            </a>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repos: [],
        };
    },
    async created() {
        axios
            .get(
                `https://api.github.com/search/repositories?q=user:${this.$page.config.githubUsername}`,
                {
                    params: {
                        sort: "updated",
                    },
                    headers: {
                        Authorization: `Bearer ${this.$page.config.githubAuthToken}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((results) => {
                this.repos = results.data.items;
            });
    },
};
</script>

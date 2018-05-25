<template>
    <Page class="page">
        <ActionBar title="Pick a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.push('/home')"/
            >
        </ActionBar>

        <StackLayout>
            <Label class="h1 text-center p-y-10" :text="category.name"/>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    props: {
    },

    data() {
        return {
            category_id: this.$route.params.category_id,
        }
    },

    computed: {
        category() {
            return this.$categories.find((category) => {
                return category.id == this.category_id;
            });
        },
    },

    created() {
        console.log(this.$route.params);
    },
};
</script>

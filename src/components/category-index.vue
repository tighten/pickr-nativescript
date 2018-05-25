<template>
    <Page class="page">
        <ActionBar title="Pick a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.push('/home')"/
            >
        </ActionBar>

        <StackLayout>
            <ListPicker :items="category_array" v-model="selected" />

            <Button class="btn btn-primary" @tap="$router.push('/categories/' + selected_id + '/pick')">Pick Something!</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
        }
    },

    computed: {
        categories() {
            return this.$store.get('categories') || [];
        },
        selected_id() {
            return this.$_.get(this.categories, this.selected, {}).id;
        },
        category_array() {
            return this.categories.map((category) => {
                return category.name;
            });
        },
    },
};
</script>

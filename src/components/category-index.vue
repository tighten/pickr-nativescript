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
        </StackLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Category One',
                },
                {
                    id: 2,
                    name: 'Category Two',
                },
                {
                    id: 3,
                    name: 'Category Three',
                },
            ],
            selected: null,
        }
    },

    computed: {
        category_array() {
            return this.categories.map((category) => {
                return category.name;
            });
        },
    },

    watch: {
        selected(val) {
            console.log('selected ' + val);
        },
    },
};
</script>

<style scoped>
</style>

<template>
    <Page class="page">
        <ActionBar title="Pick a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$navigateBack"
            />
        </ActionBar>

        <StackLayout>
            <ListPicker :items="category_array" v-model="selected" />

            <Button class="btn btn-primary" @tap="pickFromCategory">Pick Something!</Button>

            <Button class="btn btn-primary" @tap="manageCategory">Manage Category</Button>

            <Button class="btn btn-primary" @tap="addCategory">Add Category</Button>
        </StackLayout>
    </Page>
</template>

<script>
import CategoryCreate from './CategoryCreate.vue';
import CategoryEdit from './CategoryEdit.vue';
import CategoryPick from './CategoryPick.vue';

export default {
    name: 'CategoryIndex',
    data() {
        return {
            selected: 0,
        }
    },
    computed: {
        categories() {
            return this.$store.get('categories') || [];
        },
        selected_id() {
            return this.categories ? this.categories[this.selected].id : 0;
        },
        category_array() {
            return this.categories.map((category) => {
                return category.name;
            });
        },
    },
    methods: {
        addCategory() {
            this.$navigateTo(CategoryCreate);
        },
        manageCategory() {
            this.$navigateTo(CategoryEdit, {
                props: {
                    category_id: this.selected_id,
                },
            });
        },
        pickFromCategory() {
            this.$navigateTo(CategoryPick, {
                props: {
                    category_id: this.selected_id,
                },
            });
        },
    },
};
</script>

<template>
    <Page class="page">
        <ActionBar title="Update category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$navigateBack"
            />
        </ActionBar>

        <StackLayout class="p-10">
            <Label class="h1 text-center p-y-10" :text="'Update ' + category_name"/>

            <TextField v-model="category_name" hint="Category Name" />

            <Button class="btn btn-primary" @tap="save">Save</Button>

            <Button class="btn btn-primary" @tap="remove">Delete Category</Button>
        </StackLayout>
    </Page>
</template>

<script>
import CategoryIndex from '@/components/CategoryIndex.vue';

export default {
    name: 'CategoryUpdate',
    data() {
        return {
            category_id: this.$store.getters.selected_category ?
                this.$store.getters.selected_category.id :
                null,
            category_name: this.$store.getters.selected_category ?
                this.$store.getters.selected_category.name :
                null,
        }
    },
    computed: {
        category() {
            return this.$store.getters.selected_category;
        },
        items() {
            return this.category.items;
        },
    },
    methods: {
        save() {
            this.$store.dispatch('updateSelectedCategory', {
                    name: this.category_name,
                }).then(this.$navigateBack);
        },
        remove() {
            this.$store.dispatch('deleteCategory', this.category_id)
                .then(() => {
                    this.$navigateTo(CategoryIndex);
                });
        },
    },
};
</script>

<template>
    <Page class="page">
        <ActionBar title="Manage category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$navigateBack"
            />
        </ActionBar>

        <StackLayout class="p-10">
            <!-- <Label class="la" @tap="" :text="'la-pencil' | fonticon" fontSize="24" /> -->

            <Label class="h1 text-center p-y-10" :text="'Manage ' + category_name"/>

            <ListView for="item in items" @itemTap="">
                <v-template>
                    <Label :text="item.name" />
                </v-template>
            </ListView>

            <Button class="btn btn-primary" @tap="addItem">+ Add Item</Button>

            <Button class="btn btn-primary" @tap="edit">Edit Category</Button>
        </StackLayout>
    </Page>
</template>

<script>
import CategoryUpdate from './CategoryUpdate.vue';
import ItemCreate from './ItemCreate.vue';

export default {
    name: 'CategoryEdit',
    computed: {
        category() {
            return this.$store.getters.selected_category;
        },
        category_name() {
            return this.category ? this.category.name : null;
        },
        items() {
            return this.category ? this.category.items || [] : [];
        },
    },
    methods: {
        addItem() {
            this.$navigateTo(ItemCreate);
        },
        edit() {
            this.$navigateTo(CategoryUpdate);
        },
    },
};
</script>

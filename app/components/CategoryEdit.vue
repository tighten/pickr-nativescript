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

            <Label class="h1 text-center p-y-10" :text="'Manage ' + category.name"/>

            <ListView for="item in items" @itemTap="">
                <v-template>
                    <Label :text="item.name" />
                </v-template>
            </ListView>

            <Button class="btn btn-primary" @tap="addItem">+</Button>

            <Button class="btn btn-primary" @tap="edit">Edit</Button>

            <Button class="btn btn-primary" @tap="remove">Delete</Button>
        </StackLayout>
    </Page>
</template>

<script>
import CategoryUpdate from './CategoryUpdate.vue';
import ItemCreate from './ItemCreate.vue';

export default {
    name: 'CategoryEdit',
    props: {
        category_id: {},
    },
    computed: {
        category() {
            return this.$store.get('categories', this.category_id);
        },
        items() {
            return this.$store.get(['categories', this.category_id, 'items']);
        },
    },
    methods: {
        addItem() {
            this.$navigateTo(ItemCreate, {
                props: {
                    category_id: this.category_id,
                },
            });
        },
        edit() {
            this.$navigateTo(CategoryUpdate, {
                props: {
                    category_id: this.category_id,
                },
            });
        },
        remove() {
            //
        },
    },
};
</script>

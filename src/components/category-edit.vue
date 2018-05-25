<template>
    <Page class="page">
        <ActionBar title="Manage category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.back()"/
            >
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
export default {
    data() {
        return {
            category_id: this.$route.params.category_id,
        }
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
            this.$router.push('/categories/' + this.category_id + '/items-create');
        },
        edit() {
            this.$router.push('/categories/' + this.category_id + '/update');
        },
        remove() {

        },
    },
};
</script>

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

            <!-- <TextField v-model="name" hint="Category Name" /> -->

            <!-- <Button class="btn btn-primary" @tap="create">Add</Button> -->
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
        create() {
            this.$store.post('categories', {
                name: this.name,
            }).then(() => {
                this.$router.back()
            });
        },
    },
};
</script>

<template>
    <Page class="page">
        <ActionBar title="Update category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.back()"/
            >
        </ActionBar>

        <StackLayout class="p-10">
            <Label class="h1 text-center p-y-10" :text="'Update ' + category.name"/>

            <TextField v-model="name" hint="Category Name" />

            <Button class="btn btn-primary" @tap="save">Save</Button>

            <Button class="btn btn-primary" @tap="remove">Delete Category</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            category_id: this.$route.params.category_id,
            name: '',
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
        save() {
            this.$store.put('categories', {
                id: this.category_id,
                name: this.name
            }).then((response) => {
                this.$router.back();
            });
        },
        remove() {
            this.$store.delete('categories', this.category_id)
            .then((response) => {
                this.$router.back();
            });
        },
        update() {
            this.$store.post('categories', {
                name: this.name,
            }).then(() => {
                this.$router.back()
            });
        },
    },
};
</script>

<template>
    <Page class="page">
        <ActionBar title="Add a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.back()"/
            >
        </ActionBar>

        <StackLayout class="p-10">
            <Label class="h1 text-center p-y-10" text="Add a new category"/>

            <TextField v-model="name" hint="Category Name" />

            <Button class="btn btn-primary" @tap="create">Add</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
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

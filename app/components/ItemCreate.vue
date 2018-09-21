<template>
    <Page class="page">
        <ActionBar title="Add an item">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$navigateBack"
            />
        </ActionBar>

        <StackLayout class="p-10">
            <Label class="h1 text-center p-y-10" text="Add an item"/>

            <TextField v-model="name" hint="Item Name" />

            <TextField v-model="description" hint="Item Description" />

            <Button class="btn btn-primary" @tap="create">Add</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    name: 'ItemCreate',
    data() {
        return {
            description: '',
            name: '',
        }
    },
    methods: {
        create() {
            this.$store.dispatch('createItem', {
                    name: this.name,
                    description: this.description,
                }).then(this.$navigateBack);
        },
    },
};
</script>

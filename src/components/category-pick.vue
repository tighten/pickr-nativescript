<template>
    <Page class="page">
        <ActionBar title="Pick a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$router.back()"/
            >
        </ActionBar>

        <StackLayout>
            <Label class="h1 text-center p-y-10" :text="category.name"/>

            <Label class="h1 text-center p-y-10" :text="random_item.name"/>

            <Label class="h3 text-center p-y-10" :text="random_item.description"/>

            <Button class="btn btn-primary" @tap="pickRandomItem">Pick Again!</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            category_id: this.$route.params.category_id,
            random_item: {},
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
        pickRandomItem() {
            this.random_item = this.$_.sample(this.items) || {};
        },
    },

    created() {
        this.pickRandomItem();
    },
};
</script>

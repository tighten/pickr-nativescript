<template>
    <Page class="page">
        <ActionBar title="Pick a category">
            <NavigationButton
                android.systemIcon="ic_menu_back"
                @tap="$navigateBack"
            />
        </ActionBar>

        <StackLayout  class="p-x-10 p-t-20">
            <Label class="category h2 text-center p-y-10" :text="category.name"/>

            <Label class="h1 text-center p-t-10" :text="random_item.name"/>

            <Label class="h3 text-center p-b-10" :text="random_item.description"/>

            <Button class="btn btn-primary" @tap="pickRandomItem">Pick Again!</Button>
        </StackLayout>
    </Page>
</template>

<script>
import sample from 'lodash/sample';

export default {
    name: 'CategoryPick',
    props: {
        category_id: {},
    },
    data() {
        return {
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
            this.random_item = sample(this.items) || {};
        },
    },
    created() {
        this.pickRandomItem();
    },
};
</script>

<style>
    .category {
        color: #bbbbbb;
    }
</style>

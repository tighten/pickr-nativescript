<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Home"/>

        <StackLayout class="p-x-16 p-b-16" verticalAlignment="center">
            <Label class="h1 text-center" text="Pickr"/>

            <Label class="h2 text-center p-10" textWrap=true text="For when indecision may or may not be your problem"/>

            <Button class="btn btn-primary" @tap="goToCategories">Get Started</Button>
        </StackLayout>
    </Page>
</template>

<script>
import CategoryIndex from './CategoryIndex.vue';

export default {
    name: 'Home',
    methods: {
        goToCategories() {
            this.$navigateTo(CategoryIndex);
        },
    },
}
</script>

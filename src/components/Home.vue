<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Home"/>

        <StackLayout class="p-x-10" verticalAlignment="center">
            <Label class="h1 text-center" text="Pickr"/>

            <Label class="h3 text-center p-y-10" textWrap=true text="For when indecision may or may not be your problem"/>

            <Button class="btn btn-primary" @tap="$router.push('/categories')">Get Started</Button>
        </StackLayout>
    </Page>
</template>

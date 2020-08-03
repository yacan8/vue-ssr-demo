<template>
    <div id="app">
        <router-link :to="{path: '/'}">Home</router-link>
        <router-link :to="{path: '/about'}">About</router-link>
        <router-view />
    </div>
</template>



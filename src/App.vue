<template>
    <v-app>
        <v-app-bar :elevation="10">
            <v-avatar>
                <v-icon icon="mdi-account"></v-icon>
            </v-avatar>
            <v-app-bar-nav-icon @click=""></v-app-bar-nav-icon>
            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-card
                    title="This is a title"
                    subtitle="This is a subtitle"
                    text="This is content"
                ></v-card>
            </v-container>
        </v-main>
        <v-spacer></v-spacer>
        <v-footer app> 2023&copy;</v-footer>
    </v-app>
</template>


<script setup lang="ts">

</script>

<script lang="ts">
export default {
    data: () => ({ drawer: null })
}
</script>
<template>
    <div>
        <Navbar />
        <slot />
        <AppFooter />
    </div>
</template>

<script lang="ts">
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
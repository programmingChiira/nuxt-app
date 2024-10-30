<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  padding: 10px;
  background-color: #f8f9fa;
}

ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

li {
  font-size: 18px;
}
</style>
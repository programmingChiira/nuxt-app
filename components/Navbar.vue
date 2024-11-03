<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main-header">
            <div id="menu">
              <img src="/assets/icons/menu.png" />
            </div>
            <div id="logo">
              <NuxtLink to="/">
                <img src="/assets/images/logo.png" />
              </NuxtLink>
            </div>
            <div id="accessAccount">
              <div class="authetication">
                <NuxtLink class="login" to="/login">Login</NuxtLink>
                <NuxtLink class="join" to="/join">Join</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Add your header styles here */
</style>

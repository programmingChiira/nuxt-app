<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main-header">
            <div id="menu">
              <img src="@/public/assets/icons/menu.png" />
            </div>
            <div id="logo">
              <nuxt-link to="/">
                <img src="@/public/assets/images/logo.png" />
              </nuxt-link>
            </div>
            <div id="accessAccount">
              <div class="authetication">
                <nuxt-link class="login" to="/login">Login</nuxt-link>
                <nuxt-link class="join" to="/join">Join</nuxt-link>
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

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="mainfooter">
            <div class="footermenu active">
              <nuxt-link to="/">
                <img src="@/public/assets/icons/gameicon.png" />
                <h6>Home</h6>
              </nuxt-link>
            </div>

            <div class="footermenu promogif">
              <nuxt-link to="/promotions">
                <img src="@/public/assets/images/gift.gif" />
                <h6>Promotions</h6>
              </nuxt-link>
            </div>

            <div class="footermenu">
              <nuxt-link to="/profile">
                <img src="@/public/assets/icons/usericon.png" />
                <h6>Profile</h6>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add your footer styles here */
</style>

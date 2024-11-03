<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="mainfooter">
            <div class="footermenu active">
              <NuxtLink to="/">
                <img src="/assets/icons/gameicon.png" />
                <h6>Home</h6>
              </NuxtLink>
            </div>

            <div class="footermenu promogif">
              <NuxtLink to="/promotions">
                <img src="/assets/images/gift.gif" />
                <h6>Promotions</h6>
              </NuxtLink>
            </div>

            <div class="footermenu">
              <NuxtLink to="/profile">
                <img src="/assets/icons/usericon.png" />
                <h6>Profile</h6>
              </NuxtLink>
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

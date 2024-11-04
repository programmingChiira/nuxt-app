<template>
    <div id="iframe">
        <div class="pageheader">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="profile-details-wrap">
                            <div class="back_btn">
                                <NuxtLink to="/">
                                    <img src="/assets/icons/back.png" />
                                </NuxtLink>
                                <span class="text">Aviator</span>
                            </div>
                            <div class="proflie-details">
                                <span class="account_name">Wilson</span>
                                <span class="account_number">0728456883</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="iframe-container">

        </div>
    </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Casino game',
  ogTitle: 'Casino game',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '/assets/images/favicon.png',
  twitterCard: 'summary_large_image',
  keywords: 'spark, pesa, gaming, online betting, casino, slots, jackpots' // Add your keywords here
});

import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";
</script>

<style scoped></style>
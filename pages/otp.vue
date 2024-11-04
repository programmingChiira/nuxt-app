<template>
    <div class="app-container">
        <main>
            <div class="maincontent">
                <div id="accountwrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="account-details">
                                    <div id="logo">
                                        <NuxtLink to="/">
                                            <img src="/assets/images/logo.png" />
                                        </NuxtLink>
                                    </div>

                                    <div class="form-holder">
                                        <div class="form-content">
                                            <div class="form-items">
                                                <div class="account-heading">
                                                    <h1>Forgot password?</h1>
                                                    <p class="text-center">We've sent a code to 728456883, <br>
                                                        Please check your Phone</p>
                                                </div>

                                                <form class="requires-validation" novalidate>
                                                    <div class="otpvalidation">
                                                        <div class="row pt-4 pb-2">
                                                            <div class="col-12">
                                                                <div class="validation-input">
                                                                    <input class="otp-letter-input" type="text" />
                                                                    <input class="otp-letter-input" type="text" />
                                                                    <input class="otp-letter-input" type="text" />
                                                                    <input class="otp-letter-input" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="text-muted text-center">Didn't get the code?
                                                            <a href="#" class="text-success">Click to
                                                                resend.</a>
                                                        </p>

                                                        <div class="row pt-4">
                                                            <div class="col-6">
                                                                <button
                                                                    class="btn btn-outline-secondary w-100">Cancel</button>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-primary w-100">Verify</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Verfification',
  ogTitle: 'Verfification',
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
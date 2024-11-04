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
                                        <NuxtLink href="/">
                                            <img src="/assets/images/logo.png" />
                                        </NuxtLink>
                                    </div>

                                    <div class="form-holder">
                                        <div class="form-content">
                                            <div class="form-items">
                                                <div class="account-heading">
                                                    <h1 class="text-center">Login</h1>
                                                    <p class="text-center">Enter your credentials to continue
                                                    </p>
                                                </div>

                                                <form class="requires-validation" novalidate>
                                                    <div class="col-md-12 inputwrap">
                                                        <input class="form-control" type="phone" name="phone"
                                                            placeholder="Phone Number" required />
                                                        <span class="input-icon"><img
                                                                src="/assets/icons/call.png" /></span>
                                                        <div class="valid-feedback">Enter your Phone Number
                                                        </div>
                                                        <div class="invalid-feedback">Enter your Phone Number
                                                            field cannot be blank!</div>
                                                    </div>

                                                    <div class="col-md-12 inputwrap">
                                                        <input class="form-control" type="password" name="password"
                                                            placeholder="Password" required />
                                                        <span class="input-icon"><img
                                                                src="/assets/icons/lock.png" /></span>
                                                        <div class="valid-feedback">Password field is valid!
                                                        </div>
                                                        <div class="invalid-feedback">Password field cannot be
                                                            blank!</div>
                                                    </div>

                                                    <div class="form-check mt-3">
                                                        <label
                                                            class="form-check-label d-flex justify-content-end gap-1">
                                                            Forgot password?
                                                            <NuxtLink to="/forgotpassword">Get it
                                                                now
                                                            </NuxtLink>
                                                        </label>
                                                    </div>

                                                    <div class="form-button mt-3">
                                                        <button id="submit" type="submit"
                                                            class="btn btn-primary">Login</button>
                                                    </div>

                                                    <div class="form-check mt-3">
                                                        <label class="form-check-label">I don't have an acount?
                                                            <NuxtLink to="/join">Join Now</NuxtLink> </label>
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
  title: 'Login',
  ogTitle: 'Login',
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
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
                                                    <h1 class="text-center">Create an account</h1>
                                                    <p class="text-center">Fill in the form below to complete
                                                        your Registration.</p>
                                                </div>

                                                <form class="requires-validation" novalidate>
                                                    <div class="col-md-12 inputwrap">
                                                        <input class="form-control" type="text" name="name"
                                                            placeholder="Full Name" required />
                                                        <span class="input-icon"><img
                                                                src="/assets/icons/user.png" /></span>
                                                        <div class="valid-feedback">Username field is valid!</div>
                                                        <div class="invalid-feedback">Username field cannot be blank!</div>
                                                    </div>

                                                    <div class="col-md-12 inputwrap">
                                                        <input class="form-control" type="phone" name="phone"
                                                            placeholder="Phone Number" required />
                                                        <span class="input-icon"><img
                                                                src="/assets/icons/call.png" /></span>
                                                        <div class="valid-feedback">Enter your Phone Number</div>
                                                        <div class="invalid-feedback">Phone Number field cannot be blank!</div>
                                                    </div>

                                                    <div class="col-md-12 inputwrap">
                                                        <input class="form-control" type="password" name="password"
                                                            placeholder="Password" required />
                                                        <span class="input-icon"><img
                                                                src="/assets/icons/lock.png" /></span>
                                                        <div class="valid-feedback">Password field is valid!</div>
                                                        <div class="invalid-feedback">Password field cannot be blank!</div>
                                                    </div>

                                                    <div class="form-check mt-3">
                                                        <label class="form-check-label">
                                                            By clicking the Register button, you agree to our
                                                            <NuxtLink to="terms">
                                                                Terms and Conditions
                                                            </NuxtLink>
                                                        </label>
                                                    </div>

                                                    <div class="form-button mt-3">
                                                        <button id="submit" type="submit" class="btn btn-primary">
                                                            Register
                                                        </button>
                                                    </div>

                                                    <div class="form-check mt-3">
                                                        <label class="form-check-label">
                                                            Already have an account?
                                                            <NuxtLink to="/login">
                                                                Login Now
                                                            </NuxtLink>
                                                        </label>
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
  title: 'SparkPesa',
  ogTitle: 'SparkPesa',
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

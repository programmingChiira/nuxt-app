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
                                                    <h1 class="text-center">Forgot password?</h1>
                                                    <p class="text-center">Enter your phone number in the field
                                                        below to reset password</p>
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

                                                    <div class="form-check mt-3">
                                                        <label
                                                            class="form-check-label d-flex justify-content-end gap-1">*
                                                            We will send you a message to set or reset your new
                                                            password </label>
                                                    </div>

                                                    <div class="form-button mt-3">
                                                        <button id="submit" type="submit"
                                                            class="btn btn-primary">Login</button>
                                                    </div>

                                                    <div class="form-check mt-3">
                                                        <label class="form-check-label">Already have an acount?
                                                            <NuxtLink to="/login">Login Now</NuxtLink>
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

<script lang="ts">
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "ForgotPasswordPage",
    data() {
        return {
            //
        };
    },
    methods: {
        //
    },
    components: {
        Header,
        Slider,
        Footer,
    },
};
</script>

<style scoped></style>
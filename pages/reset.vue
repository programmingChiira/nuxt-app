<template>

    <body>
        <div id="app">
            <div class="app-container">
                <main>
                    <div class="maincontent">
                        <div id="accountwrapper">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="account-details">
                                            <div id="logo">
                                                <nuxt-link to="/">
                                                    <img src="/assets/images/logo.png" />
                                                </nuxt-link>
                                            </div>

                                            <div class="form-holder">
                                                <div class="form-content">
                                                    <div class="form-items">
                                                        <div class="account-heading">
                                                            <h1 class="text-center">Reset password</h1>
                                                            <p class="text-center">Create a new Password</p>
                                                        </div>

                                                        <form class="requires-validation" novalidate>
                                                            <div class="col-md-12 inputwrap">
                                                                <input class="form-control" type="password"
                                                                    name="password" placeholder="Enter New Password"
                                                                    required />
                                                                <span class="input-icon"><img
                                                                        src="/assets/icons/lock.png" /></span>
                                                                <div class="valid-feedback">Password field is valid!
                                                                </div>
                                                                <div class="invalid-feedback">Password field cannot be
                                                                    blank!</div>
                                                            </div>

                                                            <div class="col-md-12 inputwrap">
                                                                <input class="form-control" type="password"
                                                                    name="password" placeholder="Confirm New Password"
                                                                    required />
                                                                <span class="input-icon"><img
                                                                        src="/assets/icons/lock.png" /></span>
                                                                <div class="valid-feedback">Password field is valid!
                                                                </div>
                                                                <div class="invalid-feedback">Password field cannot be
                                                                    blank!</div>
                                                            </div>

                                                            <div class="form-button mt-3">
                                                                <button id="submit" type="submit"
                                                                    class="btn btn-primary">Reset Password</button>
                                                            </div>

                                                            <div class="form-check mt-3">
                                                                <label class="form-check-label">
                                                                    Already have an acount?
                                                                    <nuxt-link to="/login">
                                                                        Login Now
                                                                    </nuxt-link>
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
        </div>
    </body>
</template>

<script lang="ts">
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "ResetPage",
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
<template>
    <body>
        <div id="iframe">
            <div class="pageheader">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="profile-details-wrap">
                                <div class="back_btn">
                                    <nuxt-link to="/">
                                        <img src="/assets/icons/back.png" />
                                    </nuxt-link>
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
    </body>
</template>

<script>
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "IframePage",
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
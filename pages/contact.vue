<template>
    <body>
        <div id="app">
            <div class="app-container">
                <Header />

                <main>
                    <div class="pageheader">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="profile-details-wrap">
                                        <div class="back_btn">
                                            <nuxt-link href="/profile">
                                                <img src="/assets/icons/back.png" />
                                            </nuxt-link>
                                            <span class="text">Contact Us</span>
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

                    <div class="maincontent">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div id="offer">
                                        <div class="offerwrapper">
                                            <div class="offertype">VIP2</div>
                                            <div class="offerdetails">
                                                <p>7 Bets to restore your VIP Level to 5</p>
                                                <div class="progress">
                                                    <div class="progress-bar bg-custom" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="myaccount-details">
                                        <div class="contact_us">
                                            <div class="card">
                                                <h3>Let's get in touch</h3>
                                                <p>We're open for any suggestion or just to have a chat</p>
                                                <div class="dbox w-100 d-flex align-items-start">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <span class="fa fa-map-marker"></span>
                                                    </div>
                                                    <div class="text pl-3">
                                                        <p><span>Address:</span> 198 Westlands Road, Suite 721 Nairobi, Kenya</p>
                                                    </div>
                                                </div>
                                                <div class="dbox w-100 d-flex align-items-center">
                                                    <div class="text pl-3">
                                                        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                    </div>
                                                </div>
                                                <div class="dbox w-100 d-flex align-items-center">
                                                    <div class="text pl-3">
                                                        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                    </div>
                                                </div>
                                                <div class="dbox w-100 d-flex align-items-center">
                                                    <div class="text pl-3">
                                                        <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                                    </div>
                                                </div>

                                                <div class="social_media">
                                                    <h6>Connect on social media</h6>
                                                    <div class="social_icon">
                                                        <a href="#!"><i class="bi bi-facebook"></i></a>
                                                        <a href="#!"><i class="bi bi-whatsapp"></i></a>
                                                        <a href="#!"><i class="bi bi-twitter-x"></i></a>
                                                        <a href="#!"><i class="bi bi-instagram"></i></a>
                                                        <a href="#!"><i class="bi bi-youtube"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="logut">
                                        <div class="card">
                                            <div class="pagelink">
                                                <a class="border-0 pb-0" href="index.html">
                                                    <i class="bi bi-file-lock-fill"></i>
                                                    <span class="text">Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    </body>
</template>

<script>
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "ContactPage",
    data() {
        return {//
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
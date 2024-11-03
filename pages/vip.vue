<template>
    <div class="app-container">
        <Header />

        <main>
            <Slider />

            <div class="maincontent">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="myaccount-details">
                                <div class="rewards-wrapper text-center">
                                    <h5>VIP Tickets</h5>

                                    <div class="rewards-header">
                                        <div class="rewards-card">
                                            <span class="rewards-number">6</span>
                                            <span class="rewards-text">Available Rewards</span>
                                        </div>

                                        <div class="rewards-card">
                                            <span class="rewards-points">38</span>
                                            <span class="rewards-text">Claimed Rewards</span>
                                        </div>

                                        <div class="rewards-card">
                                            <span class="rewards-amount">87</span>
                                            <span class="rewards-text">Total Rewards</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="offer_wrapper">
                                <div id="offer">
                                    <div class="offerwrapper">
                                        <div class="offertype">VIP2</div>
                                        <div class="offerdetails">
                                            <p>7 Bets to restore your VIP Level to 5</p>
                                            <div class="progress">
                                                <div class="progress-bar bg-custom" role="progressbar"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <div id="claimNow" class="offertype">Claim Now</div>
                                    </div>
                                </div>

                                <div id="offer">
                                    <div class="offerwrapper">
                                        <div class="offertype">VIP2</div>
                                        <div class="offerdetails">
                                            <p>7 Bets to restore your VIP Level to 5</p>
                                            <div class="progress">
                                                <div class="progress-bar bg-custom" role="progressbar"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <div id="claimNow" class="offertype">Claim Now</div>
                                    </div>
                                </div>

                                <div id="offer">
                                    <div class="offerwrapper">
                                        <div class="offertype">VIP2</div>
                                        <div class="offerdetails">
                                            <p>7 Bets to restore your VIP Level to 5</p>
                                            <div class="progress">
                                                <div class="progress-bar bg-custom" role="progressbar"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <div id="claimNow" class="offertype">Claim Now</div>
                                    </div>
                                </div>
                            </div>

                            <div class="important-links">
                                <div class="card">
                                    <h6>Important Links</h6>
                                    <div class="pagelink">
                                        <a href="mybets.html">
                                            <i class="bi bi-clock-fill"></i>
                                            <span class="text">My Bets</span>
                                        </a>
                                    </div>
                                    <div class="pagelink">
                                        <nuxt-link to="/transactions">
                                            <i class="bi bi-wallet-fill"></i>
                                            <span class="text">transaction</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="pagelink">
                                        <nuxt-link to="/terms">
                                            <i class="bi bi-file-earmark-text-fill"></i>
                                            <span class="text">Terms</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="pagelink">
                                        <nuxt-link to="/contact">
                                            <i class="bi bi-question-circle-fill"></i>
                                            <span class="text">contact us</span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>

                            <div class="logut">
                                <div class="card">
                                    <div class="pagelink">
                                        <nuxt-link class="border-0 pb-0" to="/">
                                            <i class="bi bi-file-lock-fill"></i>
                                            <span class="text">Logout</span>
                                        </nuxt-link>
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
</template>

<script lang="ts">
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "VipPage",
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
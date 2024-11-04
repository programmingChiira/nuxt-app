<template>
    <div class="app-container">
        <Header />

        <main>
            <Slider />

            <div id="slider-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="banner-caption">
                                <div id="owl-demo" class="owl-carousel owl-theme">
                                    <div class="item"><img src="/assets/images/carousel-2.jpg" alt="promo" />
                                    </div>
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
                            <div class="myaccount-details">
                                <div class="rewards-wrapper text-center">
                                    <h5>Promotions</h5>

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
                                        <NuxtLink to="/transactions">
                                            <i class="bi bi-wallet-fill"></i>
                                            <span class="text">transaction</span>
                                        </NuxtLink>
                                    </div>
                                    <div class="pagelink">
                                        <NuxtLink to="/terms">
                                            <i class="bi bi-file-earmark-text-fill"></i>
                                            <span class="text">Terms</span>
                                        </NuxtLink>
                                    </div>
                                    <div class="pagelink">
                                        <NuxtLink to="/contact">
                                            <i class="bi bi-question-circle-fill"></i>
                                            <span class="text">contact us</span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>

                            <div class="logut">
                                <div class="card">
                                    <div class="pagelink">
                                        <NuxtLink class="border-0 pb-0" to="/">
                                            <i class="bi bi-file-lock-fill"></i>
                                            <span class="text">Logout</span>
                                        </NuxtLink>
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

<script setup lang="ts">

useSeoMeta({
  title: 'Promotions',
  ogTitle: 'Promotions',
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
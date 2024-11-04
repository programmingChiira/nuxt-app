<template>
    <div class="app-container">
        <Header />

        <main>
            <Slider />
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
                                            <div class="progress-bar bg-custom" role="progressbar" aria-valuenow="25"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="myaccount-details">
                                <div class="terms">
                                    <div class="card">
                                        <h6 class="text-warning">Terms and conditions</h6>
                                        <p>
                                            Over/Under: This can be a number posted on how many scoring units
                                            will be scored in a game or match, as well as how many games a team
                                            will win during a season. If a football game’s
                                            over/under is 43.5 and the two teams combine to score 44 points,
                                            bets on the over are paid out. If a baseball team’s preseason win
                                            total over/under is 82.5, and it wins 81 games, futures
                                            bets on the under are paid out.
                                        </p>

                                        <p>
                                            Parlay: A single wager that involves the bettor making multiple bets
                                            and tying them into one. The payouts of parlays are typically larger
                                            than a wager on a single game because each
                                            individual bet must win in order for a parlay to pay out.
                                        </p>

                                        <p>
                                            No Action: Wagers that are canceled by bookmakers and returned to
                                            bettors. Bets are graded as “no action” if a game is canceled or if
                                            a minimum amount of gameplay hasn’t been recorded to
                                            satisfy the house rules.
                                        </p>
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
  title: 'Terms & conditions',
  ogTitle: 'Terms & conditions',
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
<template>
    <div class="app-container">
        <Header />
        <main>
            <Slider />

            <div class="maincontent">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="messages">
                                <div class="card">
                                    <div class="notifications-container shadow">
                                        <div class="header">
                                            <h6 class="title">
                                                messages
                                                <span class="unread-notifications-number">3</span>
                                            </h6>
                                        </div>
                                        <div class="mark-as-read text-end">
                                            <a href="#" id="markAllAsRead" class="mark-as-read-button align-middle">Mark
                                                all as read</a>
                                        </div>
                                    </div>

                                    <div class="notifications">
                                        <div class="single-notification-box unread">
                                            <div class="notification-text">
                                                <p>
                                                    <a href="#" class="link name">Mark Webber</a>
                                                    <span class="description">reacted to your recent post</span>
                                                    <a class="link" href="#!">My first tournament today!</a>
                                                </p>
                                                <p class="time">1m ago</p>
                                            </div>
                                        </div>

                                        <div class="single-notification-box unread">
                                            <div class="notification-text">
                                                <p>
                                                    <a href="#" class="link name">Angela Gray </a>
                                                    <span class="description">followed you</span>
                                                </p>
                                                <p class="time">5m ago</p>
                                            </div>
                                        </div>

                                        <div class="single-notification-box unread">
                                            <div class="notification-text">
                                                <p>
                                                    <a href="#" class="link name">Jacob Thompsoapan</a>
                                                    <span class="description">has joined your group</span>
                                                    <a class="link group" href="#!">Chess Club</a>
                                                </p>
                                                <p class="time">1 day ago</p>
                                            </div>
                                        </div>
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
                                        <NuxtLink to="contact">
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
  title: 'Messages',
  ogTitle: 'Messages',
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
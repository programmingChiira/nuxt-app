<template>
    <body>
        <div id="app">
            <div class="app-container">
                <Header/>

                <main>
                    <Slider/>

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
                                                    <a href="#" id="markAllAsRead" class="mark-as-read-button align-middle">Mark all as read</a>
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
                                                <a href="transaction.html">
                                                    <i class="bi bi-wallet-fill"></i>
                                                    <span class="text">transaction</span>
                                                </a>
                                            </div>
                                            <div class="pagelink">
                                                <a href="terms.html">
                                                    <i class="bi bi-file-earmark-text-fill"></i>
                                                    <span class="text">Terms</span>
                                                </a>
                                            </div>
                                            <div class="pagelink">
                                                <a href="contactus.html">
                                                    <i class="bi bi-question-circle-fill"></i>
                                                    <span class="text">contact us</span>
                                                </a>
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

                <Footer/>
            </div>
        </div>
    </body>
</template>

<script>
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "LoginPage",
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
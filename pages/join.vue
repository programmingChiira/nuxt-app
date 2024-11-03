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
                                                            <h1 class="text-center">Create an account</h1>
                                                            <p class="text-center">Fill in the form below to complete
                                                                your Registeration.</p>
                                                        </div>

                                                        <form class="requires-validation" novalidate>
                                                            <div class="col-md-12 inputwrap">
                                                                <input class="form-control" type="text" name="name"
                                                                    placeholder="Full Name" required />
                                                                <span class="input-icon"><img
                                                                        src="/assets/icons/user.png" /></span>
                                                                <div class="valid-feedback">Username field is valid!
                                                                </div>
                                                                <div class="invalid-feedback">Username field cannot be
                                                                    blank!</div>
                                                            </div>

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

                                                            <div class="col-md-12 inputwrap">
                                                                <input class="form-control" type="password"
                                                                    name="password" placeholder="Password" required />
                                                                <span class="input-icon"><img
                                                                        src="/assets/icons/lock.png" /></span>
                                                                <div class="valid-feedback">Password field is valid!
                                                                </div>
                                                                <div class="invalid-feedback">Password field cannot be
                                                                    blank!</div>
                                                            </div>

                                                            <div class="form-check mt-3">
                                                                <label class="form-check-label">By clicking the Register
                                                                    button, you agree to our <a
                                                                        to="termsandconditions.html">Terms and
                                                                        Conditions</a> </label>
                                                            </div>

                                                            <div class="form-button mt-3">
                                                                <button id="submit" type="submit"
                                                                    class="btn btn-primary">Register</button>
                                                            </div>

                                                            <div class="form-check mt-3">
                                                                <label class="form-check-label">Already have an acount?
                                                                    <nuxt-link to="/login">Login Now</nuxt-link> </label>
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

<script>
import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

export default {
    name: "JoinPage",
    data() {
        return {
            players: [
                { name: "Alice Achieng" },
                { name: "Asman Kakani" },
                { name: "Peter Mbugua" },
                { name: "Catherine Kahuya" },
                { name: "Moses Karani" },
                { name: "Stacia Maragia" }
            ],
            games: [
                { title: "VIPs", icon: "///assets/images/gameicon-1.png", link: "vippromos.html" },
                { title: "Hot Games", icon: "///assets/images/fireicon.gif", link: "#!" },
                { title: "Promos", icon: "///assets/images/gameicon-3.png", link: "promotions.html" },
                { title: "Free Bets", icon: "///assets/images/gameicon-4.png", link: "freebets.html" },
                { title: "Message", icon: "///assets/images/gameicon-5.png", link: "messages.html" }
            ],
            jackpots: [
                { id: "minorJackpot", type: "Minor", amount: "5,000", icon: "///assets/icons/bonus-1.png", link: "freebets.html" },
                { id: "grandJackpot", type: "Grand", amount: "30,000", icon: "///assets/icons/bonus-3.png", link: "freebets.html" },
                { id: "megaJackpot", type: "Mega", amount: "15,000", icon: "///assets/icons/bonus-2.png", link: "freebets.html" }
            ],
            categories: [
                { name: "All", link: "#!", active: true },
                { name: "Live Casino", link: "#!", isNew: true },
                { name: "Casino", link: "#!" },
                { name: "Roulette Wheel", link: "#!" },
                { name: "Slots", link: "#!" }
            ],
            gamesList: [
                { id: 1, name: "Casino Game 1", players: 1201, image: "///assets/images/casinogame-1.svg", demoLink: "iframe.html", playLink: "iframe.html", isFavourite: false },
                { id: 2, name: "Casino Game 2", players: 1201, image: "///assets/images/casino-game-1.png", demoLink: "#!", playLink: "iframe.html", isFavourite: true },
            ]
        };
    },
    methods: {
        toggleFavourite(gameId) {
            const game = this.gamesList.find(g => g.id === gameId);
            if (game) game.isFavourite = !game.isFavourite;
        }
    },
    components: {
        Header,
        Slider,
        Footer,
    },
};
</script>

<style scoped></style>
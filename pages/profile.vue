<template>
    <body>
        <div id="app">
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
                                                    <div class="progress-bar bg-custom" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="myaccount-details">
                                        <div class="myaccount-tab">
                                            <div class="tab">
                                                <button class="tablinks active" onclick="myAccount(event, 'Deposit')">
                                                    <i class="bi bi-window-plus"></i>
                                                    <span class="text">Deposit</span>
                                                </button>
                                                <button class="tablinks" onclick="myAccount(event, 'Withdraw')">
                                                    <i class="bi bi-window-dash"></i>
                                                    <span class="text">Withdraw</span>
                                                </button>
                                                <button class="tablinks" onclick="myAccount(event, 'Referrals')">
                                                    <i class="bi bi-bezier"></i>
                                                    <span class="text">Referrals</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="myaccount-details-wrapper">
                                            <h5>My account</h5>

                                            <div id="Deposit" class="tabcontent" style="display: block;">
                                                <div id="accountBal" class="depositfunds">
                                                    <div class="card">
                                                        <div class="account_bal">
                                                            <div class="amount_bal">
                                                                <span class="icon">
                                                                    <img src="/assets/icons/deposit_icon.png" />
                                                                </span>
                                                                <span class="text">
                                                                    <span class="bal_text">Acc Amount</span>
                                                                    <span class="amount_wrap">
                                                                        <span class="currency">Kes</span>
                                                                        <span class="amount">9832</span>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="bonus_bal">
                                                                <span class="icon">
                                                                    <img src="/assets/icons/bonus_icon.png" />
                                                                </span>
                                                                <span class="text">
                                                                    <span class="bal_text">Bonus</span>
                                                                    <span class="amount_wrap">
                                                                        <span class="currency">Kes</span>
                                                                        <span class="amount">20</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="accountfund">
                                                    <div class="card">
                                                        <h6>Deposit Cash to your wallet</h6>
                                                        <div class="choose-amount-to-deposit w-100">
                                                            <div class="deposit-btn">
                                                                <input type="submit" value="50" name="amount_50" id="amount-placed" />
                                                                <input type="submit" value="100" name="amount_100" id="amount-placed" class="submit-deposit" />
                                                                <input type="submit" value="250" name="amount_250" id="amount-placed" />
                                                                <input type="submit" value="500" name="amount_500" id="amount-placed" />
                                                                <input type="submit" value="1000" name="amount_1000" id="amount-placed" />
                                                            </div>
                                                        </div>

                                                        <p class="pt-1 pb-1 pr-3 mb-0 text-left w-100">Or Enter the amount you wish to Deposit</p>

                                                        <div class="amount-field">
                                                            <div class="input-group mb-2">
                                                                <input type="text" class="form-control form-control-lg" placeholder="Min Kes 20" aria-label="Amount" />
                                                            </div>

                                                            <button type="button" class="btn btn-block btn-lg btn-success mb-2">Deposit</button>
                                                            <p class="small mb-1">Maximum value per transaction is KES 150.000.00</p>
                                                            <p class="small mb-1">Maximum daily transaction value is KES 300.000.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="Withdraw" class="tabcontent">
                                                <div id="accountBal">
                                                    <div class="card">
                                                        <div class="account_bal">
                                                            <div class="amount_bal">
                                                                <span class="icon">
                                                                    <img src="/assets/icons/deposit_icon.png" />
                                                                </span>
                                                                <span class="text">
                                                                    <span class="bal_text">Acc Amount</span>
                                                                    <span class="amount_wrap">
                                                                        <span class="currency">Kes</span>
                                                                        <span class="amount">9832</span>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="bonus_bal">
                                                                <span class="icon">
                                                                    <img src="/assets/icons/bonus_icon.png" />
                                                                </span>
                                                                <span class="text">
                                                                    <span class="bal_text">Bonus</span>
                                                                    <span class="amount_wrap">
                                                                        <span class="currency">Kes</span>
                                                                        <span class="amount">20</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="accountfund" class="withdrawfunds">
                                                    <div class="card">
                                                        <h6>Withdraw Cash from your wallet</h6>
                                                        <div class="amount-field">
                                                            <div class="input-group mb-2">
                                                                <input type="text" class="form-control form-control-lg" placeholder="Min Kes 50" aria-label="Amount" />
                                                            </div>

                                                            <button type="button" class="btn btn-block btn-lg btn-warning mb-2">Withdraw</button>
                                                            <p class="small mb-1">Maximum value per transaction is KES 150.000.00</p>
                                                            <p class="small mb-1">Maximum daily transaction value is KES 300.000.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="Referrals" class="tabcontent">
                                                <div class="referrals-header">
                                                    <div class="referrals-card">
                                                        <span class="referrals-number">126</span>
                                                        <span class="referrals-text">My Referrals</span>
                                                    </div>

                                                    <div class="referrals-card">
                                                        <span class="referrals-points">21138</span>
                                                        <span class="referrals-text">Points</span>
                                                    </div>

                                                    <div class="referrals-card">
                                                        <span class="referrals-amount">Kes 87,092</span>
                                                        <span class="referrals-text">Total Payouts</span>
                                                    </div>
                                                </div>

                                                <div class="referrals-tab-wrapper">
                                                    <div class="referrals-tab">
                                                        <button class="referral_links active" onclick="myreferral(event, 'referralsSummary')">
                                                            <span class="text">Summary</span>
                                                        </button>
                                                        <button class="referral_links" onclick="myreferral(event, 'referralsPayout')">
                                                            <span class="text">Payout</span>
                                                        </button>
                                                        <button class="referral_links" onclick="myreferral(event, 'referralsfaqs')">
                                                            <span class="text">FAQs</span>
                                                        </button>
                                                    </div>

                                                    <div class="referrals-content">
                                                        <div id="referralsSummary" class="referralstab-content" style="display: block;">
                                                            <div class="card">
                                                                <p class="pt-1 pb-1 mb-0 text-left w-100 text-warning">Copy the link to refer friends and earn</p>
                                                                <div class="copylink">
                                                                    <input type="text" class="form-control-lg" value="https://feji.us/nzgahu" id="myInput" />
                                                                    <button onclick="myFunction()">Copy link</button>
                                                                </div>

                                                                <div class="summary_table">
                                                                    <table>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Phone Number</th>
                                                                            <th>Points</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Maria Anders</td>
                                                                            <td>0728456883</td>
                                                                            <td>20081</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>Francisco Chang</td>
                                                                            <td>0728456883</td>
                                                                            <td>20081</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>Roland Mendel</td>
                                                                            <td>0728456883</td>
                                                                            <td>2008</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>Helen Bennett</td>
                                                                            <td>0728456883</td>
                                                                            <td>2020</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>Yoshi Tannamuri</td>
                                                                            <td>0728456883</td>
                                                                            <td>1022</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>6</td>
                                                                            <td>Giovanni Rovelli</td>
                                                                            <td>0728456883</td>
                                                                            <td>39</td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="referralsPayout" class="referralstab-content">
                                                            <div class="card">
                                                                <p class="pt-1 pb-1 mb-0 text-left w-100 text-warning">My Payments</p>
                                                                <div class="summary_table">
                                                                    <table>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Date</th>
                                                                            <th>Amount</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>02 Aug 2024</td>
                                                                            <td>Kes 3300</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>02 Aug 2024</td>
                                                                            <td>Kes 3300</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>02 Aug 2024</td>
                                                                            <td>Kes 3300</td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="referralsfaqs" class="referralstab-content">
                                                            <div class="card">
                                                                <h6 class="pt-1 pb-1 mb-0 text-left w-100 text-warning">My Payments</h6>
                                                                <div id="faqsAccordion">
                                                                    <div class="accordion-item">
                                                                        <div class="accordion-header">
                                                                            What is Web Development?
                                                                        </div>
                                                                        <div class="accordion-body">
                                                                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes
                                                                            web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                                                                        </div>
                                                                    </div>

                                                                    <div class="accordion-item">
                                                                        <div class="accordion-header">
                                                                            What is Web Development?
                                                                        </div>
                                                                        <div class="accordion-body">
                                                                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes
                                                                            web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                                                                        </div>
                                                                    </div>

                                                                    <div class="accordion-item">
                                                                        <div class="accordion-header">
                                                                            What is Web Development?
                                                                        </div>
                                                                        <div class="accordion-body">
                                                                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes
                                                                            web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="important-links">
                                        <div class="card">
                                            <h6>Important Links</h6>
                                            <!-- <div class="pagelink">
                                    <a href="mybets.html">
                                        <i class="bi bi-clock-fill"></i>
                                        <span class="text">My Bets</span>
                                    </a>
                                </div> -->
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
    name: "LoginPage",
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
                { title: "VIPs", icon: "/assets/images/gameicon-1.png", link: "vippromos.html" },
                { title: "Hot Games", icon: "/assets/images/fireicon.gif", link: "#!" },
                { title: "Promos", icon: "/assets/images/gameicon-3.png", link: "promotions.html" },
                { title: "Free Bets", icon: "/assets/images/gameicon-4.png", link: "freebets.html" },
                { title: "Message", icon: "/assets/images/gameicon-5.png", link: "messages.html" }
            ],
            jackpots: [
                { id: "minorJackpot", type: "Minor", amount: "5,000", icon: "/assets/icons/bonus-1.png", link: "freebets.html" },
                { id: "grandJackpot", type: "Grand", amount: "30,000", icon: "/assets/icons/bonus-3.png", link: "freebets.html" },
                { id: "megaJackpot", type: "Mega", amount: "15,000", icon: "/assets/icons/bonus-2.png", link: "freebets.html" }
            ],
            categories: [
                { name: "All", link: "#!", active: true },
                { name: "Live Casino", link: "#!", isNew: true },
                { name: "Casino", link: "#!" },
                { name: "Roulette Wheel", link: "#!" },
                { name: "Slots", link: "#!" }
            ],
            gamesList: [
                { id: 1, name: "Casino Game 1", players: 1201, image: "/assets/images/casinogame-1.svg", demoLink: "iframe.html", playLink: "iframe.html", isFavourite: false },
                { id: 2, name: "Casino Game 2", players: 1201, image: "/assets/images/casino-game-1.png", demoLink: "#!", playLink: "iframe.html", isFavourite: true },
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
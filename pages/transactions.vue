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
                                        <div class="list_deposit">
                                            <div class="header">
                                                <div class="title">deposit</div>
                                                <div class="state text-success">
                                                    <span>Succeed</span>
                                                </div>
                                            </div>

                                            <div class="footer">
                                                <div class="time">10:02AM 16thSep,2024</div>
                                                <div id="moreDetails" class="link">More Details</div>
                                            </div>

                                            <div id="transaction_details">
                                                <div class="details">
                                                    <div class="details-wrap">
                                                        <div class="key">Type</div>
                                                        <div class="value">M-pesa</div>
                                                    </div>
                                                    <div class="details-wrap">
                                                        <div class="key">Base</div>
                                                        <div class="value">49</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">Extra</div>
                                                        <div class="value">+3</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">Ref</div>
                                                        <div class="value">1285254474671063040</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">TransID</div>
                                                        <div class="value">SIG5R7VMRL</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">M-pesa account</div>
                                                        <div class="value">0728456883</div>
                                                    </div>

                                                    <div class="extra">
                                                        <div class="count">KES 49</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="link">Date</div>
                                                        <div class="time">10:02AM 16thSep,2024</div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list_withdraw">
                                            <div class="header">
                                                <div class="title">Withdraw</div>
                                                <div class="state text-success">
                                                    <span>Succeed</span>
                                                </div>
                                            </div>

                                            <div class="footer">
                                                <div class="time">10:02AM 16thSep,2024</div>
                                                <div id="moreDetails" class="link">More Details</div>
                                            </div>

                                            <div id="transaction_details">
                                                <div class="details">
                                                    <div class="details-wrap">
                                                        <div class="key">Type</div>
                                                        <div class="value">M-pesa</div>
                                                    </div>
                                                    <div class="details-wrap">
                                                        <div class="key">Base</div>
                                                        <div class="value">49</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">Extra</div>
                                                        <div class="value">+3</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">Ref</div>
                                                        <div class="value">1285254474671063040</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">TransID</div>
                                                        <div class="value">SIG5R7VMRL</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="key">M-pesa account</div>
                                                        <div class="value">0728456883</div>
                                                    </div>

                                                    <div class="extra">
                                                        <div class="count">KES 49</div>
                                                    </div>
                                                    <div class="extra">
                                                        <div class="link">Date</div>
                                                        <div class="time">10:02AM 16thSep,2024</div>
                                                    </div>
                                                    <!---->
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
    name: "TransactionsPage",
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
<template>
  <div class="app-container">
    <Header />
    <main>
      <Slider/>
      <div class="maincontent">
        <div id="playingNow">

          <ul id="scroller">
            <li>
              <div class="playerwrap">
                <span class="playername">Alice
                  Achieng</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
            <li>
              <div class="playerwrap">
                <span class="playername">Asman
                  Kakani</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
            <li>
              <div class="playerwrap">
                <span class="playername">Peter
                  Mbugua</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
            <li>
              <div class="playerwrap">
                <span class="playername">Catherine
                  Kahuya</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
            <li>
              <div class="playerwrap">
                <span class="playername">Moses
                  Karani</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
            <li>
              <div class="playerwrap">
                <span class="playername">Stacia
                  Maragia</span>
                <span class="playertext">Playing
                  Now</span>
              </div>
            </li>
          </ul>
          <div class="notification">
            <img src="/assets/icons/bell.png" alt="Notification Bell" />
          </div>
        </div>

        <div id="gamesicons">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="games-menu">
                  <div class="game-icon-wrap">
                    <div class="game-icon">
                      <NuxtLink to="/vip">
                        <img src="/assets/images/gameicon-1.png" />
                        <h6>VIPs</h6>
                      </NuxtLink>
                    </div>

                    <div class="game-icon">
                      <a to="#!">
                        <img src="/assets/images/fireicon.gif" />
                        <h6>Hot Games</h6>
                      </a>
                    </div>

                    <div class="game-icon">
                      <NuxtLink to="/promotions">
                        <img src="/assets/images/gameicon-3.png" />
                        <h6>Promos</h6>
                      </NuxtLink>
                    </div>

                    <div class="game-icon">
                      <NuxtLink to="/freebet">
                        <img src="/assets/images/gameicon-4.png" />
                        <h6>Free Bets</h6>
                      </NuxtLink>
                    </div>

                    <div class="game-icon">
                      <NuxtLink to="messages">
                        <img src="/assets/images/gameicon-5.png" />
                        <h6>message</h6>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="jackpot_pools">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="jackpot_items">
                  <div id="minorJackpot" class="jackpot_type">
                    <NuxtLink to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-1.png">
                      </div>
                      <div class="jackpot_text">
                        <h3>5,000</h3>
                        <span>Minor</span>
                      </div>
                    </NuxtLink>
                  </div>

                  <div id="grandJackpot" class="jackpot_type">
                    <NuxtLink to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-3.png">
                      </div>
                      <div class="jackpot_text">
                        <h1>30,000</h1>
                        <span>Grand</span>
                      </div>
                    </NuxtLink>
                  </div>

                  <div id="megaJackpot" class="jackpot_type">
                    <NuxtLink to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-2.png">
                      </div>
                      <div class="jackpot_text">
                        <h3>15,000</h3>
                        <span>Mega</span>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="games_navigation">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="navigation">
                  <div class="navigation-wrap">
                    <div class="selectgame active">
                      <a to="#!">All</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">Live Casino </a>
                      <div class="spec-icon new">New</div>
                    </div>
                    <div class="selectgame">
                      <a to="#!">Casino</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">roulette wheel</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">Slots</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">Casino</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">roulette wheel</a>
                    </div>
                    <div class="selectgame">
                      <a to="#!">Slots</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="games-lobby">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="game-container">

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>

                        <div id="add-to-favourite">
                          <span class="notadded"><img src="/assets/icons/favourite-no.png" /></span>
                          <span class="added" style="display: none;"><img
                              src="/assets/icons/favourite-yes.png" /></span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-1.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a href="iframe.html">demo</a>
                      </div>
                      <div id="playnow">
                        <a href="iframe.html">play
                          now</a>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-2.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-3.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-4.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-5.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-6.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-7.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-8.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="game_id">
                    <div class="game_image">
                      <div class="game-activies">
                        <div class="user-playing">
                          <span class="user-img"><img src="/assets/icons/user.svg" /></span>
                          <span class="user-no">1201</span>
                        </div>
                      </div>
                      <img src="/assets/images/casino-game-9.png" />
                    </div>
                    <div class="game_cta">
                      <div id="demo">
                        <a to="#!">demo</a>
                      </div>
                      <div id="playnow">
                        <NuxtLink to="/iframe">play now</NuxtLink>
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
    <Footer />
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'SparkPesa',
  ogTitle: 'SparkPesa',
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
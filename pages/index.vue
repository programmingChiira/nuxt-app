<template>
  <div class="app-container">
    <Header />
    <main>
      <div id="slider-banner">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="banner-caption">
                <div id="owl-demo" class="owl-carousel owl-theme">
                  <div class="item"><img src="/assets/images/slider-banner-1.png" alt="slider-image" /></div>
                  <div class="item"><img src="/assets/images/slider-banner-2.png" alt="slider-image" /></div>
                  <div class="item"><img src="/assets/images/slider-banner-3.png" alt="slider-image" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      <nuxt-link to="/vip">
                        <img src="/assets/images/gameicon-1.png" />
                        <h6>VIPs</h6>
                      </nuxt-link>
                    </div>

                    <div class="game-icon">
                      <a to="#!">
                        <img src="/assets/images/fireicon.gif" />
                        <h6>Hot Games</h6>
                      </a>
                    </div>

                    <div class="game-icon">
                      <nuxt-link to="/promotions">
                        <img src="/assets/images/gameicon-3.png" />
                        <h6>Promos</h6>
                      </nuxt-link>
                    </div>

                    <div class="game-icon">
                      <nuxt-link to="/freebet">
                        <img src="/assets/images/gameicon-4.png" />
                        <h6>Free Bets</h6>
                      </nuxt-link>
                    </div>

                    <div class="game-icon">
                      <nuxt-link to="messages">
                        <img src="/assets/images/gameicon-5.png" />
                        <h6>message</h6>
                      </nuxt-link>
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
                    <nuxt-link to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-1.png">
                      </div>
                      <div class="jackpot_text">
                        <h3>5,000</h3>
                        <span>Minor</span>
                      </div>
                    </nuxt-link>
                  </div>

                  <div id="grandJackpot" class="jackpot_type">
                    <nuxt-link to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-3.png">
                      </div>
                      <div class="jackpot_text">
                        <h1>30,000</h1>
                        <span>Grand</span>
                      </div>
                    </nuxt-link>
                  </div>

                  <div id="megaJackpot" class="jackpot_type">
                    <nuxt-link to="/freebet">
                      <div class="jackpot_icon">
                        <img src="/assets/icons/bonus-2.png">
                      </div>
                      <div class="jackpot_text">
                        <h3>15,000</h3>
                        <span>Mega</span>
                      </div>
                    </nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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
                        <nuxt-link to="/iframe">play now</nuxt-link>
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

<script lang="ts">

import Header from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/AppFooter.vue";

interface Player {
  name: string;
}

interface Game {
  title: string;
  icon: string;
  link: string;
}

interface Jackpot {
  id: string;
  type: string;
  amount: string;
  icon: string;
  link: string;
}

interface Category {
  name: string;
  link: string;
  active?: boolean;
  isNew?: boolean;
}

interface GameItem {
  id: number;
  name: string;
  players: number;
  image: string;
  demoLink: string;
  playLink: string;
  isFavourite: boolean;
}

export default {
  name: "HomePage",
  data() {
    return {
      players: [
        { name: "Alice Achieng" },
        { name: "Asman Kakani" },
        { name: "Peter Mbugua" },
        { name: "Catherine Kahuya" },
        { name: "Moses Karani" },
        { name: "Stacia Maragia" }
      ] as Player[],
      games: [
        { title: "VIPs", icon: "/assets/images/gameicon-1.png", link: "vippromos.html" },
        { title: "Hot Games", icon: "/assets/images/fireicon.gif", link: "#!" },
        { title: "Promos", icon: "/assets/images/gameicon-3.png", link: "promotions.html" },
        { title: "Free Bets", icon: "/assets/images/gameicon-4.png", link: "/freebet" },
        { title: "Message", icon: "/assets/images/gameicon-5.png", link: "messages.html" }
      ] as Game[],
      jackpots: [
        { id: "minorJackpot", type: "Minor", amount: "5,000", icon: "/assets/icons/bonus-1.png", link: "/freebet" },
        { id: "grandJackpot", type: "Grand", amount: "30,000", icon: "/assets/icons/bonus-3.png", link: "/freebet" },
        { id: "megaJackpot", type: "Mega", amount: "15,000", icon: "/assets/icons/bonus-2.png", link: "/freebet" }
      ] as Jackpot[],
      categories: [
        { name: "All", link: "#!", active: true },
        { name: "Live Casino", link: "#!", isNew: true },
        { name: "Casino", link: "#!" },
        { name: "Roulette Wheel", link: "#!" },
        { name: "Slots", link: "#!" }
      ] as Category[],
      gamesList: [
        { id: 1, name: "Casino Game 1", players: 1201, image: "/assets/images/casinogame-1.svg", demoLink: "/iframe", playLink: "/iframe", isFavourite: false },
        { id: 2, name: "Casino Game 2", players: 1201, image: "/assets/images/casino-game-1.png", demoLink: "#!", playLink: "/iframe", isFavourite: true },
      ] as GameItem[]
    };
  },
  methods: {
    toggleFavourite(gameId: number) {
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
<template>
  <div class="navbar">
    <div class="navbar__head">
      <div class="navbar__items navbar__items-burger">
        <base-icon
          icon="bars"
          size="lg"
          :style="{ color: showHamburgerContent ? '#388bfd' : 'white' }"
          @click="showHamburgerContent = !showHamburgerContent"
        />
      </div>

      <div class="navbar__items navbar__items-logo">
        <img
          src="@/assets/images/github/GitHub-Mark-Light-32px.png"
          alt=""
        >
      </div>

      <div class="navbar__items navbar__items-notification">
        <base-icon
          icon="bell"
          size="lg"
        />
      </div>
    </div>

    <div
      id="navbar-body"
      class="navbar__body"
      :style="navbarBodyStyle"
    >
      <div class="navbar__body-searchbar">
        <base-input placeholder="Search or jump to..." />
      </div>

      <div class="navbar__body-list">
        <ul class="list-container">
          <li class="list-item">
            Dashboard
          </li>
          <li class="list-item">
            Pull requests
          </li>
          <li class="list-item">
            Issues
          </li>
          <li class="list-item">
            Marketplace
          </li>
          <li class="list-item">
            Explore
          </li>
          <li class="list-item">
            Settings
          </li>
          <li class="list-item">
            KarmaBlackshaw
          </li>
          <li class="list-item">
            Sign out
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showHamburgerContent: false
    }
  },

  computed: {
    navbarBodyStyle () {
      return {
        'max-height': this.showHamburgerContent ? '354px' : 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/components/Navbar";
</style>

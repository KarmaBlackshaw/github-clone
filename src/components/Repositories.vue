<template>
  <div class="repositories-main">
    <div class="repositories__title">
      Repositories
    </div>

    <base-container>
      <div class="repositories__search-input">
        <base-input placeholder="Search repositories..." />
      </div>

      <div class="repositories__list">
        <ul>
          <li
            v-for="(repo, key) in repoList"
            :key="key"
            class="list__item"
          >
            <base-icon
              class="list__item-icon"
              icon="book"
            />

            {{ repo.user }}/{{ repo.name }}
          </li>
        </ul>
      </div>

      <base-hr />

      <div class="repositories-footer">
        <button
          class="footer__btn-show-more"
          @click="repoList.push(...repoList)"
        >
          Show more
        </button>
      </div>
    </base-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      repoList: [
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' },
        { user: 'KarmaBlackshaw', name: 'Lorem' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.repositories-main {
  .repositories__title {
    margin-bottom: 5px;
    font-size: 0.9em;
    color: $color-primary;
  }

  .repositories__search-input {
    margin-bottom: 20px;
  }

  .repositories__list {
    .list__item {
      font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
        Segoe UI Emoji;
      display: flex;
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 0.8em;
      font-weight: 600;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      color: $color-link;

      .list__item-icon {
        margin-right: 10px;
      }
    }
  }

  .repositories-footer {
    .footer__btn-show-more {
      background: none;
      color: $color-muted;
      padding: 10px 5px;
      width: 100%;
      text-align: left;
      outline: none;
      border: none;
      font-size: 0.7em;
      margin-top: 10px;
      border-radius: 6px;
      transition: color 0.2s linear;

      &:hover {
        color: $color-link;
      }
    }
  }
}
</style>

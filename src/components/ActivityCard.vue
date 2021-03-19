<template>
  <div class="activity-card">
    <div class="activity__item activity__item-head">
      <div class="title__icon">
        <base-avatar
          size="35"
          src="https://images.pexels.com/photos/2624677/pexels-photo-2624677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
      <div class="title__action">
        <span class="action__item action__item-user">KarmaBlackshaw</span>
        <span class="action__item action__item-verb">starred</span>
        <span class="action__item action__item-subject">2 repositories lorem lorem lorem lorem</span>
        <span class="action__item action__item-time">9 hours ago</span>
      </div>
    </div>

    <div class="activity__item activity__item-body">
      <base-container class="body__card">
        <div class="body__card-head">
          <div class="head__item head__item-title">
            VundleVim/Vundle.vim
          </div>
          <div class="head__item head__item-btn">
            <base-button prepend-icon="star">
              Star
            </base-button>
          </div>
        </div>

        <div class="body__card-body">
          GoAccess is a real-time web log analyzer and interactive viewer that runs in a terminal in *nix systems or through your browser.
        </div>

        <div class="body__card-footer">
          <div class="footer__item footer__item-tag">
            Typescript
          </div>
          <div class="footer__item footer__item-stars">
            <base-icon icon="star" />
            32.8k
          </div>
          <div class="footer__item footer__item-">
            Updated Mar 17
          </div>
        </div>
      </base-container>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.activity-card {
  .activity__item {
    &.activity__item-head {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .title__icon {
        margin-right: 10px;
      }

      .title__action {
        font-size: 0.8em;
        color: $color-primary;

        .action__item {
          margin-right: 5px;

          &.action__item-user {
            font-weight: bold;
          }

          &.action__item-verb {
            color: $color-muted;
          }

          &.action__item-subject {
            font-weight: bold;
          }

          &.action__item-time {
            font-size: 0.7em;
            color: $color-muted;
          }
        }
      }
    }

    &.activity__item-body {
      .body__card-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;

        .head__item {
          &.head__item-title {
            color: $color-primary;
            font-weight: bold;
            font-size: 0.9em;
          }
        }
      }

      .body__card-body {
        color: $color-secondary;
        font-size: 0.9em;
        font-family: Segoe UI, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        margin-bottom: 15px;
      }

      .body__card-footer {
        color: $color-muted;
        font-size: 0.8em;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

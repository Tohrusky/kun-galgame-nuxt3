<script setup lang="ts">
import type { GalgameResourceDetails } from '~/types/api/galgame-resource'

const { locale } = useI18n()

const { uid } = storeToRefs(usePersistUserStore())

const props = defineProps<{
  details: GalgameResourceDetails
}>()
</script>

<template>
  <div class="more" v-if="details">
    <div class="title">
      <span class="link">
        <KunCopy :text="details.link" />
        <a :href="details.link" target="_blank" rel="noopener noreferrer">
          <Icon name="lucide:external-link" />
        </a>
      </span>

      <div class="password">
        <span>
          <span>提取码:</span>
          <KunCopy :text="details.code" />
        </span>
        <span>
          <span>解压码:</span>
          <KunCopy :text="details.password" />
        </span>
      </div>
    </div>

    <div class="note">{{ details.note }}</div>

    <div class="user">
      <div class="user-info">
        <KunAvatar :user="details.user" size="33px" />
        <span class="username">{{ details.user.name }}</span>
        <span class="time">
          {{ formatTimeDifferenceHint(details.time, locale) }}
        </span>
      </div>

      <div class="user-btn" v-if="details.user.uid === uid">
        <KunButton>编辑</KunButton>
        <KunButton type="danger">删除</KunButton>
      </div>

      <div class="other-btn" v-if="details.user.uid !== uid">
        <KunButton>标记失效</KunButton>
        <KunButton>举报链接</KunButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.more {
  margin-bottom: 10px;
}

.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .link {
    cursor: pointer;
    margin-bottom: 10px;

    & > a {
      margin-left: 10px;
      font-size: 20px;
      color: var(--kungalgame-font-color-0);

      &:hover {
        color: var(--kungalgame-blue-5);
      }
    }
  }

  .password {
    margin-bottom: 10px;

    & > span {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.note {
  font-size: small;
  margin-bottom: 10px;
  border-left: 5px solid var(--kungalgame-blue-5);
  padding-left: 10px;
}

.user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .user-info {
    display: flex;
    align-items: center;

    .username {
      margin: 0 10px;
    }

    .time {
      font-size: small;
    }
  }

  .user-btn {
    button:first-child {
      margin-right: 7px;
    }
  }
}
</style>

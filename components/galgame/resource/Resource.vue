<script setup lang="ts">
const route = useRoute()
const gid = computed(() => {
  return parseInt((route.params as { gid: string }).gid)
})

const { isShowPublish, isRewriting } = storeToRefs(
  useTempGalgameResourceStore()
)

const { data: resourceData, refresh } = await useLazyFetch(
  `/api/galgame/${gid.value}/resource/all`,
  {
    method: 'GET',
    ...kungalgameResponseHandler
  }
)
</script>

<template>
  <div class="resource">
    <KunHeader :size="2">
      <template #header>
        <span>{{ $t('edit.galgame.resource.name') }}</span>

        <span class="contribute" @click="isShowPublish = !isShowPublish">
          <Icon name="lucide:circle-plus" />
        </span>
      </template>
    </KunHeader>

    <GalgameResourcePublish v-if="isShowPublish" :refresh="refresh" />

    <GalgameResourceLink
      v-for="resource in resourceData"
      :key="resource.grid"
      :link="resource"
    />
  </div>
</template>

<style lang="scss" scoped>
.resource {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.contribute {
  cursor: pointer;
  margin-left: 17px;
  padding: 3px;
  border-radius: 20px;
  color: var(--kungalgame-blue-5);
}
</style>

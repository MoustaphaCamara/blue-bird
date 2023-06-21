import { SidebarRightPreviewCardItem } from '../../../.nuxt/components';
<template>
  <div class="flex flex-col">
    <!-- Preview Card : what's happening -->
    <SidebarRightPreviewCard title="Tendances pour vous">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <div>
          <h2 class="text-md font-bold text-gray-800 dark:text-white">
            {{ whatsHappening.title }}
          </h2>

          <p class="text-xs text-gray-500">
            {{ whatsHappening.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- Preview Card : Who 2 follow -->
    <SidebarRightPreviewCard title="Suggestions">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="h-10 w-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />
            <div class="ml-2 flex flex-col">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="rounded-full bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Suivre
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "Elon Musk",
    count: "25,5k Tweets",
  },
  {
    title: "Victor Wembanyama",
    count: "10,2k Tweets",
  },
  {
    title: "#Bitcoin",
    count: "2,6M Tweets",
  },
]);
const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Squeezie",
    handle: "@squeezie",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "guy That",
    handle: "@thatguy",
    image: "https://picsum.photos/200/200",
  },
]);
</script>

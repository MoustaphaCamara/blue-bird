<template>
  <div class="flex h-screen flex-col">
    <div
      class="my-2 w-min rounded-full p-2 hover:bg-blue-100 dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="h-8 w-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-2 space-y-3">
      <!-- tab item -->
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Accueil </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explorer </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name> Notifications </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Messages </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name> Signets </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name> Listes </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name> Profil </template>
      </SidebarLeftTab>
      <!-- tab item -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon />
        </template>
        <template v-slot:name> Plus </template>
      </SidebarLeftTab>
      <div class="hidden xl:block">
        <UIButton liquid size="lg">
          <span class="font-bold">Tweet</span>
        </UIButton>
      </div>
      <div class="block xl:hidden">
        <UIButton>
          <div class="h-6 w-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();
import { HomeIcon } from "@heroicons/vue/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
} from "@heroicons/vue/outline";
</script>

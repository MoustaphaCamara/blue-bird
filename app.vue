<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <!-- LOADER -->
      <LoadingPage v-if="isAuthLoading" />
      <!-- APP (user authenticated)-->
      <div v-else-if="user" class="min-h-full">
        <!-- page container -->
        <div
          class="mx-auto grid grid-cols-12 sm:px-6 lg:max-w-7xl lg:gap-5 lg:px-8"
        >
          <!-- LEFT SIDE -->
          <div class="hidden xs:col-span-1 md:block xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- MAIN CONTENT -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <!-- pages -> index.vue -->
            <router-view />
          </main>
          <!-- RIGHT SIDE -->
          <div class="hidden md:col-span-3 md:block xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
        <!-- end of page container -->
      </div>
      <!-- AUTHENTICATION PAGE -->
      <AuthPage v-else />
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);

const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>

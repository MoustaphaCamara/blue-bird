<template>
  <div>
    <div class="space-y-6 pt-5">
      <UIInput
        label="Username"
        placeholder="@username"
        v-model="data.username"
      />
      <UIInput
        type="password"
        label="Password"
        placeholder="********"
        v-model="data.password"
      />
      <div>
        <button @click="handleLogin">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth();
const data = reactive({
  password: "",
  username: "",
  loading: false,
});

async function handleLogin() {
  try {
    data.loading = true;
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}
</script>

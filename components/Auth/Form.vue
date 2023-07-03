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
const data = reactive({
  password: "",
  username: "",
});

function handleLogin() {
  alert(JSON.stringify(data));
}
</script>

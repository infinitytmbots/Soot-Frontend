<template>
  <div class="flex w-full">
    <div class="flex h-screen w-2/6 p-4 bg-white-primary">
      <div class="bg-loginBack bg-blue-primary h-full w-full bg-bottom bg-cover rounded-lg">
        <div class="flex items-center pt-16">
          <div class="mx-8">
            <SVGLogo />
          </div>
          <h1 class="text-white-primary text-4xl font-grifter font-bold mt-3">Soot</h1>
        </div>
        <h1 class="my-16 mx-8 text-white-primary text-5xl font-grifter font-bold ">Start your <br> eco-friendly <br> journey with us.</h1>
      </div>
    </div>
    <div class="flex h-screen w-4/6">
      <div id="background" class="grid place-items-center bg-white-primary w-full">
        <div class="grid w-1/3 h-auto ">
          <SVGLock class="mx-auto" :size="95"/>
          <h1 class="mx-auto font-grifter font-bold text-black-primary text-5xl mt-4">Hello Again!</h1>
          <!-- TODO FONT CHANGE -->
          <div class="w-full font-montserrat mt-8">
              <p for="fname" class="text-black-secondary mb-1 font-normal text-sm">Username</p>
              <input v-model="username" class="w-full h-12 rounded-lg p-5" type="text" id="fname" name="fname">
              <p class="text-black-secondary mt-3 mb-1 font-normal text-sm font-montserrat" for="lname">Password</p>
              <input v-model="password" class="w-full h-12 rounded-lg p-5" type="password" id="password">
            <br><br>
            <button v-if="!loading" @click="useLogin" :class="`${!buttonReady ? 'bg-blue-primary/50 cursor-not-allowed' : 'bg-blue-primary cursor-pointer'} w-full text-semibold text-white-primary h-12 rounded-lg mt-8`">Login</button>
            <button v-else :class="`bg-blue-primary cursor-not-allowed w-full text-semibold text-white-primary h-12 rounded-lg mt-8`">
                <svg class="mx-auto animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const username = $ref("");
const password = $ref("");
const loading = $ref(false);
const buttonReady = computed(() => (username && password ? true : false));
// r.push("/home");
async function useLogin() {
  if(!username || !password) return;
  const r = useRouter();
  console.log("LOGGING IN");
  let loading = true;
  const res = await fetch(
    "http://localhost:3001/signin",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: username, password: password}),
    },
  ).catch(() => {});
  if (!res) {
    let username = "";
    let password = "";
    loading = false;
    r.push("/error");
    return;
  }
  const response = await res.json();
  console.log(response);
  if (res.status === 200) {
    if (!res) {
      r.push("/error");
    }
    localStorage.setItem('d_session_token', response.token);
    r.push("/home");

  }

  return true;
};
</script>

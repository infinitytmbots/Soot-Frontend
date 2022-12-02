<template>
  <div class="flex w-full">
    <div class="flex h-screen w-2/6">
      <div class="bg-blue-primary h-full w-full">
        <div class="grid place-item-start">
          <div class="absolute my-16 mx-8">
            <SVGLogo />
          </div>
          <h1 class="absolute my-16 mx-32 text-white-primary text-4xl font-monsterrat font-bold">Soot</h1>
        </div>
        <h1 class="absolute my-48 mx-16 text-white-primary text-6xl font-monsterrat font-bold ">Start Your <br> eco-friendly <br> journey with us.</h1>
        <img class="w-full h-full object-cover" src="/img/loginFlow.png" />
      </div>
    </div>
    <div class="flex h-screen w-4/6">
      <div id="background" class="grid place-items-center bg-white-primary w-full">
        <div class="grid place-items-center w-1/3 h-2/3 ">
          <img id="" src="" alt="">
          <h1 class="font-montserrat font-bold text-5xl">Hello There!</h1>
          <!-- TODO FONT CHANGE -->
          <div class="w-full font-montserrat">
            <form>
              <label for="fname" class="text-grey-5 pb-1 font-medium">Username</label><br>
              <input class="w-full h-12 rounded-lg p-5" type="text" id="fname" name="fname"><br>
              <label class="text-grey-5 pb-1 font-medium font-montserrat" for="lname">Password</label><br>
              <input class="w-full h-12 rounded-lg p-5" type="password" id="password">
            </form>
            <br><br>
            <button class="bg-blue-primary w-full text-semibold text-white-primary h-12 rounded-lg">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const r = useRouter();
// r.push("/home");
export default {
  name: 'Login'
}
</script>

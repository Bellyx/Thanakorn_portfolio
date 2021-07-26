<template>
  <div>
    <div>
      <img
        src="https://cdn.discordapp.com/attachments/689723086748123221/869104004817379408/contact-us.jpg"
        class="img-fluid"
        alt="img"
      />
    </div>
    <div class="p-2 mb-1 bg-info text-white">ติดต่อ</div>
    <ul class="list-group">
      <li class="list-group-item">Email: Thanakorn.opha@bumail.net</li>
      <li class="list-group-item">Tel:086-3116240</li>
      <li class="list-group-item">Github: Bellyx</li>
    </ul>
    <router-link
      :to="{
        name: 'Profile',
      }"
    >
      <a href="" class="btn btn-primary">กลับหน้าแรก</a>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  font-size: 4em;
  color: white;
  background-color: #404040;
}
</style>
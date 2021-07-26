<template>
  <img
    src="https://cdn.discordapp.com/attachments/689723086748123221/869055528695910460/14124.jpg"
    class="rounded mx-auto d-block"
    alt="Responsive image"
    width="25%"
    height="25%"
  />

  <div class="p-3 mb-2 bg-primary text-white">
    ยินดีต้องรับเข้าสู่ Portfolio
  </div>

  <div style="margin-left: 15px">
    <p><strong>เกี่ยวกับฉัน</strong></p>
    <p><strong>สวัสดีครับผม</strong></p>
    <p><strong>นาย ธนากร โอภาษี</strong></p>
    <p><strong>อายุ 21 ปี</strong></p>
    <p><strong>เป็นนักศึกษาปี 4</strong></p>
    <p><strong>คณะวิศวกรรมศาสตร์</strong></p>
    <p><strong>สาขาคอมพิวเตอร์และหุ่นยนต์</strong></p>
    <p><strong>มหาวิทยาลัยกรุงเทพ</strong></p>
  </div>
  <div class="p-3 mb-2 bg-success text-white">ทักษะ</div>
  <ul class="list-group">
    <li class="list-group-item">HTML</li>
    <li class="list-group-item">CSS</li>
    <li class="list-group-item">Javascript</li>
    <li class="list-group-item">SQl</li>
    <li class="list-group-item">Adobe XD</li>
  </ul>

  <h6>
    <div class="p-3 mb-2 bg-warning text-dark">กำลังศึกษาภาษาอื่นเพิ่มเติม</div>
    <ul>
      <li class="list-group-item">Lua</li>
      <li class="list-group-item">Python</li>
    </ul>
  </h6>
  <div style="text-align: center; margin-bottom: 20px">
    <button type="button" class="btn btn-primary">
      <router-link to="Contact">ช่องทางการติดต่อ</router-link>
    </button>
  </div>

  <!-- <HelloWorld msg="Hello Vue 3 in CodeSandbox!" /> -->
</template>

<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
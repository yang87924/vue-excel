<template>
  <div>
    <h2>输入数据</h2>
    <form @submit.prevent="submitForm">
      <label for="name">姓名:</label>
      <input type="text" id="name" v-model="formData.name" required /><br />

      <label for="phone">电话:</label>
      <input type="tel" id="phone" v-model="formData.phone" required /><br />

      <label for="address">地址:</label>
      <input
        type="text"
        id="address"
        v-model="formData.address"
        required
      /><br />

      <label for="id">身份证:</label>
      <input type="text" id="id" v-model="formData.id" required /><br />

      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        address: "",
        id: "",
      },
    };
  },
  methods: {
    submitForm() {
      // 通过路由传递查询参数
      this.$router.push({
        name: "DataTable",
        query: this.formData, // 使用查询参数传递表单数据
      });
    },
  },
};
</script>

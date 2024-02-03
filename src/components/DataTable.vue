<template>
  <div>
    <h2>显示数据</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>地址</th>
            <th>身份证</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $route.query.name }}</td>
            <td>{{ $route.query.phone }}</td>
            <td>{{ $route.query.address }}</td>
            <td>{{ $route.query.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="exportToExcel">导出Excel</button>
  </div>
</template>

<script>
import excel from "exceljs";

export default {
  methods: {
    exportToExcel() {
      const workbook = new excel.Workbook();
      const worksheet = workbook.addWorksheet("Data");

      // 添加标题行
      const headers = ["姓名", "电话", "地址", "身份证"];
      worksheet.addRow(headers);

      // 添加数据行
      const { name, phone, address, id } = this.$route.query;
      worksheet.addRow([name, phone, address, id]);

      // 将数据保存为Excel文件
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "data.xlsx";
        link.click();
      });
    },
  },
};
</script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}
table {
  width: 80%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #f2f2f2;
}
</style>

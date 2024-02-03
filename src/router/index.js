import { createRouter, createWebHistory } from "vue-router";
import DataForm from "../components/DataForm.vue";
import DataTable from "../components/DataTable.vue";

const routes = [
  {
    path: "/",
    name: "DataForm",
    component: DataForm,
  },
  {
    path: "/datatable",
    name: "DataTable",
    component: DataTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

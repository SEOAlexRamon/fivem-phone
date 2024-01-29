import { createApp } from "vue";

import app    from "./App.vue";
import router from "./router";

import "./style.css";

createApp(app)
    .use(router)
    .mount('#app')

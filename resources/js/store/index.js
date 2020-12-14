import adminTag from "./modules/adminTag";
import deleteTag from "./modules/deleteTag";
import auth from "./modules/auth";
import data from "./modules/data";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const stores = new Vuex.Store({
    modules: {
        adminTag,
        deleteTag,
        auth,
        data
    }
});

export default stores;
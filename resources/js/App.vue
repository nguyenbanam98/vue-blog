<template>
    <div>
        <div v-if="isAuthenticated">
            <!--========== ADMIN SIDE MENU one ========-->
            <div class="_1side_menu">
                <div class="_1side_menu_logo">
                    <h3 style="text-align:center;">Logo Image</h3>
                    <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
                </div>

                <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
                <div class="_1side_menu_content">
                    <div class="_1side_menu_img_name">
                        <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
                        <p class="_1side_menu_name">{{user}}</p>
                    </div>

                    <!--~~~ MENU LIST ~~~~~~-->
                    <div class="_1side_menu_list">
                        <ul class="_1side_menu_list_ul">
                            <li>
                                <router-link to="/admin"
                                    ><Icon
                                        type="ios-speedometer"
                                    />Dashboard</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/admin/category"
                                    ><Icon
                                        type="ios-speedometer"
                                    />Category</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/admin/tag"
                                    ><Icon
                                        type="ios-speedometer"
                                    />Tag</router-link
                                >
                            </li>  
                            <li>
                                <router-link to="/admin/adminuser"
                                    ><Icon
                                        type="ios-speedometer"
                                    />Admin user</router-link
                                >
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </div>
            <!--========== ADMIN SIDE MENU ========-->

            <!--========= HEADER ==========-->
            <div class="header">
                <div class="_2menu _box_shadow">
                    <div class="_2menu_logo">
                        <ul class="open_button">
                            <li>
                                <Icon type="ios-list" />
                            </li>
                            <!--<li><Icon type="ios-albums" /></li>-->
                        </ul>
                        
                    </div>
                    <p  @click="logout">logout</p>
                    
                </div>
            </div>
            <!--========= HEADER ==========-->
        </div>
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>

import { mapGetters } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapGetters(["isAuthenticated", "user"])
    },
    async created() {
        if (!localStorage.getItem('access_token')) {
                this.$router.push({name: 'login'});
                return false;
        }
       
       const user = await axios.post("/me");

       this.$store.dispatch("user", user.data.name);
       this.$store.commit('TOGGLE_AUTH', true);
    
       
    },
    methods: {
        async logout() {
            const res = await axios.delete('/logout')
              
                if (res.status === 200) {
                    localStorage.removeItem('access_token')
                    this.$router.push({name: 'login'});
                }
               

        },

    }
};
</script>

<style scope>
    ._2menu > p {
        cursor: pointer;
    }
</style>

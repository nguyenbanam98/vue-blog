<template>
    <div class="content">
        <!-- <vue-element-loading :active="show" spinner="bar-fade-scale" is-full-screen/> -->
        <div class="container-fuild">
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div
                class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
            >
                <p class="_title0">
                    <Button type="primary" ghost @click="modal_add = true"
                        ><Icon type="md-add" />Add user</Button
                    >
                </p>

                <div class="_overflow _table_div" >
                    <table class="_table">
                        <!-- TABLE TITLE -->
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        <!-- TABLE TITLE -->
                        <!-- ITEMS -->
                        <tr
                            v-for="(user, index) in users"
                            :key="user.id"
                           
                        >
                            <td>{{ index + 1 }}</td>
                            <td>
                                {{ user.name }}
                            </td>
                            <td>
                                {{user.email}}
                            </td>
                            <td>
                                {{user.userType}}
                            </td>
                            <td>{{ user.created_at | validateDateTime(user.created_at) }}</td>
                            
                            <td>
                                <button
                                    class="_btn _action_btn edit_btn1"
                                    type="button"
                                    @click="showEdituser(user, index)"
                                >
                                    Edit
                                </button>

                                <button
                                    class="_btn _action_btn make_btn1"
                                    type="button"
                                    @click="showDeletingModal(user, index)"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <!-- ITEMS -->
                    </table>
                </div>
            </div>

            <!-- Tag adding modal -->

            <Modal v-model="modal_add" title="Tag">
                
                 <div class="space">
                      <Input type="text" v-model="data.name" placeholder="Full name"  />
                  </div>
                  <div class="space">
                      <Input type="email" v-model="data.email" placeholder="Email"  />
                  </div>
                  <div class="space">
                      <Input type="password" v-model="data.password" placeholder="Password"  />
                  </div>
                  <div class="space">
                      <Select v-model="data.userType"  placeholder="Select admin type">
                            <Option value="admin">Admin</Option>
                            <Option value="editor" >Editor</Option>
                            <Option value="user" >User</Option>
                        </Select>
                  </div>
                <div slot="footer">
                    <Button type="default" @click="modal_add = false">
                        Close
                    </Button>
                    <Button
                        type="primary"
                        :disabled="isAdding"
                        :loading="isAdding"
                        @click="addUser"
                    >
                        {{ isAdding ? "Adding.." : "Add user" }}
                    </Button>
                </div>
            </Modal>

            <!-- user edit modal -->

            <Modal v-model="modal_edit" title="user">
                 <div class="space">
                      <Input type="text" v-model="data.name" placeholder="Full name"  />
                  </div>
                  <div class="space">
                      <Input type="email" v-model="data.email" placeholder="Email"  />
                  </div>
                  <div class="space">
                      <Input type="password" v-model="data.password" placeholder="Password"  />
                  </div>
                  <div class="space">
                      <Select v-model="data.userType"  placeholder="Select admin type">
                            <Option value="admin">Admin</Option>
                            <Option value="editor" >Editor</Option>
                            <Option value="user" >User</Option>
                        </Select>
                  </div>

           
                  <div slot="footer">
                    <Button type="default" @click="modal_edit = false">
                        Close
                    </Button>
                    <Button type="primary" @click="updateUsers(editData.id)"
                        >Edit</Button
                    >
                </div>
            </Modal>

            <deleteModal></deleteModal>
        </div>
    </div>
</template>

<script>
import BlogDataService from "../../services/api";
import deleteModal from "../components/deleteModal"
import { mapGetters } from "vuex";

export default {
    created() {
        if (!localStorage.getItem('access_token')) {
                this.$router.push({name: 'login'});
                return false;
        }
        this.getDataUser();
    },
    components: {
        deleteModal
    },
    computed: {
        ...mapGetters(["getDeleteModalObj"])
    },
    data() {
        return {
            modal_add: false,
            data: {
                name: "",
                email: "",
                password: "",
                userType: ""
                
            },
            users: [],
            editData: {
                userName: "",
                id: "",
                index: -1,
            },
            modal_edit: false,
            isEditingItem: false,
            isAdding: false,
            show: true,
        };
    },
    watch : {
        getDeleteModalObj(obj){
            if(obj.isDeleted){
                this.users.splice(obj.deleteIndex, 1);
            }
        }
    },
    methods: {
        getDataUser() {
            console.log('aaaa');
            BlogDataService.getAll("user")
            .then(res => {
                if (res.status == 200) {
                    this.users = res.data.users.data;
                // this.show = false
                }
            })
            .catch(err => {
                
            })
            
        },

        addUser() {
            if(this.data.name.trim()=='') return this.e('Full name is required')
            if(this.data.email.trim()=='') return this.e('Email is required')
			      if(this.data.password.trim()=='') return this.e('Password is required')
    
            BlogDataService.create("user/create", this.data)
            .then(res => {
                 this.modal_add = false;
                this.s("user has been added successfully");
                this.data.name = "";
                this.data.email = "";
                this.data.password = "";
                this.data.userType = "";
                return this.users.unshift(res.data.user);
            }) 
            .catch(() => this.swr())
           
             
        },
        updateUsers(id) {
            
            BlogDataService.update("user/update", id, this.data)
                .then(res => {
                    if (res.status == 200) {
                        this.users[this.editData.index].name = this.data.name;
                        this.users[this.editData.index].email = this.data.email;
                        this.modal_edit = false;
                        this.s("user has been added successfully");
                        this.data.name = "";
                        this.data.email = "";
                        this.data.password = "";
                        this.data.userType = "";
                    }
                })
                .catch(err => {
                  console.log(err.response);
                    this.e("user has been added faild");
                });
        },
        showEdituser(user, index) {
            this.data.name = user.name;
            this.data.email =  user.email
            this.data.userType =  user.userType
            this.editData.id = user.id;
            this.editData.index = index;
            this.modal_edit = true;
        },
         // delete modal

            showDeletingModal(user, i){
            const deleteModalObj  =  {
                showDeleteModal: true, 
                deleteUrl : 'user/delete', 
                id : user.id, 
                deletingIndex: i, 
                isDeleted : false,
                msg: 'Are you want to delete user?'
            }
            this.$store.commit('setDeletingModalObj', deleteModalObj)
        }

    }
};
</script>

<style></style>

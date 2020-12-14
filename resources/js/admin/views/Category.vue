<template>
    <div class="content">
        <!-- <vue-element-loading :active="show" spinner="bar-fade-scale" is-full-screen/> -->
        <div class="container-fuild">
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div
                class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
            >
                <p class="_title0">
                    Category
                    <Button type="primary" ghost @click="modal_add = true"
                        ><Icon type="md-add" />Add category</Button
                    >
                </p>

                <div class="_overflow _table_div" >
                    <table class="_table">
                        <!-- TABLE TITLE -->
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        <!-- TABLE TITLE -->
                        <!-- ITEMS -->
                        <tr
                            v-for="(category, index) in categories"
                            :key="category.id"
                           
                        >
                            <td>{{ index + 1 }}</td>
                            <td>
                                {{ category.name }}
                            </td>
                            <td>{{ category.created_at | validateDateTime(category.created_at) }}</td>
                            <td>
                                <Card
                                    style="width:150px"
                                    v-if="category.image_path"
                                >
                                    <div style="text-align:center">
                                        <img
                                            :src="
                                                base_url + category.image_path
                                            "
                                        />
                                    </div>
                                </Card>
                            </td>
                            <td>
                                <button
                                    class="_btn _action_btn edit_btn1"
                                    type="button"
                                    @click="showEditCategory(category, index)"
                                >
                                    Edit
                                </button>

                                <button
                                    class="_btn _action_btn make_btn1"
                                    type="button"
                                    @click="showDeletingModal(category, index)"
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
                <Input
                    v-model="data.categoryName"
                    @on-enter="addCategory"
                    placeholder="Add tag..."
                />
                <div class="space"></div>
                <Upload
                    ref="upload"
                    type="drag"
                    :headers="{
                        'x-csrf-token': token,
                        'X-Requested-With': 'XMLHttpRequest'
                    }"
                    :format="['jpg', 'jpeg', 'png']"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :max-size="2048"
                    :on-remove="deleteImage"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    action="api/category/upload"
                >
                    <div style="padding: 20px 0">
                        <Icon
                            type="ios-cloud-upload"
                            size="52"
                            style="color: #3399ff"
                        ></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>

                <!-- <Card style="width:320px" v-if="data.image_path">
                    <div class="image_card">
                        <img :src="base_url + data.image_path" />
                    </div>
                </Card> -->

                   <div class="demo-upload-list" v-if="data.image_path">
                        <img :src="base_url + data.image_path" />
                        <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click="deleteImage"></Icon>
                        </div>
                    </div>

                <div slot="footer">
                    <Button type="default" @click="modal_add = false">
                        Close
                    </Button>
                    <Button
                        type="primary"
                        :disabled="isAdding"
                        :loading="isAdding"
                        @click="addCategory"
                    >
                        {{ isAdding ? "Adding.." : "Add Category" }}
                    </Button>
                </div>
            </Modal>

            <!-- Category edit modal -->

            <Modal v-model="modal_edit" title="Category">
                <Input
                    v-model="editData.categoryName"
                    @on-enter="updateCategory(editData.id)"
                    placeholder="Edit category..."
                />
                <div class="space"></div>
                <Upload
                    ref="upload"
                    type="drag"
                    :headers="{
                        'x-csrf-token': token,
                        'X-Requested-With': 'XMLHttpRequest'
                    }"
                    :format="['jpg', 'jpeg', 'png']"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :max-size="2048"
                    :on-remove="deleteImage"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    action="api/category/upload"
                >
                    <div style="padding: 20px 0">
                        <Icon
                            type="ios-cloud-upload"
                            size="52"
                            style="color: #3399ff"
                        ></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>

                 <div class="demo-upload-list" v-if="data.image_path">
                        <img :src="base_url + data.image_path" />
                        <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click="deleteImage"></Icon>
                        </div>
                </div>
                <div slot="footer">
                    <Button type="default" @click="modal_edit = false">
                        Close
                    </Button>
                    <Button type="primary" @click="updateCategory(editData.id)"
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
        if (!this.isAuthenticated) {
                this.$router.push({name: 'login'});
                return false;
        }
        this.token = window.Laravel.csrfToken;
        this.getDataCategory();
        console.log(this.categories);

    },
    components: {
        deleteModal
    },
      computed: {
        ...mapGetters(["getDeleteModalObj", "isAuthenticated"])
    },
    data() {
        return {
            modal_add: false,
            data: {
                categoryName: "",
                id: "",
                index: -1,
                image_path: "",
                image_name: ""
            },
            categories: [],
            editData: {
                categoryName: "",
                id: "",
                index: -1,
            },
            modal_edit: false,
            token: "",
            isEditingItem: false,
            url: "",
            base_url: "http://localhost:8000",
            isAdding: false,
            show: true,
        };
    },
    watch : {
        getDeleteModalObj(obj){
            if(obj.isDeleted){
                this.categories.splice(obj.deleteIndex, 1);
            }
        }
    },
    methods: {
        async getDataCategory() {
            const res = await BlogDataService.getAll("category");
            if (res.status == 200) {
                this.categories = res.data.categories.data;
                
                // this.show = false
            } 
        },

        addCategory() {
            const data = {
                name: this.data.categoryName,
                image_path: this.data.image_path,
                image_name: this.data.image_name
            };
            BlogDataService.create("category/create", data)
                .then(res => {
                    if (res.status == 200) {
                        this.categories.unshift(res.data.category);
                        this.modal_add = false;
                        this.s("Category has been added successfully");
                        this.data.categoryName = "";
                        this.data.image_path = "";
                        this.$refs.upload.clearFiles();
                    }
                })
                .catch(err => {
                    this.e("Category has been added faild");
                });
        },
        updateCategory(id) {
            const data = {
                name: this.editData.categoryName,
                image_path: this.data.image_path,
                image_name: this.data.image_name,
            };
            
            BlogDataService.update("category/update", id, data)
                .then(res => {
                    if (res.status == 200) {
                        this.categories[this.editData.index].name = data.name;
                        this.categories[this.editData.index].image_path = data.image_path;
                        this.modal_edit = false;
                        this.s("Category has been added successfully");
                        this.editData.categoryName = "";
                        this.data.image_path = "";
                        this.$refs.upload.clearFiles();
                    }
                })
                .catch(err => {
                    this.e("Category has been added faild");
                });
        },
        showEditCategory(category, index) {
            this.editData.categoryName = category.name;
            this.data.image_path =  category.image_path
            this.editData.id = category.id;
            this.editData.index = index;
            this.modal_edit = true;
        },

        handleSuccess(res, file) {
            this.data.image_path = res.file_path;
            this.data.image_name = res.file_name;
        },
        handleError(res, file) {
            this.$Notice.warning({
                title: "The file format is incorrect",
                desc: `${
                    file.errors.file.length
                        ? file.errors.file[0]
                        : "Something went wrong!"
                }`
            });
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: "The file format is incorrect",
                desc:
                    "File format of " +
                    file.name +
                    " is incorrect, please select jpg or png."
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: "Exceeding file size limit",
                desc: "File  " + file.name + " is too large, no more than 2M."
            });
        },
        async deleteImage() {
           
            const data = {
                imagePath: this.data.image_path
            }
            console.log(data);
            const res = await BlogDataService.deleteImage("category/delete_image", data)
            if (res.status = 200) {
                this.$refs.upload.clearFiles();
                this.data.image_path = ''
                this.s('success');
            } else {
                this.swr()
            }
            
        },
         // delete modal

            showDeletingModal(category, i){
            const deleteModalObj  =  {
                showDeleteModal: true, 
                deleteUrl : 'category/delete', 
                id : category.id, 
                deletingIndex: i, 
                isDeleted : false,
                msg: 'Are you want to delete category?'
            }
            this.$store.commit('setDeletingModalObj', deleteModalObj)
        }

    }
};
</script>

<style></style>

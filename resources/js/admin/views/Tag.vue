<template>
    <div class="content">
        <div class="container-fuild">
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div
                class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
            >
             
                <p class="_title0">
                    Tags
                    <Button type="primary" ghost @click="modal_tag = true"
                        ><Icon type="md-add" />Add tag</Button
                    >
                </p>

                <div class="_overflow _table_div">
                    <table class="_table">
                        <!-- TABLE TITLE -->
                        <tr>
                            <th>ID</th>
                            <th>Tag name</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                        <!-- TABLE TITLE -->

                        <!-- ITEMS -->
                        <tr v-for="(tag, index) in tags" :key="tag.id">
                            <td>{{ index + 1 }}</td>
                            <td class="_table_name">
                                {{ tag.name }}
                            </td>
                            <td>
                                {{
                                    tag.created_at
                                        | validateDateTime(tag.created_at)
                                }}
                            </td>
                            <td>
                                <button
                                    class="_btn _action_btn edit_btn1"
                                    type="button"
                                    @click="showEditTag(tag, index)"
                                >
                                    Edit
                                </button>

                                <button
                                    class="_btn _action_btn make_btn1"
                                    type="button"
                                    @click="showDeletingModal(tag, index)"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <!-- ITEMS -->
                    </table>
                </div>

                <!-- Tag adding modal -->

                <Modal v-model="modal_tag" title="Tag">
                    <Input
                        v-model="tagName"
                        @on-enter="addTag"
                        placeholder="Add tag..."
                    />

                    <div slot="footer">
                        <Button type="default" @click="modal_tag = false">
                            Close
                        </Button>
                        <Button type="primary" @click="addTag">Add</Button>
                    </div>
                </Modal>

                <!-- Tag edit modal -->

                <Modal v-model="tag_edit" title="Tag">
                    <Input
                        v-model="tagName"
                        @on-enter="updateTag(id)"
                        placeholder="Edit tag..."
                    />
                    <div slot="footer">
                        <Button type="default" @click="tag_edit = false">
                            Close
                        </Button>
                        <Button type="primary" @click="updateTag(id)"
                            >Edit</Button
                        >
                    </div>
                </Modal>

                <!-- Tag edit modal -->

                <deleteModal></deleteModal>
            </div>
        </div>
    </div>
</template>

<script>
import BlogDataService from "../../services/api";
import { mapGetters } from "vuex";
import deleteModal from "../components/deleteModal"

export default {
    created() {
        if (!localStorage.getItem('access_token')) {
                this.$router.push({name: 'login'});
                return false;
        }
        this.fetchData()
    },
    computed: {
        ...mapGetters(["tags", "getDeleteModalObj"])
    },
    components: {
        deleteModal
    },
    data() {
        return {
            tagName: "",
            id: -1,
            index: -1,
            tag_edit: false,
            modal_tag: false
        };
    },
	watch : {
		getDeleteModalObj(obj){
			if(obj.isDeleted){
				this.$store.commit('DELETE_TAG',obj.deletingIndex)
			}
        },
	},
    methods: {
        fetchData() {
            this.$store.dispatch("fetch");
        },
        addTag() {
            this.$store
                .dispatch("addTag", { name: this.tagName })
                .then(res => {
                    this.modal_tag = false;
                    this.tagName = "";
                    this.s("Tag has been added successfully");
                })
                .catch(err => {
                    this.modal_tag = false;
                    this.tagName = "";
                    this.e("Tag has been added faild");
                });
        },
        updateTag(id) {
            this.$store
                .dispatch("updateTag", {
                    name: this.tagName,
                    index: this.index,
                    id: this.id
                })
                .then(res => {
                    this.tag_edit = false;
                    this.s("Tag has been added successfully");
                })
                .catch(err => {
                    this.tag_edit = false;
                    this.e("Tag has been added faild");
                });
        },
        showEditTag(tag, index) {
            this.tagName = tag.name;
            this.id = tag.id;
            this.index = index;
            this.tag_edit = true;
        },

        // delete modal

        	showDeletingModal(tag, i){
			const deleteModalObj  =  {
				showDeleteModal: true, 
				deleteUrl : 'tag/delete', 
				id : tag.id, 
				deletingIndex: i, 
                isDeleted : false,
                msg: 'Are you want to delete tag?'
			}
			this.$store.commit('setDeletingModalObj', deleteModalObj)
        }
        
    },
    
};
</script>

<style></style>

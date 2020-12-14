import BlogDataService from "../../services/api";

const state = {
    deleteModalObj : {
        showDeleteModal: false,
        deleteUrl : '',
        id: null,
        deletingIndex: -1,
        isDeleted : false,
        msg: ''

    },

};
const getters = {
    getDeleteModalObj(state){
        return state.deleteModalObj
    },

};
const mutations = {

    setDeleteModal(state, data){
        const deleteModalObj = {
            showDeleteModal: false,
            deleteUrl : '',
            id : null,
            msg: '',
            deletingIndex: -1,
            isDeleted : data,
        }
        state.deleteModalObj = deleteModalObj
    },
    setDeletingModalObj(state, data){
        state.deleteModalObj = data
    },
};
const actions = {
   
};

export default {
    state,
    actions,
    getters,
    mutations
};

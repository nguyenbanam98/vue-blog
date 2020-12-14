import BlogDataService from "../../services/api";

const state = {
    tags: [],
    tag: {},

};
const getters = {
    tags: state => state.tags,

};
const mutations = {
    FETCH(state, tags) {
        state.tags = tags;
    },
    FETCH_ONE(state, tag) {
        state.tag = tag;
    },
    DELETE_TAG(state, index) {
        state.tags.splice(index, 1);
    },
    UPDATE_TAG_NAME(state, { index, name }) {
        state.tags[index].name = name;
    },

};
const actions = {
    fetch({ commit }) {
        return BlogDataService.getAll("tag")
            .then(response => {
                if (response.status === 200) {
                    commit("FETCH", response.data.tags.data);
                    console.log(response);
                }
            })
            .catch(err => console.log(err));
    },
    fetchOne({ commit }, id) {
        return BlogDataService.get("tag", id)
            .then(response => {
                if (response.status === 200) {
                    commit("FETCH_ONE", response.data.tag);
                }
            })
            .catch(err => console.log(err));
    },
    async deleteTag({ commit }, tag) {
        const res = await BlogDataService.delete("tag/delete", tag.id)
        commit("DELETE_TAG", tag.index)
        return res
           
    },
    async updateTag({ commit }, tag) {
        const data = {
            name: tag.name
        };

        const res = await BlogDataService.update("tag/update", tag.id, data);
        commit("UPDATE_TAG_NAME", tag);

        return res;
    },
    async addTag({ state }, tag) {
        const data = {
            name: tag.name
        };
        const res = await BlogDataService.create("tag/create", data);
        if (res.status == 200) {
            state.tags.unshift(res.data.tag);
        }
        return res;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};

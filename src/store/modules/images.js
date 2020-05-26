import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  //   async uploadImages(x, images) {
  //     console.log(images);
  async uploadImages({ rootState }, images) {
    // Get access token
    const { token } = rootState.auth;
    // Call API module to do the upload
    await api.uploadImages(images, token);
    // Redirect our user to ImageList component
    router.push("/");
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

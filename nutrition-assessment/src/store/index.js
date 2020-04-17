import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import { getIngredients } from "../services/common/nutrition-data/nutrition-data";
Vue.use(Vuex);

export const getters = {
  getnutritionDataList(state) {
    return state.nutritionData;
  }
};

export const mutations = {
  getNutritionDataActionMutation(state, nutritionData) {
    state.nutritionData = nutritionData;
  }
};

export const actions = {
  async getNutritionDataAction({ commit }, foodItems) {
    await getIngredients(foodItems)
      .then(success => {
        commit("getNutritionDataActionMutation", success);
        router.push("/nutrition");
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export const state = {
  nutritionData: []
};
export const store = new Vuex.Store({
  getters,
  mutations,
  actions,
  state
});

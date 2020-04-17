// import { shallowMount, createLocalVue } from "@vue/test-utils";
// import Vuex from "vuex";
// import VueRouter from "vue-router";
// import NutritionData from "../../../src/views/NutritionData";
// describe("In NutritionData Component View", () => {
//   let appNutritionDataWrapper;
//   let mockStore;
//   const routes = [
//     {
//       path: "/home",
//       name: "Home"
//     }
//   ];
//   console.log(appNutritionDataWrapper,"ihgkjkjkjjlhgggggggggggggggggggggggggggggggggggk");
//   const router = new VueRouter({ routes });

//   const data = { abc: 1 };
//   beforeEach(() => {
//     const localVue = createLocalVue();
//     localVue.use(Vuex);
//     localVue.use(VueRouter);
//     //appNutritionDataWrapper.vm.setNutritionData= jest.fn(); 
//     mockStore = {
//       state: { nutritionData: { data } },
//       dispatch: jest.fn()
//     };
//     appNutritionDataWrapper = shallowMount(NutritionData, {
//       mocks: {
//         $store: mockStore
//       },
//       data: () => ({
//         search: "",
//         nutritionData: [],
//         ingredientsData: [],
//         headersData: [],
//         dailyValues: []
//       }),
//       localVue,
//       router
//     });
    
//   });

//   afterEach(() => {
//     // appNutritionDataWrapper.destroy();
//   });

//   it("is a Vue instance", () => {
    
//     //expect(appNutritionDataWrapper.vm.setNutritionData).toBeCalled(); 
//     //  expect(appNutritionDataWrapper.isVueInstance).toBeTruthy();
//   });
//   // it("it shoud have <v-row> element", () => {
//   //   expect(appNutritionDataWrapper.contains("v-row-stub")).toBe(true);
//   // });
//   // it("it shoud have <v-col> element", () => {
//   //   expect(appNutritionDataWrapper.contains("v-col-stub")).toBe(true);
//   // });
//   // it("it shoud have <v-card> element", () => {
//   //   expect(appNutritionDataWrapper.contains("v-card-stub")).toBe(true);
//   // });
//   // it("it should have a <v-card-title> element", () => {
//   //   expect(appNutritionDataWrapper.contains("v-card-title-stub")).toBe(true);
//   // });
// });








// import Vue from "vue";
// import Vuex from 'vuex';
// import { shallowMount, createLocalVue } from '@vue/test-utils';
// import VueRouter from 'vue-router';
// import { routes } from '../../../src/router/index';
// import Vuetify from "vuetify";
// import NutritionData from "../../../src/views/NutritionData";


// describe('In NutritionData Component', () => {
//   let wrapper;
//   let mockStore;
//   const router = new VueRouter({ routes });
//   const data = { abc: 1 };
//   console.log(wrapper,"wapper")
//   beforeEach(() => {
//     const localVue = createLocalVue();
//     localVue.use(Vuex);
//     localVue.use(VueRouter);
//     Vue.use(Vuetify);
//    // wrapper.vm.setNutritionData= jest.fn(); 
//     mockStore = {
//       state: { nutritionData: { data } },
//     };
//     wrapper = shallowMount(NutritionData, {
//       Vue,
//       mocks: {
//         $store: mockStore,
//       },
//       data: () => ({
//         search: "",
//         nutritionData: [],
//         ingredientsData: [],
//         headersData: [],
//         dailyValues: []
//       }),
//       localVue,
//       router,
//     });
//   });

//   afterEach(() => {
//     wrapper.destroy();
//   });

//   it('is a Vue instance', () => {
//     expect(wrapper.isVueInstance).toBeTruthy();
//   });

  // it('renders the correct markup', () => {
  //   expect(wrapper.html()).toContain('<div class="container pt-3">');
  // });

  // describe('it should load mealDetails component', () => {
  //   it('it should load the meal-details', () => {
  //     expect(mealDetails).toBeTruthy();
  //   });

  //   it('it should have a <meal-details-stub></meal-details-stub>', () => {
  //     expect(wrapper.html()).toContain('<meal-details-stub></meal-details-stub>');
  //   });
  // });


//});
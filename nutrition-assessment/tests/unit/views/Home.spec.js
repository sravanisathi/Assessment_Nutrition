
import Vue from "vue";
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from "vuetify";
import Home from "../../../src/views/Home"
describe('In NutritionData Component', () => {
  let wrapper;
  let mockStore;
  console.log(wrapper,"wapper")
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    Vue.use(Vuetify);
   // wrapper.vm.setNutritionData= jest.fn(); 
    mockStore = {
           dispatch: jest.fn(),
    };
    wrapper = shallowMount(Home, {
      mocks: {
        $store: mockStore,
      },
      data: () => ({
        items: [
          {
            avatar: "rice",
            title: "Rice",
            subtitle:
              "<span class='font-weight-bold'>Rice</span> &mdash; Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
          },
          {
            avatar: "egg",
            title: "Eggs",
            subtitle:
              "<span class='font-weight-bold'>Eggs</span> &mdash; Some eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years."
          },
          {
            avatar: "pizza",
            title: "pizza",
            subtitle:
              "<span class='font-weight-bold'>pizza</span> &mdash;Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes"
          },
          {
            avatar: "meat",
            title: "Meat",
            subtitle:
              "<span class='font-weight-bold'>Meat</span> &mdash;Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle"
          },
          {
            avatar: "carrots",
            title: "carrots",
            subtitle:
              "<span class='font-weight-bold'>Carrots</span> &mdash; The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia"
          },
          {
            avatar: "apples",
            title: "Apples",
            subtitle:
              "<span class='font-weight-bold'>Apples</span> &mdash; An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."
          }
        ],
        quantity: 1,
        foodDetails: [],
        foodArray: [],
        itemData: []
      }),
      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

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


});
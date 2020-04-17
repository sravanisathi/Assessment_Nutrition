import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getIngredients } from "../../../src/services/common/nutrition-data/nutrition-data";
import {
  store,
  actions,
  mutations,
  getters,
  state
} from "../../../src/store/index";

jest.mock("../../../src/services/common/nutrition-data/nutrition-data");
// create local vue instance
const localVue = createLocalVue();
localVue.use(Vuex);

describe("In Store", () => {
  let commit;
  let dispatch;
  let error;
  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    error = new Error({ message: "Async error" });
  });

  it("it should have all state objects ", () => {
    expect(store.state.nutritionData).toBeTruthy();
  });

  it("it should have all store Mutations", () => {
    const nutritionData = [
      {
        weight: 1,
        name: "eggs",
        quantity: 1
      },
      {
        weight: 1,
        name: "milk",
        quantity: 1
      }
    ];

    mutations.getNutritionDataActionMutation(state, nutritionData);
    expect(state.nutritionData).toBe(nutritionData);
  });

  it("it should have all store actions", async () => {
    const ingredients = {
      ingr: [
        {
          weight: 1,
          name: "eggs",
          quantity: 1
        },
        {
          weight: 1,
          name: "milk",
          quantity: 1
        }
      ]
    };
    const nutritionData = [
      {
        weight: 1,
        name: "eggs",
        quantity: 1
      },
      {
        weight: 1,
        name: "milk",
        quantity: 1
      }
    ];
    getIngredients.mockResolvedValue(nutritionData);
    await actions.getNutritionDataAction({ commit, dispatch }, ingredients);
    expect(commit).toHaveBeenCalledWith(
      "getNutritionDataActionMutation",
      nutritionData
    );
  });
  it("it should have all store getters", () => {
    const ingredientsData = [
      {
        weight: 1,
        name: "eggs",
        quantity: 1
      },
      {
        weight: 1,
        name: "milk",
        quantity: 1
      }
    ];

    getters.getnutritionDataList(state);
    expect(state.nutritionData).toStrictEqual(ingredientsData);
  });
});

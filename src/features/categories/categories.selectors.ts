import { RootState } from "../../store/store";


export const selectCategories = (state:RootState) => state.categories.categoriesMap;
export const selectCategoriesIsLoading = (state:RootState) => state.categories.isLoading;
export const selectCategoriesError = (state:RootState) => state.categories.error;




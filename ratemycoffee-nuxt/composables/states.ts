export const useUserLocation = () => useState<string>("userLocation", () => "");
export const useCoffeeShopSort = () => useState<string>("coffeeShopSort", () => "");
export const useCoffeeSort = () => useState<string>("coffeeSort", () => "");
export const useSavedReviewsSort = () => useState<string>("savedReviewsSort", () => "");
export const useAllSort = () => useState<string>("allSort", () => "");
export const useShowSearchResults = () => useState<boolean>("showSearchResults", () => false);
export const useShowHomeComponent = () => useState<boolean>("showHomeComponent", () => true);
export const useSearchQuery = () => useState<string>("searchQuery", () => "");
export const useSearchQueryForCoffee = () => useState<string>("searchQueryForCoffee", () => "");
export const useOption = () => useState<string>("option", () => "Search by coffee");
export const useSavedReviews = () => useState<Array<{ 
    id: number;
    name: string;
    img: string;
 }>>(
    "savedReviews", // The key to save the state in local storage
    () => [] // Initial value, an empty array of objects
  );
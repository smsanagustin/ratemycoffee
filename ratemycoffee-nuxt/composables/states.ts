export const useUserLocation = () => useState<string>("userLocation", () => "");
export const useCoffeeShopSort = () => useState<string>("coffeeShopSort", () => "");
export const useCoffeeSort = () => useState<string>("coffeeSort", () => "");
export const useSavedReviewsSort = () => useState<string>("savedReviewsSort", () => "");
export const useAllSort = () => useState<string>("allSort", () => "");
export const useSavedReviews = () => useState<Array<{ 
    id: number;
    name: string;
    img: string;
 }>>(
    "savedReviews", // The key to save the state in local storage
    () => [] // Initial value, an empty array of objects
  );
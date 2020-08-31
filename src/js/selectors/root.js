import { createSelector } from 'reselect';

// main selectors
export const selectCategories = (state) => state.categories.categories;
export const selectCategoryLoading = (state) => state.categories.loading;
export const selectCart = (state) => state.cart;

// page specific selectors
export const selectCategoryNamesWithPath = createSelector(
  selectCategories, 
  categories => categories && categories.map(({ name, path }) => ({ name, path }))
);

export const selectCartItems = createSelector(selectCart, ({ items }) => Object.values(items));

// calculating total here to consoliate business logic
// keeping the app easier to read 
export const selectCartTotals = createSelector(selectCartItems, (itemList) => {
  const subtotal = itemList.reduce(
    (currentSum, { price, quantity }) => currentSum + price * quantity,
    0
  );
  const tax = subtotal * 0.0975;
  const total = subtotal + tax;
  return {
    subtotal,
    tax,
    total
  };
});

// large selector to consolidate some of the searching business logic 
// away from the components
export const selectProductFromPathname = (pathname) => {
  return createSelector(
    selectCategories,
    (categories) => {
      if(!categories.length) {
        return;
      }

      // match the route
      const matchedCategory = categories.find(({ path }) => pathname === path);

      if(!matchedCategory) {
        return null;
      }

      // process the data and pull the useful params that match the requirement
      // of using the cheapest variant
      const processedProducts = matchedCategory.products.map((product) => {
        let cheapestVariantId = '';
        let cheapestVariantName = '';
        let cheapestVariantPrice = Infinity;
        let cheapestVariantImage = null;

        for (let variant of product.variants) {
          const regularPrice = Number.parseFloat(variant.prices.regular);

          if (cheapestVariantPrice > regularPrice) {
            cheapestVariantName = variant.name;
            cheapestVariantId = variant.id;
            // rounding as per requirements
            cheapestVariantPrice = Math.round(regularPrice);
          }
        }

        // creating a clean data transfer object to work with henceforth 
        const displayData = {
          id: cheapestVariantId,
          name: product.name,
          price: cheapestVariantPrice,
          description: product.description,
          manufacturerName: product.manufacturer.name,
          manufacturerLocation: product.manufacturer.location,
        };

        for (let imageData of product.images) {
          if (imageData.option === cheapestVariantName) {
            cheapestVariantImage = imageData.url;
          }
        }

        // this may come back as null, in which case we will use a placeholder image
        displayData.image = cheapestVariantImage;

        return displayData;
      });

      return processedProducts;
    }
  );
};

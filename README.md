# Front-End Engineering Code Challenge

Hello my name is Maritza I this is my code challenge for The Bouqs. I used React and Redux. 
Style library called Ant Design with styled components. 
I enjoyed styling and like the overall theme of the challenge, I think it showcases what I like to do. 
I also like the product and the color scheme. 

## Setup:
This project requires [node.js](https://www.npmjs.com/get-npmhttps://www.npmjs.com/get-npm)
1. Fork this repo
2. Install project dependencies `npm install`
3. Start app with mock api `npm run dev:api` 
  - Client-side App - http://localhost:8080/
  - Mock API - http://localhost:8081/api/categories


## Requirements:
For this challenge, you will fetch data from a mock API, and render a category page with a list of products. A user will be able to add a product to their shopping cart and view their cart. All data required to render a catalog and its products is available via the mock API. 

You may or may not choose to add additional packages for fetching API data, page routing, state management, or styling. We have kept this unopinionated so you can use whatever tools you like best.
- Category page contains a grid of products for a single category
    - Tip: use `slug` URL query parameter to get a single category from the API
    - (x) Display 3 products per row on desktop
    - (x) Display 2 products per row on tablet
    - (x) Display 1 product per row on mobile
- Each product displays information for the variant with the lowest regular price:
    - (x) Variant image
    - (x) Product name
    - (x) Price rounded to the nearest dollar
- Clicking on the product renders a modal dialog that contains:
    - (x) Product description
    - (x) Product manufacturer name and location
    - (x) “Add to Cart” button
- Clicking on “Add to Cart” takes the user to a cart page
- The cart page contains an order summary with a list of all products added to the cart:
    - (x) Small product thumbnail
    - (x) Product name
    - (x) Product price
    - (x) Order total for all products in the cart

## Bonus Tasks (not required):
If you're feeling extra 💪 feel free to do some bonus tasks.
- Add unit tests
- (x) Run your code through our linting rules
- (x) Store the user’s data so if they return to the site a few days later, they don’t have to start over again 

## Submission
Please submit your app either by sending a zip file or by providing a link to a repository, github pages, or other hosting of your choice.

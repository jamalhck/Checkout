# Checkout application.

## Usage instructions:

Once the application is running using the below commands, we can see a simple interface with 4 buttons that mimick products being scanned when clicked on. Each button has a set price in pence that gets added to the running total of each individual item and also to the Total Price of all items.
When the product is scanned (clicked on button) the Basket Items section gets populated with the name of the product.
The item quantity gets updated each time an item is scanned, if the item is scanned 2 times, the quantity will be reflected as such.
The special price is present for Product A and B, when three iteam A are scanned, the total price is £1.30. When item B is scanned two times, the total price is £0.45 instead of £0.60.

## Key decisions made

The way the products would be scanned, I chose button clicks to mimick a product scan.
Decision to write pseudo code for the SpecialPrice function allowed me to visualise it before starting to type the code.
To make the code more readable and organised, I separated the HTML code from Basket.js and put it in Front.js instead.
To have Items.js as a file to store the Product names/ prices, this allowed for the price to be controlled from one single point for the entire application, allowing for better scalability.
To add an extra parameter unitPrice to the Sum function in Calculator.js, helped to maintain only one function for all single price products.

## Future iterations/ To add if there was more time available.

For future iterations, I have thought of adding a 'change price' section next to the checkout system, which would allow for a product to be selected in a dropdown menu, then a placeholder would be activated to input the new price, and a Submit button would then be pressed to update the price inside the Items.js file, which will then feed the rest of the application with the new price.
Another suggestion is to rectify the running total items to only be visible when the respective item is scanned and not visible as 0.00 all the time.
The special price examples in this project are SpecialPriceA and SpecialPriceB, which in my opinion could be improved to allow for pricing rule changes specifically to bundle prices, the logic could be improved to cater for an infinite amount of items in the same bundle, with this approach we would remove one of the two SpecialPrice functions and use the one for all scenarios, 3 items or 8, 9 items, allowing scalability for the application.
The 'change price' functionality could be improved further to add special price changes as well which would ask for the bundle item quantity and price for the entire bundle.
Also, a functionality to remove an item from the basket.
Ideally future interations would be more suitable to perform using TypeScript, for better error/ bug handling.
Improve the styling/UI of the application.
Add a START button before the actual checkout screen is shown.

### Time taken to complete assessment: 12-14 hours.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

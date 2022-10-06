# intro 💡

This project is example of e-commerce web app that allows you to have some basic funtionallities.
this task requiered from Scandiweb company.

# setup

First go clone this repository to run the server for the endpoints GraphQl EndPoint [GraphQl EndPoint](https://github.com/MohamedShehtaa/junior-react-endpoint).\*

## installation

Clone this repo and go to the project folder and install required dependencies:

```
npm install
```

And run Webpack to watch scss files changes:

```
npm start
```

Project will be automatically open at http://localhost:3000/

For production build:

```
npm run build
```

# Features ⭐

1. You can simply add products to your cart from PLP and PDP

    - when you hover on product card the button will show you can click on it , the product will add to cart with default values
    - Click product card and it takes you product details page , you can choose your attributes and add to cart.

2. Change quantity of the product.

    - You can change the quantity on cart overlay or on cart page by clicking in (+),(-) buttons.

3. Choose attributes of your product and add to your cart.

    - if you choose different attribute values in each time and added to cart it wil be displayed as a sperated item .

4. Change the currency of the store.

    - There is curreny redux state , so you can change the currency via currency overlay on header globally.

5. Preview the cart with the overlay with click on the cart icon .

    - There is cart overlay on header , you just need to click on the cart icon and if you click again it will close hide the overlay.

6. You can choose categories on header.
    - Filtering products with category links and if you click on the website logo it will redirect to main page.

# Ada Trader
Backbone application for simulated trading with real-time stock quotes for Ada capstone projects.

## Setup
### Starting project
To get started with the Ada Trader project follow these steps:

1. Fork and clone this repository
1. `cd` into the directory for your cloned project
1. `npm install`
1. `npm start`

### Project structure
This project is fairly open-ended. You can approach it similarly to how we've worked in class by using a combination of models, collections, and views. However, we've also provided a file called `application_view.js`, which could act as an overall "container" for the entire application, and would be similar to `TaskListView` in the live code. Think about what this may give you, or how using it could make it harder.

Consider some of the following files that we provide. You may not use them at all to accomplish all of the requirements for this project, and you will likely change them.

| File | Purpose |
|:-----|:--------|
| `src/app/views/application_view.js` | Overall "container" for the entire application, similar to `TaskListView` in the live code. |
| `src/app.js` | Main entry-point of the application. This file contains a function `simulate()`, which will be used in wave 4. |
| `build/index.html` | Static HTML & Underscore template script for the quote view. It makes some assumptions about what ids you may use to target, so be mindful of that. |
| `build/css/app.css` | Some basic styles. Besides the assumptions it makes to work with the provided `index.html`, it makes some assumptions about how you will add and render a single quote, so be mindful of that if you choose to use these styles. |

## Requirements
### Wave 1 - Render a Quote (with a symbol and price)
In this wave you should be able to render a single instance of a Quote, which will display the name (known as a symbol) and price for a single stock. In order to achieve this your application should at the very least:

#### Primary Requirements
1. Have a `QuoteView` class extended from `Backbone.View` (in `src/app/views/quote_view.js`).
1. The `QuoteView` should:
  * Have an `initialize` function that should:
    * Receive and store a JavaScript object with quote data (`symbol` and `price`). See [Example Stocks](#example-stocks) for inspiration.
    * Compile an Underscore template using the script with the id `quote-template` (which is already defined in `index.html`).
  * Have a `render` function that should:
    * Use the compiled template to render HTML for a single quote.

### Wave 2 - A Larger View
In this wave, you should work on a second Backbone view, such as the provided `ApplicationView`, which is responsible for displaying our entire web application. This view should manage a list of `QuoteView` instances and render each of them. In order to achieve this, your application should:

#### Primary Requirements
1. Have a View class extended from `Backbone.View`.
1. The View should:
  * Have an `initialize` function that should:
    * Receive and store a list of quote data objects.
    * Compile the same Underscore template from Wave 1. This compiled template will replace the one used in `QuoteView` during Wave 1.
  * Have a `render` function that should:
    * Render each `QuoteView` instance in the list of quotes.
    * Have a reference to the element in `index.html` that will contain the list of rendered `quotes`.
    * Append to that element the jQuery object for each `QuoteView` instance we rendered.

Somewhere in the app (in a view or `app.js` or a collection), you should create and store a list of *at least* two `QuoteView` instances. Each instance should be given the data for a single quote. When the app opens, it must have a few quotes already populated.

### Wave 3 - Events: Buy and Sell, Testing
In this wave we will extend our `QuoteView` class to support clicking on the Buy and Sell buttons for each quote. In order to achieve this, your application should be updated so that:

1. The `QuoteView` class should:
  * Have an `events` property that defines two handlers for the `click` event, one for each `button` in the quote template.
  * Have a function that runs when the `click` event happens on the buy button. This function should:
    * Increase the stock's price by a fixed amount (say, $1.00).
    * Re-render the view so that the new price is displayed to the user.
  * Have a function that runs when the `click` event happens on the sell button. This function should:
    * Decrease the stocks' price by a fixed amount (say, $1.00).
    * Re-render the view so that the new price is displayed to the user.

2. The `Quote` model should have unit tests written in Jasmine for any custom methods you add to it.

### Wave 4 - Events: Simulate
This wave will implement a simulation of the broader stock market. To make this simulation as true-to-life as possible, we'll be randomly moving the stock price up or down by a small amount, once per second. In `app.js`, we've provided the function `simulate` which does exactly that. In order to achieve this, your application should be updated so that:

1. The `QuoteView` class should:
  * Setup [an event listener](http://backbonejs.org/#Events-on) for a custom event named `change:price`. This should be done in the `initialize` function.
  * Have a function that runs when the `change:price` event happens. This function should:
    * Expect that a `change` parameter will be passed into it.
    * Expect that the `change` parameter will be a number, positive OR negative.
    * Add the `change` parameter onto the current stock price.
    * Re-render the view so that the new price is displayed to the user.
1. Something in the project should call the `simulate` function on each of the `QuoteView` instances.

You may find that you would rather move the `simulate` function out of `app.js`. Feel free to do so.

We do not expect you to write unit tests for the `simulate` function.

### Extra Features
1. Add functionality to the "Buy all"/"Sell all" buttons which buy or sell all stocks at once. Yay diversification!
1. Deal with the case of a stock price reaching zero or negative values.
1. Add a feature so that the details of the buying and selling activity is displayed and stored somewhere, like historical data or an inventory.


## Example Stocks
* Symbol: `HUMOR`, Price: $88.50 - Cristal's HumorUs capstone
* Symbol: `CLOTH`, Price: $81.70 - Sophia's Cloth Sim capstone
* Symbol: `HABIT`, Price: $98.00 - Val's Habitmon capstone
* Symbol: `SUPER`, Price: $83.10 - Rowan's Super Hero Draft capstone
* Symbol: `INGRD`, Price: $79.40 - Nicole's Ingredient Inspector capstone
* Symbol: `MXTPE`, Price: $109.20 - Jess's Digital Mixtape capstone
* Symbol: `CNTAR`, Price: $90.70 - Leah's Centaur capstone
* Symbol: `EVCLR`, Price: $101.90 - Lisa's Evolution In Color capstone
* Symbol: `FUZZY`, Price: $88.60 - Jade's Fuzz Therapy capstone

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
You should use the following files when building your application:

| File | Purpose |
|:-----|:--------|
| `src/app/views/application_view.js` | Overall "container" for the entire application, similar to `TaskListView` in the live code. |
| `src/app/views/quote_view.js` | View for an individual quote. |
| `src/app.js` | Main entry-point of the application. |
| `build/index.html` | Static HTML & Underscore template script for the quote view. |

## Requirements
### Wave 1 - First View
In this wave we will build our first Backbone view, which will display the name (known as a symbol) and price for a single stock. In order to achieve this your application should:

#### Primary Requirements
1. Have a `QuoteView` class extended from `Backbone.View` (in `src/app/views/quote_view.js`).
1. The `QuoteView` should:
  * Have an `initialize` function that should:
    * Receive and store a JavaScript object with quote data (`symbol` and `price`). See [Example Stocks](#example-stocks) for inspiration.
    * Compile an Underscore template using the script named `quote-template` (which is already defined in `index.html`).
  * Have a `render` function that should:
    * Use the compiled template to render HTML for a single quote, using the quote data stored by `initialize`.

### Wave 2 - Second View
In this wave we will create a second Backbone view, `ApplicationView`, which is responsible for displaying our entire web application. It will manage a list of `QuoteView` instances and render each of them. In order to achieve this your application should:

#### Primary Requirements
1. Have an `ApplicationView` class extended from `Backbone.View` (in `src/app/views/application_view.js`).
1. The `ApplicationView` should:
  * Have an `initialize` function that should:
    * Receive and store a list of quote data objects.
    * Compile the same Underscore template from Wave 1. This compiled template will replace the one used in `QuoteView` during Wave 1.
    * Create and store a list of *at least* two `QuoteView` instances. Each instance should be given:
      * The data for a single quote.
      * The compiled Underscore template from the above step.
    * Store the HTML unordered list element from `index.html` that will contain the list of rendered `quotes`.
  * Have a `render` function that should:
    * Render each `QuoteView` instance in the list created within `initialize`.
    * Use the stored HTML unordered list element.
    * Append to that element the jQuery object for each `QuoteView` instance we rendered.

### Wave 3 - Events
In this wave we will extend our `QuoteView` class to support clicking on the Buy and Sell buttons for each quote. In order to achieve this your application should be updated so that:

#### Primary Requirements
1. The `QuoteView` class should:
  * Have an `events` property that defines two handlers for the `click` event, one for each `button` in the quote template.
  * Have a function that runs when the `click` event happens on the buy button. This function should:
    * Increase the stock's price by a fixed amount (say, $1.00).
    * Re-render the view so that the new price is displayed to the user.
  * Have a function that runs when the `click` event happens on the sell button. This function should:
    * Decrease the stocks' price by a fixed amount (say, $1.00).
    * Re-render the view so that the new price is displayed to the user.

2. The `Quote` model should have unit tests written in Jasmine for any custom methods you add to it.

#### Optional Enhancements
The optional enhancement for this wave is to implement a simulation of the broader stock market. To make this simulation as true-to-life as possible, we'll be randomly moving the stock price up or down by a small amount, once per second. In order to achieve this your application should be updated so that:

1. The `QuoteView` class should:
  * Setup [an event listener](http://backbonejs.org/#Events-on) for a custom event named `change:price`. This should be done in the `initialize` function.
  * Have a function that runs when the `change:price` event happens. This function should:
    * Expect that a `change` parameter will be passed into it.
    * Expect that the `change` parameter will be a number, positive OR negative.
    * Add the `change` parameter onto the current stock price.
    * Re-render the view so that the new price is displayed to the user.
1. The application entry-point (`src/app.js`) should:
  * Implement the anonymous function passed to `setInterval`. It should:
    * Get the list of all `QuoteView` instances from the `ApplicationView`.
    * Call the `simulate` function on each of those `QuoteView` instances.

### Extra Features
1. Add buy/sell buttons to the `ApplicationView` which buy or sell all stocks at once. Yay diversification!
1. Deal with the case of a stock price reaching zero or negative values.


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

# Ada Trader
Backbone application for simulated trading with real-time stock quotes for Ada capstone projects.

// TODO: add gif

Our Ada Trader app will display a list of stock quotes with their prices. The user will be able to buy and sell these, which should affect their individual prices. There is also going to be a "real-time" simulation, which adjusts and updates the prices of these quotes over time.

## Setup
### Starting project
To get started with the Ada Trader project follow these steps:

1. Fork and clone this repository
1. `cd` into the directory for your cloned project
1. `npm install`
1. `npm start`

### Project structure
Consider some of the following files that we provide

| File | Purpose |
|:-----|:--------|
| `src/app.js` | Main entry-point of the application. This file contains a function `simulate()`, which will be used in wave 4. |
| `dist/index.html` | Static HTML & Underscore template script for the quote view. It makes some assumptions about what ids you may use to target, so be mindful of that. |
| `dist/css/app.css` | Some basic styles. Besides the assumptions it makes to work with the provided `index.html`, it makes some assumptions about how you will add and render a single quote, so be mindful of that if you choose to use these styles. |
| simulator |  |

## Requirements
### Wave 1 - Quotes, QuoteList, and Simulation

Render a Quote (with a symbol and price) and a QuoteList in the Quotes Section
A Quote
  - Will have a buy/sell button
QuoteList
  - Will hook up to the given simulator model, so that every second the prices of each quote update

<!-- In this wave you should be able to render a single instance of a Quote, which will display the name (known as a symbol) and price for a single stock. In order to achieve this your application should at the very least:

#### Primary Requirements
1. Have a `Quote` extended from `Backbone.Model`
1. Have a `QuoteView` extended from `Backbone.View`
1. The `QuoteView` should:
  * Have an `initialize` function that should:
    * Receive and store a JavaScript object with quote data (`symbol` and `price`). See [Example Stocks](#example-stocks) for inspiration.
    * Compile an Underscore template using the script with the id `quote-template` (which is already defined in `index.html`).
  * Have a `render` function that should:
    * Use the compiled template to render HTML for a single quote.
1. When creating an instance of the `QuoteView`, it should be tied to an instance of the `Quote` model -->

### Wave 2 - Create and Render Trades after buying or selling a Quote
  - When a Quote is created and added to the QuoteList, it should create a Trade. The purpose of the Trades panel is to show a history of every transaction
  - Use the event bus provided

<!-- In this wave, you should work on a second Backbone view,  `QuoteListView`, which is responsible for displaying all of the Quotes. This view should manage a list of `QuoteView` instances and render each of them. In order to achieve this, your application should:

#### Primary Requirements
1. Have a `QuoteList` extended from `Backbone.Collection`
1. Have a `QuoteListView` extended from `Backbone.View`.
1. The `QuoteListView` should:
  * Have an `initialize` function that should:
    * Receive and store a list of quote data objects.
    * Compile the same Underscore template from Wave 1. This compiled template will replace the one used in `QuoteView` during Wave 1.
  * Have a `render` function that should:
    * Render each `QuoteView` instance in the list of quotes.
    * Have a reference to the element in `index.html` that will contain the list of rendered `quotes`.
    * Append to that element the jQuery object for each `QuoteView` instance we rendered.
1. When creating an instance of the `QuoteListView`, it should be tied to an instance of the `QuoteList` model
1. When the app opens, it must have a few quotes already populated and rendered on the page. -->

### Wave 3 - Creating Orders
  - Have a form that can create an Order with symbol, price, and "buy if price is lower than" or "sell if price is higher than" button
  - Show a list of these orders
  - If these conditions are met, then destroy the order
  - use the event bus

<!-- In this wave we will extend our `QuoteView` class to support clicking on the Buy and Sell buttons for each quote. In order to achieve this, your application should be updated so that:

1. The `QuoteView` class should:
  * Have an `events` property that defines two handlers for the `click` event, one for each `button` in the quote template.
  * Have a function that runs when the `click` event happens on the buy button. This function should:
    * Increase the stock's price by $1.00.
    * Re-render the view so that the new price is displayed to the user.
  * Have a function that runs when the `click` event happens on the sell button. This function should:
    * Decrease the stocks' price by $1.00.
    * Re-render the view so that the new price is displayed to the user.
1. The `Quote` model should have unit tests written in Jasmine for any custom methods you add to it. -->

<!-- ### Wave 4 - Events: Simulate
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

We do not expect you to write unit tests for the `simulate` function. -->

# Ada Trader
In this project you will create the Ada Trader platform for real-time stock trading. All trading will happen with fake stocks that represent previous Ada capstone projects, and will be connected to a "real-time" simulation that randomly adjusts the prices for each stock over time.

// TODO: add gif

## Learning Goals
This project should demonstrate your ability to:
- Create Backbone Views of Models
- Create Backbone Views of Collections
- Create multiple Backbone Models that relate to each other
- Connect Backbone Models, Collections, and Views through custom events
- Use Backbone Views to create a form for user input
- Create Model instances from the user input in that form
- Test model logic in a Backbone application

Although real terminology is used throughout this project, and the interface design is intended to loosely mimic real-world trading platforms, having actual trading "domain knowledge" is **NOT** a learning goal.

## Setup
### Starting project
To get started with the Ada Trader project follow these steps:

1. Fork and clone this repository
1. `cd` into the directory for your cloned project
1. `npm install`
1. `npm start`

### Project Baseline
This project uses the same structure as BackTREK and is based on our [backbone baseline](https://github.com/AdaGold/backbone-baseline). The baseline for this project includes some model and collections that have already been implemented:

| Model | File | Purpose |
|:------|:-----|:--------|
| `Quote` | `src/models/quote.js` | This model represents an individual stock quote, and has attributes for:<br>• `symbol` - code name for the stock (e.g. AAPL)<br>• `price` - current price of the quote<br>You will add the ability to buy / sell a quote using custom functions. |
| `QuoteList` | `src/collections/quote_list.js` | This collection represents all of the quotes available on the trading platform. |
| `Simulator` | `src/models/simulator.js` | This model handles the logic for simulating stock market activity by randomly shifting the price for each quote up or down each second. You will need to connect it to your `QuoteList` instance in `src/app.js`. |

## Project Requirements
### Wave 1 - Trading with Market Orders
#### Trading Overview
In this wave you will implement the Backbone Views, events, and model logic to allow a user to trade stocks using "market orders". A market order is when a trader purchases or sells a stock at the _current_ price, and the order "executes" (actually becomes a trade) immediately.

#### Interface Details
In the Ada Trader interface market orders are created by clicking the Buy and Sell buttons next to each stock quote. When a user presses one of these buttons they are trading that stock at the price displayed at that moment.

#### User Stories
As a user, I can:
  - See a list of quotes in the left side of the top panel, including the:
    - Symbol for each quote
    - Market price for each quote
    - Buy button for each quote
    - Sell button for each quote
  - Click the Buy button associated with a quote
  - Click the Sell button associated with a quote
As a user, when I:
  - Click the Buy button for a quote:
    - That quote's market price increases by $1.00
  - Click the Sell button for a quote:
    - That quote's market price decreases by $1.00

#### Tests
Tests have been provided for the two custom functions that you will need to implement for this wave. In later waves you will need to write your own tests for any custom functions that you add to your models, as well as any validations you have.

#### Advice
Before the prices show on your stock quotes will begin to adjust over time, you will need to connect your quote collection to the simulator model -- check out the starter code in `src/app.js`.

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

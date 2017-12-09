# Ada Trader
In this project you will create the Ada Trader platform for real-time stock trading. All trading will happen with fake stocks that represent previous Ada capstone projects, and will be connected to a "real-time" simulation that randomly adjusts the prices for each stock over time.

This is an individual, [stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md) project.

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

Although real terminology is used throughout this project, and the interface design is intended to loosely mimic real-world trading platforms, having actual trading "domain knowledge" is **NOT** a learning goal. If you're unclear on any of the terminology used in this document please consult the [vocabulary section](#trading-vocabulary) for an explanation, or ask Charles / other instructional staff!

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

# Project Requirements
## Wave 1 - Trading with Market Orders
### Trading Overview
In this wave you will implement the Backbone Views, events, and model logic to allow a user to trade stocks using "[market orders](#trading-vocabulary)". A market order is when a trader purchases or sells a stock at the _current_ price, and the order "executes" (actually becomes a trade) immediately.

### Interface Details
In the Ada Trader interface market orders are created by clicking the Buy and Sell buttons next to each stock quote. When a user presses one of these buttons they are trading that stock at the price displayed at that moment.

### User Stories
As a user, I can:
  - See a list of quotes in the left side of the top panel, including the:
    - Symbol for each quote
    - [Market price](#trading-vocabulary) for each quote
    - Buy button for each quote
    - Sell button for each quote
  - Click the Buy button associated with a quote
  - Click the Sell button associated with a quote
As a user, when I:
  - Click the Buy button for a quote:
    - That quote's market price increases by $1.00
  - Click the Sell button for a quote:
    - That quote's market price decreases by $1.00

### Tests
Tests have been provided for the two custom functions that you will need to implement for this wave. In later waves you will need to write your own tests for any custom functions that you add to your models, as well as any validations you have.

### Advice
Before the prices show on your stock quotes will begin to adjust over time, you will need to connect your quote collection to the simulator model -- check out the starter code in `src/app.js`.

## Wave 2 - Trade History
### Trading Overview
When working as a stock trader it is important to know which trades you've made! This can be necessary for tax auditing and other regulatory purposes, as well as to determine the success you've had while trading. As developers it can also be a useful tool for debugging our trading platform.

### Interface Details
In the Ada Trader interface the right side of the top panel lists a history of all trades made by the user. The most recent trades are listed at the top for increased visibility. Each trade listed in the history includes the symbol that was traded, whether it was bought or sold, and the price for that trade.

### User Stories
As a user, I can see:
  - A list of all completed trades in the right side of the top panel, including the:
    - Symbol for each trade
    - Buy/Sell indicator for each trade
    - [Trade price](#trading-vocabulary) for each trade
  - The most recent trade listed at the top of the trade history

As a user, when I:
  - Click the Buy button for a quote:
    - A new entry is added to the top of the trade history
    - The new trade entry has:
      - The symbol from the quote associated with the Buy button
      - An indicator that the trade was a "buy"
      - The price from the quote associated with the Buy button _when the button was clicked_
  - Click the Sell button for a quote:
    - A new entry is aded to the top of the trade history
    - The new trade entry has:
      - The symbol from the quote associated with the Sell button
      - An indicator that the trade was a "sell"
      - The price from the quote associated with the Sell button _when the button was clicked_

### Advice
To keep things simple, this wave can be completed without creating any new Backbone Models, Collections, or Views. Because the trade history is "static" (the data associated with each trade will never change), we can implement this behavior entirely through events and using jQuery to update the DOM.

## Wave 3 - Trading with Limit Orders
### Trading Overview
When traders become more advanced in their profession they begin to find that trading only with market orders can be tedious. It can be risky to click "Buy" when the quote has one price and find that your order executed after the price had increased substantially, due to other market participants. And vigilantly watching the quotes ticker to wait for an ideal "target" price to be hit might take up your whole day!

For this reason advanced traders rely heavily on more advanced order types, primarily the "[limit order](#trading-vocabulary)". A limit order is similar to a market order, with two major exceptions: the limit order includes a "target price", and it remains "open" until cancelled by the trader or the target price is reached. When the current price of the stock reaches the order's target price then the order is executed (creating a new trade), and the order disappears.

### Interface Details
In the Ada Trader interface the order system can be found in the bottom panel. There are two sections to this panel: the "open orders" list and the order entry form.

The right side of the bottom panel has a form for creating new limit orders. This form has a drop-down list of available stock symbols, a text input for the order's target price, and a Buy and Sell button to create the order.

The left side of the bottom panel has a list of all open orders. Orders are listed with the oldest at the top. Each open order entry in the list includes the symbol being ordered, whether it is a buy or sell order, the target price, and a cancel button.

### User Stories
As a user, I can:
  - See a list of open orders in the left side of the bottom panel, including the:
    - Symbol for each order
    - Buy/Sell indicator for each order
    - [Target price](#trading-vocabulary) for each order
    - Cancel button for each order
  - See an order entry form in the right side of the bottom panel, including the:
    - Symbol selection drop-down, which lists all symbols shown in the quote ticker
    - Target price input box
    - Buy button
    - Sell button
  - Click the Cancel button on each order in the open orders list
  - Click the Buy button in the order entry form
  - Click the Sell button in the order entry form

As a user, when I:
  - Click the Cancel button for an order:
    - That order is removed from the open orders list
    - That order will never execute
  - Click Buy in the order entry form:
    - If the target price is blank OR is **greater than** the current market price:
      - That order is not created and (TODO: error display?)
    - If the target price is **less than or equal** to the current market price:
      - A new Buy order is added to the bottom of the open orders list, with the:
        - Symbol from the the form
        - Target price from the form
  - Click Sell in the order entry form:
    - If the target price is blank OR is **less than** the current market price:
      - That order is not created and (TODO: error display?)
    - If the target price is **greater than or equal to** the current market price:
      - A new Sell order is added to the bottom of the open orders list, with the:
        - Symbol from the the form
        - Target price from the form

Additionally, when:
  - The price of a stock quote changes:
    - If there are any open Sell orders in the open orders list, where the symbol matches the quote:
      - Each order executes, in the same manner as though the user had clicked "Sell" on the quote
      - Each order is removed from the open order list
      - Each order will never execute again
    - If there are any open Buy orders in the open orders list, where the symbol matches the quote:
      - Each order executes, in the same manner as though the user had clicked "Buy" on the quote
      - Each order is removed from the open order list
      - Each order will never execute again

### Testing
You should have tests for any validations your models have, as well as any custom functions that you create on those models. **Optional**: Write a test which verifies that limit orders are executed and destroyed when the relevant stock reaches the order's target price.

### Advice
In order to get the list of symbols for the order entry form's drop-down, you may need to have that view access the quote collection.

When removing a Backbone View from the page, that does not mean that the associated Model is gone! Be careful when cancelling an order, because an order that isn't shown on the page might still "hear" events that are triggered.

The rules above for when an order can or cannot be created are a great place to use Backbone's model validation system! Make sure to include tests for those validations as well.

## Trading Vocabulary
| Term | Definition |
|:-----|:-----------|
| Market Order | An order to purchase or sell a particular stock at the "market" price. [More details here.](https://www.investopedia.com/terms/m/marketorder.asp) |
| Limit Order | An order to purchase or sell a particular stock at a trader-specified "target" price. [More details here.](https://www.investopedia.com/terms/l/limitorder.asp) |
| Market Price | The **current** price for a stock, listed with its symbol in the quote ticker. This price will change over time. |
| Target Price | The desired price for a limit order to execute. This price is higher than "market" price if the order is to sell, and it is lower than the "market" price if the order is to buy. This price is fixed for a given order. |
| Trade Price | The price that a stock was traded at (either buy or sell) for a given trade. This price is fixed because it represents an historical event. |

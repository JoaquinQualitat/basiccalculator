$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Add Items to Cart_5054.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auto generated Octane revision tag"
    }
  ],
  "line": 3,
  "name": "Add Items to Cart",
  "description": "",
  "id": "add-items-to-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TID5054REV0.6.0"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Add a Cap",
  "description": "",
  "id": "add-items-to-cart;add-a-cap",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "That I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for a Cap and add it to the Cart",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see it in the Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "add_items_to_cart_steps.that_I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 850804700,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:43)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:168)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:168)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat code_bindings.add_items_to_cart_steps.that_I_am_on_the_Home_Page(add_items_to_cart_steps.java:29)\r\n\tat ✽.Given That I am on the Home Page(Add Items to Cart_5054.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "add_items_to_cart_steps.i_search_for_a_Cap_and_add_it_to_the_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "add_items_to_cart_steps.i_can_see_it_in_the_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Cear my Cart-7004.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auto generated Octane revision tag"
    }
  ],
  "line": 3,
  "name": "Cart Handling",
  "description": "",
  "id": "cart-handling",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TID7004REV0.2.0"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Clear my Cart",
  "description": "",
  "id": "cart-handling;clear-my-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "That I have an item in the shopping cart",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I clear my Cart",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "No items are left in the Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ClearCartSteps.that_I_have_an_item_in_the_shopping_cart()"
});
formatter.result({
  "duration": 15396700,
  "status": "passed"
});
formatter.match({
  "location": "ClearCartSteps.i_clear_my_Cart()"
});
formatter.result({
  "duration": 66700,
  "status": "passed"
});
formatter.match({
  "location": "ClearCartSteps.no_items_are_left_in_the_Cart()"
});
formatter.result({
  "duration": 68999,
  "status": "passed"
});
formatter.uri("Paypal Payment-7025.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auto generated Octane revision tag"
    }
  ],
  "line": 3,
  "name": "Paypal Processing",
  "description": "",
  "id": "paypal-processing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TID7025REV0.2.0"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Checkout paypal",
  "description": "",
  "id": "paypal-processing;checkout-paypal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "That I have some items in my basket",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I checkout",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get the options to use Paypal",
  "keyword": "Then "
});
formatter.match({
  "location": "paypalSteps.that_I_have_some_items_in_my_basket()"
});
formatter.result({
  "duration": 153800,
  "status": "passed"
});
formatter.match({
  "location": "paypalSteps.i_checkout()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "location": "paypalSteps.i_get_the_options_to_use_Paypal()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
});
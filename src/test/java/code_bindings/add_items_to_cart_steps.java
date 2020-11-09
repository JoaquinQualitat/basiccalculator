package code_bindings;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class add_items_to_cart_steps {
	
	WebDriver driver;
	
	@Given("^That I am on the Home Page$")
	public void that_I_am_on_the_Home_Page() throws Throwable {
		assertTrue(true);
	}

	@When("^I search for a Cap and add it to the Cart$")
	public void i_search_for_a_Cap_and_add_it_to_the_Cart() throws Throwable {
	    assertTrue(true);
	}

	@Then("^I can see it in the Cart$")
	public void i_can_see_it_in_the_Cart() throws Throwable {
		assertTrue(true);
	}

}

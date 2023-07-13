Feature: Validate Login Functionality

  Scenario: Validate login with valid credentials
    Given Actor is on the login page
    When Actor will my email as "abc@gmail.com"
    And Actor will my password as "12345678"
    And Actor click on the login button
    Then Actor should perform assertions for successful login if applicable

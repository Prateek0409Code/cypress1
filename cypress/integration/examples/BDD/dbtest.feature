Feature: Database Query

  Scenario: SQL Connect
    Given a SQL connection is established
    When a query is executed with 'SELECT * FROM customers'
    Then the result should contain 7 records
    And the log should display 'DB records count is => 7'

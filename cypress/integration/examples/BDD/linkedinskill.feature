Feature: LinkedIn Login and Profile Update

  Scenario: Log in to LinkedIn and add a skill to the profile
    Given Actor is on the LinkedIn login page
    When Actor enter my email or phone as "your-email-or-phone"
    And Actor enter my password as "your-password"
    And Actor click the "Sign in" button
    Then Actor should be redirected to the LinkedIn feed
    And Actor click on my profile
    Then Actor should be redirected to my LinkedIn profile
    And Actor click on the "Add Skills" button
    Then Actor should be redirected to the skills editing page
    And Actor click the "Add a skill" button
    And Actor click on the "Done" button
    Then Actor should be redirected back to my LinkedIn profile

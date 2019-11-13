Feature: Checking the Quick Start Page

  Scenario: The page works
    Given open the website
    Then the css selector ".toolbar" will contain "Welcome"
    And the css selector ".content" will contain "workshop app is running"
    And the css selector ".content pre" will contain "ng generate component xyz"

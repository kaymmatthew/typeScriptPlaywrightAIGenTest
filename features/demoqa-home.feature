Feature: DemoQA Home Page Navigation

  Scenario: Navigate to Elements section
    Given I am on the DemoQA home page
    When I click on the Elements card
    Then I should see the page title as "demosite"
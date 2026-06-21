Feature: ParaBank Registration

  Scenario: Register new user and login

    Given User launches ParaBank application

    When User registers a new account

    And User logs in using created account

    Then User should see account balance
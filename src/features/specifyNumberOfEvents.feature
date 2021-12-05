Feature: Specify number of events

  This feature allows users to specify the number of events they want displayed

Scenario: A user has not specified a number
Given The user is on the main page
And The user has a list of events
When The user has not specified a number of events
Then The max number of events displayed will be thirty-two

Scenario: A user can specify the number of events they want displayed
Given The user select an number input
When The input number is greater then one and less than thirty-two
Then The number of events selected by the user will be displayed
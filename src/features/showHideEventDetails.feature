Feature: show/hide event details

    This feature allows users to expand events to more details about said event

Scenario: An event element is collapsed by default
Given A user is on the main page
When The events are displayed
Then The events will be collapsed by default

Scenario: User can expand an event to see its details
Given A user has a list of events
When A user clicks on the 'More Details' button
Then The event will expand to reveal more details about the event

Scenario: User can collapse an event to hide its details
Given A user has opened an event
When A user clicks the 'Hide Details' button
Then The event will collapse into its default state
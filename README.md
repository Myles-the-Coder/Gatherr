# Gatherr
Meetup/Event Application

Gatherr is a progressive web application (PWA) built with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events in city specified by the user. 

User Stories:

1. As a user, I should be able to click on a collapsed event so that I can view the details of that event. I should then be able to collapse the event once I am done to hide the details of that event.
2. As a user, I should be able to change the number of events that are on display so that I can personalize my experience rather than having the default number of events be limited to 32.
3. As a user, I should be able to access event data offline so that I can freely check events in my selected city without being reliant on a constant internet connection.
4. As a user, I should be able to view a chart of upcoming events in each city so that I can quickly visualize how many events are available in my selected city.

Scenarios (Gherkin syntax)
Scenario 1: An event element is collapsed by default
Given - A user is on the main page
When - The events are displayed
Then - The events will be collapsed by default

Scenario 2: User can expand an event to see its details
Given - A user has a list of events
When - A user clicks on an event	
Then - The event will expand to reveal more details about the event

Scenario 3: User can collapse an event to hide its details
Given - A user has opened an event
When - A user clicks off of the event
Then - The event will collapse into its default state

Scenario 4: When user hasn’t specified a number, 32 is the default number
Given - A user has a list of events
When - A user has not specified a number of events
Then - The number of events shown will be the default value of 32

Scenario 5: User can change the number of events they want to see
Given - A user has a list of events
When - A user specifies a number of events
Then - The specified number of events will be shown to the user

Scenario 6: Show cached data when there’s no internet connection
Given - A user has no internet connection
When - A user attempts to view previously accessed data
Then - Show events via cached data

Scenario 7: Show error when user changes the settings (city, time range)
Given - A user has no internet connection
When - A user attempts to change city settings
Then - Display an error message

Scenario 8: Show a chart with the number of upcoming events in each city
Given - A user has selected a specific city
When - A user searches for events in a specific location
Then - Display a chart of upcoming events



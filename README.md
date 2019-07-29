- run npm i and npm start to get started

Display Page:

- should have state called 'selected' to represent which of the drop down menu items is selected
- should have a function called toggleDisplay that toggles this.state.selected
- should render a SearchBar with a DropDown menu and Cards that appear based on whichever drop down item is selected

Cards:

- should have a function called renderCard that renders the cards that populate the display page
- the card information should be passed down through props
- when clicked on, the card should route to it's about page that displays info on it

Search Bar:

- should hold the title of the page and the logo (Spyro image) as well as a drop down menu

Drop Down:

- should render a drop down menu based on the options given at the top of the document
- changing which item is selected should change the overall state of 'selected'

Info Page:

- should display information of the card that was clicked on
- should have a function called renderSection that renders each section of stats or information based on the category that is passed into it

Database:

- where you will get all the information you need on Spyro the video game. You can populate it with your own information
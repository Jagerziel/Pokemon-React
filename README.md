# Pokemon React Mini Project

## Description
The Pokemon project pulls from the pokemon API to display various contents including name and image.  The navigation menu can be used to navigate through and display details of each.

GitHub Link: https://github.com/Jagerziel/Pokemon-React

Railway Link: `TBC`

API Root Directory: https://pokeapi.co/api/v2/pokemon/

The API is sourced from: https://pokeapi.co/

## Technical Notes

### API Endpoint and Process Overview
The initial API used pulled an object with two items - the name of the pokemon and a link to additional details about the pokemon.  The name was pulled for the menu items and the link was lifted to the contents to render additional details about the pokemon selected.  An API call is conducted each time the data is called.

### Dependencies
- react
- nodemon
- axios

## Future Features
- Include Additional Pokemon Details
- Dynamically link the info to the individual image
- Refactor code to make API calls more efficiently

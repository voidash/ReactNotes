# ReactNotes
Couple of react apps. and relevant notes for future.

## Why React?
  * component based design
  * uses virtual DOM which is faster.
  
## Setting Up React  : Important Tools

* Easy Way :
      
          npx create-react-app <AppName>        
  To start the server : npm start
 
 
 
 * A bit tedious approach:
 
        $ npm init -y 
       
 * Add these dependencies and dev dependencies 
    
        "devDependencies": {
          "babel-eslint": "^10.1.0",
          "eslint": "^7.12.1",
          "eslint-config-prettier": "^6.15.0",
          "eslint-plugin-import": "^2.22.1",
          "eslint-plugin-jsx-a11y": "^6.4.1",
          "eslint-plugin-react": "^7.21.5",
          "prettier": "^2.1.2"
        },
        "dependencies": {
          "parcel-bundler": "^1.12.4",
          "react": "^17.0.1",
          "react-dom": "^17.0.1"
        }
 * ```npm -i ```
 
 * add these scripts:
  
        "start": "parcel src/index.html",
        "test": "echo \"Error: no test specified\" && exit 1",
        "prettify": "prettier \"src/**/*.{js,html}\" --write",
        "lint": "eslint \"src/**/*.{js,jsx}\" --quiet"
        
  
 
          
## React related important points

* React strictly requires : PascalCasing for usermade DOM components.
* When using Js Objects to style the elements, there can't be snake-casing i.e (background-color). It needs to be backgroundColor.
* className instead of class because : React after compiling uses Regular DOM api and className is just part of it. Only HTML specific elements can have className attached to it. If usermade element is made to have a className , it will pass as prop.
* User Made components can be styled. ```style={{color: '#fff' , backgroundColor:'#000'}}```
*

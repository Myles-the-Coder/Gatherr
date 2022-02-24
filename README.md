<div align='center'>

# Gatherr
![Gatherr_logo](https://user-images.githubusercontent.com/76969330/155613307-8c2e0a46-af58-49fe-a74e-ca9c3610086d.png)

Gatherr is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events and render them on the client-side using React.

Initial 1.0 Version Duration: November 2021 - December 2021

</div>
 
## 🧐About

This project was built for the purpose of gaining more expiernce with using AWS Serverless and building PWAs. 

## 💡Features

1. Responsive design
2. Data visualization using Recharts
3. Selecting events by city
4. Filtering search query results
5. Access to Google Calendar API data

## ⛏️Built with

"dependencies": 

		"@testing-library/jest-dom": "^5.15.1",
		"@testing-library/react": "^11.2.7",
		"@testing-library/user-event": "^12.8.3",
		"atatus-spa": "^4.4.0",
		"axios": "^0.24.0",
		"nprogress": "^0.2.0",
		"react": "^17.0.2",
		"react-dom": "^17.0.2",
		"react-scripts": "4.0.3",
		"recharts": "^2.1.6",
		"web-vitals": "^0.2.4",
		"workbox-background-sync": "^5.1.4",
		"workbox-broadcast-update": "^5.1.4",
		"workbox-cacheable-response": "^5.1.4",
		"workbox-core": "^5.1.4",
		"workbox-expiration": "^5.1.4",
		"workbox-google-analytics": "^5.1.4",
		"workbox-navigation-preload": "^5.1.4",
		"workbox-precaching": "^5.1.4",
		"workbox-range-requests": "^5.1.4",
		"workbox-routing": "^5.1.4",
		"workbox-strategies": "^5.1.4",
		"workbox-streams": "^5.1.4"
  
 "devDependencies": 
 
		"@wojtekmaj/enzyme-adapter-react-17": "^0.6.5",
		"enzyme": "^3.11.0",
		"gh-pages": "^3.2.3",
		"jest-cucumber": "^3.0.1",
		"puppeteer": "^12.0.1"
## 🏁Getting Started

These instructions will help you to setup your own copy of Gatherr on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## 📚Prerequisite

#### //Necessary

- AWS
- Node & NPM
- Expo / Expo Go
- Firebase

#### //Optional

- Android Studio (Android only)
  - If you choose to use Android Studio for device emulation, please refer to the [Android Studio Docs](https://developer.android.com/studio/install) to ensure proper setup for use with Expo
- Xcode (IOS only)

## 🧰Installation

1. Clone this repo
2. Install all the dependencies listed above
3. Tweak code depending on local settings
4. Run ```npm start``` or ```expo start``` in your terminal to start local server
5. Scan the QR code provided by Expo in the terminal or development tools to load the project on a physical device. Alternatively, launch the project using an Android Studio or Xcode.


## 🚀Firebase Setup (As of Jan 2022)

1. Create a new project through the Firebase console
2. Click on Firebase Database on the lefthand side of the page, enter production mode, and select the closest Cloud Firestore location
3. Click on the cog icon next to 'Project Overview' and scroll down to the 'Your Apps' section at the bottom of the page. 
4. Click on the 'web' icon and enter the project name on the next page.
5. Add the Firebase congif settings to either your `Chat.js` file or a seperate file where it can be imported
   - Do NOT push these settings to GitHub. Make use of `react-native-dotenv` or a similar package to hide these in a `.env` file.
6. Enable anonymous signin within the 'Authentication' menu
7. Enable storge in the 'Storage' menu. This is used to store image files set as chat messages.

For further information, please refer to the [Firebase Docs](https://firebase.google.com/docs/)

## 📝Todo

-Add more functionality to chat (e.g. recording and sending voice messages)
-Adjust styling where necessary
-Improve speed of sending/recieving images between users

## 📈Future Plans

-Add additional signin options (e.g. email/password, Google, etc.)

## 🎈Usage

Gatherr 

## ✍️Authors
@Myles-the-Coder - Initial Work

## 🧬Resources

- AWS Docs
- Google Calendar for Developers
- Firebase Docs
- GiftedChat GitHub repo
- Expo Camera Docs
- Expo Location Docs

## 🎉Acknowledgement
CareerFoundry

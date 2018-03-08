# Native Weather

Kit & Jamie's first venture into:
- pair programming
- mobile development
- multi-user version control

Near the end of our V School bootcamp experience, we decided to take our final project further than we needed to and picked up React Native independently. We queried the Dark Sky API to provide current, daily, and weekly weather data based on the geolocation of the user's device. And just because we could, we incorporated user authentication. Your weather is your business and yours alone.

# Requirements

First you'll need Expo installed to run the React Native project. Expo provides both a GUI and a command line interface, depending on your preference. You can check both out at [expo.io/learn](https://expo.io/learn). We tried both and preferred using the GUI Expo XDE for stability reasons.

In addition to workstation setup, you'll need an Apple or Android device or simulator/emulator to view the app.
- If you want to view the app on your Apple device, you can download Expo Client from the [App Store](https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent).
- If you want to view the app on your Android device, you can download Expo Client from the [Google Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent).
- To view the app on an iPhone simulator or Android emulator, you'll need XCode (iPhone) or Genymotion (Android) installed on your workstation in order to demo or view changes to this app. Instructions on how to install and use both with Expo are available at [docs.expo.io](https://docs.expo.io/versions/latest/introduction/installation.html).

# How to see the code and demo it
Once you have Expo and either Expo Client or your simulator ready, from the Terminal:

```bash
//Clone this repository
git clone https://github.com/vschool-september-2017/native-weather

//Go into the repository server folder
cd native-weather/server

//Install backend dependencies
yarn

//Spin up the backend
yarn start

//Open another terminal window
//Go into the client
cd native-weather/client

//Install app dependencies
yarn
```

While you can use ```yarn start``` from the client folder to run the app, we found that launching the project from Expo XDE kept the app more stable while working on it. Once launched, you can:
- Run the app through the iPhone simulator
- Run the app through the Android emulator
- Or you can scan the QR code from the Expo Client app on your Apple or Android device

When prompted, allow the app to use your location services. Create a user account to login, and enjoy!

# Related

Kit's portfolio, resume, and contact info are available at [kitmas.com](http://kitmas.com).

Jamie's portfolio, resume, and contact info are available at [jamieW.io](http://jamiew.io).

We stand on the shoulders of giants. A huge thanks to Expo and the [Create React Native App](https://github.com/react-community/create-react-native-app) developers!

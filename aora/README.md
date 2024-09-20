## Javascript Mastery Basic Crash Course

> Expo :

        Expo is a framework and platform for building React Native apps with ease. It provides a set of tools and services that simplify the development process, especially for developers who want to quickly prototype and build mobile apps without needing to configure native dependencies.

> CONTENT :

        - Components :

                - View
                - Touchable
                - Image
                - Flatlist
                - ScrollView
                - SafeAreaView
                - TextInput+
                - StatusBar

        - Animations Using react-native-animatable

        - Responsive Design

        - Styling using Stylesheet and Tailwind css

        - Dynamic Routing using nested routes and layouts

        - Custom Hooks and fonts

        - Video player

        - File pickers

        - Backend using appwrite

### Introduction

> React Native - a framework used to build amazing andriod and ios native mobile applications using the library you already know all about - Reactjs

> React native is a cross-platform library that allows you to build native mobile apps using React & Javascript. This differs from frameworks like Cordova, where you use HTML to create the UI, which will then just be displayed within the device integrated mobile Browser (webview).

> React Native has built-in components compiled to native UI components, while your Javascript code is executed through a virtual machine. This makes React Native more Performant than cordova.

## Components

> View :

- A basic component that can be used to render any other component.
- It is often used to create layout structures for other components.
- It can be used to render a single component or a group of components.
- It has number of props that can be used to control its appearance and behaviour.
- View uses flexbox layout by default : Which makes it really easy to control how its child components
  are laid out within the container.

To add Interactivity we have some other components which are perfect for creating :

         Buttons, Links , Other interactive elements

> TouchableOpacity

> TouchableHighlight

> TouchableWithoutFeedback

> ActivityIndicator

> Button

> Flatlist

         Like map function in react has an Optimized Scroll performance and Item seperation

When should we use Flatlist or Map ?

        Flatlist - For larger lists with smooth scrolling
        Map - For smaller lists with no scrolling

> ScrollView

        Its is like a magic box that can hold multiple components and views, providing a scrolling components and views, providing a scrolling container for them.

> SafeAreaView

> ImageBackground

> Modal

> Alert

> Switch - For toggle

> StatusBar

## Setup

- Create an Expo Project

        To create a new project, run the following command:

                - npx create-expo-app@latest

                - npx expo start -c

- Packages

      - expo
      - expo-router
      - react-native-safe-area-context
      - react-native-screens
      - expo-linking
      - expo-constants
      - expo-status-bar

- Setup entry point

      - So we can use File based routing with expo-router
      - Create a new file called `index.tsx` in the root of your project app folder
      - Add `_layout.tsx` which will be RootLayout Component
      - In package.json set `"main": "expo-router/entry",`
      - In app.json `"scheme": "aora",`

  Now we can see `RootLayout` in center but to render `index.tsx`

  There are two ways :

  - `Slot` from expo-router : we can see content of `index.tsx` directly now.
    Slot just renders the current child route
    We can wrap it with Header or Footer

  - `Stack` from expo-router : we can see content of `index.tsx` directly when we use
    `Stack.screen` Wrapped inside `Stack` with name attribute to `index`.

`Link` from expo-router

      Give `href` attribute which contains file name `/profile` in app folder
      Now we can navigate to that component easily on click

## NativeWind Integration

- Tailwind CSS as scripting language to create a universal style system

React Native CLI

                npm install tailwindcss
                npm install nativewind
                npm install --save-dev tailwindcss@3.3.2

Run npx tailwindcss init to create a tailwind.config.js file

        Setup Tailwind CSS :


                // tailwind.config.js

                module.exports = {
                - content: [],
                + content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
                theme: {
                extend: {},
                },
                plugins: [],
                }

Add the Babel plugin

                // babel.config.js
                module.exports = {
                presets: ['module:metro-react-native-babel-preset'],

                - plugins: ["nativewind/babel"],
                };

Add `my-app.d.ts` file to resolve error of `className` in `tsx`

      Content inside :

            /// <reference types="nativewind/types" />

Now to use Tailwind with Native wind in `index.tsx`

- Remove StyleSheet and styles

## Added Assets and Constants

- Added a new folder called `assets` to store images and other static assets
- In Constants to make import easy created `index.js`

      Why Place It Here?
      Global Access: By placing assets.d.ts in the root, TypeScript will recognize the declarations across your entire project.

            // assets.d.ts
            declare module "*.png" {
            const value: string;
            export default value;
            }

Always change `tsconfig.json` and add newly created configuration files like
`assets.d.ts` and `my-app.d.ts`

## Creating Auth Pages

Create a folder `(auth)` inside `app` folder

- Inside `(auth)` create new `AuthLayout` as auth screen and onboardin doesnt have `bottom navbars`

- create `sign-in.tsx` and `sign-up.tsx` files.

Create a folder `(tabs)` inside `app` folder

- Inside `(tabs)` create `TabLayout` as this screens will have `bottom navs` or `Tabs`

- create `home.tsx` and `profile.tsx` files and all which contains `Tabs`.

Create a folder `search` inside `app` folder

- Inside it `[query].tsx` To show dynamic searches

### Setting Up Bottom Tabs folder

- import `Tabs, Redirect` from `expo-router`

      Inside `Tabs`  add `Tabs.Screen` with name of file to show default `home` at moment

      Below will be rest folder in `Tabs` named `create` , ` profile` and `bookmark`

- modify some `Tabs` title and icons and beautify it

         options={}

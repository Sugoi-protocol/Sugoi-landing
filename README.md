# landing-page

## Setup

1. `yarn` - Install all dependencies.

## Develop

`yarn dev` - Build the site, and start the development server. The dev server is hosting the site at http://localhost:3000/. Whenever changes are made, the site should automatically rebuild.

## Deploy

1.

`yarn deploy` - Make a Production build ready to deploy.

2.  If using Firebase:

1.  Install Firebase:
    `npm install -g firebase-tools`

    2.  Log into Firebase using your Google account by running the following command:
        `firebase login`
        3.To initialize a new Firebase project, run the following command from within your app's directory:
        `firebase init` --> 1. Are you ready to proceed? (Y/n) -Y, 2. ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed) >( ) Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
        ( ) Firestore: Configure security rules and indexes files for Firestore
        ( ) Functions: Configure a Cloud Functions directory and its files
        ( Choose this one with arrow key and then press <space> and then <Enter>) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        ( ) Hosting: Set up GitHub Action deploys
        ( ) Storage: Configure a security rules file for Cloud Storage
        ( ) Emulators: Set up local emulators for Firebase products
        (Move up and down to reveal more choices) 3. What do you want to use as your public directory? (public is default), write the following after the arrow--> build
        ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) (Y)
        ? Set up automatic builds and deploys with GitHub? (y/N) (N)
        ? File build/index.html already exists. Overwrite? (y/N) (N)

                                    Firebase Integration is done.

1.  To deploy to a Firebase project, run the following command from your project directory:

        `firebase deploy`

    You can optionally add a comment to each of your deployments. This comment will display with the other deployment information on your project's Firebase Hosting page. For example:

`firebase deploy -m "Deploying the best new feature ever."`

## Theme

Color and themes should be modified from the `src/theme/index.ts` file, by updating constants.

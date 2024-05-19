# How to create .apks file

## Install EAS-CLI

run `npm install -g eas-cli`

## Log into Expo account

### If you don't have account

If you don't have account yet, first go to https://expo.dev/signup and create account. After creating account run `eas login` and log in to your account.

### If you already have account

If you already have an account run `eas whoami`, if you logged in you will see your name displayed. If you see "Not logged in" display, you need to run `eas login` and log in to your account.

## Create a built

Run `eas build --platform android`. This will take some time to build. When it ends, go to link given in line `Build details: [LINK HERE]`. Download .aab file from here, put it in main directory and change its name to `app.abb`.

## Generate new signing key

Android requires for apps to be signed with key. To generate new key
run<br>
`keytool -genkey -v -keystore my-release-key.keystore -alias alias -keyalg RSA -keysize 2048 -validity 10000`
<br>
Follow displayed instructions to create key.
Change created .aab file name to `app.aab`

## Create new .apks file

Run `java -jar bundletool-all-1.15.6.jar build-apks --bundle=app.aab --output=output.apks --mode=universal --ks=my-release-key.keystore --ks-key-alias=alias` <br>
Pass password used to key creation. Now you should see output.apks file.

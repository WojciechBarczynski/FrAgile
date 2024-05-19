# Wizja

## Podstawowa wizja projektu:
Celem projektu jest urozmaicenie dni otwartych AGH w D17, tematem projektu jest aplikacja mobilna umożliwiająca uczestnikom imprezy na wygodne odwiedzenie interesujących ich stanowisk. Podstawowym działaniem aplikacji jest nawigowanie uczestnika pomiędzy stanowiskami oraz przedstawianie mu tematycznych quizów / minigier przy kolejnych stanowiskach.

## Zasada działania:
Użytkownik włącza aplikację i wyświetlana mu jest lista ze stanowiskami i ich opisami. Użytkownik wybiera interesujące go pozycje, ustawia je w kolejności w jakiej chciałby je odwiedzić, kiedy użytkownik jest już zdecydowany zatwierdza swoje wybory. Po zaakceptowaniu aplikacja przechodzi w stan nawigacji, zaczynając od ekranu skanowania kodu QR. Każde stanowisko posiada swój unikalny kod. Po zeskanowaniu kodu pierwszego stanowiska wyświetla się strzałka kierująca użytkownika do kolejnego stanowiska z ułożonej przez niego listy. Kiedy  Ten proces powtarza się aż do zakończenia zwiedzania.

## Dodatkowe funkcje:
Poza strzałką użytkownik widzi mapę z jego aktualną pozycją i trasą do następnego stanowiska.

Użytkownik wypełnia quiz / minigrę przy obecnym stanowisku.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

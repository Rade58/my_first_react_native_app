# OVDE CU OSTAVITI NEKE LINKOVE I NEKA OBJASNJNJA, KOJA SE TICU TOGA, STA BIH JA USTVARI RADIO SLEDECE, JER VIDIM DA JOS MORAM NAUCITI O REACT NATIVE-U

EVO TI PRVO POGLEDAJ OVAJ LINK ZA POCETAK JER IZMEDJU OSTALIH STVARI TAMO JE NABROJANO, SVE STA SI NAUCIO U OVOM WORKSHOP-U

<https://kadikraman.github.io/react-native-v2/wrapping-up>

# A OVO SU STVARI KOJE BI TREBALO DA NAUCIM

- :one: ANIMACIJE (TO JE VEC ISTO OGROMAN TEMA)

MOGAO BI DA POGLEDAS [Animation API](https://reactnative.dev/docs/animations) KOJI JE BUILT IN U REACT-U

**ANIMACIJE U REACT NATIVE-U NISU NISATA POPUT OD ONIH U CSS-U**

A [Lottie](https://github.com/react-native-community/lottie-react-native) JESTE ANIAMTION LIBRARY, KOJU LJUDI CESTO KORISTE

- :two: IMAGES

BUILT IN REACT NATIVE PODRSKA ZA SLIKE, I NIJE BAS SJAJNA ZATO POGLEDAJ: <https://github.com/DylanVann/react-native-fast-image>

- :three: BOTTOM TAB NAVIGATION

JA SAM SE UPOZNAO SAMO SA STACK NAVIGATION-OM, A [U DOKUMENTACIJI MOZES VIDETI KAKO DA NAPRAVIS BOTTOM TAB NAVIGATION](https://reactnavigation.org/docs/bottom-tab-navigator/), KOJI GOTOVO SVAKI APP POSEDUJE

- :four: ISTO TAKO MOZES DA POGLEDAS HOOK **`useMemo`**; KADI GA CESTO KORISTI [--------](https://reactjs.org/docs/hooks-reference.html#usememo)

OVO SU NEKE STVARI ZA KOJE JA MISLI MDA TREBA DA NAUCIM

:one: **APOLLO CLIENT INTEGRATING WITH REACT NATIVE**

<https://www.apollographql.com/docs/react/integrations/react-native/>


# ADVANCED TOPICS

- :one: [code-push](https://github.com/microsoft/code-push)

a tool that all allows you to do over the air updates to your deployed app (kind of how the Expo app works, but you'll be in charge!)

- :two: [Detox](https://github.com/wix/Detox)

END TO END TESTING FRAMEWORK

- :three: [react-native-testing-library](https://github.com/callstack/react-native-testing-library)

UNIT TESTING LIBRARY

- :four: [Fastlane](https://github.com/fastlane/fastlane#------)

[DOCS](https://docs.fastlane.tools/)

a tool for automating building and releasing your apps

# TREBALO BI I DA NAUCIS KAKO SE EJECT-UJE FROM EXPO

A ZASTO?

not being able to use any native libraries that are not already built into Expo.

OVDE TI JE [OBJASNJANJE](https://kadikraman.github.io/react-native-v2/ejecting-from-expo)

TAMO SU I SVI DODATNI LINKOVI

`DAKLE TADA BI ONDA MORAO KORISTITI ANDROID EMULATOR ILI xCode`

NEMAM DOVOLJNO RAM-A ZA ANDROID EMULATOR, A ZA xCode NEMAM MAC MASINU

# PLATFORM SPECIFIC CODE

OVO SAM SLUCAJNO VEC PROBAO

```tsx
import {Platform} from 'react-native'
```

EVO TI [OVDE](screens/_ColorPalette.tsx) SAM TO UPOTREBIO

A EVO TI I [KADINE INFORMACIJE O OVOME](https://kadikraman.github.io/react-native-v2/platform-specific-code)

A ONO STO JE TAMO OBJASNJENO JESU I PLATFORM SPECIDIC EKSTENZIJE NA FAJLOVIMA, ALI TO NIJE BAS POVOLJNO (PROCITAJ TEKST ZASTO JE TAKO)

# KADI JE NAPISALA DOKUMENTACIJU VEZANU ZA SECURITY I SADA JE ONA DEO OFICEJLNOG SITE REACT NATIVE DOKUMENTACIJE

[----](https://kadikraman.github.io/react-native-v2/security)

[DOCS](https://reactnative.dev/docs/security)

TAK ODA TO TAMO MOZES DA PROCITAS


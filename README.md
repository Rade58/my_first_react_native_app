# `useState`, `useCallback`, `useEffect`; **NETWORK REQUESTS**

NE VIDIM NIKAKAV RAZLOG DA STAVLJAM DODATNE INFORMACIJE JER JE OVO NESTO STO SE UVOZI IZ 'react'-A

A VEC SAM DOSTA KORISTIO, POMENUTO, INSIDE REACT

TAKODJE AKO TE ZANIAMJU DODATNE INFORMACIJE, POGLEDAJ OVDE:

<https://kadikraman.github.io/react-native-v2/react-hooks>

MEDJUTIM POSTOJE NEKE NOVE INFORMACIJE, ONO STO MI JE MOZDA PROMAKLO RANIJE DOK SAM SE BAVIO HOOK-OVIMA, KADA SAM SE BAVIO PLAIN REACT-OM

# useState

```tsx
// AKO IMAS OVAKO NESTO
const [state, setState] = useState<number>(0)

// MOGUCE JE DA PROMENIS STATE I OVAKO

setState(oldState => (oldState + 2))

// DAKLE setStaste-U SE MOZE PROSLEDITI I CALLBACK CIJI JE PARAMETAR STARI STATE

```

# `useCallback` BI TREBAL ODA ZNAM POSTO ON RADI MEMOIZATION I STVARNO JE POWERFULL STVAR

I MISLIM DA SAM JA NA MNOGIM MESTIMA, I TOKOM BAVLJANJA SA PLAIN REACT-OM, UMESTO DA SAM KORISTIO `useCallback`, JA SAM USTVARI KOEISTIO `useEffect`

OPET JE NAJBOLJE DA GA SE PODSETIM PUTEM PRIMER-A

ALI DA PRVO KAZEM STA ON USTVARI RADI

***

**`MOGU MU SE ZADATI DVA ARGUMENTA`**

- CALLBACK 
  - ON MOZE IMATI I PARAMETRE, CISTO NAPOMINJEM DA IMA I TU MOGUCNOST
  - I MOZE BITI `async` FUNKCIJA

- DEPANDANCY ARRAY

**`POVRATNA VREDNOST MU JE 'MEMOIZED CALLBACK'`**

STA TO ZNACI?

*`TO ZNACI DA CE BILO KOJA VREDNOST IZ SPOLJASNJEG SVETA, KOJU SI KORISTIO, ODNONO REFERENCIRAO U TOM CALLBACKU, USTVARI BITI MEMOIZED`*

*`I TO CE BITI MEMOIZED SVE DOK SE NE PROMENI NEKI DEPENDANCY IZ DEPENDANCY ARRAY-A`*

KADA SE TO DOGODI CALLBACK CE OPET BITI EVALUATED

STO ZNACI DA SVE ONO, IZ SPOLJASNJEG SVETA, A STA SI KORISTIO U TOM CALLBACK-U, DOBITI NOVU VREDNOST, AKO JE TO ZAISTA PROMENILO VREDNOST U MEDJUVREMENU

***

DOBAR PRIMER ZA OVO BI BIO INCRMENTER ZA KOJI JE I CKADI NAPRAVILA EXAMPLE U EXPO-U SNACK-U

```tsx
// OVO NISTA NIJE SPORNO COUNTER CE FUNKCIONISATI (NARAVNO AKO JE handleIncrement CALLBACK ZAKACEN NEGDE KAO NEKI HANDLER I STVARNO SE POZIVA)
const [count, setCount] = useState<number>(0)

const handleIncrement = useCallback(() => {
  setCount((current) => current + 1);
}, []);
```

A STA AKO URADIM SLEDECE

```tsx
const handleIncrement = useCallback(() => {
  setCount(count + 1);
}, []) 
```
**E PA IMACU PROBLEM GDE GOD ZVAO OVU FUNKCIJU JER JE `count` UVEK ISTO I POSTALO JE MEMOIZED, ODNONO CALLBACK JE MEMOIZED I ZAJEDNO SA NJIM ONO STO JE REFERENCED UNUTRA**

KOLIKO GOD BI POKUSAVAO DA INKREMENTIRAS SA NEKIM Touchable-OM, NA KOJEM JE OVAN CALLBACK ZAKACEN onPress, INKREMENTIRANJE BI BILO BEZUSPESNO

**`ALI POSTOJI RESENJE, KOJE SE OGLEDA U TOME DA`** `count` **PODESIM DA BUDE DEPENDANCY**

```tsx
const handleIncrement = useCallback(() => {
  setCount(count + 1);
}, [count]) // EVO VIDI 
```

I SVE JE RESENO

CALLBACK CE BITI EVALUATED UVEK KADA SE PROMENI `count`, A MENJA SE SAMIM POZIVANJEM CALLBACK-A

STO ZNACI, A STO JE NAJVAZNIJE:

**`SVAKI PUT KADA SE PROMENI DEPENDANCY, CALLBACK SE REEVALUATE-UJE`**

[-----------------](https://snack.expo.io/@radedev/usecallback-dobar-primer-citaj-komenta)

# `useEffect`

NJEGA SAM NAJVISE UPOTREBLJAVAO JER SE

RUNN-UJE, U NEKOLIKO OKOLNOSTI

:one: **DEPENDANCY ARRAY PRAZAN**

- SVAKI PUT KADA SE KOMPONENTA MAOUNT-UJE

:two: **DEPENDANCY ARRAY PRAZAN I CALLBACK IMA RETURNED, DRUGI CALLBAK**

- TAJ DRUGI CALLBACK SE RUNN-UJE KADA SE KOMPONENTA UNMOUNT-UJE

:three: **DEPANDANCY ARRAY IMA DEPANDANCYJE**

- KADA SE PROMENI NEKI DEPENDANCY

- SVAKI PUT KADA SE KOMPONENTA MOUNT-UJE

:four: **NEMA DEPENDANCY ARRAY-A**

- RUNN-UJE SE SVAKI PUT KADA SE KOMPONENTA RERENDER-UJE

***
***

**BITNA STVAR**:

`ASINHRONE STVARI NE MOZES RADITI UNUSTAR` **`useEffect`**-VE FUNKCIJE (CALLBACK-A)

**`ONDONO NJEGOV CALLBACK NE MOZE BITI async FUNKCIJA`**

DA LI JE OVO SAMO VEZANO ZA REACT NATIV ILI SE ODNOSI I NA PLAIN REACT, NISAM SIGURAN

***
***

# DOBAR PRIMER UPOTREBE SVA OD OVA TRI HOOK-A BIO BI JEDAN PRIMER, U KOJEM JE UPOTREBLJEN NETWORK REQUEST

OSTAVICU [EXPO SNACK PRIMER, KOJEG CU ISKOMENTARISATI](https://snack.expo.io/@radedev/d1e848)

ALI TAKODJE CU CODE OSTAVITI OVDE KAO REFERENCU

```tsx
import React, { useState, useCallback, useEffect } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';


const App = () => {
  //  EVO OVDE CUVAM DATA KOJI SE UZIMA SA EXTERNAL API-A       
  const [facts, setFacts] = useState([]);  // U PITANJU JE NIZ OBJEKATA PREUZETIH SA SERVERA

  const handleFetchCatFacts = useCallback(async () => {
    // KAO STO VIDIS CALLBACK JE ASINHRONA FUNKCIJA
    // I MOGU KORISTITI     await
    const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
    const facts = await result.json();
    if (result.ok) {
      setFacts(facts);
    }

    // STA JE OVDE BITNO
    // PA BITNO JE DA OVDE MOGU KORISTITI ASIHHRONE STVARI, I PONAJVISE MI JE BITNO STO
    // CALLBACK MOZE BITI ASINHRON

    // **** TAKODJE ON CE BITI MEMOIZED ****
    // TO SAM VEC NAUCIO
    // ALI NE VIDIM DA JE TO BAS NESTO PRETERANO BITNO ZA OVAJ PRIMER

  }, []); // CALLBACK SE SIGURNO NECE EVALUATE-OVATI, JER NEMA DEPENDANCY, KOJI BI TO TRIGGEROVAO


  // E SADA BITN JE STVAR DA CALLBACK useEffect-A, NE MOZE BITI     async     FUNKCIJA
  // ALI NISTA MI NE SMETA DA   UNUTAR OVAOG CALLBACK-A POZOVEM NEKI ASINHRONI CALLBACK
  // KOJI CE ONDA ASINHRONO PROMENITI STATE

  // TO SAM I URADIO

  useEffect(() => {         // DA SI STAVIO DA OVO BUDE async , LINT BI USTVARI YELL-OVAO NA TEBE DA TO
                                  // NIKAKO NE RADIS ZBOG race conditions-A
    handleFetchCatFacts();
  }, [handleFetchCatFacts]);  // OVO JE MOGAO DA BUDE I PRAZAN NIZ ALI OVAJ DEPENDANCY NECE NIKAD BITI PROMENJEN
  //                            TAKO DA JE U REDU DA GA STAVIS (EFFECT CE BITI POZVAN SAMO ON MOUNTING)


  // BITNO JE DODATI TO:      U KAKVOM BI PROBLEMU BIO DA NISI DODAO DEPENDANCY ARRAY, UOPSTE

    // TADA, EFFECT BI SE RUNN-OVAO, SVAKI PUT, KADA SE KOMPONENTA RERENDER-UJE
    // A ONA SE RERENDER-UJE PRI SVAKOJ PROMENI STATE-A
    // A TI U GORNJEM EFFECT-U UPRAVO NA IDIREKTAN NACIN TRIGGER0UJES PROMENU STATE, TAK OSTO POZIVAS CALLBACK U NJENOM 
    // OBIMU, KOJI MENJA STATE

    // I TO BI ZNACILO STALNI REEXECUTION EFFECT-A I OPEET TRIGGERING PROMENE STANJA I TAK OU NEDOGLED
    // IMAO BI ENDLESS LOOP, I MOZES ZAMISLITI STA TO ZNACI ZA RESURSE, AKO JE U PITANJU NEKI
    // API KOJI PLACAS 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 16
  }
});

export default App;
```




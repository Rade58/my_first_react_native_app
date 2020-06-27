# NEKE DODATNE INFORMACIJE, KOJE SE BAS I NE ODNOSE NA TEMU REACT NATIVE-A

TAKODJE TU SU PODECANJA NA NEKE STVARI

## PODSECANJE NA `Record` TYPE

EVO NJEGOCVE DEFINICIJE

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

// NEMOJ DA TE ZBUNJUJE     keyof

// STA JE USTVARI     keyof

// PA EVO GLEDAJ OVAJ TYPE              type nesto = keyof {trah: 1, blah: "48px"}
//                            nesto   JE USTVARI TYPE-A     'trah' | 'blah'

```

IZGLEDA, NAIZGLED KOMPLIKOVANO ALI IPAK JE USTVARI, SAMO TYPE KOJI DEFINISE NEKI OBJEKAT

A GENERICS-I OVOG TYPE, DEFINISU

- `TIP KLJUCA OBJEKATA`

- `I TIP VALUE-A TOG KLJUCA`

HAJDE DA URADIM JEDNU VEZBU SA DVA Record-A, DA VIDIS KAKVA JE USTVARI NJEGOVA MOC

```ts
type pneuma = 'leblebija' | 'badem';

enum vicarious {
  leblebija = 'leblebija',
  badem = 'badem',
}

type rec1 = Record<pneuma, { a: string; b: number }>;

type rec2 = Record<vicarious, { a: string; b: number }>;

// MORAS KORISTITI SVAKI KLJUC BEZ OBZIRA STO JE U PITANJU ENUM ILI TYPE SA |
// DAKLE U OBJEKTU MORAJU BITI I  leblebija     I     badem

const abala: rec1 = { badem: { a: '', b: 2 }, leblebija: { a: '', b: 4 } };

const inglez: rec2 = { badem: { a: '', b: 8 }, leblebija: { a: '', b: 48 } };


// I leblebija I badem MORAJU IMATI TACNE VREDNOSTI   

```

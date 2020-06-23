# SADA CU SE POZABAVITI NAVIGATION-OM


# PRE NEGO STO POCNEM DA RADIM PRIMER ZA NAVIGATION, MORAM URADITI NEKOLIKO STVARI

U PREDHODNOM PRIMERU NISAM SE BAS DRZAO CIRCULUM JER SAM SAM EXPLORE-OVAO REACT NATIVE DO ODREDJENOG NIVOA

ZATO NISAM IMPLEMENTIRAO OVO

```ts
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
```

NAIME JA IMAM ITEM-E A TREBAO SAM IH OBOJITI OVIM BOJAMA

TO CU SADA URADITI

A ZASTO?

**`IDEJA JE DA ZA OVAJ PRIMER NAVIGATION, JA USTVARI IMAM OBOJENE ELEMENTE I DA SE ONDA TOUCH-OM NA ELEMENT USTVARI ODLAZI NA SEPARATE PAGE UPRAVO TE BOJE NA KOJU SI TOUCH-OVAO`**

ZATO MALO KORIGUJEM PRIMER I UVODIM OVAJ NIZ U PRIMER

**TAKODJE OVO IZISKUJE UPOTREBU `FlatList` A NE `SectionList`-A**

import React, { useState, FunctionComponent } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

interface ItemSwitchPropsI {
  colorName: string;
  setIndexesOfDataArray: (value: React.SetStateAction<number[]>) => void;
  index: number;
}

const ItemSwitch: FunctionComponent<ItemSwitchPropsI> = (props) => {
  const { colorName, setIndexesOfDataArray, index } = props;

  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  return (
    <View style={styles.items}>
      <Text>{colorName}</Text>
      <Switch
        value={isTurnedOn} // MORAS DEFINISATI DA BOOLEAN
        onValueChange={(bool) => {
          // BITNO JE DA OVAJ boolean KOJI SE NADJE U FUNKCIJI BUDE ONO CIME CES PROMENITI STATE
          //      DAKEL ON TREB DA BUDE PROSLEDJEN U      setIsTurnedOn

          // ZASTO TI OVO GOVORIM, PA NOVI value BIVA PROSLEDJEN KAO ARGUMENT

          console.log({ bool });

          if (bool) {
            // DAKLE OVDE JE BOOLEAN USTVARI       true
            setIndexesOfDataArray((currIndexesArr) =>
              currIndexesArr.concat([index])
            );

            // ZNAS I SAM ZASTO JE OVDE RETURNED (DA SE NE BI   DALJE IZVSAVALA OVA FUNKCIJA)

            // ALI JA MENJAM STATE OVDE I BOOLEAN CE POSTATI ONO ISTO, I MISLIM DA JA OVDE IMAM PROBLEM SA ENDLESS LOOP-OM KOJI RADI ISTO ILI NE?

            return setIsTurnedOn(bool);
            // SAMO MI NIJE JASNO ZASTO OVO NE IZAZIVA ENDLESS LOOP
            // ALI IPAK MOZDA JE OVO ISKLJUCENO IZ TOGA DA TRIGGER-UJE PONOVNO IZVRSAVANJE
            // onValueChange

            // IAKO ZAR JA, TO UPRAVO NISAM URADIO: PROMENIO    value     STO BI OPET TREBALO DA TRIGGER-UJE
            // IZVRSENJE ISTE OVE FUNKCIJE
          }

          // NE NEMA NIKAKVOG ENDLES LOOP-A U SETTINGU ISTIG BOOLEAN
          // SVE RADI OVAKO A I DALJE MI NIJE JASNO KAKO RADI

          // JEDINA STVAR NA KOJ USAM DOSAO, ODNONO DOSAO SAM DO ZAKLJUCKA DA SAMA INTERAKCIJA
          // NA Switch-u, PROIZVODI BOOLEAN VREDNOST

          // ------------------------

          setIndexesOfDataArray((currIndexesArr) => {
            const indexOfMember = currIndexesArr.indexOf(index);

            return currIndexesArr
              .slice(0, indexOfMember)
              .concat(
                currIndexesArr.slice(indexOfMember + 1, currIndexesArr.length)
              );
          });

          return setIsTurnedOn(bool);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    borderColor: 'blanchedalmond',
    shadowColor: 'crimson',
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 2,
  },
});

export default ItemSwitch;

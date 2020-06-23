const generatorMaker = (param: number) => blahGeneratorFunc(param);

// OVO JE MOZDA BILO SAMO PODSECANJE KAKO FUNKCIONISU GENERATORI
// NISAM IH BAS UPOTREBIO NEGO SAMO OVAKO
function* blahGeneratorFunc(param: number) {
  yield { myItem: `item${param}` };
}

/**
 *
 * @param color BOJA ZA PODLISTU KOJOM ONA MOZE BITI ODREDJENA
 * @param title NASLOV PODLISTE
 * @param len DUZINA NIZA ITEM-A
 */
const makeArrayAndHeading = (color: string, title: string, len: number) => {
  const arr: string[] = [];

  for (let i = 1; i <= len; i++) {
    const generator = generatorMaker(i);
    const generated = generator.next();

    if (generated.value) {
      arr.push(generated.value.myItem);
    }
  }

  return { title, color, data: arr };
};

/**
 * @description FUNKCIJA USTVARI PRAVI OBJEKAT U FORMATU {color, title, data: NIZ STRINGOVA}
 */
export default makeArrayAndHeading;

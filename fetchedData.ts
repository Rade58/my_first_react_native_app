import makeHeadingAndArray from './makeRadesData';

const fetchedData: {
  title: string;
  color: string;
  data: string[];
}[] = [
  makeHeadingAndArray('crimson', 'GraphQL', 60),
  makeHeadingAndArray('aqua', 'React', 58),
  makeHeadingAndArray('dodgerblue', 'Typescript', 48),
  makeHeadingAndArray('lightcoral', 'Javascript', 38),
];

export default fetchedData;

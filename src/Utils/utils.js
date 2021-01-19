export const getMultiplesFromList = (numbersList, numberToFilterBy) =>
  numbersList.filter((number) => !(number % numberToFilterBy))

export const getIphones = (searchTerm) => {
  // use the fetch API to load iphones.json to iphones variable
  const iphones = []
  // after this has loaded call the filterIphones() function below to filter the results
  return filterIphones(iphones, searchTerm)
}

export const filterIphones = (iphones, searchTerm) => {
  return iphones.filter(iphone => { 
    // filter the iphone
    return iphone
  }) 
}
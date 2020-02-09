export const getIphones = async (searchTerm, handleError) => {
  // use the fetch API to load iphones.json to iphones variable
  try {
    const response = await fetch('/iphones.json')
    const iphones = await response.json()
    // after this has loaded call the filterIphones() function below to filter the results
    return filterIphones(iphones, searchTerm)
  } catch (error) {
    // error handling logics
    if (handleError) handleError(error);
    return [];
  }
}

// do filtering
export const filterIphones = (iphones, searchTerm) => {
  return iphones.filter(iphone => {
    if (exist (iphone['name'], searchTerm)) return true;
    if (exist (iphone['color'], searchTerm)) return true;
    if (exist (iphone['capacity'], searchTerm)) return true;
    return false;
  }) 
}
// search logic - return true when a value contains a term
// case insensitive
const exist = (value, term) => 
  String(value).toLowerCase().indexOf(String(term).toLowerCase()) > -1;
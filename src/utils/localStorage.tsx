
interface Props {
  code: string;
  category: string;
  name_product: string;
  name_provider: string;
  price: string;
}

 const keyLocalStorage = '@jamesTip:registrations';

// export const addLocalStorage = (item: Props) => {
//   const localStorageExist = localStorage.getItem(keyLocalStorage);
//   if(localStorageExist) {
//     const productsSaved = JSON.parse(localStorageExist);
//     localStorage.setItem(keyLocalStorage, JSON.stringify([...productsSaved, item]));
//   } 
// }

export const deleteLocalStorage = (code: string) => {
  const productsSaved = localStorage.getItem(keyLocalStorage);
  const newProductsSaved = JSON.parse(productsSaved!).filter((product: Props) => product.code !== code);
  localStorage.setItem(keyLocalStorage, JSON.stringify(newProductsSaved));
}
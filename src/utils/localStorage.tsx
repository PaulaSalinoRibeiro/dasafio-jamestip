interface Props {
  code: string;
  category: string;
  name_product: string;
  name_provider: string;
  price: string;
}

 const keyLocalStorage = '@jamesTip:registrations';

export const deleteLocalStorage = (code: string) => {
  const productsSaved = localStorage.getItem(keyLocalStorage);
  const newProductsSaved = JSON.parse(productsSaved!).filter((product: Props) => product.code !== code);
  localStorage.setItem(keyLocalStorage, JSON.stringify(newProductsSaved));
}
import {Route, Routes as Switch} from 'react-router-dom';
import { Registration } from '../pages/Registration';
import { ListProducts } from '../pages/ListProducts'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/list-products" element={<ListProducts/>}/>
    </Switch>
  )
}
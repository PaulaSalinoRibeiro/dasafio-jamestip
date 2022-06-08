import { ThemeProvider } from 'styled-components';
import {ProductsProvider} from './context/ProductsProvider';
import { theme, GlobalStyle } from './global/styles/theme';
import {Routes} from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <Routes />
        <GlobalStyle/>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;

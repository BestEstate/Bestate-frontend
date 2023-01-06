import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Banner />
      <Footer />
    </ThemeProvider>
  );
};
export default App;

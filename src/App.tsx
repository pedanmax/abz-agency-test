import { ThemeProvider } from '@emotion/react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CustomFontTheme from './CustomTheme';
import './App.scss';

const App = () => {
  return (
    <ThemeProvider theme={CustomFontTheme}>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;

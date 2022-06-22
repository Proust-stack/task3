import GlobalStyles from './styles/global';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import { baseTheme } from './styles/theme';
import pattern from './assets/Pattern.png';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 49.88%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-image: url(${pattern});
`;

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  );
}

export default App;

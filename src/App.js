import './index.css';
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green } from '@material-ui/core/colors';
import MainMap from './components/MainMap';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    }
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <MainMap/>
    </ThemeProvider>
  );
}

export default App;

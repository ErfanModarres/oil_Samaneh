import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import { CssBaseline } from '@material-ui/core'
import Home from './pages/home'
import Rtl from './components/theme/Rtl'
import ThemeProvider from './components/theme/ThemeProvider'



    function App() {
      return (
        <ThemeProvider>
          <Rtl>
            <CssBaseline />
            <Router basename="/">
              <Switch>
                <Route exact path="/"><Login /></Route>
                <Route path="/home"><Home /></Route>
              </Switch>
            </Router>
          </Rtl>
        </ThemeProvider>
      );
    }

export default App;

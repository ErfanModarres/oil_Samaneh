import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import { CssBaseline } from '@material-ui/core'
import Home from './pages/home'
import Rtl from './components/theme/Rtl'
import ThemeProvider from './components/theme/ThemeProvider'
import Status from './components/paymentStatus/index'



    function App() {
      return (
        <ThemeProvider>
          <Rtl>
            <CssBaseline />
            <Router basename="/">
              <Switch>
                <Route path="/payment/status=2"><Status /></Route>
                <Route exact path="/"><Login /></Route>
                <Route path="/home"><Home /></Route>
              </Switch>
            </Router>
          </Rtl>
        </ThemeProvider>
      );
    }

export default App;

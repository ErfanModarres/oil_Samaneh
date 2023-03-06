import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import { CssBaseline } from '@material-ui/core'
import Home from './pages/home'
import Rtl from './components/theme/Rtl'
import ThemeProvider from './components/theme/ThemeProvider'
import Status from './components/paymentStatus/index'
import About from './pages/aboutUs'
import Guid from './pages/guid'
import Contact from './pages/ContactUs'
import FAQ from './pages/faq'



    function App() {
      return (
        <ThemeProvider>
          <Rtl>
            <CssBaseline />
            <Router basename="/">
              <Switch>
                <Route path="/aboutus"><About /></Route>
                <Route path="/guid"><Guid /></Route>
                <Route path="/faq"><FAQ /></Route>
                <Route path="/contactus"><Contact /></Route>
                <Route path="/payment/"><Status /></Route>
                <Route exact path="/"><Login /></Route>
                <Route path="/home"><Home /></Route>
              </Switch>
            </Router>
          </Rtl>
        </ThemeProvider>
      );
    }

export default App;

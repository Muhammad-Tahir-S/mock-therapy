import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import ErrorPage from "./components/ErrorPage";
import LogIn from './components/LogIn'
import ResendEmail from './components/ResendEmail'
import ForgotPassword from './components/ForgotPassword'
import  { BreakpointProvider } from 'react-socks';

function App() {
  return (
    <BreakpointProvider>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/resetPassword/:id/:token" component={ResetPassword} />
        <Route path="/login" component={LogIn} />
        <Route path="/resendEmail" component={ResendEmail} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
    </BreakpointProvider>
  );
}

export default App;

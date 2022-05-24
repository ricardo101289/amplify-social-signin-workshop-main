import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
//Configure Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
//Context imports
import { UserContextProvider } from './contexts/UserContext'

//Check if you are in localhost or production
console.log("window.location.hostname: ", window.location.hostname);
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.

    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.

    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)
console.log("hola");
console.log(awsExports);
const signInURI = awsExports.oauth.redirectSignIn.split(',')
const signOutURI = awsExports.oauth.redirectSignOut.split(',')

if (isLocalhost) {
  awsExports.oauth.redirectSignIn = signInURI[0]
  awsExports.oauth.redirectSignOut = signOutURI[0]
} else if (window.location.hostname === 'main.d3qaayycjr6jup.amplifyapp.com') {
  awsExports.oauth.redirectSignIn = signInURI[1]
  awsExports.oauth.redirectSignOut = signOutURI[1]
} else {
  console.log('This is not possible')
}
//Check if you are in localhost or production
//Then Configure Resources
Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

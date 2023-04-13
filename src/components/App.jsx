import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'
import UpdateProfile from './UpdateProfile'


function App() {
  // const {currentUser} = useAuth()
  // console.log('currentUser.email: ', currentUser.email)
  return (
      <AuthProvider>
        <Container
            className="d-flex
      align-items-center
      justify-content-center"
            style={ { minHeight: '100vh' } }
        >
          <div className="w-100" style={ { maxWidth: 400 } }>

            <BrowserRouter>
              <Routes>
                {/*<Route path='/' element={<Dashboard/>} />*/ }

                <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Dashboard/>
                      </PrivateRoute>
                    }/>
                <Route path="/signup" element={ <Signup/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/update-profile" element={ <UpdateProfile/> }/>
                <Route path="/forgot-password" element={ <ForgotPassword/> }/>
                <Route path="*" element={ <Login/> }/>
              </Routes>
            </BrowserRouter>
          </div>
        </Container>
      </AuthProvider>
  )
}

export default App

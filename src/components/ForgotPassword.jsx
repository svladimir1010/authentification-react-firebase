import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgotPassword = () => {

  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [ error, setError ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ loading, setLoading ] = useState(false)
  // const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      // await login(emailRef.current.value, passwordRef.current.value)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')

    } catch( e ) {
      setError('Failed to reset password')
    }
    setLoading(false)
  }

  return <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Password Reset</h2>
        { error && <Alert variant="danger">{ error }</Alert> }

        { message && <Alert variant="success">{ message }</Alert> }
        <Form onSubmit={ handleSubmit }>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required ref={ emailRef }/>
          </Form.Group>

          <Button
              disabled={ loading }
              className="w-100 mt-4"
              type="submit"
          >
            Reset Password
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
    </div>
  </>

}

export default ForgotPassword

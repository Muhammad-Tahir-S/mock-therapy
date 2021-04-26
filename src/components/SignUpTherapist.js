import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Link from 'react-router-dom/Link'

function SignUpTherapist() {
    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

  return (
    <div className="sign-up-client d-flex flex-column align-items-center">
      <p className="h1-mod">Therapist Signup</p>
      <p className="p-mod">Already signed up? Log in <Link to='/loginTherapist'>here</Link>.</p>

      <Form>
      <Row>
          <Col>
        <Form.Group controlId="formBasicFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={e => setField('firstname', e.target.value)} type="text"></Form.Control>
        </Form.Group>
          </Col>

          <Col>
        <Form.Group controlId="formBasicLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={e => setField('lastname', e.target.value)} type="text"></Form.Control>
        </Form.Group>
          </Col>
      </Row>
        

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder='Enter email' onChange={e => setField('email', e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPhoneNo">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={e => setField('phoneNo', e.target.value)} type="text"></Form.Control>
        </Form.Group>

        <Row>
          <Col>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setField('password', e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
          </Col>

          <Col>
          <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={e => setField('password2', e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
          </Col>
      </Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Bio</Form.Label>
    <Form.Control placeholder='Enter bio' as="textarea" rows={4} onChange={e => setField('aboutMe', e.target.value)} />
  </Form.Group>



        
        
        

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}


export default SignUpTherapist
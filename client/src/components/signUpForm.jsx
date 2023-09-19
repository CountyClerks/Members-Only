import {Button, Form} from 'react-bootstrap'
export default function SignUpForm() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='' placeholder='Enter username' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' />
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </>
    )
}
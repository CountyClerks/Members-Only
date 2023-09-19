import {Button, Form} from 'react-bootstrap'
export default function NewMessageForm() {
    return(
        <>
            <Form>
                <Form.Group controlId='NewMessageForm.ControlTitle'>
                    <Form.Label>Message Title</Form.Label>
                    <Form.Control type='' placeholder='Title' />
                </Form.Group>
                <Form.Group controlId='NewMessageForm.ControlTextarea'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={3}  placeholder='New message....' />
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </>
    )
}
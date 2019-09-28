import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const AddQuestion = () => {
  return (
    <div>
      <h1>Ask a question!</h1>
      <Form>
        <FormGroup>
          <Label>New Question</Label>
          <Input type="text" placeholder="Why isn't my..." />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default AddQuestion

import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Axios from 'axios'

const AddQuestion = () => {
  const [content, setContent] = useState('')

  const addQuestion = async () => {
    const resp = await Axios.put(
      'https://localhost:5001/api/Question/CreteQuestion',
      content
    )
    console.log(content)
  }

  return (
    <div>
      <h1>Ask a question!</h1>
      <Form
        onSubmit={e => {
          e.preventDefault()
          addQuestion()
        }}
      >
        <FormGroup>
          <Label>New Question</Label>
          <Input
            type="text"
            placeholder="Why isn't my..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default AddQuestion

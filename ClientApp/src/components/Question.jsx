import React, { useState, useEffect } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Axios from 'axios'

const Question = () => {
  const [answerContent, setAnswerContent] = useState('')

  const addComment = async () => {
    const resp = await Axios.post(
      'https://localhost:5001/api/controller/CreateAnswer',
      answerContent
    )
    console.log('submitted')
  }

  return (
    <div>
      <Card>
        <CardTitle>Example Question</CardTitle>
        <CardSubtitle>02/05/19</CardSubtitle>
        <CardBody>Lorem Ipsum blah blah blah blah blah blah</CardBody>
      </Card>
      <Card>
        <CardTitle>Example Comment</CardTitle>
        <CardSubtitle>03/05/19</CardSubtitle>
        <CardBody>Do this then that</CardBody>
      </Card>
      <Form
        onSubmit={e => {
          e.preventDefault()
          addComment()
        }}
      >
        <FormGroup>
          <Label>Add a Comment</Label>
          <Input
            type="text"
            placeholder="Type here"
            value={answerContent}
            onChange={e => setAnswerContent(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default Question

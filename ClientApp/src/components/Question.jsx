import React from 'react'
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

const Question = () => {
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
      <Form>
        <FormGroup>
          <Label>Add a Comment</Label>
          <Input type="text" placeholder="Type here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default Question

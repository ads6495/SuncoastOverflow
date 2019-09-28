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
import { Link } from 'react-router-dom'
import './index.css'
const Questions = () => {
  return (
    <div>
      <Link to="/add-new">Add a Question!</Link>
      <Card>
        <CardBody>
          <CardTitle>Wow</CardTitle>
          <CardSubtitle>02/5/19</CardSubtitle>
          <CardText>This is a description</CardText>
          <Button>
            <Link to={`/question.id`} className="view-more-link">
              View More
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Questions

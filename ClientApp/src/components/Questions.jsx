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
import { Link } from 'react-router-dom'
import './index.css'
import Axios from 'axios'

const Questions = () => {
  const [question, setQuestion] = useState('')

  const fetchQuestions = async () => {
    const resp = await Axios.get('https://localhost:5001/api/Question/GetAll')
    setQuestion(resp.data)
    console.log(question)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])
  return (
    <div>
      <Link to="/add-new">Add a Question!</Link>
      <Card>
        <CardBody>
          <CardTitle>Wow</CardTitle>
          <CardSubtitle>02/5/19</CardSubtitle>
          <CardText>This is a description</CardText>
          <Button>
            <Link to={`/question/id`} className="view-more-link">
              View More
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Questions

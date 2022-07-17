import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import image from '../assets/loginImg.png'
import axios from 'axios'
import './styles/Register.style.css'

export default function Register() {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    let navigate = useNavigate()
    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            // const url = "http://localhost:8080/api/users"
            const url ="https://ukmuad.herokuapp.com/api/users"
            const {data:res} = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
            console.log(data)
        } catch (error) {
            if(error.response && error.response.status >=400 && error.response.status <=500){
                setError(error.response.data.message)
            }
        }
    }


    const login = () => {
        navigate('/login')
    }
  return (
    <div>
        <div className='container-fluid'>
            <div className='loginPage__main'>
                <Row>
                    <Col md={6} className='loginPage__main_img'>
                        <img src={image}/>
                    </Col>
                    <Col md={6} className='loginPage__main_form'>
                        <div className='loginPage__main_form_login'>
                            <h1>UKM UAD</h1>
                            <p>Pendidikan dan Penalaran adalah cara berpikir secara logis</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <h6 style={{color: '#34364A'}}>Username : </h6>
                                    <Form.Control type="text" placeholder="Enter username" style={{background: '#FCE9CB', border: 'transparent', borderRadius: '20px', padding: '10px 20px'}} value={data.username}
                                    onChange={(e) => setData({
                                        ...data, username: e.target.value})} required/>
                                    <Form.Text className="text-muted">
                                    We'll never share your data with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <h6 style={{color: '#34364A'}}>Email : </h6>
                                    <Form.Control type="text" placeholder="Enter Email" style={{background: '#FCE9CB', border: 'transparent', borderRadius: '20px', padding: '10px 20px'}} onChange={(e) => setData({
                                        ...data, email: e.target.value})} required value={data.email}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <h6 style={{color: '#34364A'}}>Password : </h6>
                                    <Form.Control type="password" placeholder="Password" style={{background: '#FCE9CB', border: 'transparent', borderRadius: '20px', padding: '10px 20px'}} onChange={(e) => setData({
                                        ...data, password: e.target.value})} required value={data.password}/>
                                </Form.Group>
                                {error && <div className='error_msg'>{error}</div> }
                                <Button type='submit'>
                                    Register
                                </Button>
                                <hr/>
                                <Button className='loginPage__btnRegister' onClick={login}>
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

import style from './SignModal.module.css'

import loginImg from '../../assets/images/signin-dark.png'
import registerImg from '../../assets/images/signup-dark.png'


function SignModal({ show, handleClose, type, handleShow, handleType }) {

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const formDataObj = Object.fromEntries(formData)

        console.log(formDataObj);
    }


    if (type === 'login') {
        return (
            <Modal size='lg' centered contentClassName={style.modal} show={show} onHide={handleClose} >
                <div className={style.wrapper}>
                    <div className={style.closeBtn}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                    </div>
                    <div className={style.secondaryWrapper}>

                        <div className={style.header}>
                            <h3>Hey there!<br />Welcome back.</h3>
                            <img src={loginImg} alt='signinimg' />
                            <p>Don't have an account? <Link onClick={() => {
                                handleClose();
                                setTimeout(() => {
                                    handleType('register')
                                    handleShow()
                                }, 300)
                            }} to=''>Sign up here</Link></p>
                        </div>
                        <div className={style.body}>
                            <form method='post' onSubmit={submitHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className='mt-3 w-100 pt-2 pb-2'>
                                    Sign in
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal >
        )
    } else if (type === 'register') {
        return (
            <Modal size='lg' centered contentClassName={style.modal} show={show} onHide={handleClose} >
                <div className={style.wrapper} >
                    <div className={style.closeBtn}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                    </div>
                    <div className={style.secondaryWrapper}>
                        <div className={style.header}>
                            <h3>Join us!<br />Get premium benefits.</h3>
                            <img src={registerImg} alt='signinimg' />
                            <p>Already have an account? <Link onClick={async () => {
                                handleClose();

                                setTimeout(() => {
                                    handleType('login')
                                    handleShow()
                                }, 300)
                            }} to=''>Sign in here</Link></p>
                        </div>
                        <div className={style.body}>
                            <Form method='post' onSubmit={submitHandler} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control name='name' placeholder="Enter full name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control name='number' placeholder="Enter phone number" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name='repass' type="password" placeholder="Confirm Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className='mt-3 w-100 pt-2 pb-2'>
                                    Sign up
                                </Button>

                            </Form>

                        </div>
                    </div>
                </div>
            </Modal >
        )
    }
}

export default SignModal
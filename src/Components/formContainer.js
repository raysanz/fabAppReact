import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";


class FormContainer extends Component {

    state = {
        fname: "Rudy",
        lname: "Sanchez",
        email: "",
        message: ""
    };

    submitHandler = event => {
        ///let state = this
        ///console.log(state)
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(this.state)

    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });

    };

    render() {
        return (
            <div className="container">
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text"
                            >
                                First name
                  </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterEmailEx2"
                                className="grey-text"
                            >
                                Last name
                  </label>
                            <input
                                value={this.state.lname}
                                name="lname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterEmailEx2"
                                className="form-control"
                                placeholder="Last name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text"
                            >
                                Email
                  </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="email"
                                placeholder="Your Email address"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                  </small>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>


                        <label htmlFor="exampleFormControlTextarea1">
                            Message
            </label>
                        <textarea
                            value={this.state.message}
                            onChange={this.changeHandler}
                            type="message"
                            name="message"
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                        />

                    </MDBRow>
                    <MDBBtn color="primary" type="submit">
                        Submit Form
              </MDBBtn>
                </form>
            </div>

        );
    }


}


export default FormContainer;

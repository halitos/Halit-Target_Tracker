import React from "react";
// import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function FormDeneme() {
  return (
    <>
      <div className="container d-flex justify-content-around align-items-center w-75 ">
        {/* <Link to="/">
          <button className="btn btn-sm btn-info h-50">Home</button>
        </Link> */}
        <h3 className="border border-light p-3 my-2 w-75">Selection</h3>
      </div>
      <Form className="w-75 mt-3">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Example multiple select</Form.Label>
          <Form.Control as="select" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

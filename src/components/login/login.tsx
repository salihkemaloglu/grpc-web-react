import * as React from 'react';

import { Form, Button, } from 'react-bootstrap';

import { grpc } from 'grpc-web-client';
import { DemRRService } from '../../proto/demRR_pb_service';
import { HelloRequest } from '../../proto/demRR_pb';

import './Loginpage.css';
export const Login: React.StatelessComponent<{}> = () => {

  function getBook() {
    const host = 'http://localhost:8900';
    const getBookRequest = new HelloRequest();
    getBookRequest.setMessage('Ömer ,Thats your first GRPC experience!well done ');
    grpc.unary(DemRRService.SayHello, {
      request: getBookRequest,
      host: host,
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        console.log('getBook.onEnd.status', status, statusMessage);
        console.log('getBook.onEnd.headers', headers);
        if (status === grpc.Code.OK && message) {
          console.log('getBook.onEnd.message', message.toObject());
        }
        console.log('getBook.onEnd.trailers', trailers);
      }
    });
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="barBaz">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
      <button onClick={getBook}>getBook</button>
    </div>
  );
};

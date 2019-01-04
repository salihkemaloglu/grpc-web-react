import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import { HelloRequest } from './proto/dem_pb';
import { DemService } from './proto/dem_pb_service';
import { grpc } from 'grpc-web-client';

class App extends React.Component {
  
  handleFormSubmit() {
    const request = new HelloRequest();
    request.setName('Hello World!');
    grpc.invoke(DemService.SayHello, {
      request: request,
      host: 'http://localhost:8900',
      onMessage: message => {
        console.log(message);
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code === grpc.Code.OK) {
          console.log('all ok');
        } else {
          console.log('hit an error', code, msg, trailers);
        }
      }
    });
  }
   getBook() {
    const host = 'http://localhost:8900';
    const getBookRequest = new HelloRequest();
    getBookRequest.setName('60929871');
    grpc.unary(DemService.SayHello, {
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
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleFormSubmit}>test</button>
        <button onClick={this.getBook}>getBook</button>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

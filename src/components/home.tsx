import * as React from 'react';

import { Button } from 'react-bootstrap';

import classNames from 'classnames';
import Dropzone from 'react-dropzone';

import { grpc } from 'grpc-web-client';
import { DemRRService } from '../proto/demRR_pb_service';
import { HelloRequest, RegisterUserRequest, HelloResponse, User, RegisterUserResponse, LoginUserRequest, UserLogin, LoginUserResponse } from '../proto/demRR_pb';
import { LongGreetRequest, Chunk, UploadFileRequest } from '..//proto/demMN_pb';
import { DemMNService } from '../proto/demMN_pb_service';


import { GigxRRService } from 'src/proto/gigxRR_pb_service';

export const Home: React.StatelessComponent<{}> = () => {
  var state = {
    files: [],
    fileName: '',
    url: 'http://178.62.239.148:8902'
  };

  function onDrop(_acceptedFiles: any, _rejectedFiles: any) {
    var reader = new FileReader();
    reader.onload = function () {
      var arrayBuffer = reader.result;
      let currentArray = arrayBuffer === null ? JSON.parse("null") : arrayBuffer;
      state.files = currentArray;
      state.fileName = _acceptedFiles[0].name;
    };
    reader.readAsArrayBuffer(_acceptedFiles[0]);
  }

  function TestMainService() {
    const req = new HelloRequest();
    req.setMessage('Is main service working?');
    grpc.invoke(GigxRRService.SayHello, {
      request: req,
      host: 'http://dev-rr.gignox.com:8902',
      onMessage: (message: HelloResponse) => {
        console.log(message.getMessage());
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code === grpc.Code.OK) {
          console.log('all ok');
        } else {
          console.log("File can not add to ipfs")
          console.log('hit an error', code, msg);
        }
      }
    });

  }
  function TestRRService() {
    const req = new HelloRequest();
    req.setMessage('Is RR service working?');
    
    grpc.invoke(GigxRRService.SayHello, {
      request: req,
      host: state.url,
      metadata: new grpc.Metadata({"Access-Control-Allow-Origin": "*"}),
      onHeaders: (headers: grpc.Metadata) => {
        console.log("onHeaders", headers);
      },
      onMessage: (message: HelloResponse) => {
        console.log(message.getMessage());
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
  function TestRRServiceForUser() {
    const req = new RegisterUserRequest();
    var item = new User();
    item.setUsername("MameGuli1")
    item.setEmail("mameguli@gmail.com")
    item.setPassword("pass")
    req.setUser(item);

    grpc.invoke(DemRRService.Register, {
      request: req,
      host: state.url,
      onHeaders: (headers: grpc.Metadata) => {
        console.log("onHeaders", headers);
      },
      onMessage: (message: RegisterUserResponse) => {
        item = message.getUser() === null ? JSON.parse("null") : message.getUser();
        console.log(item.getId() + ":" + item.getUsername());
      },
      onEnd: (status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
        console.log("onEnd", status, statusMessage, trailers);
      },
    });
  }
  function TestRRServiceForUserLogin() {
    const req = new LoginUserRequest();
    var item = new UserLogin();
    item.setUsername("MameGuli")
    item.setPassword("pass")
    req.setUser(item);

    grpc.invoke(DemRRService.Login, {
      request: req,
      host: state.url,
      onHeaders: (headers: grpc.Metadata) => {
        console.log("onHeaders", headers);
      },
      onMessage: (message: LoginUserResponse) => {
        item = message.getUser() === null ? JSON.parse("null") : message.getUser();
        console.log("token" + ":" + item.getToken());
      },
      onEnd: (status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
        console.log("onEnd", status, statusMessage, trailers);
      },
    });
  }
  function UploadServerSideStream() {
    const req = new LongGreetRequest();
    const buffer = Buffer.from(state.files)
    const item = new Chunk();
    item.setContent(buffer);
    req.setGreeting(item);

    const client = grpc.client(DemMNService.LongGreet, {
      host: "http://localhost:8900",
    });
    client.onHeaders((headers: grpc.Metadata) => {
      console.log("onHeaders", headers);
    });
    client.onMessage((message: any) => {
      console.log("onMessage", message);
    });
    client.onEnd((status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
      console.log("onEnd", status, statusMessage, trailers);
    });

    client.start(new grpc.Metadata({ "HeaderTestKey1": "ClientValue1" }));
    client.send(req);
    client.finishSend(); // included for completeness, but likely unnecessary as the request is unary

  }
  function UploadServerBiStream() {
    const req = new UploadFileRequest();
    const buffer = Buffer.from(state.files)
    const item = new Chunk();
    item.setContent(buffer);
    req.setFile(item);

    const client = grpc.client(DemMNService.UploadFile, {
      host: "http://localhost:8900",
    });
    client.onHeaders((headers: grpc.Metadata) => {
      console.log("onHeaders", headers);
    });
    client.onMessage((message: any) => {
      console.log("onMessage", message);
    });
    client.onEnd((status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
      console.log("onEnd", status, statusMessage, trailers);
    });

    client.start(new grpc.Metadata({ "HeaderTestKey1": "ClientValue1" }));
    client.send(req);
    client.finishSend(); // included for completeness, but likely unnecessary as the request is unary

  }
  return (
    <div className="row">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          );
        }}
      </Dropzone>
      <Button onClick={TestMainService} >Test Main service</Button>
      <Button onClick={TestRRServiceForUser} >Test RR service for user register</Button>
      <Button onClick={TestRRServiceForUserLogin} >Test RR service for user Login</Button>
      <Button onClick={TestRRService} >Test RR service</Button>
      <button onClick={UploadServerSideStream} color="primary">UploadHandlerServerSide</button>
      <button onClick={UploadServerBiStream} color="primary">UploadHandlerBi</button>
    </div>
  );
};

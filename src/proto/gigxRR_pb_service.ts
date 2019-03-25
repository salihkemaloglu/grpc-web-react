// package: gigx
// file: proto/gigxRR.proto

import * as proto_gigxRR_pb from "../proto/gigxRR_pb";
export class GigxRRService {
  static serviceName = "gigx.GigxRRService";
}
export namespace GigxRRService {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.HelloRequest;
    static readonly responseType = proto_gigxRR_pb.HelloResponse;
  }
  export class Login {
    static readonly methodName = "Login";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.LoginUserRequest;
    static readonly responseType = proto_gigxRR_pb.LoginUserResponse;
  }
  export class Register {
    static readonly methodName = "Register";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.RegisterUserRequest;
    static readonly responseType = proto_gigxRR_pb.RegisterUserResponse;
  }
  export class UpdateUser {
    static readonly methodName = "UpdateUser";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.UpdateUserRequest;
    static readonly responseType = proto_gigxRR_pb.UpdateUserResponse;
  }
  export class DeleteUser {
    static readonly methodName = "DeleteUser";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.DeleteUserRequest;
    static readonly responseType = proto_gigxRR_pb.DeleteUserResponse;
  }
  export class GetFile {
    static readonly methodName = "GetFile";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.GetFileRequest;
    static readonly responseType = proto_gigxRR_pb.GetFileResponse;
  }
  export class GetAllFiles {
    static readonly methodName = "GetAllFiles";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_gigxRR_pb.GetAllFilesRequest;
    static readonly responseType = proto_gigxRR_pb.GetAllFilesResponse;
  }
  export class UpdateFile {
    static readonly methodName = "UpdateFile";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.UpdateFileRequest;
    static readonly responseType = proto_gigxRR_pb.UpdateFileResponse;
  }
  export class DeleteFile {
    static readonly methodName = "DeleteFile";
    static readonly service = GigxRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_gigxRR_pb.DeleteFileRequest;
    static readonly responseType = proto_gigxRR_pb.DeleteFileResponse;
  }
}

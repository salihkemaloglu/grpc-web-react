// package: dem
// file: proto/demRR.proto

import * as proto_demRR_pb from "../proto/demRR_pb";
export class DemRRService {
  static serviceName = "dem.DemRRService";
}
export namespace DemRRService {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.HelloRequest;
    static readonly responseType = proto_demRR_pb.HelloResponse;
  }
  export class Login {
    static readonly methodName = "Login";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.LoginUserRequest;
    static readonly responseType = proto_demRR_pb.LoginUserResponse;
  }
  export class Register {
    static readonly methodName = "Register";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.RegisterUserRequest;
    static readonly responseType = proto_demRR_pb.RegisterUserResponse;
  }
  export class UpdateUser {
    static readonly methodName = "UpdateUser";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.UpdateUserRequest;
    static readonly responseType = proto_demRR_pb.UpdateUserResponse;
  }
  export class DeleteUser {
    static readonly methodName = "DeleteUser";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.DeleteUserRequest;
    static readonly responseType = proto_demRR_pb.DeleteUserResponse;
  }
  export class GetFile {
    static readonly methodName = "GetFile";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.GetFileRequest;
    static readonly responseType = proto_demRR_pb.GetFileResponse;
  }
  export class GetAllFiles {
    static readonly methodName = "GetAllFiles";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_demRR_pb.GetAllFilesRequest;
    static readonly responseType = proto_demRR_pb.GetAllFilesResponse;
  }
  export class UpdateFile {
    static readonly methodName = "UpdateFile";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.UpdateFileRequest;
    static readonly responseType = proto_demRR_pb.UpdateFileResponse;
  }
  export class DeleteFile {
    static readonly methodName = "DeleteFile";
    static readonly service = DemRRService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demRR_pb.DeleteFileRequest;
    static readonly responseType = proto_demRR_pb.DeleteFileResponse;
  }
}

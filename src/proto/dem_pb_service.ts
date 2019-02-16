// package: dem
// file: proto/dem.proto

import * as proto_dem_pb from "../proto/dem_pb";
export class DemService {
  static serviceName = "dem.DemService";
}
export namespace DemService {
  export class RegisterUser {
    static readonly methodName = "RegisterUser";
    static readonly service = DemService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.RegisterUserRequest;
    static readonly responseType = proto_dem_pb.RegisterUserResponse;
  }
  export class LoginUser {
    static readonly methodName = "LoginUser";
    static readonly service = DemService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.LoginUserRequest;
    static readonly responseType = proto_dem_pb.LoginUserResponse;
  }
  export class UpdateUser {
    static readonly methodName = "UpdateUser";
    static readonly service = DemService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.UpdateUserRequest;
    static readonly responseType = proto_dem_pb.UpdateUserResponse;
  }
  export class DeleteUser {
    static readonly methodName = "DeleteUser";
    static readonly service = DemService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.DeleteUserRequest;
    static readonly responseType = proto_dem_pb.DeleteUserResponse;
  }
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = DemService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.HelloRequest;
    static readonly responseType = proto_dem_pb.HelloResponse;
  }
  export class LongGreet {
    static readonly methodName = "LongGreet";
    static readonly service = DemService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = proto_dem_pb.LongGreetRequest;
    static readonly responseType = proto_dem_pb.LongGreetResponse;
  }
}

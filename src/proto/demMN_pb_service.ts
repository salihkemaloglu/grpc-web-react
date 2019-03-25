// package: dem
// file: proto/demMN.proto

import * as proto_demMN_pb from "../proto/demMN_pb";
export class DemMNService {
  static serviceName = "dem.DemMNService";
}
export namespace DemMNService {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = DemMNService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_demMN_pb.HelloRequest;
    static readonly responseType = proto_demMN_pb.HelloResponse;
  }
  export class UploadFile {
    static readonly methodName = "UploadFile";
    static readonly service = DemMNService;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = proto_demMN_pb.UploadFileRequest;
    static readonly responseType = proto_demMN_pb.UploadFileResponse;
  }
  export class LongGreet {
    static readonly methodName = "LongGreet";
    static readonly service = DemMNService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = proto_demMN_pb.LongGreetRequest;
    static readonly responseType = proto_demMN_pb.LongGreetResponse;
  }
}

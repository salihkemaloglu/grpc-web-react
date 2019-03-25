// package: dem
// file: proto/demMN.proto

import * as jspb from "google-protobuf";

export class File extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getFolderId(): string;
  setFolderId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedDate(): string;
  setCreatedDate(value: string): void;

  getUpdatedDate(): string;
  setUpdatedDate(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  getIsBuried(): boolean;
  setIsBuried(value: boolean): void;

  getIsFolderFile(): boolean;
  setIsFolderFile(value: boolean): void;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): void;

  getIsTrash(): boolean;
  setIsTrash(value: boolean): void;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    id: string,
    userId: string,
    folderId: string,
    name: string,
    description: string,
    createdDate: string,
    updatedDate: string,
    fileHash: string,
    isBuried: boolean,
    isFolderFile: boolean,
    isStarred: boolean,
    isTrash: boolean,
    isDeleted: boolean,
  }
}

export class Chunk extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class HelloRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    message: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class UploadFileRequest extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): Chunk | undefined;
  setFile(value?: Chunk): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
  static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
  export type AsObject = {
    file?: Chunk.AsObject,
  }
}

export class UploadFileResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
  static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
  export type AsObject = {
    result: string,
  }
}

export class LongGreetRequest extends jspb.Message {
  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): Chunk | undefined;
  setGreeting(value?: Chunk): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetRequest): LongGreetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongGreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetRequest;
  static deserializeBinaryFromReader(message: LongGreetRequest, reader: jspb.BinaryReader): LongGreetRequest;
}

export namespace LongGreetRequest {
  export type AsObject = {
    greeting?: Chunk.AsObject,
  }
}

export class LongGreetResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetResponse): LongGreetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongGreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetResponse;
  static deserializeBinaryFromReader(message: LongGreetResponse, reader: jspb.BinaryReader): LongGreetResponse;
}

export namespace LongGreetResponse {
  export type AsObject = {
    result: string,
  }
}


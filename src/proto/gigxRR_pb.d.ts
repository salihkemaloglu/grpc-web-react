// package: gigx
// file: proto/gigxRR.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSurname(): string;
  setSurname(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getImagePath(): string;
  setImagePath(value: string): void;

  getTotalSpace(): string;
  setTotalSpace(value: string): void;

  getCreatedDate(): string;
  setCreatedDate(value: string): void;

  getUpdatedDate(): string;
  setUpdatedDate(value: string): void;

  getLanguageType(): string;
  setLanguageType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string,
    description: string,
    imagePath: string,
    totalSpace: string,
    createdDate: string,
    updatedDate: string,
    languageType: string,
  }
}

export class Follow extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFollowerId(): string;
  setFollowerId(value: string): void;

  getFollowedId(): string;
  setFollowedId(value: string): void;

  getFollowDate(): string;
  setFollowDate(value: string): void;

  getUnfollowDate(): string;
  setUnfollowDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Follow.AsObject;
  static toObject(includeInstance: boolean, msg: Follow): Follow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Follow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Follow;
  static deserializeBinaryFromReader(message: Follow, reader: jspb.BinaryReader): Follow;
}

export namespace Follow {
  export type AsObject = {
    id: string,
    followerId: string,
    followedId: string,
    followDate: string,
    unfollowDate: string,
  }
}

export class Folder extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getCreatedDate(): string;
  setCreatedDate(value: string): void;

  getUpdatedDate(): string;
  setUpdatedDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Folder.AsObject;
  static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Folder;
  static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
}

export namespace Folder {
  export type AsObject = {
    id: string,
    name: string,
    userId: string,
    createdDate: string,
    updatedDate: string,
  }
}

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

export class Buried extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  getPublicHash(): string;
  setPublicHash(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBuriedDate(): string;
  setBuriedDate(value: string): void;

  getDiggingDate(): string;
  setDiggingDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Buried.AsObject;
  static toObject(includeInstance: boolean, msg: Buried): Buried.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Buried, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Buried;
  static deserializeBinaryFromReader(message: Buried, reader: jspb.BinaryReader): Buried;
}

export namespace Buried {
  export type AsObject = {
    id: string,
    userId: string,
    fileName: string,
    fileHash: string,
    publicHash: string,
    description: string,
    buriedDate: string,
    diggingDate: string,
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

export class UserLogin extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogin.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogin): UserLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogin;
  static deserializeBinaryFromReader(message: UserLogin, reader: jspb.BinaryReader): UserLogin;
}

export namespace UserLogin {
  export type AsObject = {
    username: string,
    password: string,
    token: string,
  }
}

export class RegisterUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class RegisterUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
  static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class LoginUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserLogin | undefined;
  setUser(value?: UserLogin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
  static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
  export type AsObject = {
    user?: UserLogin.AsObject,
  }
}

export class LoginUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserLogin | undefined;
  setUser(value?: UserLogin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
  static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
  export type AsObject = {
    user?: UserLogin.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    userId: string,
  }
}

export class UpdateFileRequest extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileRequest): UpdateFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileRequest;
  static deserializeBinaryFromReader(message: UpdateFileRequest, reader: jspb.BinaryReader): UpdateFileRequest;
}

export namespace UpdateFileRequest {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class UpdateFileResponse extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileResponse): UpdateFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileResponse;
  static deserializeBinaryFromReader(message: UpdateFileResponse, reader: jspb.BinaryReader): UpdateFileResponse;
}

export namespace UpdateFileResponse {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class GetFileRequest extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRequest;
  static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
  export type AsObject = {
    fileId: string,
    fileHash: string,
  }
}

export class GetFileResponse extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileResponse): GetFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileResponse;
  static deserializeBinaryFromReader(message: GetFileResponse, reader: jspb.BinaryReader): GetFileResponse;
}

export namespace GetFileResponse {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class GetAllFilesRequest extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllFilesRequest): GetAllFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllFilesRequest;
  static deserializeBinaryFromReader(message: GetAllFilesRequest, reader: jspb.BinaryReader): GetAllFilesRequest;
}

export namespace GetAllFilesRequest {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class GetAllFilesResponse extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllFilesResponse): GetAllFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllFilesResponse;
  static deserializeBinaryFromReader(message: GetAllFilesResponse, reader: jspb.BinaryReader): GetAllFilesResponse;
}

export namespace GetAllFilesResponse {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class DeleteFileRequest extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
  static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
  export type AsObject = {
    fileId: string,
    fileHash: string,
  }
}

export class DeleteFileResponse extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileResponse): DeleteFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileResponse;
  static deserializeBinaryFromReader(message: DeleteFileResponse, reader: jspb.BinaryReader): DeleteFileResponse;
}

export namespace DeleteFileResponse {
  export type AsObject = {
    fileId: string,
    fileHash: string,
  }
}


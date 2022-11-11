/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

/*
Interface for the Login Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  accessToken: string;
  refreshToken: RefreshToken;
  tokenType: string;
}

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  username: string;
  password: string;
}

/*
Interface for the Register Request (can look different, based on your backend api)
*/
export interface RegisterRequest {
  accountNumber:string;
  firstname: string;
  middlename:string;
  lastname: string;
  username: string;
  password: string;
  accountTypeId : string;
  mobilenumber: string;
}

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface AtmPin{
  accountNumber:string;
  atmPin:number;
}
export interface NewAtmPin{
  accountNumber : string;
  atmPin:number;
  newAtmPin:number;
}
export interface RegisterResponse {
  status: number;
  message: string;
}
export interface TransactionResponse{
  id:number;
  accountNumber:string;
  transactionType : string;
  transDate : string;
  amount:number;
}
export interface TransferRequest{
  sourceAccNumber:string;
  destAccNumber:string;
  destAccTypeId:string;
  transferAmount:number;

}
export interface ChangeAtmPin{
  accountNumber:string;
  oldAtmPin:number;
  newAtmPin:number;
}

export interface FdRequest{
  accountNumber:string;
  product:string;
  fdPeriod:number;
  amount:number;
}
export interface checkBook{
  accountNumber:string;
  requestedDate:string;
}
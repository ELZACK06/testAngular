export enum datastateEnum{
 LOADING,
 LOADED,
 ERROR
}

export interface StateOfDataApp<T>{
    dataState?:datastateEnum;
    data?:T;
    errorMessage?:string;

}
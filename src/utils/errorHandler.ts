/*Implement a custom error class and functions 
to handle different types of errors gracefully.*/

//create custom error classes
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
//handle and categorize different error types for consistent logging

//export handleError function so it can be reused
export function handleError(error: unknown): void {
  //check if the error is an instance of the custom Network Error class
  if (error instanceof NetworkError) {
    console.error(`[NetworkError]: ${error.message}`);
    //if not a Network error, check if its a DataError
  } else if (error instanceof DataError) {
    console.error(`[DataError]: ${error.message}`);
    //if not a custom error, check if its a built-in js error
  } else if (error instanceof Error) {
    console.error(`[UnknownError]: ${error.message}`);
    //If this error is not a NetworkError, DataError, or even a standard Error, just print it as-is so we can see what went wrong
  } else {
    console.error(`[UnhandledError]:`, error);
  }
}

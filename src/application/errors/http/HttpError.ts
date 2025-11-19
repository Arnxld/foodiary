import { ErrorCode } from '../ErrorCode';

export abstract class HttpError extends Error{
  // qualquer tipo de error personalizado extenda essa classe

  public abstract statusCode: number;

  public abstract code: ErrorCode;
}

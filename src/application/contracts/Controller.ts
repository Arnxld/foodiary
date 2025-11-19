import { getSchema } from '@kernel/decorators/Schema';

export abstract class Controller<TBody = undefined> {
  protected abstract handle(params: Controller.Request): Promise<Controller.Response<TBody>>;

  public execute(request: Controller.Request): Promise<Controller.Response<TBody>> {
    const body = this.validateBody(request.body);

    return this.handle({
      ...request,
      body,
    });
  }

  private validateBody(body: Controller.Request['body']) {
    const schema = getSchema(this);

    // Caso não passe pela validação, um erro é retornado e tratado no try/catch(error handler) do adapter
    if(!schema) {
      return body;
    }

    return schema.parse(body);
  }
}

export namespace Controller {
  export type Request<
    TBody = Record<string, unknown>,
    TParams = Record<string, unknown>,
    TQueryParams = Record<string, unknown>
  > = {
    body: TBody;
    params: TParams;
    queryParams: TQueryParams;
  };

  export type Response<TBody = undefined> = {
  statusCode: number;
  body?: TBody;
};
}

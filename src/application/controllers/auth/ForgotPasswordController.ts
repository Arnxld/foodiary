import { Controller } from '@application/contracts/Controller';
import { ForgotPasswordUseCase } from '@application/usecases/auth/ForgotPasswordUseCase';
import { Injectable } from '@kernel/decorators/Injectable';
import { Schema } from '@kernel/decorators/Schema';
import { ForgotPasswordBody, forgotPasswordSchema } from './schemas/forgotPasswordSchema';

@Injectable()
@Schema(forgotPasswordSchema)
export class ForgotPasswordController extends Controller<'public', ForgotPasswordController.Response> {

  constructor(private readonly forgotPasswordUseCase: ForgotPasswordUseCase) { // injeção de dependência ( ao invés de criar o UseCase dentro da classe)
    super();
  }

  protected override async handle({ body }: Controller.Request<'public', ForgotPasswordBody>): Promise<Controller.Response<ForgotPasswordController.Response>> {
    try {
      const { email } = body;

      await this.forgotPasswordUseCase.execute({ email });
    } catch {
      // empty catch to return the statuscode 204
      // throw new BadRequest('Failed. Try again'); // no customized error in errors folder bc it's not a critical business error
    }

    // return 204 in all cases to avoid malicious users to realize existent emails
    return {
      statusCode: 204,
    };
  }
}

export namespace ForgotPasswordController {
  export type Response = null
}

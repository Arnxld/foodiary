import { Controller } from '@application/contracts/Controller';
import { Schema } from '@kernel/decorators/Schema';
import { SignUpBody, signUpSchema } from './schemas/signUpSchema';
import { SignUpUseCase } from '@application/usecases/auth/SignUpUseCase';
import { Injectable } from '@kernel/decorators/Injectable';

@Injectable()
@Schema(signUpSchema)
export class SignUpController extends Controller<SignUpController.Reponse> {
  
  constructor(private readonly signUpUseCase: SignUpUseCase) { // injeção de dependência ( ao invés de criar o UseCase dentro da classe)
    super();
  }

  protected override async handle({ body }: Controller.Request<SignUpBody>): Promise<Controller.Response<SignUpController.Reponse>> {
    const { account } = body;

    const { accessToken, refreshToken } = await this.signUpUseCase.execute(account)

    return {
      statusCode: 201,
      body: {
        accessToken,
        refreshToken
      },
    };
  }
}

export namespace SignUpController {
  export type Reponse = {
    accessToken: string;
    refreshToken: string;
  }
}
import { Injectable } from "@kernel/decorators/Injectable";
import { AuthGateway } from "src/infra/gateways/AuthGateway";

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly authGateway: AuthGateway
  ) {}

  async execute({
      email, 
      password
    }: SignUpUseCase.Input): Promise<SignUpUseCase.Output> {

      const { externalId } = await this.authGateway.signUp({ email, password })

      // externalId salvar no db

      const {
        accessToken,
        refreshToken,
      } = await this.authGateway.signIn({ email, password})

      
    
    return {
      accessToken,
      refreshToken,
    };
  }
}

export namespace SignUpUseCase {
  export type Input = {
    email: string;
    password: string;
  }

  export type Output = {
    accessToken: string;
    refreshToken: string;
  }
}

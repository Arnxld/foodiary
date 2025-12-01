import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { SignUpController } from '@application/controllers/auth/SignUpController'
import { Registry } from '@kernel/di/Registry';
// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(SignUpController)

export const handler = lambdaHttpAdapter(controller);


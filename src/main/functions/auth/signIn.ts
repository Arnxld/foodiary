import 'reflect-metadata';

import { SignInController } from '@application/controllers/auth/SignInController';
import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(SignInController);

export const handler = lambdaHttpAdapter(controller);


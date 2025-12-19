import 'reflect-metadata';

import { ConfirmForgotPasswordController } from '@application/controllers/auth/ConfirmForgotPasswordController';
import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(ConfirmForgotPasswordController);

export const handler = lambdaHttpAdapter(controller);


import 'reflect-metadata';

import { RefreshTokenController } from '@application/controllers/auth/RefreshTokenController';
import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(RefreshTokenController);

export const handler = lambdaHttpAdapter(controller);


import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { HelloController } from '@application/controllers/HelloController'
import { Registry } from '@kernel/di/Registry';
// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(HelloController)

export const handler = lambdaHttpAdapter(controller);


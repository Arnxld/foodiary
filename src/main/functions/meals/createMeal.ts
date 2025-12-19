import 'reflect-metadata';

import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { CreateMealController } from '@application/controllers/meals/CreateMealController';

// whatever is outside the function, it will be only executed once aws executes the container

const controller = Registry.getInstance().resolve(CreateMealController);

export const handler = lambdaHttpAdapter(controller);


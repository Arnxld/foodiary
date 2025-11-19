
import { HelloController } from '@application/controllers/HelloController';
import { HelloUseCase } from '@application/usecases/HelloUseCase';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import 'reflect-metadata';

// whatever is outside the function, it will be only executed once aws executes the container

const controller = new HelloController(new HelloUseCase());

export const handler = lambdaHttpAdapter(controller);


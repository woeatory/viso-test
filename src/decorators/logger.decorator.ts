import { UseInterceptors, applyDecorators } from '@nestjs/common';
import { LoggerInterceptor } from '../interceptors/logger.interceptor';

export function Log(name: string) {
  return applyDecorators(UseInterceptors(new LoggerInterceptor(name)));
}

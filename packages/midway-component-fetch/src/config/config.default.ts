import { Config, MiddlewareConfig } from '../index'
import {
  initialConfig,
  initialMiddlewareConfig,
  initMiddlewareOptions,
} from '../lib/config'


export const fetchConfig: Config = {
  ...initialConfig,
  traceLoggingReqHeaders: [...initialConfig.traceLoggingReqHeaders],
  traceLoggingRespHeaders: [...initialConfig.traceLoggingRespHeaders],
}

export const fetchMiddlewareConfig: Readonly<Omit<MiddlewareConfig, 'match'>> = {
  ...initialMiddlewareConfig,
  ignore: [],
  options: {
    ...initMiddlewareOptions,
  },
}


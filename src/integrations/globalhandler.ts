/*
 * @Author 舜君
 * @LastEditTime 2021-10-14 19:26:19
 * @Description
 */

import { Integration } from "../types/integration";

interface GlobalHandlersIntegrations {
  onerror: boolean;
  onunhandledrejection: boolean;
}

class GlobalHandler implements Integration {
  public static id: string = "GlobalHandler";

  public name: string = GlobalHandler.id;

  private readonly _options: GlobalHandlersIntegrations;

  private _onErrorHandlerInstalled: boolean = false;

  private _onUnhandledRejectionHandlerInstalled: boolean = false;

  public constructor(options?: GlobalHandlersIntegrations) {
    this._options = {
      onerror: true,
      onunhandledrejection: true,
      ...options,
    };
  }

  public setupOnce(): void {
    if (this._options.onerror) {
      this._installGlobalOnErrorHandler();
    }

    if (this._options.onunhandledrejection) {
      this._installGlobalOnUnhandledRejectionHandler();
    }
  }

  private _installGlobalOnErrorHandler(): void {
    if (this._onErrorHandlerInstalled) {
      return;
    }

    this._onErrorHandlerInstalled = true;
  }

  private _installGlobalOnUnhandledRejectionHandler(): void {
    if (this._onUnhandledRejectionHandlerInstalled) {
      return;
    }

    this._onUnhandledRejectionHandlerInstalled = true;
  }
}

export { GlobalHandler };

export type XHRConfig = {
    headers?: { [header: string]: string };
    params?: { [param: string]: any };
    reportProgress?: boolean;
    withCredentials?: boolean;
  };
  
  export abstract class AbstractXHRConfigService {
    abstract getBaseUrl(): string;
  }
  
  export const XHR_CONFIG_TOKEN = new InjectionToken<AbstractXHRConfigService>(
    '',
  );
  
  @Injectable({
    providedIn: 'root',
  })
  export class XHR {
    constructor(
      private readonly _http: HttpClient,
      @Inject(XHR_CONFIG_TOKEN)
      private readonly _xhrConfigService: AbstractXHRConfigService,
    ) {}
  
    get<T>(url: string, config?: XHRConfig): Observable<T> {
      return this._http.get<T>(this._prependBaseUrl(url), config);
    }
  
    getArrayBuffer(url: string, config?: XHRConfig): Observable<ArrayBuffer> {
      return this._http.get(this._prependBaseUrl(url), {
        ...config,
        responseType: 'arraybuffer',
      });
    }
  
    post<T>(url: string, data?: any, config?: XHRConfig): Observable<T> {
      return this._http.post<T>(this._prependBaseUrl(url), data ?? {}, config);
    }
  
    put<T>(url: string, data?: any, config?: XHRConfig): Observable<T> {
      return this._http.put<T>(this._prependBaseUrl(url), data ?? {}, config);
    }
  
    patch<T>(url: string, data?: any, config?: XHRConfig): Observable<T> {
      return this._http.patch<T>(this._prependBaseUrl(url), data ?? {}, config);
    }
  
    delete<T>(url: string, data?: any, config?: XHRConfig): Observable<T> {
      return this._http.delete<T>(this._prependBaseUrl(url), {
        ...(config ?? {}),
        body: data ?? {},
      });
    }
  
    getBlobString(file: ArrayBuffer): string {
      return window.URL.createObjectURL(
        new Blob([file], {
          type: 'application/octet-stream',
        }),
      );
    }
  
    getBlob(file: ArrayBuffer): Blob {
      return new Blob([file], {
        type: 'application/octet-stream',
      });
    }
  
    download(file: ArrayBuffer, filename: string): void {
      const element = document.createElement('a');
      element.href = this.getBlobString(file);
      element.download = filename;
      element.click();
    }
  
    private _prependBaseUrl(url: string): string {
      const newUrl = url.indexOf('/') === 0 ? url : `/${url}`;
      return this._xhrConfigService.getBaseUrl() + newUrl;
    }
  }
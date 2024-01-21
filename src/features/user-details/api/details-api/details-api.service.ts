import { Injectable } from "@angular/core";

@Injectable()
export class DetailsApiService {
    static readonly API = '/owner';

    constructor(private readonly _xhr: XHR) {}
}
import { Injectable } from "@angular/core";
import {XHR} from "../../../../core/services/xhr/xhr.service";

@Injectable()
export class DetailsApiService {
    static readonly API = '/';

    constructor(private readonly _xhr: XHR) {}
}

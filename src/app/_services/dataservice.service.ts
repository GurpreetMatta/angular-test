import { BadRequestError } from '../apperror/badrequest.error';
import { NotFoundError } from '../apperror/notfound.error';
import { Posts } from '../crudform/posts.model';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
@Injectable({
    providedIn: 'root'
  })
export class DataService {

    url;

    constructor(private authHttp: AuthHttp) { }

    getAll() {
        return this.authHttp.get(this.url).pipe(catchError(this.errorHandler), map(response => response.json()));
      }

    get(id) {
        return this.authHttp.get(this.url + '/post?id=' + id).pipe(catchError(this.errorHandler), map(response => response.json()));
    }

    create(post: Posts) {
        return this.authHttp.post(this.url, post).pipe(catchError(this.errorHandler));
    }

    delete(id: number) {
        return this.authHttp.delete(this.url + '?id=' + id).pipe(catchError(this.errorHandler));
    }

    errorHandler(error: Response) {

        if (error.status === 404) {
            return throwError(new NotFoundError(error));
        }

        if (error.status === 400) {
            return throwError(new BadRequestError(error));
        }

        return throwError('server error.');
    }
}

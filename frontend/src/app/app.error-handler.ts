import { EMPTY, Observable } from "rxjs";
import Swal from "sweetalert2";

export class ErrorHandler {
  static errorHandler(e: any): Observable<any> {
    Swal.fire('Oops...', 'Ocorreu um erro!', 'error');
    console.log(e);
    return EMPTY;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

export interface Image {
  id: number | string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
}

const HAS_PREV_PAGE_INDICATOR: string = 'rel="prev"';
const HAS_NEXT_PAGE_INDICATOR: string = 'rel="next"';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private baseUrl: string = 'https://picsum.photos';
  private pageSize: number = 8;

  public hasPrevPage: boolean = false;
  public hasNextPage: boolean = false;

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || "Server error")
  }

  private checkPaginationInfo(headers: HttpHeaders): void {
    const paginationInfo: string = headers.get('link') || "";

    this.hasPrevPage = paginationInfo.includes(HAS_PREV_PAGE_INDICATOR);
    this.hasNextPage = paginationInfo.includes(HAS_NEXT_PAGE_INDICATOR);
  }

  getImages(page: number): Observable<Image[]> {
    return this.http.get<Image[]>(
      `${this.baseUrl}/v2/list?page=${page}&limit=${this.pageSize}`,
      {observe: 'response'})
      .pipe(
        catchError(this.handleError),
        tap(res => this.checkPaginationInfo(res.headers)),
        map(val => val.body || [])
    )
  }

  getImage(id: number): Observable<Image> {
    return this.http.get<Image>(
      `${this.baseUrl}/id/${id}/info`
    ).pipe(
      catchError(this.handleError)
    );
  }
}

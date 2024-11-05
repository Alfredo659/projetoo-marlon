import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieRating',
  standalone: true
})
export class MovieRatingPipe implements PipeTransform {
  transform(value: number): string {
    return value >= 7 ? 'Recommended' : 'Not Recommended';
  }
}

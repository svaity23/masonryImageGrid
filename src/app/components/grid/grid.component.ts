import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  columnCount = 6;
  columns: any[] = [];
  imageCount = 30;
  images: Image[] = [];
  lastAssetCount = 0;
  lastColumnIndex = 0;

  constructor() { 
    this.loadImages();
  }

  ngOnInit(): void {
    for (let i = this.lastAssetCount; i < this.images.length; i++) {
      if (this.lastColumnIndex === this.columnCount) {
        // lastColumnIndex reach the end;
        this.lastColumnIndex = 0;
      }
      if (this.columns[this.lastColumnIndex] == null) {
        this.columns[this.lastColumnIndex] = [];
      }

      this.columns[this.lastColumnIndex].push(this.images[i]);
      this.lastColumnIndex++
    }
  }

  trackByFn(item: Image): string {
    return item.src;
  }

  private loadImages(): Image[] {
    const images: Image[] = [];
    for(let count=0; count <= this.imageCount; count++) {
      const width = 600;
      const height = (Math.random() * (1000 - 400) + 400).toFixed();
      let image: Image = {
        src: `https://picsum.photos/${width}/${height}/?random`        
      }
      this.images.push(image);
    }
    return images;
  }  
}

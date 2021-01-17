import fs from 'fs';

/* This File is Reusable to any program reading an CSV File */

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string){}

  abstract mapRow(row: string[]): T;


  /* A logic to Open A CSV File and Parce all the data inside it */
  read():void{
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    }).split('\n')
      .map((row:string):string[] => {
      return row.split(',');
    })
    .map(this.mapRow);
  }

}
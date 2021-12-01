import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/

const disp: Record<string,(numb:number) => string > = {
    'EUR-USD' : (numb:number):string => {return '$'+ (numb*1.13).toLocaleString('en') },

    'EUR-EUR' : (numb:number):string => {return numb.toLocaleString('en') +'£'  },
    'USD-USD' : (numb:number):string => {return '$'+ numb.toLocaleString('en')  },
    'XAF-XAF' : (numb:number):string => {return numb.toLocaleString('en')+' FCFA'  },

    'USD-EUR' : (numb:number):string => {return (numb*0.88).toLocaleString('en')+'£'  },
    'USD-XAF' : (numb:number):string => {return  (numb*579.23).toLocaleString('en')+' FCFA' },
    'XAF-USD' : (numb:number):string => {return '£'+ (numb*0.0017).toLocaleString('en') },
    'XAF-EUR' : (numb:number):string => {return (numb*0.0015).toLocaleString('en') +'£'},
    'EUR-XAF' : (numb:number):string => {return (numb*655.68).toLocaleString('en')+' FCFA' },
}

@Pipe({name: 'customCurrency'})
export class customCurrency implements PipeTransform {
  transform(input:number,value1: string,value2: string): string {
    const formatted = [value1,value2].join('-')
    
    let display = disp[formatted](input)
    
    return display
  }
}
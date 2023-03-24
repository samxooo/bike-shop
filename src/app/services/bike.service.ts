import { Injectable } from '@angular/core';
import { Bikes } from '../shared/Bikes';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }

  getBikeById(id: number): Bikes {
    return this.getAll().find(bike => bike.id == id)!;
  }

  getAll(): Bikes[] {
    return [
      {
        id: 1,
        imagePath: 'https://assets.specialized.com/i/specialized/91822-76_ROCKHOPPER-29-TARBLK-WHT_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto',
        location: 'Tbilisi',
        name: 'Rockhoper',
        desc: 'Better performance. Better value. Better Rockhopper. By tapping the fit and handling advantages of pairing each rider with their ideal wheel size and suspension that works its hardest for everyone thanks to our size-specific Rx Tune, we’ve baked in added performance to the all-new Rockhopper without dialing up the price…',
        year: 2019,
        size: 27.5,
        price: 500,
      },
      {
        id: 2,
        imagePath: 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwffb1434c/images/full/full_2022_/2022/full_2022_strive-cfr_3195_bk-sr_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2',
        location: 'Batumi',
        name: 'Strive CFR',
        desc: 'Looking for a bike thats built to win at the very highest echelons of Enduro racing? You just found it. Reach the Next Level with the Strive CFR and its Shapeshifter technology.',
        year: 2022,
        size: 29,
        price: 1200,
      },
      {
        id: 3,
        imagePath: 'https://www.santacruzbicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2F0b38297c-d274-4ae2-b4a5-bc0c301016ef_MY22_V10-29_Hero_Desktop.jpg%3Fauto%3Dcompress%2Cformat&w=2100&q=100',
        location: 'Tbilisi',
        name: 'Santa Cruz V10',
        desc: 'Looking for a bike thats built to win at the very highest echelons of Enduro racing? You just found it. Reach the Next Level with the Strive CFR and its Shapeshifter technology.',
        year: 2020,
        size: 27.5,
        price: 4200,
      },
      {
        id: 4,
        imagePath: 'https://www.santacruzbicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2Fc13d84a8-5c6e-49b0-887f-5ed40496fa2a_MY23_Bronson_Hero_Desktop_Gold.jpg%3Fauto%3Dcompress%2Cformat&w=2100&q=100',
        location: 'Batumi',
        name: 'Santa Cruz Bronson',
        desc: 'Looking for a bike thats built to win at the very highest echelons of Enduro racing? You just found it. Reach the Next Level with the Strive CFR and its Shapeshifter technology.',
        year: 2023,
        size: 27,
        price: 2600,
      },
      {
        id: 5,
        imagePath: 'https://www.norco.com/cmsb/uploads/bikes/bikes/2022_rampage_team_silver_black-main-full.webp',
        location: 'Batumi',
        name: 'Norco Rampage Team',
        desc: 'Looking for a bike thats built to win at the very highest echelons of Enduro racing? You just found it. Reach the Next Level with the Strive CFR and its Shapeshifter technology.',
        year: 2023,
        size: 24,
        price: 2200,
      },
      {
        id: 6,
        imagePath: 'https://radiobikes.com/wp-content/uploads/2020/12/Radio_MY21_Asura_26_metallic_green_01.jpg',
        location: 'Kutaisi',
        name: 'Slopestyle',
        desc: 'Looking for a bike thats built to win at the very highest echelons of Enduro racing? You just found it. Reach the Next Level with the Strive CFR and its Shapeshifter technology.',
        year: 2023,
        size: 20,
        price: 2600,
      }
    ]
  }
}

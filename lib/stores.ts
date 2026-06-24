/* Shared store data — used by home page locator CTA and store-locator page */

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  pincode: string;
  landmark: string;
  rating: number;
  reviews: number;
  directionUrl: string;
}

export const STORES: Store[] = [
  {
    id: 'patna-anishabad',
    name: 'Chemist Box - Anishabad',
    address: 'Main Road, Golambar, Anishabad, Patna, Bihar - 800002',
    city: 'Patna',
    phone: '08037016710',
    pincode: '800002',
    landmark: 'Opposite Aditya Vision Zip',
    rating: 4.9,
    reviews: 7732,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Anishabad+Patna',
  },
  {
    id: 'patna-boring-canal-road',
    name: 'Chemist Box - Boring Canal Road',
    address: 'Pahalwan Market, East Boring Canal Road, Boring Canal Road, Patna, Bihar - 800001',
    city: 'Patna',
    phone: '08037016715',
    pincode: '800001',
    landmark: 'Nearby Apple Showroom',
    rating: 4.9,
    reviews: 6573,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Boring+Canal+Road+Patna',
  },
  {
    id: 'patna-ashok-rajpath',
    name: 'Chemist Box - Ashok Rajpath',
    address: 'Ashok Rajpath Road, Nearby Kulharia Complex, Ashok Rajpath, Patna, Bihar - 800004',
    city: 'Patna',
    phone: '08037016718',
    pincode: '800004',
    landmark: 'Nearby Kulharia Complex',
    rating: 4.8,
    reviews: 9324,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Ashok+Rajpath+Patna',
  },
  {
    id: 'patna-raza-bazaar',
    name: 'Chemist Box - Raza Bazaar',
    address: 'Pillar No 52, Bailey Road, Raza Bazaar, Patna, Bihar - 800014',
    city: 'Patna',
    phone: '08037016720',
    pincode: '800014',
    landmark: 'Opposite Paras Hospital',
    rating: 4.9,
    reviews: 5389,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Raza+Bazaar+Patna',
  },
  {
    id: 'patna-kankarbagh',
    name: 'Chemist Box - Kankarbagh',
    address: 'Ground Floor, Chandra Bindu Niwas, PC Colony, Kankarbagh, Patna, Bihar - 800020',
    city: 'Patna',
    phone: '08037016713',
    pincode: '800020',
    landmark: 'Opposite Medanta Hospital',
    rating: 4.9,
    reviews: 15051,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Kankarbagh+Patna',
  },
  {
    id: 'patna-patliputra',
    name: 'Chemist Box - Patliputra',
    address: 'Plot No 26/B, Ground Floor, Opposite Patliputra Main Field, Near Disha Rehabilitation Centre, Patliputra, Patna, Bihar - 800013',
    city: 'Patna',
    phone: '08037016716',
    pincode: '800013',
    landmark: 'Opposite Patliputra Main Field',
    rating: 4.9,
    reviews: 6932,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Patliputra+Patna',
  },
  {
    id: 'patna-dakbunglow',
    name: 'Chemist Box - Dakbunglow',
    address: 'Gupta Mansion, New Dakbunglow Road, Exhibition Road Chouraha, Dakbunglow, Patna, Bihar - 800001',
    city: 'Patna',
    phone: '08037016711',
    pincode: '800001',
    landmark: 'Opposite Brite Stationers',
    rating: 4.9,
    reviews: 6603,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Dakbunglow+Patna',
  },
  {
    id: 'patna-city-chowk',
    name: 'Chemist Box - Patna City Chowk',
    address: 'Ground Floor, JK Plaza, Opposite Jagmohan Jewellery Shop, Patna City Chowk, Patna, Bihar - 800008',
    city: 'Patna',
    phone: '08037016717',
    pincode: '800008',
    landmark: 'Opposite Jagmohan Jewellery Shop',
    rating: 4.9,
    reviews: 7036,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Patna+City+Chowk',
  },
  {
    id: 'sitamarhi-mehsaul-chowk',
    name: 'Chemist Box - Mehsaul Chowk',
    address: 'Ground Floor, Arsi Tower, Rajopatty-Dumra Road, Mehsaul Chowk, Sitamarhi, Bihar - 843302',
    city: 'Sitamarhi',
    phone: '08037016722',
    pincode: '843302',
    landmark: 'Nearby Havells Galaxy Showroom',
    rating: 5.0,
    reviews: 7480,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Mehsaul+Chowk+Sitamarhi',
  },
  {
    id: 'chapra-dahiyawan-tola',
    name: 'Chemist Box - Dahiyawan Tola',
    address: 'Kuwar Complex, Dahiyawan Tola, Chapra, Bihar - 841301',
    city: 'Chapra',
    phone: '08062915771',
    pincode: '841301',
    landmark: 'Nearby Municipal Chowk',
    rating: 5.0,
    reviews: 484,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Dahiyawan+Tola+Chapra',
  },
  {
    id: 'hajipur-anwarpur-chowk',
    name: 'Chemist Box - Anwarpur Chowk',
    address: 'Aashirvad Bhavan, Dakbungla Road, Anwarpur Chowk, Hajipur, Bihar - 844101',
    city: 'Hajipur',
    phone: '08037016712',
    pincode: '844101',
    landmark: 'Opposite Muskan Marble',
    rating: 4.9,
    reviews: 8449,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Anwarpur+Chowk+Hajipur',
  },
  {
    id: 'muzaffarpur-hari-sabha-chowk',
    name: 'Chemist Box - Hari Sabha Chowk',
    address: 'Club Road, SBI ATM, Hari Sabha Chowk, Muzaffarpur, Bihar - 842001',
    city: 'Muzaffarpur',
    phone: '08037016714',
    pincode: '842001',
    landmark: 'Nearby Devi Mandir',
    rating: 4.9,
    reviews: 7192,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Hari+Sabha+Chowk+Muzaffarpur',
  },
  {
    id: 'nawada-sabzi-market',
    name: 'Chemist Box - Sabzi Market Road',
    address: 'Hanuman Complex, Ward No 12, Town Nagar, Main Road, Sabzi Market Road, Nawada, Bihar - 805110',
    city: 'Nawada',
    phone: '06746172701',
    pincode: '805110',
    landmark: 'Nearby Jockey Showroom',
    rating: 5.0,
    reviews: 2678,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Sabzi+Market+Road+Nawada',
  },
  {
    id: 'arrah-nawada',
    name: 'Chemist Box - Nawada',
    address: 'Karman Tola, Bhagat Singh Murti, Thana-Nawada Road, Nawada, Arrah, Bihar - 802301',
    city: 'Arrah',
    phone: '08062915772',
    pincode: '802301',
    landmark: 'Nearby PUMA Store',
    rating: 5.0,
    reviews: 288,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Nawada+Arrah',
  },
  {
    id: 'motihari-netajee-subhash-colony',
    name: 'Chemist Box - Netajee Subhash Colony',
    address: 'Mahaveer Market, Balua Chowk, Netajee Subhash Colony, Motihari, Bihar - 845401',
    city: 'Motihari',
    phone: '08071655346',
    pincode: '845401',
    landmark: 'Opposite Ugam Pandey College',
    rating: 5.0,
    reviews: 3267,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Netajee+Subhash+Colony+Motihari',
  },
  {
    id: 'samastipur-marwari-bazar',
    name: 'Chemist Box - Marwari Bazar',
    address: 'Ground and First Floor, Santhalia Complex, SH 55, Gola Road, Marwari Bazar, Samastipur, Bihar - 848101',
    city: 'Samastipur',
    phone: '08037016721',
    pincode: '848101',
    landmark: 'Opposite Titan Eye Plus',
    rating: 4.9,
    reviews: 5458,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Marwari+Bazar+Samastipur',
  },
  {
    id: 'darbhanga-bada-bazar',
    name: 'Chemist Box - Bada Bazar',
    address: 'Om Balaji Complex, Lal Bagh, Bada Bazar, Darbhanga, Bihar - 846004',
    city: 'Darbhanga',
    phone: '08037016221',
    pincode: '846004',
    landmark: 'Nearby Tower Chowk',
    rating: 4.9,
    reviews: 2742,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Bada+Bazar+Darbhanga',
  },
  {
    id: 'begusarai-hemra-road',
    name: 'Chemist Box - Hemra Road',
    address: 'Ground Floor, Shubhashni Complex, Ward No 40, Hemra Road, Begusarai, Bihar - 851101',
    city: 'Begusarai',
    phone: '08062904606',
    pincode: '851101',
    landmark: 'Nearby Kali Asthan Chowk',
    rating: 5.0,
    reviews: 131,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Hemra+Road+Begusarai',
  },
  {
    id: 'raxaul-border-area',
    name: 'Chemist Box - Border Area',
    address: 'Plot No 492, Ground Floor, Main Road, Border Area, Raxaul, Bihar - 845305',
    city: 'Raxaul',
    phone: '08037016719',
    pincode: '845305',
    landmark: 'Nearby Raxaul Customs Check Post',
    rating: 5.0,
    reviews: 8688,
    directionUrl: 'https://www.google.com/maps/search/Chemist+Box+Border+Area+Raxaul',
  },
];

/** Returns Google Maps embed URL for a store */
export function getMapEmbedUrl(store: Store): string {
  const q = encodeURIComponent(`${store.name}, ${store.address}`);
  return `https://maps.google.com/maps?q=${q}&output=embed&z=16`;
}

/** Filter stores by a keyword (pincode, locality, city, name, landmark) */
export function filterStores(query: string): Store[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.pincode.includes(q) ||
      s.city.toLowerCase().includes(q) ||
      s.landmark.toLowerCase().includes(q)
  );
}

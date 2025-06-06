import armin from './images/artiesten/armin.png'
import martin from './images/artiesten/martin.png'
import kensington from './images/artiesten/kensington.png'

import ponton from './images/stages/ponton.png'
import lake from './images/stages/lake.png'
import club from './images/stages/club.png'
import hangar from './images/stages/hangar.png'

export const artiesten = [
    {
        name: 'Armin van Buren',
        img: armin
    },
    {
        name: 'Martin Garrix',
        img: martin
    },
    {
        name: 'Kensington',
        img: kensington
    }
]

export const stages = [
    {
        name: 'Ponton',
        img: ponton
    },
    {
        name: 'The lake',
        img: lake
    },
    {
        name: 'The club',
        img: club
    },
    {
        name: 'Hangar',
        img: hangar
    },
]

export const lineup = {
  zaterdag: [
    {
      artist: "Armin van Buuren",
      stage: "Poton",
      start: "10:15",
      end: "12:00",
      description: "Five-time “World’s No. 1 DJ” and trance icon, Armin delivers euphoric, high-energy sets.",
      image: "/image1.png",
      video: "https://www.youtube.com/watch?v=TxvpctgU_s8"
    },
    {
      artist: "Kensington",
      stage: "Poton",
      start: "12:30",
      end: "14:00",
      description: "Indie rock quintet with soaring choruses and driving guitar riffs.",
      image: "/image2.png",
      video: "https://www.youtube.com/watch?v=IH77eOyV95o"
    },
    {
      artist: "De Staat",
      stage: "Poton",
      start: "14:30",
      end: "16:00",
      description: "Experimental rock outfit blending funky grooves with angular guitar work.",
      image: "/image3.png",
      video: "https://www.youtube.com/watch?v=0ttGgIQpAUc"
    },
    {
      artist: "Navarone",
      stage: "Poton",
      start: "16:30",
      end: "18:00",
      description: "Hard-hitting rock four-piece from Utrecht with raw intensity.",
      image: "/image4.png",
      video: "https://www.youtube.com/watch?v=EvLpaCSnc4k"
    },
    {
      artist: "Dotan",
      stage: "Poton",
      start: "18:30",
      end: "20:00",
      description: "Folk-pop singer-songwriter with heartfelt storytelling.",
      image: "/image5.png",
      video: "https://www.youtube.com/watch?v=FZEuqzW16Nw"
    },
    {
      artist: "Froukje",
      stage: "Poton",
      start: "20:30",
      end: "22:00",
      description: "Breakthrough pop singer combining candid lyrics with catchy synth hooks.",
      image: "/image6.png",
      video: "https://www.youtube.com/watch?v=g4PlReX9e-E"
    },

    { artist: "Talent set 1", stage: "Lake", start: "10:00", end: "10:45" },
    { artist: "Talent set 2", stage: "Lake", start: "11:30", end: "12:45" },
    { artist: "Talent set 3", stage: "Lake", start: "13:30", end: "14:45" },
    { artist: "Talent set 4", stage: "Lake", start: "15:30", end: "17:00" },
    { artist: "Talent set 5", stage: "Lake", start: "17:30", end: "18:30" },
    { artist: "Talent set 6", stage: "Lake", start: "19:15", end: "20:45" },
    { artist: "Talent set 7", stage: "Lake", start: "21:30", end: "23:45" },

    { artist: "DJ set 1", stage: "Hangar", start: "10:00", end: "11:00" },
    { artist: "DJ set 2", stage: "Hangar", start: "11:05", end: "12:30" },
    { artist: "DJ set 3", stage: "Hangar", start: "12:30", end: "14:00" },
    { artist: "DJ set 4", stage: "Hangar", start: "14:00", end: "15:30" },
    { artist: "DJ set 5", stage: "Hangar", start: "15:30", end: "17:30" },
    { artist: "DJ set 6", stage: "Hangar", start: "17:30", end: "19:30" },
    { artist: "DJ set 7", stage: "Hangar", start: "19:30", end: "21:30" },
    { artist: "DJ set 8", stage: "Hangar", start: "21:30", end: "23:45" },

    { artist: "Comedy", stage: "Club", start: "12:00", end: "13:00" },
    { artist: "Lecture", stage: "Club", start: "14:00", end: "15:00" },
    { artist: "Theater", stage: "Club", start: "16:00", end: "17:00" },
    { artist: "Movie", stage: "Club", start: "18:00", end: "19:00" },
    { artist: "Performance", stage: "Club", start: "20:00", end: "21:00" },
    { artist: "Illusionist", stage: "Club", start: "22:00", end: "23:45" }
  ],

  zondag: [
    { artist: "Martin Garrix", stage: "Poton", start: "10:15", end: "12:00" },
    { artist: "Within Temptation", stage: "Poton", start: "12:30", end: "14:00" },
    { artist: "Chef'Special", stage: "Poton", start: "14:30", end: "16:00" },
    { artist: "Eefje de Visser", stage: "Poton", start: "16:30", end: "18:00" },
    { artist: "Spinvis", stage: "Poton", start: "20:30", end: "22:00" },

    { artist: "Martin Garrix", stage: "Lake", start: "10:15", end: "12:00" },
    { artist: "Within Temptation", stage: "Lake", start: "12:30", end: "14:00" },
    { artist: "Chef'Special", stage: "Lake", start: "14:30", end: "16:00" },
    { artist: "Eefje de Visser", stage: "Lake", start: "16:30", end: "18:00" },
    { artist: "Spinvis", stage: "Lake", start: "20:30", end: "22:00" },

    { artist: "Martin Garrix", stage: "Hangar", start: "10:15", end: "12:00" },
    { artist: "Within Temptation", stage: "Hangar", start: "12:30", end: "14:00" },
    { artist: "Chef'Special", stage: "Hangar", start: "14:30", end: "16:00" },
    { artist: "Eefje de Visser", stage: "Hangar", start: "16:30", end: "18:00" },
    { artist: "Spinvis", stage: "Hangar", start: "20:30", end: "22:00" },

    { artist: "Martin Garrix", stage: "Club", start: "10:15", end: "12:00" },
    { artist: "Within Temptation", stage: "Club", start: "12:30", end: "14:00" },
    { artist: "Chef'Special", stage: "Club", start: "14:30", end: "16:00" },
    { artist: "Eefje de Visser", stage: "Club", start: "16:30", end: "18:00" },
    { artist: "Spinvis", stage: "Club", start: "20:30", end: "22:00" },
  ]
};

export type Act = typeof lineup.zaterdag[0]

export function timeToMinutes(time: string) {
  const now = new Date().getFullYear()
  const date = new Date(`${now} ${time}`)

  return date.getHours()*60 + date.getMinutes()
}

export const infoNl = {
  general: {
    title: "Algemeen & contact",
    description:
      "Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en is een aanvulling op UIT.",
    address: {
      location: "Strijkviertel, Utrecht",
      navigation: "Strijkviertelweg, Utrecht",
    },
    dateTime: "Zaterdag 6 september 2025 – 12:00 tot 23:00 uur",
  },
  transport: {
    title: "Bereikbaarheid",
    modes: [
      {
        mode: "Fiets",
        details:
          "Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.",
      },
      {
        mode: "Auto",
        details:
          "Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp, volg hiervoor de borden 'P online ticket'. Heb je geen ticket van te voren gekocht? Dan kun je bij de parkeerwachter op locatie een parkeerticket aanschaffen (PIN ONLY). Let wel op: VOL=VOL",
      },
      {
        mode: "OV",
        details:
          "Kom je met het openbaar vervoer naar Lief? Plan dan je trip via \u00A0",
        link: {
          href: "https://9292.nl/",
          label: "9292.nl",
        },
      },
      {
        mode: "Shuttlebus",
        details:
          "Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting het festivalterrein pakken. Je vindt deze bus op het centraal station aan de Mineurslaan. Volg de witte bordjes met zwarte pijlen én ' ❤️U Festival'. De bus rijdt tussen 12:00 uur & 19:00 uur richting het festival en vanaf 21:00 uur kun je weer instappen om richting het station te gaan.",
      },
      {
        mode: "Taxi + Kiss & Ride",
        details:
          "Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden \"Kiss & Ride ❤️U Festival\", zodra je in de buurt bent van het festivalterrein.",
      },
    ],
  },
  lockers: {
    title: "Lockers",
    text: "Op het festivalterrein zijn kluisjes aanwezig waar je je spullen veilig kunt opbergen! Hier passen 3 à 4 jassen in. Goed om te weten: je kunt je kluisje gedurende de hele dag openen en sluiten zo vaak je wilt. Het is niet mogelijk om online een kluisje te reserveren.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Ik gebruik medicatie. Wat nu?",
        a: "Het is toegestaan om medicijnen mee te nemen in een dosis die je maximaal nodig hebt op 1 dag. Een doktersverklaring/medicatiepaspoort is noodzakelijk. De beveiliging zal jouw documentatie beoordelen en de medicijnen controleren. Het kan zijn dat de EHBO jouw medicijnen (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in bewaring neemt en je deze enkel kan innemen bij de EHBO.",
      },
      {
        q: "Mag ik het festivalterrein tussentijds verlaten?",
        a: "Nee, helaas is dat niet mogelijk. Om de veiligheid van alle bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat het festivalterrein tussentijds verlaten wordt. Wij hebben namelijk geen zicht op hetgeen wat een bezoeker buiten het festivalterrein doet en in welke staat deze het terrein weer betreedt. Hier kunnen dan ook geen uitzonderingen voor gemaakt worden. Wij hebben genoeg loungeplekken, foodstands & barren om het een hele dag uit te kunnen houden.",
      },
      {
        q: "Zijn er lockers?",
        a: "Yes, deze zijn er! Op het terrein kun je medium & grote lockers huren.",
      },
    ],
  },
  golden: {
    title: "Golden-GLU",
    text: "Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een gouden armbandje. Met dit gouden armbandje kunnen ze tijdens het festival gebruik maken van de gouden toiletten en met goud gemarkeerde bestelpunten aan de bars zonder in een rij te hoeven staan.",
  },
} as const;

export type InfoContent = typeof infoNl;
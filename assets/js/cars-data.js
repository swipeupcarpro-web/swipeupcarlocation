/* =========================================================
   SWIPEUPCAR — Données véhicules (LLD 2026)
   Pour ajouter un véhicule : ajouter un objet dans le tableau CARS.
   ========================================================= */

const CARS = [
  { id:"audi-q3",        brand:"Audi",       model:"Q3",         price:1159, color:"Noir", year:2026 },
  { id:"audi-a5",        brand:"Audi",       model:"A5",         price:1169, color:"Noir", year:2026 },
  { id:"audi-q2",        brand:"Audi",       model:"Q2",         price:839,  color:"Noir", year:2026 },
  { id:"audi-a1",        brand:"Audi",       model:"A1",         price:699,  color:"Noir", year:2026 },
  { id:"vw-t-roc",       brand:"Volkswagen", model:"T-Roc",      price:799,  color:"Blanc", year:2026 },
  { id:"vw-t-cross",     brand:"Volkswagen", model:"T-Cross",    price:659,  color:"Noir", year:2026 },
  { id:"vw-golf-8",      brand:"Volkswagen", model:"Golf 8",     price:749,  color:"Noir", year:2026 },
  { id:"vw-polo",        brand:"Volkswagen", model:"Polo",       price:639,  color:"Noir", year:2026 },
  { id:"bmw-x2",         brand:"BMW",        model:"X2",         price:1169, color:"Noir", year:2026 },
  { id:"bmw-serie-1",    brand:"BMW",        model:"Série 1",    price:829,  color:"Noir", year:2026 },
  { id:"mercedes-classe-a", brand:"Mercedes-Benz", model:"Classe A", price:839, color:"Noir", year:2026 }
];

if (typeof module !== "undefined") { module.exports = CARS; }

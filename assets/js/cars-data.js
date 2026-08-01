/* =========================================================
   SWIPEUPCAR — Données véhicules (LLD 2026)
   Pour ajouter un véhicule : ajouter un objet dans le tableau CARS.
   ========================================================= */

const CARS = [
  { id:"audi-q3",        brand:"Audi",       model:"Q3",         price:1159, color:"Noir", year:2026 }, image:"audi-q3.png"
  { id:"audi-a5",        brand:"Audi",       model:"A5",         price:1169, color:"Noir", year:2026 }, image:"audi-a5.png"
  { id:"audi-q2",        brand:"Audi",       model:"Q2",         price:839,  color:"Noir", year:2026 }, image:"audi-q2.png"
  { id:"audi-a1",        brand:"Audi",       model:"A1",         price:699,  color:"Noir", year:2026 }, image:"audi-a1.png"
  { id:"vw-t-roc",       brand:"Volkswagen", model:"T-Roc",      price:799,  color:"Blanc", year:2026 }, image:"volkswagen-t-roc.png"
  { id:"vw-t-cross",     brand:"Volkswagen", model:"T-Cross",    price:659,  color:"Noir", year:2026 }, image:"volkswagen-t-cross.png"
  { id:"vw-golf-8",      brand:"Volkswagen", model:"Golf 8",     price:749,  color:"Noir", year:2026 }, image:"volkswagen-golf-8.png"
  { id:"vw-polo",        brand:"Volkswagen", model:"Polo",       price:639,  color:"Noir", year:2026 }, image:"volkswagen-polo.png"
  { id:"bmw-x2",         brand:"BMW",        model:"X2",         price:1169, color:"Noir", year:2026 }, image:"bmw-x2.png"
  { id:"bmw-serie-1",    brand:"BMW",        model:"Série 1",    price:829,  color:"Noir", year:2026 }, image:"bmw-serie-1.png"
  { id:"mercedes-classe-a", brand:"Mercedes-Benz", model:"Classe A", price:839, color:"Noir", year:2026 } image:"mercedes-classe-a.png"
];

if (typeof module !== "undefined") { module.exports = CARS; }

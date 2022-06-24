//pseudo-code

//1a:Gebruik een array-methode om een array te maken met alletv-type namen. Log de uitkomst in de console.
//1. Gebruik de map-method om alle namen te weergeven.
//2. log de uitkomst in de console.

const tvType = inventory.map((tv) =>{
    return tv.type;
})
console.log(tvType);

//1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
//1. Gebruik de filter-method om alle tv`s die uitverkocht zijn weer te geven in de console.
//2. log de uitkomst in de console.

const tvSold = inventory.filter((sold)=>{
    return sold.originalStock === sold.sold;
})
console.log(tvSold);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const ambilight = inventory.filter((amb)=> {
    return amb.options.ambiLight === true;
})
console.log(ambilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
const price = inventory.sort((a, b)=>{
    return a.price - b.price
})
console.log(price)

//--------------zo kan ook ----------------
// function sortTvs(tvs) {
//     // return statement is niet nodig omdat sort wordt toegepast op originele array
//     tvs.sort((a, b) => a.price - b.price);
// }
// console.log(inventory);
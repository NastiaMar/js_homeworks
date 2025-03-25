var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function price() {
    return Object.values(services)
        .map(value => parseInt(value)) 
        .reduce((sum, current) => sum + current, 0) + " грн";
}

function minPrice() {
    return Math.min(...Object.values(services).map(value => parseInt(value))) + " грн";
}

function maxPrice() {
    return Math.max(...Object.values(services).map(value => parseInt(value))) + " грн";
}

console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());

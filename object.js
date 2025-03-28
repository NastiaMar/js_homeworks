var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    price() {
        return Object.values(this)
            .filter(value => typeof value === "string" && value.includes("грн"))
            .map(value => parseInt(value))
            .reduce((sum, current) => sum + current, 0) + " грн";
    },

    minPrice() {
        return Math.min(...Object.values(this)
            .filter(value => typeof value === "string" && value.includes("грн"))
            .map(value => parseInt(value))) + " грн";
    },

    maxPrice() {
        return Math.max(...Object.values(this)
            .filter(value => typeof value === "string" && value.includes("грн"))
            .map(value => parseInt(value))) + " грн";
    }
};

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());

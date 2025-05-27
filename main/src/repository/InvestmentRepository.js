import { Investment } from "../model/Investiment.js";

async function createInvestment(nameInvestment, typeInvestment, valueInvestment, dateInvestment) {
    try {
        const investment = await Investment.create({
            nameInvestment,
            typeInvestment,
            valueInvestment,
            dateInvestment
        });
        return investment;
    } catch (error) {
        console.error("Error creating investment:", error);
        throw error;
    }
}

console.log(createInvestment('abc123', 'abc123', 1000, '2023-10-01'));
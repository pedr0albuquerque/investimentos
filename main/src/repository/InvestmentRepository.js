import { Investment } from "../model/Investiment.js";

async function createInvestment(nameInvestment, typeInvestment, valueInvestment, dateInvestment) {
    const investment = await Investment.create({
        nameInvestment,
        typeInvestment,
        valueInvestment,
        dateInvestment
    });
    return investment;
}

async function getAllInvestments() {
    try {
        const investments = await Investment.findAll();
        return investments;
    } catch (error) {
        console.error("Não foi possível listar os investimentos", error);
        throw error;
    }
}

async function updateInvestment(id, nameInvestment, typeInvestment, valueInvestment, dateInvestment) {
    try {
        const investment = await Investment.findByPk(id);
        if (!investment) {
            throw new Error("Investment not found");
        }
        investment.nameInvestment = nameInvestment;
        investment.typeInvestment = typeInvestment;
        investment.valueInvestment = valueInvestment;
        investment.dateInvestment = dateInvestment;
        await investment.save();
        return investment;
    } catch (error) {
        console.error("Não foi possível atualizar o investimentos", error);
        throw error;
    }
}

async function deleteInvestment(id){
    try {
        const investment = await Investment.findByPk(id);
        if (!investment) {
            throw new Error("Investment not found");
        }
        await investment.destroy();
        return { message: "Investimento deletado com sucesso" };
    } catch (error) {
        console.error("Não foi possível deletar o investimentos", error);
        throw error;
    }
}

export {
    createInvestment,
    getAllInvestments,
    updateInvestment,
    deleteInvestment
};
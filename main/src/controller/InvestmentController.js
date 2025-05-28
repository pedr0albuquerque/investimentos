import express from "express";
import { createInvestment, getAllInvestments, updateInvestment, deleteInvestment } from "../repository/InvestmentRepository.js";

const app = express()
app.use(express.json());

app.get("/", (req, res) => {    

})

app.get("/investments", (req, res) => {
    try {
        getAllInvestments();
        res.send("Investimentos listados com sucesso");
    } catch (error) {
        console.error("Error fetching investments:", error);
        res.status(500).json({ error: "Failed to fetch investments" });
    }
});

app.post("/", (req,res) =>{
    try{
        const { nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
        createInvestment(nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.send("Investimento criado com sucesso");
    } catch (error) {
        console.error("Error creating investment:", error);
        res.status(500).json({ error: "Failed to create investment" });
    }
    
    
});

app.put("/investimentos/atualizar/:id", (req, res) => {
    const {nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
    const id = req.params.id;
    try{
        updateInvestment(id, nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.send("Investimento atualizado com sucesso");
    }catch (error) {
        console.error("Error updating investment:", error);
        res.status(500).json({ error: "Failed to update investment" });
    }
});

app.delete("/investimentos/deletar/:id", (req, res) => {
    const id = req.params.id;
    try{
        deleteInvestment(id);
        res.send("Investimento deletado com sucesso");
    }catch (error) {
        console.error("Error deleting investment:", error);
        res.status(500).json({ error: "Failed to delete investment" });
    }
});

app.listen(3000, () => {
  console.log("InvestmentController is running on port 3000");
});
import express from "express";
import cors from "cors";
import { createInvestment, getAllInvestments, updateInvestment, deleteInvestment } from "../repository/InvestmentRepository.js";

const app = express()
app.use(express.json());
app.use(cors());

app.get("/investimentos", async (req, res) => {
        const investments =  await getAllInvestments();
        res.json(investments);
});

app.post("/", (req,res) =>{
    try{
        const { nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
        createInvestment(nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.status(201).send("Investimento criado com sucesso");
    } catch (error) {
        res.status(500).json({ error: "Falha ao criar investimento" });
    }
});

app.put("/investimentos/atualizar/:id", (req, res) => {
    const {nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
    const id = req.params.id;
    try{
        updateInvestment(id, nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.send("Investimento atualizado com sucesso");
    }catch (error) {
        res.status(500).json({ error: "Falha ao atualizar investimento" });
    }
});

app.delete("/investimentos/deletar/:id", (req, res) => {
    const id = req.params.id;
    try{
        deleteInvestment(id);
        res.send("Investimento deletado com sucesso");
    }catch (error) {
        res.status(500).json({ error: "Falha ao deletar investimento" });
    }
});

app.listen(3000, () => {
  console.log("is running on port 3000");
});
import express from "express";

import cors from "cors";
import { createInvestment, getAllInvestments, updateInvestment, deleteInvestment } from "../repository/InvestmentRepository.js";

const app = express()
app.use(express.json());
app.use(cors());

app.get("/investimentos", async (req, res) => {
        const investments =  await getAllInvestments();
        res.status(200).json({message: "Investimentos listados",listInvestments: investments});
});

app.post("/investimentos", (req,res) =>{
    try{
        const { nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
        createInvestment(nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.status(201).json({ message: "Investimento criado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Falha ao criar investimento" });
    }
});

app.put("/investimentos/:id", (req, res) => {
    const {nameInvestment, typeInvestment, valueInvestment, dateInvestment } = req.body;
    const id = req.params.id;
    try{
        updateInvestment(id, nameInvestment, typeInvestment, valueInvestment, dateInvestment);
        res.status(200).json({ message: "Investimento atualizado com sucesso" });
    }catch (error) {
        res.status(500).json({ message: "Falha ao atualizar investimento" });
    }
});

app.delete("/investimentos/:id", (req, res) => {
    const id = req.params.id;
    try{
        deleteInvestment(id);
        res.status(200).json({ message: "Investimento deletado com sucesso" });
    }catch (error) {
        res.status(500).json({ message: "Falha ao deletar investimento" });
    }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
import React from "react";
import './styles.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Chip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { useState } from "react";




const TableProdutos = () => {

    const [produtos,setProdutos] = useState([
        { id: 1, nome: "carrinho", preco: "R$ 50,00", estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
        { id: 2, nome: "Vassoura", preco: "R$ 2,00", estoque: 122, nivelEstoque: "Medio", dataCriacao: "25/02/2025" },
        { id: 3, nome: "Caneta", preco: "R$ 12,00", estoque: 345, nivelEstoque: "Alto", dataCriacao: "12/11/2024" },
        { id: 4, nome: "Balinha", preco: "R$ 1,00", estoque: 10, nivelEstoque: "Baixo", dataCriacao: "12/11/2024" },
    ]);

    function showRemoveConfirme() {

    }

    const HandleRemove = (id) => {
        const removeProduto = produtos.filter((produto) => produto.id !== id)
        
        setProdutos(removeProduto)
    }
  return (
    <div className="container-table">
        
        <TableContainer className="table-container rounded-lg" component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell><span className="title-table font-bold">Nome</span></TableCell>
                <TableCell><span className="title-table font-bold">Preço</span></TableCell>
                <TableCell><span className="title-table font-bold">Estoque</span></TableCell>
                <TableCell><span className="title-table font-bold">Data de Criação</span></TableCell>
                <TableCell align="right"><span className="title-table">Ações</span></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {produtos.map((produto, index) => (
                <TableRow key={index}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.preco}</TableCell>

                <TableCell>
                    {produto.estoque} 
                    <span
                        className={`span-nivel-estoque px-2 py-1 rounded-full text-xs font-medium 
                            ${produto.nivelEstoque === "Alto" ? "bg-green-100 text-green-800" : ""}
                            ${produto.nivelEstoque === "Medio" ? "bg-orange-100 text-orange-800" : ""}
                            ${produto.nivelEstoque === "Baixo" ? "bg-red-100 text-red-800" : ""}
                            ${produto.nivelEstoque !== "Alto" && produto.nivelEstoque !== "Médio" ? "bg-gray-500" : ""}
                        `}
                        >
                        {produto.nivelEstoque}
                    </span>

                </TableCell>
                <TableCell>{produto.dataCriacao}</TableCell>

                <TableCell align="right">
                    <IconButton color="inherit">
                    <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => HandleRemove(produto.id)}>
                    <Delete />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <div className="modal-overlay"></div>
        <div className="flex items-center justify-center flex-col">
            <div className="remove-confirme">
                <h1 className="">Excluir Produto</h1>

                <span className="text-sm">Tem certeza que deseja excluir este produto? Esta ação não pode ser desfeita.</span>
                <div className="flex justify-end gap-2">
                    <button className="bg-white text-zinc-600 text-sm">Cancelar</button>
                    <button className="bg-red-500 text-white text-sm">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TableProdutos;

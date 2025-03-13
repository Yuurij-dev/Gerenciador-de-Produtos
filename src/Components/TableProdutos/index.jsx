import React, { useState } from "react";
import "./styles.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TableProdutos = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Carrinho", preco: "R$ 50,00", estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
    { id: 2, nome: "Vassoura", preco: "R$ 2,00", estoque: 122, nivelEstoque: "Medio", dataCriacao: "25/02/2025" },
    { id: 3, nome: "Caneta", preco: "R$ 12,00", estoque: 345, nivelEstoque: "Alto", dataCriacao: "12/11/2024" },
    { id: 4, nome: "Balinha", preco: "R$ 1,00", estoque: 10, nivelEstoque: "Baixo", dataCriacao: "12/11/2024" },
  ]);

  // Estado para controlar a exibição do modal
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função para exibir o modal
  const showRemoveConfirme = (produto) => {
    setProdutoSelecionado(produto);
  };

  // Função para fechar o modal
  const closeRemoveConfirme = () => {
    setProdutoSelecionado(null);
  };

  // Função para remover produto
  const handleRemove = () => {
    if (produtoSelecionado) {
      setProdutos(produtos.filter((produto) => produto.id !== produtoSelecionado.id));
      closeRemoveConfirme();
    }
  };

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
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.preco}</TableCell>
                <TableCell>
                  {produto.estoque}
                  <span
                    className={`span-nivel-estoque px-2 py-1 rounded-full text-xs font-medium 
                      ${produto.nivelEstoque === "Alto" ? "bg-green-100 text-green-800" : ""}
                      ${produto.nivelEstoque === "Medio" ? "bg-orange-100 text-orange-800" : ""}
                      ${produto.nivelEstoque === "Baixo" ? "bg-red-100 text-red-800" : ""}
                      ${produto.nivelEstoque !== "Alto" && produto.nivelEstoque !== "Medio" ? "bg-gray-500" : ""}
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
                  <IconButton color="error" onClick={() => showRemoveConfirme(produto)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal de confirmação de remoção */}
      {produtoSelecionado && (
        <div className="modal-overlay">
          <div className="remove-confirme">
            <h1>Excluir Produto</h1>
            <span className="text-sm">
              Tem certeza que deseja excluir <strong>{produtoSelecionado.nome}</strong>? 
              Esta ação não pode ser desfeita.
            </span>
            <div className="flex justify-end gap-2 mt-4">
              <button className="bg-white text-zinc-600 text-sm px-4 py-2 rounded" onClick={closeRemoveConfirme}>Cancelar</button>
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded" onClick={handleRemove}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableProdutos;

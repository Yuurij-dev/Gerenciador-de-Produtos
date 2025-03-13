import React, { useState, useEffect } from "react";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { v4 as uuidv4 } from "uuid";

import { Edit, Delete } from "@mui/icons-material";


const TableProdutos = () => {

  // Estado que controla a exebição do modal
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Carrinho", preco: "R$ 50,00", estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
    { id: 2, nome: "Vassoura", preco: "R$ 2,00", estoque: 122, nivelEstoque: "Medio", dataCriacao: "25/02/2025" },
    { id: 3, nome: "Caneta", preco: "R$ 12,00", estoque: 345, nivelEstoque: "Medio", dataCriacao: "12/11/2024" },
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

  // Estado para controlar a exibição do modal add produto
  const [modalAddProduto, setModalAddProduto] = useState(null)

  //Função para exibir modal add produto
  const showAddProduct = (produto) => {
      setModalAddProduto(produto)
  }

  // Função para fechar o modal add produto
  const closeAddProduct = () => {
    setModalAddProduto(null)
  }

  // Função para pegar o valores dos inputs de adiconar produto
  const [nameProductUse, setNameProduct] = useState('')
  const [priceProductUse, setPriceProduct] = useState('')
  const [estoqueProductUse, setEstoqueProduct] = useState('')

  const handleNameProduct = (e) => {
    let nameProduct = e.target.value 
    setNameProduct(nameProduct)
  }

  const handlePriceProduct = (e) => {
    let priceProduct = e.target.value 
    setPriceProduct(priceProduct)
  }

  const handleEstoqueProduct = (e) => {
    let estoqueProduct = e.target.value 
    setEstoqueProduct(estoqueProduct)
  }

  // Função para criar Produto
  const addProduct = () => {
    const newProduto = {
      id: uuidv4(),
      nome: nameProductUse,
      preco: priceProductUse,
      estoque: estoqueProductUse,
      nivelEstoque: estoqueProductUse >= 500 ? "Alto" : estoqueProductUse > 200 ? "Medio" : "Baixo",
      dataCriacao: new Date().toLocaleDateString()
    }

    setProdutos((prevProduto) =>  [...prevProduto, newProduto])
    closeAddProduct()
  }
  return (
    <div className="container-table">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl text-neutral-800  font-bold">Produtos</h1>
        <button onClick={showAddProduct} className="button-produtos-header bg-neutral-800 rounded text-white text-sm flex items-center gap-3.5 cursor-pointer hover:opacity-70"><FontAwesomeIcon icon={faPlus} className="text-sm" /> Novo Produto</button>
      </header>
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

      {modalAddProduto && (
        <div className="modal-overlay">
          <div className="add-product-box">
            <h1>Adicionar Produto</h1>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Nome</span>
                <input onChange={handleNameProduct} type="text" placeholder="Meu Produto" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Preço</span>
                <input onChange={handlePriceProduct} type="number" placeholder="R$ 0,00" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Estoque</span>
                <input onChange={handleEstoqueProduct} type="number" placeholder="0" />
              </div>
            </div>
            
            <div className="buttons-add-product-box flex justify-end gap-2 mt-4">
              <button className="bg-white border  text-zinc-600 text-sm px-4 py-2 rounded" onClick={closeAddProduct}>Cancelar</button>
              <button className="bg-zinc-800 text-white text-sm px-4 py-2 rounded" onClick={addProduct}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableProdutos;

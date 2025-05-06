import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Card,
  CardContent,
  Typography,
  Chip,
  useMediaQuery,
  useTheme
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { v4 as uuidv4 } from "uuid";

import { Edit, Delete, AlternateEmail } from "@mui/icons-material";


// Coisas a adcionar :

  /* Features: 
    .Validação dos produtos
    .Confirmar com enter
    .media querys
    .adicionar um pop up
  */

const TableProdutos = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Estado que controla a exebição do modal
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Carrinho", preco: 'R$ '+12, estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
    { id: 2, nome: "Estojo", preco: 'R$ '+12, estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
    { id: 3, nome: "Peixe", preco: 'R$ '+12, estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
    { id: 4, nome: "Lapis", preco: 'R$ '+12, estoque: 500, nivelEstoque: "Alto", dataCriacao: "27/02/2025" },
  ]);

  
  // Estado para controlar a exibição do modal
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função para exibir o modal de remove
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
    setNameProduct('')
    setEstoqueProduct('')
    setPriceProduct('')
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

  const addProduct = (e) => {
    e.preventDefault();

    const newProduto = {
      id: uuidv4(),
      nome: nameProductUse.charAt(0).toUpperCase() + nameProductUse.slice(1).toLocaleLowerCase(),
      preco: 'R$ ' + priceProductUse,
      estoque: estoqueProductUse,
      nivelEstoque: estoqueProductUse >= 500 ? "Alto" : estoqueProductUse > 100 ? "Medio" : "Baixo",
      dataCriacao: new Date().toLocaleDateString()
    }

    const erroAddProcutCampos = document.getElementById('erro-create-product-campos')
    const erroAddProcutExiste = document.getElementById('erro-create-product-existe')

    const checkUserExist = produtos.find(produto => produto.nome === newProduto.nome)

    if(checkUserExist){
      console.log(newProduto.nome)
      erroAddProcutExiste.style.display = 'block'
      erroAddProcutCampos.style.display = 'none'
      
    }else if(newProduto.nome !== '' && newProduto.preco !== '' && newProduto.estoque !=='') {
        setProdutos((prevProduto) =>  [...prevProduto, newProduto])
        
        return closeAddProduct()
  
      }else{
        erroAddProcutCampos.style.display = 'block'
        erroAddProcutExiste.style.display = 'none'

      }
    

  }

  // Editar produtos

  // Função para pegar o valores dos inputs de adiconar produto
  const [nameProductEdit, setNameProductEdit] = useState('')
  const [priceProductEdit, setPriceProductEdit] = useState('')
  const [estoqueProductEdit, setEstoqueProductEdit] = useState('')

  const handleNameProductEdit = (e) => {
    let nameProduct = e.target.value
    setNameProductEdit(nameProduct)
  }

  const handlePriceProductEdit = (e) => {
    let priceProduct = e.target.value 
    setPriceProductEdit(priceProduct)
  }

  const handleEstoqueProductEdit = (e) => {
    let estoqueProduct = e.target.value 
    setEstoqueProductEdit(estoqueProduct)
  }

  const [editProdutoSelecionado, setEditProdutoSelecionado] = useState(null)

  // Função para exibir o modal de edit
  const showEditModal = (produto) => {
      setEditProdutoSelecionado(produto);
  };

  const closeEditModal = (e) => {
    setEditProdutoSelecionado(null)
  }

  // Função para editar produtos
  const editProduct = (e) => {
    e.preventDefault();
  
    if (!editProdutoSelecionado) {
      console.error("Nenhum produto selecionado para edição.");
      return;
    }
  
    const newProduto = {
      id: editProdutoSelecionado.id,
      nome: nameProductEdit.charAt(0).toUpperCase() + nameProductEdit.slice(1).toLocaleLowerCase(),
      preco: 'R$ ' + priceProductEdit,
      estoque: estoqueProductEdit,
      nivelEstoque: estoqueProductEdit >= 500 ? "Alto" : estoqueProductEdit > 100 ? "Medio" : "Baixo",
      dataCriacao: editProdutoSelecionado.dataCriacao
    };
  
    const erroAddProcutCamposEdit = document.getElementById('erro-create-product-campos-edit');
    const erroAddProcutExisteEdit = document.getElementById('erro-create-product-existe-edit');
  
    // Verifica se o nome já existe em outro produto
    const checkUserExist = produtos.find(produto => produto.nome === newProduto.nome && produto.id !== editProdutoSelecionado.id);
  
    if (newProduto.nome === '' || newProduto.preco === '' || newProduto.estoque === '') {
      erroAddProcutCamposEdit.style.display = 'block';
      erroAddProcutExisteEdit.style.display = 'none';
    } else if (checkUserExist) {
      erroAddProcutCamposEdit.style.display = 'none';
      erroAddProcutExisteEdit.style.display = 'block';
    } else {
      setProdutos(produtos.map(produto => 
        produto.id === editProdutoSelecionado.id ? { ...produto, ...newProduto } : produto
      ));
      closeEditModal();
    }
  };
  

  return (
    
    <div className="container-table">

      
      <header className="flex items-center justify-between">
        <h1 className="text-3xl text-neutral-800  font-bold">Produtos</h1>
        <button onClick={showAddProduct} className="button-produtos-header rounded text-white text-sm flex items-center gap-3.5 cursor-pointer"><FontAwesomeIcon icon={faPlus} className="text-sm" /> Novo Produto</button>
      </header>

      
      <TableContainer className="table-container rounded-lg" component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
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
                    <Edit onClick={() => showEditModal(produto)}/>
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

      {/* Mobile tabela */}
      
      <Box className="table-container-mobile" flexDirection="column" gap={2}>
      {produtos.map((produto) => (
        <Paper
          key={produto.id}
          elevation={1}
          className="rounded-lg"
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Informações do Produto */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography className="font-bold">{produto.nome}</Typography>
            <Typography>{produto.preco}</Typography>

            <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
              <Typography fontWeight={500}>Estoque:</Typography>
              <Typography color="text.secondary">{produto.estoque}</Typography>

              <span
                className={`span-nivel-estoque px-2 py-1 rounded-full text-xs font-medium 
                  ${produto.nivelEstoque === "Alto" ? "bg-green-100 text-green-800" : ""}
                  ${produto.nivelEstoque === "Medio" ? "bg-orange-100 text-orange-800" : ""}
                  ${produto.nivelEstoque === "Baixo" ? "bg-red-100 text-red-800" : ""}
                  ${!["Alto", "Medio", "Baixo"].includes(produto.nivelEstoque) ? "bg-gray-500 text-white" : ""}
                `}
              >
                {produto.nivelEstoque}
              </span>
            </Box>

            <Typography color="text.secondary" fontSize={14}>
              Criado em: {produto.dataCriacao}
            </Typography>
          </Box>

          {/* Botões de Ação */}
          <Box display="flex" gap={1}>
            <IconButton color="inherit" onClick={() => showEditModal(produto)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => showRemoveConfirme(produto)}>
              <Delete />
            </IconButton>
          </Box>
        </Paper>
      ))}
    </Box>

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


      {editProdutoSelecionado && (
        <form className="modal-overlay">
          <div className="add-product-box">        
            <h1>Editar Produto</h1>

            {/* Erros box */}
            <div className='erro-create-poduto-campos' id='erro-create-product-campos-edit'>
                <span className='text-sm'>Preencha todos os campos corretamente!</span>
            </div>
            <div className='erro-create-poduto-existente' id='erro-create-product-existe-edit'>
                <span className='text-sm'>Esse Produto já existe!</span>
            </div>


            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Nome</span>
                <input onChange={handleNameProductEdit} type="text" placeholder={editProdutoSelecionado.nome}/>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Preço</span>
                <input onChange={handlePriceProductEdit} placeholder="R$ 0,00" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Estoque</span>
                <input onChange={handleEstoqueProductEdit} type="number" placeholder={editProdutoSelecionado.estoque}/>
              </div>
            </div>
            
            <div className="buttons-add-product-box flex justify-end gap-2 mt-4">
              <button className="bg-white border  text-zinc-600 text-sm px-4 py-2 rounded" type="button" onClick={closeEditModal}>Cancelar</button>
              <button className="bg-zinc-800 text-white text-sm px-4 py-2 rounded" type="submit" onClick={editProduct}>Confirmar</button>
              {/* // setProdutos(produtos.map(produto => 
                //   produto.id === editProdutoSelecionado.id ? { ...produto, ...editProdutoSelecionado } : produto
                // ));
                // return closeEditModal(); */}
            </div>
          </div>
        </form>
      )}

      {modalAddProduto && (
        <form className="modal-overlay">
          <div className="add-product-box">        
            <h1>Adicionar Produto</h1>

            {/* Erros box */}
            <div className='erro-create-poduto-campos' id='erro-create-product-campos'>
                <span className='text-sm'>Preencha todos os campos!</span>
            </div>

            <div className='erro-create-poduto-existente' id='erro-create-product-existe'>
                <span className='text-sm'>Esse Produto já existe!</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-zinc-800 text-sm font-bold">Nome</span>
                <input onChange={handleNameProduct} type="text" placeholder="Meu Produto"/>
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
              <button className="bg-white border  text-zinc-600 text-sm px-4 py-2 rounded" type="button" onClick={closeAddProduct}>Cancelar</button>
              <button className="bg-zinc-800 text-white text-sm px-4 py-2 rounded" type="submit" onClick={addProduct}>Confirmar</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default TableProdutos;

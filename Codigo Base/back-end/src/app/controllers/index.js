import { Router } from 'express';
import cliente from '@/app/schemas/cliente';
import funcionario from '@/app/schemas/funcionario';
import venda from '@/app/schemas/venda';

const router = new Router();

router.post('/adicionarCliente', (req, res) => {
  const { nome, data, cpf, email } = req.body;
  cliente
    .create({ nome, data, cpf, email })
    .then((clientes) => {
      res.status(200).send(clientes);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.get('/listarClientes', (req, res) => {
  cliente
    .find()
    .then((clientes) => {
      res.send(clientes);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.get('/buscarCliente/:clienteId', (req, res) => {
  cliente
    .findById(req.params.clienteId)
    .then((clientes) => {
      res.send(clientes);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.put('/editarCliente/:clienteId', (req, res) => {
  const { nome, data, cpf, email } = req.body;
  cliente
    .findByIdAndUpdate(
      req.params.clienteId,
      { nome, data, cpf, email },
      { new: true },
    )
    .then((cliente) => {
      res.status(200).send(cliente);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.delete('/excluirCliente/:clienteId', (req, res) => {
  cliente
    .findByIdAndRemove(req.params.clienteId)
    .then(() => {
      res.status(200).send({ message: 'Cliente removido com sucesso' });
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.post('/adicionarFuncionario', (req, res) => {
  const { nome, data, cpf, email, salario } = req.body;
  funcionario
    .create({ nome, data, cpf, email, salario })
    .then((funcionarios) => {
      res.status(200).send(funcionarios);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.get('/listarFuncionarios', (req, res) => {
  funcionario
    .find()
    .then((funcionarios) => {
      res.send(funcionarios);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.get('/buscarFuncionario/:funcionarioId', (req, res) => {
  funcionario
    .findById(req.params.funcionarioId)
    .then((funcionarios) => {
      res.send(funcionarios);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.put('/editarFuncionario/:funcionarioId', (req, res) => {
  const { nome, data, cpf, email, salario } = req.body;
  funcionario
    .findByIdAndUpdate(
      req.params.funcionarioId,
      { nome, data, cpf, email, salario },
      { new: true },
    )
    .then((funcionarios) => {
      res.status(200).send(funcionarios);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.delete('/excluirFuncionario/:funcionarioId', (req, res) => {
  funcionario
    .findByIdAndRemove(req.params.funcionarioId)
    .then(() => {
      res.status(200).send({ message: 'Funcionário removido com sucesso' });
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.post('/adicionarVenda', (req, res) => {
  const { nomeCliente, data, nomeFuncionario, valor, produtos } = req.body;
  venda
    .create({ nomeCliente, data, nomeFuncionario, valor, produtos })
    .then((vendas) => {
      res.status(200).send(vendas);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.get('/listarVendas', (req, res) => {
  venda
    .find()
    .then((vendas) => {
      res.send(vendas);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.get('/buscarVenda/:vendaId', (req, res) => {
  venda
    .findById(req.params.vendaId)
    .then((vendas) => {
      res.send(vendas);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

router.put('/editarVenda/:vendaId', (req, res) => {
  const { nomeCliente, data, nomeFuncionario, valor, produtos } = req.body;
  venda
    .findByIdAndUpdate(
      req.params.vendaId,
      { nomeCliente, data, nomeFuncionario, valor, produtos },
      { new: true },
    )
    .then((vendas) => {
      res.status(200).send(vendas);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.delete('/excluirVenda/:vendaId', (req, res) => {
  venda
    .findByIdAndRemove(req.params.vendaId)
    .then(() => {
      res.status(200).send({ message: 'Venda removida com sucesso' });
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});
export default router;

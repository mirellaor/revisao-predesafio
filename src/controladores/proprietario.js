let dadosProprietario = [];
let id = 1;

function criarProprietario(req, res) {
    //criando novos proprietários e adicionando o id no inicio dos dados:
    const novoProprietario = { id, ...req.body };
    id++;
    dadosProprietario.push(novoProprietario);
    res.status(201).json({ mensagem: "Sucesso! Usuário criado." });
}

function listarProprietarioNome(req, res) {
    const { name } = req.query;
    const proprietarioEncontrado = dadosProprietario.find((item) => item.name === name);

    if (!proprietarioEncontrado) {
        res.status(404).json({ mensagem: "usuário não encontrado." });
    }

    res.status(200).json(proprietarioEncontrado);
}

function listarProprietarioId(req, res) {
    const { id } = req.params;
    const proprietarioEncontrado = dadosProprietario.find((item) => item.id === Number(id));

    if (!proprietarioEncontrado) {
        res.status(404).json({ mensagem: "usuário não encontrado." });
    }

    res.status(200).json(proprietarioEncontrado);

}

module.exports =
{
    criarProprietario,
    listarProprietarioNome,
    listarProprietarioId
}
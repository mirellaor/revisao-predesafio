let dadosProprietario = [];
let id = 1;

function criarProprietario(req, res) {
    const novoProprietario = { id, ...req.body };
    id++;
    dadosProprietario.push(novoProprietario);
    res.status(201).json({ mensagem: "Sucesso! Usuário criado." });
}

function listarProprietario(req, res) {
    res.status(200).json(dadosProprietario);
}

module.exports =
{
    criarProprietario,
    listarProprietario
}
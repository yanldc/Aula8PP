const Violao = require('./violao');

const violaoClassico = new Violao();
violaoClassico.tipo = 'Violão Clássico';
violaoClassico.descricao = 'Modelo acústico, 6 cordas geralmente de nylon. Leve e macio, ótimo para iniciantes.';
violaoClassico.materialCordas = 'Nylon';
violaoClassico.som = 'Suave e leve';

const violaoFolk = new Violao();
violaoFolk.tipo = 'Violão Folk';
violaoFolk.descricao = 'Corpo maior e acinturado, cordas de aço, pode ser elétrico ou eletroacústico.';
violaoFolk.materialCordas = 'Aço';
violaoFolk.eletrico = true;
violaoFolk.som = 'Encorpado e com timbre diferenciado';

const violaoFlet = new Violao();
violaoFlet.tipo = 'Violão Flet';
violaoFlet.descricao = 'Caixa acústica fina, geralmente elétrico, cordas de nylon e precisa de amplificação.';
violaoFlet.materialCordas = 'Nylon';
violaoFlet.eletrico = true;
violaoFlet.som = 'Suave';

const violaoJumbo = new Violao();
violaoJumbo.tipo = 'Violão Jumbo';
violaoJumbo.descricao = 'Corpo largo e base arredondada, eletroacústico com cordas de aço.';
violaoJumbo.materialCordas = 'Aço';
violaoJumbo.eletrico = true;
violaoJumbo.som = 'Grave e encorpado';

const violao7Cordas = new Violao();
violao7Cordas.tipo = 'Violão 7 Cordas';
violao7Cordas.descricao = 'Igual ao clássico, mas com sétima corda grave para choro e samba.';
violao7Cordas.cordas = 7;
violao7Cordas.materialCordas = 'Nylon';
violao7Cordas.som = 'Grave extra';

const violao12Cordas = new Violao();
violao12Cordas.tipo = 'Violão 12 Cordas';
violao12Cordas.descricao = 'Dobro de cordas agrupadas em duplas, exige técnica para tocar.';
violao12Cordas.cordas = 12;
violao12Cordas.materialCordas = 'Aço';
violao12Cordas.som = 'Ressonância plena';

const violaoZero = new Violao();
violaoZero.tipo = 'Violão Zero';
violaoZero.descricao = 'Parlor, menor estrutura, confortável para uso casual.';
violaoZero.som = 'Suave';

const violaoDuploZero = new Violao();
violaoDuploZero.tipo = 'Violão Duplo Zero';
violaoDuploZero.descricao = 'Parlor maior, boa sonoridade, indicado para fingerstyle.';
violaoDuploZero.som = 'Equilibrado';

const violaoTriploZero = new Violao();
violaoTriploZero.tipo = 'Violão Triplo Zero';
violaoTriploZero.descricao = 'Parlor tamanho intermediário, timbre peculiar.';
violaoTriploZero.som = 'Peculiar';

module.exports = {
  violaoClassico,
  violaoFolk,
  violaoFlet,
  violaoJumbo,
  violao7Cordas,
  violao12Cordas,
  violaoZero,
  violaoDuploZero,
  violaoTriploZero
};
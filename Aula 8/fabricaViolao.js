const {
    violaoClassico,
    violaoFolk,
    violaoFlet,
    violaoJumbo,
    violao7Cordas,
    violao12Cordas,
    violaoZero,
    violaoDuploZero,
    violaoTriploZero
  } = require('./prototipos');
  
  function FabricaViolao() {
    this.prototipos = {
      classico: violaoClassico,
      folk: violaoFolk,
      flet: violaoFlet,
      jumbo: violaoJumbo,
      seteCordas: violao7Cordas,
      dozeCordas: violao12Cordas,
      zero: violaoZero,
      duploZero: violaoDuploZero,
      triploZero: violaoTriploZero,
    };
  }
  
  FabricaViolao.prototype.criarViolao = function(tipo) {
    const prototipo = this.prototipos[tipo];
    if (!prototipo) {
      throw new Error('Tipo de violão não disponível na fábrica');
    }
    return prototipo.clonar();
  };
  
  module.exports = FabricaViolao;
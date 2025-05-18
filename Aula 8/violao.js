function Violao() {
    this.tipo = '';
    this.descricao = '';
    this.cordas = 6;
    this.materialCordas = '';
    this.eletrico = false;
    this.som = '';
  }
  
  Violao.prototype.clonar = function() {
    const clone = Object.create(this);
    return clone;
  };
  
  module.exports = Violao;
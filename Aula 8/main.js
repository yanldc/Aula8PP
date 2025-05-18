const FabricaViolao = require('./fabricaViolao');

const fabrica = new FabricaViolao();

try {
  const violaoEscolhido = fabrica.criarViolao('folk');

  console.log('Tipo:', violaoEscolhido.tipo);
  console.log('Descrição:', violaoEscolhido.descricao);
  console.log('Cordas:', violaoEscolhido.cordas);
  console.log('Material das cordas:', violaoEscolhido.materialCordas);
  console.log('É elétrico?', violaoEscolhido.eletrico ? 'Sim' : 'Não');
  console.log('Som:', violaoEscolhido.som);

} catch (error) {
  console.error('Erro:', error.message);
}
// Dados do Concurso Polícia Militar - RJ 2026
window.CONCURSOS_PMERJ = [
  {
    id: "soldado-pm",
    nome: "Concurso Polícia Militar - RJ",
    sigla: "PM-RJ",
    descricao: "Concurso Público para provimento de vagas para o cargo de Soldado Praça da Polícia Militar do Estado do Rio de Janeiro - Turma 2026",
    taxaInscricao: 100.00,
    vagas: 2000,
    salarioDurante: "R$ 3.505,00",
    salarioApos: "R$ 5.233,88",
    escolaridade: "Ensino Médio Completo",
    inscricaoInicio: "05/03/2026",
    inscricaoFim: "05/04/2026",
    provaData: "A definir",
    site: "www.fgv.br/fgvprojetos/concursos",
    idade: "18 a 32 anos",
    beneficios: [
      "Estabilidade no serviço público",
      "Plano de saúde e odontológico",
      "Auxílio alimentação",
      "Auxílio fardamento",
      "Adicional de periculosidade",
      "Férias remuneradas",
      "13º salário",
      "Regime Adicional de Serviço (RAS)"
    ],
    requisitos: [
      "Nacionalidade brasileira",
      "Idade entre 18 e 32 anos na data de inscrição",
      "Ensino Médio completo",
      "Altura mínima: 1,65m (homens) / 1,60m (mulheres)",
      "Aptidão física e mental",
      "Carteira Nacional de Habilitação (CNH) categoria 'B'",
      "Não possuir antecedentes criminais"
    ],
    cargos: [
      {
        id: "soldado-praca",
        nome: "Soldado Praça",
        categoria: "Quadro de Praças Policiais Militares",
        vagas: 2000,
        salario: "R$ 5.233,88"
      }
    ]
  }
];

// Configurações do concurso
window.CONFIG_PMERJ = {
  orgao: "Polícia Militar do Estado do Rio de Janeiro",
  sigla: "PM-RJ",
  banca: "Fundação Getúlio Vargas - FGV",
  ano: 2026,
  taxaInscricao: 100.00,
  site: "www.fgv.br/fgvprojetos/concursos",
  cores: {
    primary: "#1a365d",
    secondary: "#2c5282",
    accent: "#ed8936"
  }
};

// Função para obter concurso por ID
window.getConcursoById = function(id) {
  return window.CONCURSOS_PMERJ.find(c => c.id === id);
};

// Função para formatar moeda
window.formatCurrency = function(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

console.log('Sistema de Inscrição - Concurso Polícia Militar - RJ 2026 carregado');
console.log('Total de concursos disponíveis:', window.CONCURSOS_PMERJ.length);

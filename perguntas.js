/* =========================================================
   Aqui ficam TODAS as perguntas do quiz.
   Para adicionar uma pergunta, copie um bloco { ... },
   cole depois da última vírgula e troque os textos.

   Regras importantes:
   - "correta" é o NÚMERO da alternativa certa, começando em 0
       (0 = primeira, 1 = segunda, 2 = terceira, 3 = quarta)
   - Todo texto fica entre aspas "assim"
   - Cada bloco termina com vírgula, menos o último (pode ter também)
   - Confiram os dados em fontes confiáveis e anotem a fonte!
   ========================================================= */

const PERGUNTAS = [
  {
    pergunta: "Quanto tempo uma garrafa PET leva para se decompor na natureza?",
    opcoes: ["5 anos", "50 anos", "Cerca de 400 anos", "Nunca se decompõe"],
    correta: 2,
    explicacao: "A garrafa PET leva centenas de anos (estima-se cerca de 400) para se decompor. Por isso a reciclagem é tão importante!"
  },
  {
    pergunta: "Um banho de 15 minutos com o chuveiro aberto gasta, em média, quantos litros de água?",
    opcoes: ["10 litros", "45 litros", "Mais de 100 litros", "500 litros"],
    correta: 2,
    explicacao: "Um chuveiro comum gasta vários litros por minuto. Em 15 minutos isso passa fácil de 100 litros. Banhos de 5 minutos economizam muito!"
  },
  {
    pergunta: "Qual destas fontes de energia é renovável?",
    opcoes: ["Carvão mineral", "Petróleo", "Gás natural", "Energia solar"],
    correta: 3,
    explicacao: "A energia solar vem do Sol e não se esgota. Carvão, petróleo e gás são combustíveis fósseis e levam milhões de anos para se formar."
  },
  {
    pergunta: "Onde devemos descartar pilhas e baterias usadas?",
    opcoes: ["No lixo comum", "No lixo reciclável de plástico", "Em pontos de coleta específicos", "Enterradas no quintal"],
    correta: 2,
    explicacao: "Pilhas têm metais pesados que contaminam o solo e a água. Muitos supermercados e lojas têm pontos de coleta."
  },
  {
    pergunta: "Na coleta seletiva, qual é a cor da lixeira para PLÁSTICO?",
    opcoes: ["Azul", "Vermelha", "Verde", "Amarela"],
    correta: 1,
    explicacao: "No padrão brasileiro: azul = papel, vermelho = plástico, verde = vidro, amarelo = metal e marrom = orgânico."
  },
  {
    pergunta: "Qual atitude ajuda MAIS a reduzir o lixo?",
    opcoes: ["Reciclar tudo", "Reduzir o consumo e reutilizar", "Queimar o lixo em casa", "Jogar no rio"],
    correta: 1,
    explicacao: "Reciclar é bom, mas o melhor lixo é aquele que nem chega a existir. Reduzir e reutilizar vêm antes de reciclar!"
  },
  {
    pergunta: "Qual é o principal gás ligado ao aquecimento global?",
    opcoes: ["Oxigênio", "Dióxido de carbono (CO₂)", "Hélio", "Nitrogênio"],
    correta: 1,
    explicacao: "O CO₂, liberado principalmente pela queima de combustíveis fósseis e pelo desmatamento, retém calor na atmosfera."
  },
  {
    pergunta: "Deixar aparelhos em modo stand-by (luzinha acesa) gasta energia?",
    opcoes: ["Não, nada", "Sim, um pouco o tempo todo", "Só à noite", "Só se for TV"],
    correta: 1,
    explicacao: "Aparelhos em stand-by continuam consumindo energia. Tirar da tomada o que não está em uso ajuda a economizar."
  }
];

// =========================================================================
// MÓDULO DE DADOS (data.js)
// =========================================================================

// COMO ATUALIZAR AS HISTORIAS E IMAGENS:
// - Os registros ficam abaixo em santosData e novosCadastros; localize a pessoa pelo nome ou slug.
// - Edite o campo bio para atualizar a historia. Ele aceita texto e HTML simples, como <p> e <h3>.
// - Edite o campo imagem para trocar a foto. Coloque o arquivo dentro da pasta Imagens e use o caminho
//   relativo a este projeto, por exemplo: imagem: './Imagens/NomeDoSanto.jpg'
// - O nome e a extensao no caminho precisam ser iguais aos do arquivo.

const placeholderImage = './Imagens/placeholder.png';

const santosData = {

  // =====================================================
  // SANTOS
  // =====================================================

  freigalvao: {
    nome: "Antônio de Sant’Anna Galvão",
    titulo: 'Primeiro Santo Brasileiro',
    data: 'É celebrado em 25 de Outubro',
    imagem: './Imagens/FreiGalvao.png',
    bio: `Nascido em 1739, em Guaratinguetá (SP), Santo Antônio de Sant'Anna Galvão, conhecido como Frei Galvão, foi o primeiro santo nascido no Brasil. Seus pais, Antônio Galvão de França e Isabel Leite Barros, deram aos seus 11 filhos uma profunda educação religiosa, marcada pela vida cristã integral e amor aos pobres.

<h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Estudos e Formação</h3>
Aos 13 anos, em 1752, foi enviado para o Seminário de Belém, dos Padres Jesuítas, na Bahia, para obter uma sólida formação humana e cultural, onde permaneceu até 1756. Em 15 de abril de 1760, ingressou no noviciado do Convento de São Boaventura, em Vila de Macacu (RJ). No ano seguinte, fez a profissão solene e o juramento de defender a doutrina da Imaculada Conceição. Foi ordenado sacerdote em 11 de julho de 1762, no Rio de Janeiro, celebrando sua primeira missa em Guaratinguetá.

Frei Galvão foi profundamente marcado pela devoção mariana, consagrando-se como "filho e escravo perpétuo" da Imaculada Virgem Maria, em documento assinado com o próprio sangue em 09 de novembro de 1766.

<h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Missionário e Fundador</h3>
Em 1768, foi nomeado Pregador, Confessor e Porteiro do Convento de São Francisco de São Paulo. Em 1774, fundou o "Recolhimento de Nossa Senhora da Conceição da Luz da Divina Providência", hoje conhecido como Mosteiro da Luz, declarado Patrimônio Cultural da Humanidade pela UNESCO. Exerceu cargos importantes como Comissário da Ordem Terceira Franciscana e Visitador Geral. Era tido em tão alta conta que, em 1802, foi descrito como um "varão santo" que servia de honra e consolação a todo o povo.

<h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Falecimento</h3>
Frei Galvão faleceu santamente no dia 23 de dezembro de 1822, às 10 horas, aos 83 anos, no Mosteiro da Luz, em São Paulo. Foi sepultado na igreja que ele mesmo ajudara a construir, diante do altar-mor, local que se tornou centro de constante peregrinação de fiéis.

<h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Beatificação e Canonização</h3>
O processo teve a Irmã Célia B. Cadorin como postuladora. Foi declarado Venerável em 1997 e Beatificado em 25 de outubro de 1998, em Roma, pelo Papa João Paulo II.

<br>
<strong>• Milagre da Beatificação:</strong> A cura da menina Daniela Cristina da Silva, de 4 anos, em 1990. Internada com hepatite tipo A fulminante, associada a oito complicações e infecções hospitalares graves, foi desenganada pelos médicos. Após tomar as pílulas de Frei Galvão dadas pela mãe, foi curada inexplicavelmente para a medicina.

<br>
<strong>• Milagre da Canonização:</strong> O caso de Sandra Grossi de Almeida e seu filho Enzo. Sandra sofria de malformação do útero, o que impedia a gravidez de chegar ao termo e trazia risco de vida. Recorrendo ao Beato e tomando as pílulas, a gravidez chegou a 32 semanas, e Enzo nasceu em 11 de dezembro de 1999. O caso foi reconhecido como cientificamente inexplicável.

<br><br>
Frei Galvão foi Canonizado em 11 de maio de 2007, em missa presidida pelo Papa Bento XVI no Campo de Marte, em São Paulo.

<br><br>
🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [
      'Cura de paciente com câncer incurável',
      'Cura de mulher com hepatite crônica',
      'Cura de gravidez de alto risco (Milagre da Canonização)'
    ],
    reliquias: `<strong>Como receber as Pílulas de Frei Galvão?</strong><br>
Você pode retirar diretamente no Seminário Frei Galvão ou solicitar por correio. Periodicamente, com muito carinho, os frades e seminaristas respondem as cartas e rezam nas intenções solicitadas.

<br><br>
<strong>Para receber pelo correio:</strong><br>
Envie uma carta solicitando as pílulas e coloque, dentro dela, <u>outro envelope já preenchido com seu endereço e selado</u> (para a resposta).

<div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-3 mb-3 text-sm">
    <strong>📍 Endereço para correspondência:</strong><br>
    Seminário Franciscano Frei Galvão<br>
    Av. Integração, 151 – Bairro São Bento<br>
    CEP 12.522-030 – Guaratinguetá/SP
</div>

🔗 <a href="https://franciscanos.org.br/guara/pilulas/" target="_blank" class="text-indigo-600 hover:underline font-bold">Mais informações no site oficial</a>`,
    oracao: `
      Em nome do Pai, do Filho e do Espírito Santo. Amém.

“Deus, nosso Pai, que por Vosso amor imenso nos deste Frei Galvão e, por meio dele, realizastes obras admiráveis, nós Vos agradecemos por tão grande presente.

Obrigado, Senhor, pela sua vida, pela sua obra grandiosa, por lembrar-se de nós por meio de Vosso servo e nosso irmão Frei Galvão.

Que nossa vida seja palavra e sinal do Vosso Reino.

Ajuda-nos a crescer em sabedoria, idade e graça, a crescer, cada vez mais, na vivência concreta e histórica do amor fraterno, partilhando o que somos e o que temos, de modo especial com os mais necessitados.

Fazei-nos instrumentos de vosso amor: onde houver pobres, marginalizados e necessitados, que levemos, como Frei Galvão, o pão da presença amiga e solidária, que se traduz em gestos concretos de solidariedade e promoção à vida.

Senhor, dai-nos acolher, com o coração alegre, todos os irmãos que passam pela nossa vida, buscando paz, alegria, palavra de conforto e presença amiga.

Despertai-nos para o amor e para a devoção a Vossa Mãe Santíssima, ajudai-nos a venerá-la sempre como Imaculada a proclamá-la santa com nossa palavra, e principalmente com a nossa vida.

Fazei que sejamos sempre seus filhos, e que a ela recorramos sempre, agora e na hora da nossa morte.

Senhor, que derramastes Vosso Espírito Santo em Frei Galvão, e por meio dele operastes maravilhas, derramai sobre nós Vosso Espírito, reacendendo em nós o fogo do amor, do ardor missionário.

Aumentai nossa fé!

Fazei que nos coloquemos diante de Vós como Vossos fiéis servidores, obedientes à Vossa Palavra.

Peço-Vos, por tudo que fez e sofreu o Vosso servo Frei Antônio de Sant’Anna Galvão, que aumenteis em mim a fé, a esperança e a caridade, e Vos digneis conceder-me a graça que ardentemente almejo.

Amém.”
    `,
    cor: 'indigo',
    categoria: 'santos',
  },

  irmadulce: {
    nome: "Dulce Lopes Pontes",
    titulo: 'O Anjo Bom da Bahia',
    data: 'É celebrado em 13 de agosto',
    imagem: './Imagens/SantaDulce.png',
    bio: `Segunda filha do dentista Augusto Lopes Pontes e de Dulce Maria de Souza Brito Lopes Pontes, ao nascer em 26 de maio de 1914, em Salvador, Irmã Dulce recebeu o nome de Maria Rita de Souza Brito Lopes Pontes. A menina Maria Rita foi uma criança cheia de alegria, adorava brincar de boneca e tinha especial predileção pelo futebol – era torcedora do Esporte Clube Ypiranga.

A vocação para trabalhar em benefício da população carente teve a influência direta da família. Aos 13 anos, graças a seu destemor e senso de justiça, Irmã Dulce passou a acolher mendigos e doentes em sua casa, transformando a residência da família na conhecida ‘Portaria de São Francisco’.

Em 1933, torna-se freira na Congregação das Irmãs Missionárias da Imaculada Conceição da Mãe de Deus. Após anos de peregrinação com doentes pelas ruas, em 1949, Irmã Dulce ocupa um galinheiro ao lado do Convento Santo Antônio. A iniciativa deu origem às Obras Sociais Irmã Dulce, um dos maiores complexos de saúde pública do país.

Indicada ao Prêmio Nobel da Paz em 1988 e incentivada pelo Papa João Paulo II, Irmã Dulce faleceu em 13 de março de 1992. Sua fragilidade física nunca impediu sua obra gigantesca de amor. Foi canonizada em 2019, tornando-se a primeira santa nascida no Brasil.
<br><br>
🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [
      'Cura de hemorragia pós-parto (Beatificação)',
      'Cura de cegueira total (Canonização)'
    ],
    reliquias: 'Para conseguir uma relíquia de Santa Dulce, você pode visitar o Santuário Santa Dulce dos Pobres em Salvador (BA), onde há relíquias de primeiro grau para veneração pública, ou entrar em contato com o Santuário por e-mail ou telefone para saber sobre o envio de relíquias peregrinas para outras paróquias ou para se informar sobre o processo de solicitação, usando contatos como memorial@irmadulce.org.br, beatificacao@irmadulce.org.br ou a Central de Relacionamento com o Doador (71) 3316-8899. ',
    oracao: `
      Senhor nosso Deus, lembrados de vossa filha, a santa Dulce dos Pobres, 
      cujo coração ardia de amor por vós e pelos irmãos, mais particularmente pelos pobres e excluídos, 
      nós vos pedimos: dai-nos idêntico amor aos necessitados; renovai nossa fé e nossa esperança 
      e concedei-nos, a exemplo desta vossa filha, viver como irmãos, 
      buscando diariamente a santidade, para sermos autênticos discípulos missionários de vosso filho Jesus. Amém.
    `,
    cor: 'blue',
    categoria: 'santos',
  },

  santapaulina: {
    nome: "Paulina do Coração Agonizante de Jesus",
    titulo: 'A primeira Santa do Brasil',
    data: 'É celebrado em 9 de julho,',
    imagem: './Imagens/Santa Paulina do Coraçã.png',
bio: `UMA SANTA PARA O NOSSO TEMPO

        Santa Paulina nasce em Vígolo Vattaro, Trentino Alto Ádige, na região norte da Itália, no dia 16 de dezembro de 1865 e recebe dos pais Antônio Napoleone Visintainer e Anna Pianezzer o nome de Amábile Lúcia Visinteiner. Era a segunda filha do casal.
        Com os pais, irmãos e outras famílias da região, imigra para o Brasil em 1875 e, antes de completar dez anos, passa a morar na localidade de Vígolo, na cidade de Nova Trento, em Santa Catarina, na região sul do Brasil.
        Dois anos após a chegada da família ao Brasil, a mãe de Amábile falece. Ela cuida da família até o pai casar-se novamente e também ajuda na Paróquia de Nova Trento, na Capela de Vígolo, como paroquiana engajada na vida pastoral e social.

        Em julho de 1890, Amábile e sua amiga Virginia Rosa Nicolodi acolhem Angela Viviani, em fase terminal de câncer, em um casebre doado por Beniamino Gallotti, gesto que marca a fundação da Congregação das Irmãzinhas da Imaculada Conceição. Após a morte da enferma, em 1891, junta-se a elas Teresa Anna Maule, mais uma entusiasta dos ideais cristãos.
        O trio fundacional da Congregação das Irmãzinhas da Imaculada Conceição transfere-se para o centro da cidade de Nova Trento em 1894, após receber em doação o terreno e a casa de madeira dos generosos benfeitores João Valle e Francisco Sgrott, no local onde atualmente está instalado o Centro de Espiritualidade Imaculada Conceição (CEIC).

        ITINERÂNCIA MISSIONÁRIA

        Em 1903, Santa Paulina é eleita, pelas Irmãs, superiora geral para um mandato vitalício. Nesse mesmo ano, deixa Nova Trento para cuidar dos ex-escravos idosos e crianças órfãs, filhas de ex-escravos e pobres no bairro Ipiranga, em São Paulo. Recebe apoio do Padre Luiz Maria Rossi e a ajuda de benfeitores, em especial do conde Dr. José Vicente de Azevedo.
        A Congregação cresce nos estados de Santa Catarina e São Paulo. Em 1909, as Irmãs assumem a missão evangelizadora na educação, na catequese, no cuidado às pessoas idosas, doentes e crianças órfãs. Nesse mesmo ano, Santa Paulina é deposta do cargo de Superiora Geral pela autoridade eclesiástica e enviada para Bragança Paulista, a fim de cuidar de doentes e asilados, onde testemunha humildade heroica e amor ao Reino de Deus. Compreendendo que a obra é de Deus e não sua.

        Depois de submeter-se humildemente nove anos naquela missão, Santa Paulina é chamada a viver na Sede Geral da Congregação, onde testemunha uma vida de santidade e ajuda na elaboração da história da Congregação e no resgate do Carisma Fundante. Acompanha e abençoa as Irmãs que partem em missão para novas fundações. Alegra-se com as que são enviadas aos povos indígenas em Mato Grosso, em 1934. Rejubila-se com o Decreto de Louvor dado pelo Papa Pio XI, em 1933, à Congregação.
        Santa Paulina morre aos 76 anos, na Casa Geral em São Paulo, dia 9 de julho de 1942, com fama de santidade, pois viveu em grau heroico as virtudes de fé, esperança e caridade e demais virtudes.

        BEATIFICAÇÃO E CANONIZAÇÃO

        O primeiro milagre foi registrado em Imbituba (SC), no qual foi reconhecida a cura instantânea, perfeita e duradoura de Eluíza Rosa de Souza, que possuía uma doença complexa: a morte intra-uterina do feto e sua retenção por alguns meses; extração com instrumentos e revisão do útero, seguida de grande hemorragia e choque irreversível. O caso foi discutido e, posteriormente, o Santo Padre ratificou em decreto aprovando as conclusões da Congregação para as Causas dos Santos.

        Já o segundo milagre comprovado ocorreu com a menina Iza Bruna Vieira de Souza, de Rio Branco (AC). Ela nasceu com má formação cerebral, diagnosticada como “meningoencefalocele occipital de grande porte”. No quinto dia de vida, foi submetida, embora anêmica, a uma cirurgia e, depois de 24 horas, apresentou crises convulsivas e parada cardiorrespiratória.
        A avó da menina, Zaira Darub de Oliveira, rezou à Madre Paulina durante toda a gestação da filha e também durante o período no hospital. A menina Iza Bruna foi batizada no próprio hospital, dentro do balão de oxigênio, e logo se recuperou. A cura foi atestada pelo Santo Padre e, no dia 19 de maio de 2002, o São João Paulo II canonizou Santa Paulina, reconhecendo suas virtudes em grau heroico: humildade, caridade, fé, simplicidade, vida de oração, entre outras.

        CRONOLOGIA

        16 de dezembro de 1865 – Nasce Amábile Lúcia Visintainer.
        Outubro de 1875 – Amábile chega ao Brasil.
        12 de Julho de 1890 – Amábile funda a Congregação.
        7 de dezembro de 1895 – Amábile faz seus votos religiosos e passa a ser conhecida como Irmã Paulina do Coração Agonizante de Jesus, a Madre Paulina.
        2 de fevereiro de 1903 – Madre Paulina transfere-se para São Paulo.
        29 de agosto de 1909 – Madre Paulina é deposta do cargo de superiora geral.
        1918 – Madre Paulina retorna para São Paulo.
        19 de maio de 1933 – Recebe o Decreto de louvor de sua obra, concedido pelo Papa Pio XI.
        18 de março de 1938 – O braço direito da Madre Paulina, que era diabética, é amputado.
        09 de julho de 1942 – Madre Paulina morre, aos 76 anos.
        23 de setembro de 1966 – Eluíza Rosa de Souza (Imbituba-SC) sobrevive a uma hemorragia interna e choque irreversível. Em seu peito foi colocado um pedaço de roupa de Madre Paulina e ela foi curada.
        18 de outubro de 1991 – Madre Paulina é Beatificada, em Florianópolis, por São João Paulo II.
        5 de junho de 1992 – Iza Bruna Vieira de Souza nasce com um tumor da cabeça. Operada, sofre convulsões cerebrais e, aparentemente, sem chance de sobreviver. A avó coloca um retrato de Madre Paulina perto da menina. Vinte e quatro horas, após ser batizada, a menina recupera a saúde.
        19 de maio de 2002 – Madre Paulina é Canonizada, na Praça de São Pedro, e passa a ser chamada de Santa Paulina do Coração Agonizante de Jesus.
        <br><br>
        🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [
      'Cura de hemorragia pós-parto (Beatificação)',
      'Cura de má formação cerebral (Canonização)'
    ],
    reliquias: 'Envie seus pedidos de oração e intenções  pelo e-mail santuario@santuariosantapauliba.org.br',
    oracao: `
      Ó Santa Paulina, que puseste toda a confiança no Pai e em Jesus e que, inspirada por Maria, decidiste ajudar o povo sofrido, nós te confiamos a Igreja que tanto amas, nossas vidas, nossas famílias, a Vida Consagrada e todo o povo de Deus.
      (Pedir a graça desejada)
      Santa Paulina, intercede por nós junto a Jesus a fim de que tenhamos a coragem de lutar sempre na conquista de um mundo mais humano, justo e fraterno. Amém.
      Pai-Nosso, Ave Maria, Glória
      Santa Paulina, rogai por nós!
    `,
    cor: 'purple',
    categoria: 'santos',
  },

  // =====================================================
  // BEATOS
  // =====================================================

  'padre-donizetti-tavares-de-lima': {
    nome: "Donizetti Tavares de Lima",
    titulo: 'Santo de Tambaú',
    data: 'É CELEBRADO 16 DE JUNHO',
    imagem: './Imagens/BeatoDonizete.png',
    bio: `Pe. Donizetti Tavares de Lima nasceu na cidade de Cássia-MG, no dia 03 de Janeiro de 1882, filho de Tristão Tavares de Lima e de Francisca Cândida Tavares de Lima; teve 8 irmãos. Quando Donizetti tinha quatro anos de idade, sua família mudou-se para a cidade de Franca-SP onde fez o curso primário e foi aprendendo os rudimentos da música.

          Aos 15 anos de idade foi matriculado no curso preparatório do antigo Seminário Episcopal de São Paulo e depois de três anos cursou o Colégio em Sorocaba, voltando no ano de 1900 para o Seminário. No dia 12 de Julho de 1908 foi Ordenado Sacerdote em Pouso Alegre-MG.

          Passou pelas Paróquias de São Caetano em Pouso Alegre; Jaguariúna; Paróquia de Santa Mãe de Deus; Paróquia Sant’Ana em Vargem Grande do Sul. No dia 24 de maio de 1926 foi nomeado Pároco da Paróquia Santo Antonio em Tambaú-SP, onde chegou no dia 12 de Junho do mesmo ano; sua posse aconteceu no dia 13 de junho de 1926.

          Trabalhou por 35 anos em Tambaú até o dia 16 de Junho de 1961, quando faleceu aos 79 anos de idade por complicações cardíacas.

          “Pe. Donizetti tinha vida austera, sem luxo, nada de requinte. Sua aspiração era servir a Deus sobre todas as coisas. Tinha total zelo pelas crianças e idosos, mas acolhia a todos sem distinção” (Livro Pe. Donizetti de Tambaú – José Wagner Azevedo).

          Fundou uma creche, a Casa da Criança, cuidou dos trabalhadores, fazendo o círculo operário, e por fim olhou pelos idosos e fez o Asilo. Possuía grande devoção e fé a Nossa Senhora Aparecida e providenciou uma imagem da Mãe de Nossa e assim a entronizou na Igreja Santo Antônio. Em 1929 um incêndio destruiu tudo o que havia na igreja Santo Antonio, mas o fogo não destruiu a Imagem de Nossa Senhora Aparecida que foi salva intacta. Este fato foi atribuído como um sinal de Deus.

          Na década de 50 muitos fatos aconteceram e que levaram o Pe. Donizetti a ter fama de Santo, muitas curas foram atribuídas a ele através de sua bênção. A Igreja São José não comportava tantas pessoas então foi construído um palanque em frente a Casa Paroquial na porta principal onde ele falava com todos em geral, já não podia atender individualmente cada um e tomou a decisão que no dia 30 de maio de 1955 seria a sua última bênção em público, mas prometeu que mesmo sozinho em seu quarto ele continuaria a rezar por todos.

          Aconteceu o encerramento de sua bênção com grande multidão presente na cidade de Tambaú; aviões sobrevoaram o local derramando uma chuva de pétalas de rosas, grande emoção tomou conta de todos, no dia 30 de maio de 1955.

          O Pe. Donizetti faleceu no dia 16 de junho de 1961. A sua saúde foi se complicando devido ao diabetes e algumas insuficiências cardíacas fizeram que fosse internado várias vezes para que recebesse o tratamento no Hospital. Na manhã do dia 16 de junho, sentado em uma cadeira na porta da Casa Paroquial por volta das 11h15min ele faleceu.

          Durante toda tarde e noite o velório aconteceu na Igreja São José e milhares de pessoas se aglomeravam para ver pela última vez o Pe. Donizetti e no dia 17 foi o sepultamento. Após o seu falecimento até nos dias de hoje, muitos relatos de curas de Tambauenses e romeiros estão registrados, testemunhos de devotos a ele atribui graças.
           <br><br>
        🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: ['Cura do menino Bruno Henrique Arruda'],
    reliquias: 'Pertences pessoais e corpo preservado em Tambaú (SP).',
    oracao: `
      Pai Santo, nós vos louvamos e agradecemos pela vida de santidade do Padre Donizetti, por suas virtudes e dons. Ele foi sacerdote zeloso na pregação e na administração dos Sacramentos, disponível no atendimento pastoral e no serviço aos pobres, e foi ungido em distribuir bênçãos pela intercessão de Nossa Senhora Aparecida.

      Para vossa glória e salvação das almas, nós vos pedimos que ele seja elevado à honra dos altares e que, por sua intercessão, nos concedais a graça de que tanto precisamos (faça seu pedido).

      Isso vos pedimos por Jesus Cristo Vosso Filho, na Unidade do Espírito Santo. Amém.
      (Pai Nosso, Ave Maria, Glória)
    `,
    cor: 'yellow',
    categoria: 'beatos',
  },

  // =====================================================
  // SERVOS DE DEUS
  // =====================================================

  'padre-leo': {
    nome: "Léo Tarcísio Gonçalves Pereira",
    titulo: 'sacerdote carismático, alegre e bem-humorado, fundador da Comunidade Bethânia  ',
    data: '09/10/1961 – 04/01/2007',
    imagem: './Imagens/PadreLeo.png',
    bio: `CONHEÇA O FUNDADOR DA COMUNIDADE BETHÂNIA

      Léo Tarcísio Gonçalves Pereira, mais conhecido como Pe. Léo, nasceu em 9 de outubro de 1961. Veio de família humilde de Delfim Moreira, Sul de Minas Gerais, no vilarejo conhecido por Biguá. É o nono filho de Joaquim Mendes Pereira (seu Quinzinho) e Maria Nazaré Guimarães (dona Nazaré).

      Antes de ingressar no seminário foi torneiro mecânico e também trabalhou em uma fábrica de armas em Itajubá (MG). Somente em 1982 entrou no Seminário Dehonista na cidade de Lavras (MG), pertencente à Congregação dos Padres do Sagrado Coração de Jesus. Pe. Léo foi ordenado Sacerdote em 1990, atuou na formação de novos religiosos e sacerdotes, também na área da educação e, em 1995, fundou a Comunidade Bethânia.

      Seu carisma tornou-se amplamente conhecido no Brasil por meio da grande atuação na Renovação Carismática Católica. Foi pregador de multidões desde o tempo de formação presbiteral. Participou de Cenáculos e vários outros encontros. Com seu jeito alegre e irreverente de ser, apaixonado pela Sagrada Escritura, utilizava-se de exemplos concretos e simples do dia a dia para chegar aos corações mais endurecidos. Utilizava linguagem simples que prendia a atenção do ouvinte e ao mesmo tempo o convidava a uma experiência íntima com a pessoa de Jesus, não somente racional, mas de forma afetiva.

      Atuou como verdadeiro profeta do Coração de Jesus em vários meios de comunicação. Publicou 27 livros, atuou em programas católicos de televisão na Associação do Senhor Jesus, em Valinhos (SP) e, posteriormente, no Sistema de Comunicação – Canção Nova, em Cachoeira Paulista (SP), onde ganhou fama nacional e internacional. Viajou pelo mundo para pregar a Palavra de Deus, como nos EUA, nos países da América do Sul, Japão, Portugal e Espanha.

      "Sou um sujeito que desde criança quis ser padre; e muito pobre, tentei ir para o seminário, mas não fui aceito. Então fui trabalhar até conseguir ter roupas suficientes, fazer meu enxoval. Fui para o seminário com 21 anos. Tinha namorada, fui noivo, e descobri a Congregação dos Padres do Sagrado Coração de Jesus, que é o que eu tento viver: Quero ser um homem do Coração de Jesus. Vivo no meio de jovens drogados, prostituídos, aidéticos. Tento ser um deles e eles me ensinam muito" — Padre Léo, scj.

      PÁSCOA E LEGADO

      Após 16 anos de sacerdócio, vivendo integralmente o seguimento de Cristo, Pe. Léo faleceu em 4 de janeiro de 2007, aos 45 anos, vítima de infecção generalizada por causa de um câncer no sistema linfático. Foi um ano inteiro de luta contra um câncer (linfoma) que acabou levando-o para Deus. Mas ele não se deixou vencer pela dor e pelo sofrimento. As palavras e gestos dele nunca deixaram transparecer a dor, a qual sempre suportou na fé e na esperança. Fez a sua última pregação na Canção Nova, no ‘Hosana Brasil’, no dia 09 de dezembro de 2006.

      Padre Léo deixou-nos uma obra maravilhosa que é a "Comunidade Bethânia", fundada para acolher e tratar jovens dependentes de álcool e de drogas. São cinco casas em todo o Brasil. Não se cobra nada do jovem que ali chega para tratamento, e lhe é dado amor, espiritualidade e vida nova. Deixou também um acervo espiritual muito grande em seus livros, palestras e músicas, tratando, sobretudo, da restauração da pessoa humana, pela cura interior e pela restauração da família.

      O CAMINHO DA BEATIFICAÇÃO

      O processo de beatificação do Padre Léo começou em outubro de 2017, quando padres da congregação visitaram o bispo da Arquidiocese de Florianópolis, Dom Wilson Tadeu Jönck. Após esta etapa foi criado o Instituto Padre Léo, entidade responsável pela coleta dos testemunhos dos milagres.

      No dia 8 de dezembro de 2019, a Comunidade Bethânia anunciou oficialmente a autorização da abertura do processo. Em seguida, ocorreu a abertura oficial no dia 7 de março de 2020, com a realização de uma Santa Missa campal, na sede da Comunidade Bethânia, em São João Batista. No mesmo dia foi instaurado o Tribunal Diocesano que conduzirá a investigação da vida e obra do Servo de Deus.

      UM TESTEMUNHO DE VIDA (Relato pessoal)

      "Conheci o padre Léo quando ele era ainda um adolescente de 17 anos de idade, há 29 anos, lá no Biguá, um lugarejo escondido na Serra da Mantiqueira. Um dia, encontrei este jovem Léo tocando violão na bandinha que animava a Missa na capela deste lugarejo.
      O jovem Léo era meio arteiro, gostava de um cigarro, de uma bebida e me disse que até de umas drogas. Mas Deus começou a transformar o seu coração. Sua família veio morar em Itajubá (MG), e ele foi estudar no SENAI. Era meio adepto da teologia da libertação e avesso às coisas mais espirituais. Mas Deus foi tocando o coração dele e o chamou ao sacerdócio.

      São Paulo disse que 'Temos esse tesouro em vasos de barro para que transpareça claramente que este poder extraordinário provém de Deus e não de nós' (2Cor 4,7). Padre Léo foi um exemplo vivo e real desta palavra; seu poder de pregar era extraordinário: poder de Deus colocado em um vaso de barro, que, com o tempo, se 'quebrou', mas mesmo 'quebrado' exalava e continuará exalando por muito tempo e por muitos lugares o perfume de Cristo."
      <br><br>
        🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>
      <br><br>
      DOAÇÃO
      Colabore com a causa de beatificação do Padre Léo, por meio de doações ao Instituto Padre Léo:

      Banco do Brasil
      Agência: 2629-8
      Conta Corrente: 38806-8
      CNPJ: 31.576.826/0001-27`,
    milagres: [
      'Processo de beatificação oficialmente aberto em 2020'
    ],
    reliquias: 'As relíquias podem ser solicitadas via e-mail: testemunhos@padreleo.com.br. Neste e-mail, o solicitante deve informar as motivações pela qual deseja recebê-la. Em seguida, serão repassadas as informações sobre como ocorrerá o envio.',
    oracao: `
    Pai Santo, nós Vos louvamos e Vos bendizemos e, lembrados de vosso servo Padre Léo de Bethânia, cuja vida foi marcada pelo grande amor ao Coração de Vosso Filho e pelo acolhimento aos mais necessitados, tornando-se modelo para que anseiam buscar as coisas do alto, nós Vos pedimos: cresça em nós o desejo ardente de amar e servir em santidade como ele tanto ensinou em suas pregações. Concedei-nos, ó Pai Amado, conforme vossa vontade e misericórdia, a graça que tanto necessitamos:

    (Faça seu pedido)

    *Com aprovação Eclesiástica - ( Arquidiocese de Florianópolis)
    (Rezar Pai Nosso, Ave-Maria e Glória ao Pai)
    `,
    cor: 'red',
    categoria: 'servos',
  },
};

// =====================================================================
// CADASTROS RESUMIDOS – TABELA SANTIDADE
// =====================================================================

const novosCadastros = {


'adelaide-molinari': {
    nome: 'Adelaide Molinari',
    titulo: 'Mártir dos Pobres da Terra',
    genero: 'Feminino',
    data: '14 de abril (Martírio em 1985)',
    imagem: './Imagens/AdelaideMolinari.png',
    bio: `
      <h3>Nascimento e Vocação</h3>
      <p>Nasceu em 2 de fevereiro de 1938, em Garibaldi (RS), filha dos agricultores Salvador e Cecília Molinari. Mudou-se ainda criança para Palmeira das Missões (RS). Ingressou no Instituto Religioso das Filhas do Amor Divino (Irfadi), assumindo o carisma de estar a serviço dos mais necessitados.</p>

      <h3>Missão no Pará</h3>
      <p>Em 8 de abril de 1983, foi enviada com outras duas religiosas para o sudeste do Pará. Atuou no eixo Marabá-Eldorado do Carajás-Curionópolis, participando de missões populares, fundação de Comunidades Eclesiais de Base (CEBs), paróquias, centros comunitários e dando suporte à Santa Casa.</p>

      <h3>Martírio</h3>
      <p>No domingo, 14 de abril de 1985, enquanto aguardava um ônibus na Rodoviária de Eldorado do Carajás, conversava com o delegado sindical Arnaldo Dolcídio Ferreira. Um pistoleiro disparou contra Arnaldo; a bala perfurou o tórax do sindicalista e atingiu a artéria do pescoço da Irmã Adelaide, matando-a instantaneamente. Ela foi reconhecida pelo Papa João Paulo II como "mártir da justiça".</p>

      <h3>Causa de Beatificação</h3>
      <p>O processo foi aberto oficialmente em 24 de abril de 2022, na Diocese de Marabá, conferindo-lhe o título de Serva de Deus.</p>
    `,
    milagres: [
      'Vocações: O testemunho de sua morte despertou vocações religiosas (ex: Irmã Joselina Gomes)',
      'Cura Interior: Relatos de regeneração espiritual durante a "Caminhada Irmã Adelaide"',
      'Devoção Popular: Graças alcançadas por peregrinos em seu túmulo'
    ],
    reliquias: 'Túmulo ao lado da Igreja Nossa Senhora das Graças (Curionópolis/PA); Fonte Martirial e o local exato do martírio em Eldorado do Carajás.',
    oracao: `
      Escuta, ó Pai, a nossa prece. Teu Filho Jesus venceu a morte e continua vivo no meio das comunidades cristãs. 
      Que também nós possamos ser fortes como Ele. Que ninguém fuja da luta, nem mesmo com ameaça de morte. 
      Que saibamos ficar atentos às necessidades da comunidade. 
      Que, de hoje em diante, ninguém mais fique sofrendo desamparado. Alimenta, ó Pai, a nossa fé, para que não te neguemos em nossa ação. 
      Por Jesus Cristo, Teu filho, na unidade do Espírito Santo. Amém!"

Serva de Deus Adelaide Molinari, iluminai-nos!
    `,
    cor: 'red',
    categoria: 'servos'
  },

'adelia-teixeira-de-carvalho': {
    nome: "Adélia Teixeira de Carvalho",
    titulo: 'vidente das aparições de Nossa Senhora em Cimbres ',
    genero: 'Feminino',
    data: '13 de outubro',
    imagem: './Imagens/AdeliaT.png',
    bio: `
      <p>Religiosa das Instrucionistas Brasileiras e uma das videntes das aparições de Nossa Senhora em Cimbres (Pesqueira-PE) na década de 1930. Dedicou sua vida à oração, aos pobres e à educação.</p>
      

    `,
    milagres: [
      'Cura milagrosa de um câncer com metástase no fígado nos anos 80: após pedir um sinal a Nossa Senhora no local das aparições, exames posteriores mostraram que a doença havia desaparecido.',
      'Relatos diversos de graças alcançadas por fiéis no local das aparições e por sua intercessão.'
    ],
    reliquias: 'Seu corpo repousa no Recife, onde são celebradas missas mensais em sua memória no Colégio Damas; o local das aparições no Sítio Guarda (Cimbres) é ponto de peregrinação.',
oracao: `
      Pai de amor e de bondade, quisestes que vossa filha Irmã Adélia respondesse com generosidade ao vosso chamado, 
      como seguidora do vosso Filho, por meio de uma vida orante, humilde, obediente e doada à causa dos preferidos do Reino.
      
      Inspirada em Maria, Mãe da Divina Graça, anunciou a boa notícia de Jesus para a conversão dos pecadores.
      
      Suplicamo-vos, que se for da vossa vontade e para o nosso bem, dignai-vos glorificá-la, diante da Igreja, concedendo-lhe a glória dos altares. 
      E, por sua intercessão, nos obtenha a graça que confiantes vos pedimos (pede-se a graça).
      
      Por Cristo, nosso Senhor, na unidade do Espírito Santo. Amém!

      Pai Nosso... Ave-Maria... Glória ao Pai...

      Irmã Adélia, Maria da Luz, reconhecei-a Santa, Senhor Jesus!
    `,
    cor: 'red',
    categoria: 'servos'
  },

  'afonso-rodriguez': {
    nome: 'Afonso Rodríguez',
    titulo: 'padroeiro de Palma de Maiorca',
    genero: 'Masculino',
    data: 'É celebrado liturgicamente no dia 31 de outubro',
    imagem: './Imagens/AfonsoRodrigues.png',
    bio: `ORIGENS

          Natural de Segóvia, na Espanha, veio à luz aos 25 de julho de 1532. Pertencente a uma família cristã, teve de interromper seus estudos no primário, pois, com a morte do pai, assumiu os compromissos com o comércio. Casou-se com Maria Soares, que amou tanto quanto os dois filhos, mas infelizmente, todos, com o tempo, faleceram.

          A CRISE ESPIRITUAL E A VOCAÇÃO

          Ao entrar em crise espiritual, Afonso entrega-se à oração, à penitência e, dirigido por um sacerdote, descobriu o seu chamado a ser Irmão religioso; e, assim, assumiu grandes dificuldades como a limitação dos estudos.

          No ano de 1571, aos 38 anos, iniciou seu noviciado. Vencendo tudo em Deus, Afonso foi recebido na Companhia de Jesus como Irmão. Sua vida foi uma esplêndida realização da vocação. Depois do noviciado, foi enviado para o Colégio de formação Monte de Sião em Palma de Maiorca. No colégio, desempenhou os ofícios de porteiro; e a todos prestava vários serviços e, dentre as virtudes heroicas que conquistou na graça e querendo ser firme na fé, a obediência foi a sua prova de verdadeira humildade.

          HOMEM SIMPLES E A VONTADE DE DEUS

          Santo Afonso Rodrigues sabia ser simples, pois aceitava, com amor, toda ordem e desejo dos superiores, como expressão da vontade de Deus. Tinha como regra: "Agradar somente a Deus, cumprir sempre e em toda parte a Vontade Divina". Esse santo encantador, com sua espiritualidade, ajudou a muitos, principalmente São Pedro Claver, um de seus filhos espirituais mais notáveis, quanto ao futuro apostolado na Colômbia.

          ALMA SEDENTA DE DEUS

          Sua alma era sedenta de Deus: "A oração que tem é uma súplica a Deus e a Nossa Senhora de quatro amores: o amor de Deus; o amor de Jesus Cristo; o amor a Santíssima Virgem e o amor de uns para com os outros". Em sua íntima relação com Deus, Maria sempre esteve presente.

          PÁSCOA

          Passou o resto da sua vida como porteiro em um convento da Ilha de Maiorca, onde foi exemplo de humildade, obediência, constância e santidade. Místico de muitos carismas, Santo Afonso Rodrigues sofreu muito antes de morrer em 31 de outubro de 1617.

          Foi canonizado em 15 de janeiro de 1888, por Leão XIII. Ele é o santo padroeiro dos goleiros e lanterninhas (porteiros), e padroeiro de Palma de Maiorca.
           <br><br>
        🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>
     `,
    milagres: [],
    reliquias: '',
    oracao: '“Santo Afonso, que, por sua obediência, conquistastes o Céu, dai-nos a graça de imitar essa virtude assim como o teu modelo de humildade. Ensina-nos a reconhecer Jesus nos trabalhos mais simples e desprezados. Amém!”.',
    cor: 'indigo',
    categoria: 'santos'
  },

  'afonso-de-baena': {
    nome: 'Afonso de Baena',
    titulo: 'Os Quarenta Mártires do Brasil',
    genero: 'Masculino',
    data: 'É celebrado dia 03 de outubro',
    imagem: './Imagens/40M.png',
    bio: `Nascido em Villatobas (Toledo), Espanha, em 1539, o Beato Alfonso de Baena ingressou na Companhia de Jesus em 1566. Antes de sua vida religiosa, atuou como ourives, chegando a confeccionar objetos sagrados destinados às missões no Brasil.

Em 1570, integrou a grande expedição missionária liderada pelo Pe. Inácio de Azevedo rumo ao Brasil. Durante a viagem, a embarcação foi interceptada por corsários huguenotes nas imediações das Ilhas Canárias. Alfonso foi martirizado junto com outros 39 companheiros jesuítas, grupo que passou a ser conhecido como os "40 Mártires do Brasil".

Beatificado pelo Papa Pio IX em 1854, sua memória é honrada especialmente em sua terra natal, Villatobas, com festas anuais, monumentos e obras dedicadas à sua vida e sacrifício.

<br><br>
🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [],
    reliquias: '',
    oracao: 'Senhor, Deus dos Exércitos, concedei-nos pelos méritos, exemplo e intercessão dos santos 40 mártires de Sebaste que sejamos leais combatentes no Vosso amor, unidos, soldados uns aos outros pela mesma Fé, para vitoriosamente queimar tudo aquilo que, na carne, possa nos consumir o espírito. Por Nosso Senhor Jesus Cristo e Maria, Nossa e Vossa Mãe, que não hesitou em imolar o Seu Filho natural para a salvação dos Seus filhos adotados, acompanhando-O e apoiando-O até o fim. Amém.',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'agathe-verhelle': {
    nome: 'Agathe Verhelle',
    titulo: 'Fundou o Instituto das Religiosas da Instrução Cristã',
    genero: 'Feminino',
    data: '',
    imagem: './Imagens/MadreAgathe.png',
    bio: `A SERVA DE DEUS MADRE AGATHE VERHELLE E A ABERTURA DE SUA CAUSA

          No dia em que o Instituto das Religiosas da Instrução Cristã celebrou seus 202 anos, sua fundadora, Madre Agathe Verhelle, recebeu o título de Serva de Deus. O Vaticano aceitou a abertura da causa de beatificação e canonização da religiosa, a pedido da Arquidiocese de Olinda e Recife (PE), reconhecendo sua vivência exemplar das virtudes cristãs. Este é o primeiro passo para que Madre Agathe seja elevada, um dia, à honra dos altares.

          TRAJETÓRIA E VIDA
          Madre Agathe Verhelle nasceu em 1786, na Bélgica, em um período turbulento de revolução. Desde jovem, demonstrou uma profunda sensibilidade à educação e à evangelização, percebendo a necessidade de um ensino cristão para a juventude da época. Sensível à realidade, especialmente dos mais pobres e abandonados, ela sentiu-se chamada por Deus a responder com generosidade aos desafios do seu tempo.

          Em 1823, fundou, na Bélgica, o Instituto das Religiosas da Instrução Cristã, guiada pelo ideal de formar jovens para a vida e para a fé, promovendo a dignidade humana e a transformação social. Com visão além do tempo e ousadia, a religiosa fundou sete casas em apenas 15 anos, expandindo rapidamente a missão do Instituto.

          Madre Agathe viveu de forma intensa o carisma de “Consagrar-nos a Deus e sacrificar-nos inteiramente a serviço da juventude, em toda parte, onde possamos cooperar na propagação da Glória de Deus”. Sua espiritualidade era marcada pela humildade, simplicidade, amor ardente a Deus e serviço à juventude, especialmente através da educação cristã.

          A religiosa faleceu no dia 1º de dezembro de 1838, aos 52 anos, deixando um grande legado que permanece vivo há mais de dois séculos. Atualmente, o Instituto está presente na Europa, América Latina (inclusive Brasil) e África, e segue se expandindo para a Ásia.

          UM MOMENTO HISTÓRICO: A ABERTURA DO PROCESSO
          O Recife viveu um momento histórico para a Igreja Católica: a abertura oficial do processo de beatificação e canonização de Madre Agathe Verhelle. A solenidade ocorreu no Colégio Damas, reunindo autoridades eclesiásticas, religiosas, leigos, educadores, alunos e fiéis.

          A causa está sendo aberta na Arquidiocese de Olinda e Recife porque, segundo as normas do Direito Canônico, a causa pode ser aberta em uma diocese onde a pessoa tenha exercido de forma significativa seu carisma e sua missão. No caso de Madre Agathe, a missão das Religiosas da Instrução Cristã tem uma história profundamente enraizada no Brasil, especialmente em Pernambuco, onde o Instituto mantém há mais de um século uma forte atuação.

          A programação foi composta pela sessão oficial de instalação do tribunal do inquérito arquidiocesano e a Missa em Ação de Graças, presidida pelo Arcebispo Dom Paulo Jackson. O arcebispo nomeou oficialmente os membros da Comissão Histórica, composta por especialistas, professores e religiosas, responsáveis por investigar, coletar e autenticar documentos. Todos os oficiais do tribunal prestaram juramento de compromisso com a verdade e o sigilo.

          ESPIRITUALIDADE E LEGADO
          Para Dom Paulo Jackson, “o reconhecimento de Madre Agathe como Serva de Deus é um marco para a Igreja. O testemunho de Madre Agathe fala ao nosso tempo. Ela foi uma mulher que soube discernir, com fé, os desafios do seu contexto histórico e encontrou no serviço à juventude e na educação um caminho de santificação”.

          A Superiora-Geral do Instituto, Irmã Eulalia Maria, expressou que este momento é uma confirmação da continuidade significativa da missão iniciada por sua fundadora: “Hoje é um dia de luz, esperança e comunhão. O testemunho de Madre Agathe, sua fé viva, seu amor ardente pela juventude e sua coragem profética continuam a nos inspirar a seguir firmes na missão de educar, evangelizar e transformar vidas”.
          <br><br>
          🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>
          <br><br>
          COMO COLABORAR COM A CAUSA
          O processo agora segue na fase arquidiocesana, com a coleta de depoimentos e documentos. Fiéis que tenham recebido graças ou favores por intercessão de Madre Agathe são convidados a comunicar oficialmente às religiosas, ao postulador da causa ou à Arquidiocese.

          E-mail para relatos: causamadreagathe@institutoric.org
          Instagram oficial: @madreagatheverhelle`,
    milagres: [],
    reliquias: 'Para detalhes sobre visitas a espaços memoriais ou acesso a santinhos com relíquias de terceiro grau (tecidos que tocaram objetos da Serva de Deus), recomenda-se o contato direto com a sede do instituto',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'alano-maria-du-noday': {
    nome: 'Alano Maria Du Noday',
    titulo: 'missionário, humilde e muito ligado ao povo',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/DomAlano.png',
    bio: `DOM ALANO MARIA DU NODAY: MISSIONÁRIO E PIONEIRO DO TOCANTINS

          Jean Hubert Antoine du Noday nasceu em 2 de novembro de 1899, no castelo de La Grand'ville, na Bretanha, França. Filho do Conde Arthur e da Condessa Antoinette, enfrentou cedo a perda de familiares: o pai, a irmã e o irmão Henri, morto em combate na Primeira Guerra Mundial.

          Jean Hubert também seguiu carreira militar brilhante. Lutou na Grande Guerra e, em 1918, foi enviado para apaziguar insurreições no Marrocos. Retornou como herói, com futuro promissor no exército, mas sentiu o chamado divino. Tocado pela imagem de Nossa Senhora da Guarda e após uma confissão marcante com um frade dominicano em Marselha, decidiu abandonar as armas para servir a Deus. Ingressou na Ordem de São Domingos (Dominicanos), sendo ordenado sacerdote em 4 de agosto de 1928.

          MISSÃO NO BRASIL E BISPADO

          Em 1933, realizou o sonho de ser missionário no Brasil. Após aprender português no Rio de Janeiro, pediu para servir no sertão de Goiás. Em 25 de março de 1936, Frei Alano foi nomeado Bispo de Porto Nacional (TO), assumindo uma diocese vasta e desafiadora.

          Durante seus 38 anos de bispado, Dom Alano foi um gigante na evangelização e na estruturação da Igreja no Norte de Goiás (atual Tocantins). Foi responsável pelo desmembramento de sua diocese para criar as prelazias de Tocantinópolis, Cristalândia e Miracema do Norte, fortalecendo a presença católica na região. Seu carisma principal foi o fomento às vocações, ordenando 28 padres locais.

          HUMILDADE E SERVIÇO EM CAMPOS BELOS

          Em 1974, renunciou ao cargo de bispo, mas não ao serviço. Com humildade heroica, assumiu a pequena paróquia de Campos Belos (GO). Lá, deixou marcas profundas: construiu a atual Igreja Matriz (com arquitetura alemã sem colunas internas) e conquistou o coração do povo. Era comum ver crianças correndo para pedir sua bênção ao toque do sino.

          LEGADO E PÁSCOA

          Dom Alano foi também uma figura política influente, sendo um dos nomes históricos na luta pela criação do Estado do Tocantins. Recebeu diversas honrarias, incluindo a Ordem do Mérito da Aeronáutica.

          Retornou a Porto Nacional em 1984, já doente e cansado. Faleceu em 15 de setembro de 1985. Sua morte causou comoção geral, com luto oficial de 8 dias. Hoje, seu nome batiza ruas, escolas e universidades, eternizando a memória do nobre francês que se fez sertanejo por amor a Deus e ao povo brasileiro.
          <br><br>
🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [],
    reliquias: '',
    oracao: 'Ó Pai, vós que vos dignastes enviar vosso Filho, Jesus Salvador, para revelar aos pequeninos os vossos mistérios, nós vos damos graças porque, através da vida do Servo de Deus, Padre Gilberto Maria Defina, manifestastes, na vossa Igreja, o Carisma do “Louvor de Deus”. Ele, que pela força do Espírito Santo e uma fé inabalável, suportou e venceu mais enfermidades, tribulações e sofrimentos, possa interceder, junto a Vós, em favor da graça de que tanto necessitamos (...). Por Nosso Senhor Jesus Cristo vosso filho, na unidade do Espírito Santo. Amém .',
    cor: 'red',
    categoria: 'servos'
  },

  'albertina-berkenbrock': {
    nome: 'Albertina Berkenbrock',
    titulo: 'A menina que ousou ser santa.',
    genero: 'Feminino',
    data: 'É celebrada dia 15 de junho',
    imagem: './Imagens/Albertina.png',
    bio: `A bem-aventurada Albertina Berkenbrock nasceu a 11 de Abril de 1919, no distrito de São Luís, município de Imaruí, interior de Santa Catarina, numa família de origem alemã, simples e profundamente cristã.

    Há uma singular concordância entre os testemunhos dados nos vários processos canônicos, por parte das testemunhas que a tinham conhecido e convivido com a Serva de Deus, ao descrevê-la como uma menina bondosa no mais amplo sentido do termo. A natural mansidão e bondade de Albertina conjugavam-se bem com uma vida cristã compreendida e vivida completamente. Da prática cristã derivava a sua inclinação à bondade, às práticas religiosas e às virtudes, na medida em que uma criança da sua idade podia entendê-las e vivê-las.

    Sabia ajudar os pais no trabalho dos campos e especialmente em casa. Sempre dócil, obediente, incansável, com espírito de sacrifício, paciente, até quando os irmãos a mortificavam ou lhe batiam ela sofria em silêncio, unindo-se aos sofrimentos de Jesus, que amava sinceramente. A frequência aos sacramentos e a profunda compenetração que mostrava ter na participação da mesa eucarística (tendo feito sua Primeira Comunhão em 16 de agosto de 1928) é um índice de maturidade espiritual que a menina tinha alcançado; distinguia-se pela piedade, pela modéstia e pelo recolhimento.

    O cenário no qual se consumou o seu martírio é terrivelmente simples, quanto atroz e violenta foi a morte da Serva de Deus. No dia 15 de junho de 1931, Albertina estava apascentando os animais de propriedade da família quando o pai lhe disse para ir procurar um boi que se tinha distanciado. Ela obedeceu. Num campo vizinho encontrou Idanlício Cipriano Martins, conhecido como Maneco, de 33 anos, que trabalhava para um tio dela e era considerado por todos um homem reto.

    Quando Albertina lhe perguntou se tinha visto o boi, Maneco respondeu que sim, indicou o bosque e ofereceu-se para ajudar na busca. Mas, ao chegarem perto do bosque, convidou-a para deitar com ele com intenção de lhe fazer mal. Albertina não consentiu. Maneco a pegou pelos cabelos e jogou-a ao chão. A menina declarou sua indisponibilidade pois aquele ato era pecado. Visto que não conseguia obter o que queria porque ela reagia, Maneco pegou um canivete e cortou o seu pescoço. A jovem morreu imediatamente. A intenção de Maneco era clara, a posição de Albertina também: não queria pecar.

    Durante o velório, Maneco controlava a situação fingindo velar a vítima. Porém, antes que descobrissem quem era o assassino, algumas pessoas notaram um fenômeno particular: todas as vezes que ele se aproximava do cadáver da Serva de Deus, a grande ferida do pescoço começava a sangrar.

    No funeral de Albertina participou um elevado número de pessoas e todos diziam já que era uma "pequena mártir", pois dado o seu temperamento, a sua piedade e delicadeza, eram convictos de que tinha preferido a morte ao pecado. A exemplo da italiana Santa Maria Goretti, Albertina sacrificou a vida somente pela virtude. Beatificada em 20 de outubro de 2007 pelo Papa Bento XVI, hoje ela se encontra na companhia dos santos no Céu.

    <br><hr class="my-6 border-gray-300"><br>

    <h3 class="text-xl font-bold text-gray-800 mb-2">Como ajudar na causa de canonização</h3>
    <p class="mb-4">A causa de canonização envolve custos com tradução, impressão e análise do processo em Roma. Sua ajuda é preciosa!</p>

    <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
        <strong>📍 Envie sua oferta para:</strong><br>
        Cúria Diocesana – Rua Senador Gustavo Richard, 90<br>
        CEP: 88701-220 – Tubarão – SC<br><br>
        
        <strong>💳 Dados Bancários:</strong><br>
        Banco do Brasil – Agência 0201-1, Tubarão<br>
        Conta Corrente nº 13.322-1<br>
        <em class="text-sm text-gray-600">(Informar: “Para a causa de beatificação de Albertina”)</em>
    </div>

    <strong>Contatos e Mais Informações:</strong>
    <ul class="list-disc list-inside mt-2 space-y-1">
        <li>📧 E-mail: <a href="mailto:pe_sergio@yahoo.com.br" class="text-indigo-600 hover:underline">pe_sergio@yahoo.com.br</a></li>
        <li>🌐 Site Oficial: <a href="https://www.beataalbertina.com/" target="_blank" class="text-indigo-600 hover:underline">www.beataalbertina.com</a></li>
        <li>🎥 <span class="text-indigo-600 hover:underline">Assista ao documentário sobre a Beata</span></li>
    </ul>`,    
    milagres: [],
    reliquias: '',
    oracao: 'Deus, Pai de todos nós! Vós nos destes vosso Filho Jesus, que derramou seu sangue na cruz por amor a cada um de nós. Vossa serva Albertina foi declarada bem-aventurada pela Igreja, porque, ainda jovem, também derramou seu sangue para ser fiel à vossa vontade e defender a vida em plenitude. Concedei-nos que, por seu testemunho, nos tornemos fortes na fé, no amor e na esperança, vivamos fielmente os compromissos do nosso Batismo, façamos da Eucaristia a fonte e o cume da nossa vida cristã, busquemos continuamente o perdão através da Confissão, sejamos plenos do Espírito Santo, vivenciando a Crisma, e cultivemos os valores do Evangelho. Por intercessão de Albertina, alcançai-nos a graça que neste momento imploramos de vós (expressar a graça que se deseja). Nós vo-lo pedimos por Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém. Bem-aventurada Albertina Berkenbrock, rogai por nós!',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'alberto-fuger': {
    nome: 'Alberto Fuger',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/AlbertoF.png',
    bio: `SERVO DE DEUS PADRE ALBERTO FUGER: HISTÓRIA E SANTIDADE

      Padre Alberto Fuger, nascido em Dinsheim, Alsácia Francesa, no dia 14 de maio de 1892, foi um missionário incansável e um exemplo de caridade e devoção cristã. Sua trajetória de vida é marcada por uma profunda dedicação ao serviço pastoral, à educação e ao cuidado dos mais necessitados.

      INÍCIO DA VIDA, GUERRA E VOCAÇÃO
      Padre Alberto começou seus estudos primários com os Capuchinhos de Strasbourg. Ainda jovem, ingressou na Companhia de Jesus em 31 de março de 1913, em Feldkirch, Áustria, começando assim sua jornada religiosa. Ele iniciou o curso de Filosofia em 1915, mas precisou interrompê-lo por dois anos para servir como enfermeiro de guerra durante a Primeira Guerra Mundial, finalizando seus estudos em 1920.

      Sua vocação missionária o trouxe ao Brasil em 1921, onde começou a trabalhar em Florianópolis, no Colégio Catarinense, desempenhando múltiplos papéis como professor de Francês e Matemática, além de ser Prefeito dos Alunos e cuidar do museu. Após esse período, retornou à Europa para estudar Teologia em Valckemburg, na Holanda, onde foi ordenado sacerdote no dia 26 de agosto de 1925.

      JESUÍTA NO SUL DO BRASIL
      De volta ao Brasil, Padre Alberto serviu em diversas localidades, incluindo Florianópolis, Pareci Novo (RS) e Porto Alegre. Durante esses anos, desempenhou uma ampla variedade de funções: foi Prefeito Geral, Prefeito Espiritual, Diretor da Congregação Mariana e professor de várias disciplinas, como Latim, Geografia, Filosofia e Religião. A sua atuação sempre foi marcada pela excelência e pelo profundo zelo pastoral, sendo reconhecido como um excelente jesuíta e um homem santo.

      A MISSÃO EM CAMPO BELO
      Em 2 de julho de 1948, por iniciativa própria, Padre Alberto Fuger saiu da Companhia de Jesus. Recomendado pelo Cardeal Dom Jaime de Barros Câmara, foi aceito na Diocese de Oliveira, sendo enviado a Campo Belo (MG), onde iniciou um trabalho notável em favor dos pobres e dos doentes. Ali, ele passou a residir na Vila Vicentina Furtado de Menezes, dedicando-se ao cuidado dos doentes mentais, pobres e abandonados.

      Em Campo Belo, Padre Alberto desempenhou um papel fundamental no atendimento aos mais necessitados. Ele viveu na Vila Vicentina, onde se tornou diretor e cuidou dos residentes como um verdadeiro pai. Dotado de um profundo conhecimento em Psiquiatria, estudado em Zurich, ele tratava dos doentes mentais com grande carinho e paciência, sendo capaz de acalmar os pacientes nas crises e trazer-lhes paz.

      MÉDICO DE ALMAS E CORPOS
      Padre Alberto era conhecido por seu modo especial de tratar os enfermos, utilizando uma abordagem que combinava sabedoria médica, empatia e amor cristão. Muitas vezes, diagnosticava doenças complexas quando outros médicos encontravam dificuldades. Seu compromisso com os doentes era tão profundo que, além de capelão, ele agia como médico e enfermeiro, dando assistência espiritual e material aos que mais precisavam.

      Além disso, Padre Alberto foi assistente eclesiástico da Ação Católica de Campo Belo, Vigário Cooperador da Paróquia Senhor Bom Jesus e colaborou intensamente em várias paróquias vizinhas, sempre oferecendo seu apoio durante festas religiosas, especialmente na Semana Santa. Sua generosidade era tamanha que ele doava os seus honorários como professor do Colégio São José para o caixa da Vila Vicentina, mostrando seu desprendimento e dedicação ao bem comum.

      ESPIRITUALIDADE E LEGADO
      A espiritualidade do Servo de Deus Padre Alberto Fuger era marcada pela devoção à misericórdia e pela entrega total à missão evangelizadora. Ele pregou mais de 300 retiros espirituais ao longo de sua vida sacerdotal, sempre buscando aproximar as pessoas de Deus e fortalecê-las na fé.
      Em 1950, a pedido de Padre Alberto, as Pequenas Irmãs da Divina Providência abriram uma casa religiosa na Vila, ampliando o cuidado e o apoio aos doentes. Ele viveu com simplicidade, não deixando bens materiais além de seus objetos pessoais e alguns livros.

      PÁSCOA E PROCESSO DE BEATIFICAÇÃO
      Padre Alberto Fuger faleceu no dia 17 de dezembro de 1970, no Hospital São Vicente de Paulo, em Campo Belo, vítima de hemorragia cerebral. Assistido por seu amigo, Dr. Wilson Massoti, e pelas suas queridas irmãs da Divina Providência, partiu cercado de amor e fé. Seu corpo foi sepultado na Capela São Vicente de Paulo da Vila Vicentina, tornando-se local de peregrinação.

      Em 17 de setembro de 1997, iniciou-se o processo de beatificação de Padre Alberto Fuger, reconhecendo suas virtudes heroicas e seu serviço excepcional à Igreja e à comunidade. A fama de sua santidade se espalhou pela região e além, graças aos testemunhos das muitas graças alcançadas por sua intercessão.`,
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'albino-alves-da-cunha-e-silva': {
    nome: 'Albino Alves da Cunha e Silva',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/PeAlbino.png',
    bio: `PADRE ALBINO ALVES DA CUNHA E SILVA

          Albino Alves da Cunha e Silva nasceu em 21 de setembro de 1882 na aldeia de Codeçoso, Província do Minho, em Portugal, filho de Avelino Alves da Cunha e Silva e Ana Joaquina da Mota e Andrade, pessoas de sólida formação moral e alto grau de religiosidade, possuidores de uma fortuna considerável, porque honestos e trabalhadores.
          O pequeno Albino ingressou no curso primário na cidade de Amarante. Após terminar o secundário começou a pensar no seu futuro, ou seja, escolher uma carreira. Foi aí que, depois de muito rezar e pensar decidiu entregar-se de corpo e alma a Deus, pela vida eclesiástica. Seu pai não queria que ele fosse padre. Desejava ver o filho formado em Direito. A mãe pensava do modo contrário; apoiava o filho na sua escolha.
          Em setembro de 1905, Albino terminou o curso superior, com bastante brilho, na cidade de Braga, onde foi ordenado sacerdote. Sua primeira Paróquia foi na sua terra natal. De vigário encomendado passou a vigário colado, mediante concurso difícil e brilhante. Tornou-se, por isso, facilmente conhecido como padre de valor. E a prova dessa afirmação está em que os seus superiores o promoveram a uma grande e rica paróquia. Entretanto, não tomou posse.
          A PERSEGUIÇÃO E A FUGA
          Em 03 de outubro de 1910 estoura a Revolução em Portugal. No dia 05 do mesmo mês a Câmara Municipal de Lisboa proclama a República e o Governo Provisório que, dirigindo-se ao País e ao Mundo, indicou as suas ideias e intenções que logo se revelaram anticlericais, positivistas, jacobinas etc. Em 10 de outubro, o Governo Provisório põe em vigor as antigas leis de Pombal que expulsaram os Jesuítas de Portugal e o decreto ditatorial liberal que suprimiu todos os conventos, mosteiros e estabelecimentos religiosos. Instituiu-se o divórcio, a secularização dos cemitérios, proibiu-se o ensino religioso nas escolas primárias e decretou-se a separação da Igreja do Estado.
          Padre Albino, fiel aos princípios dos Santos Evangelhos e dos postulados da Santa Igreja, não se dobrou diante da prepotência dos homens, enfrentando tudo e todos. Mas, como sempre acontece, fora vencido. Condenado à prisão e degredo na África, foi obrigado a fugir para que a Igreja não perdesse um bom combatente.

          Arrancou a sua batina para não ficar sem ela e a vida, deixou crescer o bigode, vestiu terno modesto e fugiu. Empreendeu uma terrível jornada, a pé, da cidade de Amarante à cidade de Braga, chegando perder a unha do dedo grande do pé esquerdo. De Braga, partiu de trem para Monção, na divisa da Espanha, onde ficou na casa do padre que foi seu vigilante no Seminário Maior. Este sacerdote conseguiu que Padre Albino, através do rio Minho, fosse para Salva Terra dos Magos. Em seguida, morou em Tuí, pequena vila espanhola, aguardando o momento oportuno para deixar sua Terra. E foi rápido. Estava ancorado no porto de Vigo o vapor "Zelândia", ostentando a bandeira brasileira, destinado a proteger os foragidos desejosos de imigrar para o Brasil. Padre Albino tomou o navio com destino ao Brasil.

          CHEGADA AO BRASIL
          Em 21 de setembro de 1912, com 30 anos, desembarcou no Rio de Janeiro. Como padre passou por Jaboticabal, Jaú, Barra Bonita e, finalmente, Catanduva, em 28 de abril de 1918, onde ficou até sua morte, em 19 de setembro de 1973, aos 91 anos de idade.
          Curiosamente, Padre Albino não foi bem recebido pelos catanduvenses, que choravam a saída do padre Caputo, muito popular. As próprias autoridades olhavam o padre português com certa prevenção, pois era reservado, austero, nobre e circunspecto. Nunca foi orgulhoso. Quando passava pelas ruas, sempre humilde e recolhido, não era compreendido pelo povo. Quantas vezes, ao passar pelas ruas, recebia insultos. Alguns tossiam propositadamente e escarravam perto de seus pés. Entretanto, ele não se revoltava. Suportava tudo calado e sem perder a calma. Nem sequer fazia cara feia.
          O seu primeiro inimigo gratuito foi o próprio sacristão. Este, acostumado com o primeiro vigário, que tudo deixava em suas mãos um tanto ligeiras não se conformava com a atitude enérgica do segundo vigário, que sabia governar a Igreja e as esmolas dadas pelo povo para a construção da Matriz. Procurou mesmo difamar, perante o povo, o sério e piedoso padre. Chegou ao cúmulo de dizer que ele era ladrão de galinhas.

          A CONSTRUÇÃO DA MATRIZ, DO HOSPITAL E DAS FACULDADES
          No seu segundo ano em Catanduva, Padre Albino iniciou as obras da Igreja Matriz. Para isso saiu, pelas ruas da cidade, pelos sítios, buscando donativos: debaixo de sol ou chuva; a pé, a cavalo, de carro; de dia e de noite, passando fome e sede. E sofrendo decepções. Com muitas dificuldades angariou os donativos necessários, pelos sítios principalmente, e contando mais com os paroquianos pobres. Assim terminou a obra, para espanto geral de todos. Foi também graças a Padre Albino que a Igreja Matriz ganhou as telas do grande pintor brasileiro Benedito Calixto, o que incluiu a cidade no roteiro turístico do Estado de São Paulo.

          Em 1926 inaugurou a Santa Casa de Misericórdia, hoje Hospital Padre Albino. Os trabalhos e dificuldades com que construíra a Matriz diminuíram consideravelmente, pois o povo já conhecia e amava intensamente o seu vigário. Todos confiavam nele, convictos de sua honestidade e capacidade. Nesta obra ele já contava com a ajuda das pessoas abastadas da cidade. O hospital cresceu com a construção do prédio da Maternidade. No início da década de 50 inaugura o pavilhão infantil.

          Ligado à sua preocupação com a assistência aos idosos, o Lar dos Velhos foi a terceira obra de Padre Albino em Catanduva, inaugurado em 29 de junho de 1929.
          Em 1969 vem o ciclo das escolas, a partir da Faculdade de Medicina, ideia e sonho de Padre Albino para dar destino ao hospital após a sua morte, sua grande preocupação. Para isso, porém, a primeira medida a ser tomada era a da transformação da Associação Beneficente de Catanduva em Fundação para se organizar a mantenedora das faculdades. Após o cumprimento de toda a burocracia, aos 29 de março de 1968, com sua primeira reunião, nascia a Fundação Padre Albino. A seguir vieram o Colégio Comercial Catanduva (1971), a Faculdade de Administração de Empresas (1972) e a Faculdade de Educação Física (1973).

          A VELHICE E A DOENÇA
          Nos últimos anos, em decorrência de moléstias e da debilidade física, Padre Albino deixou a Casa Paroquial e passou a residir no próprio hospital, no famoso quarto 84. Permanecia sentado na primeira sala à direita da entrada. Em lugar das pesadas botinas, passou a usar sandálias, que eram mais leves; em vez da batina preta, quente, uma espécie de guarda-pó cinza, com o colarinho eclesiástico; não mais com o tradicional guarda-chuva, mas curvado, cada vez mais, arrimado à bengala. Caminhava com dificuldades pelos corredores do hospital. Chegava a tumultuar a vida do hospital porque observava toda a movimentação da portaria e nunca permitia que um doente que chegasse não fosse atendido a qualquer hora.

          A primeira fratura do colo de fêmur aconteceu em 1958 e Padre Albino tinha 75 anos. A grave fratura, aliada a um problema intestinal, recomendava que fosse transferido para São Paulo. Operado pelo prof. Godoi Moreira, permaneceu seis meses internado no Hospital Beneficência Portuguesa e seu tratamento foi todo custeado pela comunidade. Sua leitura diária era o jornal O Estado de São Paulo. No fim de cada ano dava à Fundação Padre Albino uma quantia de um valor que seus familiares, de Portugal, lhe remetiam anualmente e que mantinha em conta na Caixa Econômica. Levantava-se às 5 horas, almoçava às 11 horas e jantava às 17 horas.

          A MORTE
          No seu último dia de vida, Padre Albino tomou pela manhã, às 6 horas, o desjejum: leite, pão e bolacha. Às 10 horas o almoço: um prato de canja, ovo cozido e maçã. Entre as últimas pessoas que recebeu, além de seu colaborador, Dr. Floriano Lima, na manhã do seu falecimento, esteve com ele o Bispo de Rio Preto, Dom Lafayette Libanio, seu grande amigo e superior hierárquico durante muitos anos. Após a saída do Bispo, disse ao seu enfermeiro que desejava virar de lado para descansar um pouco da posição em que estava. Ao ajudá-lo, o enfermeiro notou que ele estava perdendo a cor. Irmã Anália Nunes foi chamada e pediu que o Dr. Bento Moretto viesse imediatamente. Padre Albino tinha sofrido uma espécie de desmaio.

          Auscultando-o, Dr. Bento percebeu que a pulsação foi caindo; o coração, pulsando fraco e lentamente, ia parando. O coração de Padre Albino foi parando, parando, parou. Era o dia 19 de setembro de 1973, quarta-feira, próximo das 12 horas.
          O corpo de Padre Albino, embalsamado, ficou exposto em câmara ardente no átrio da capela do hospital. Às 16 horas deste mesmo dia foi trasladado para a Igreja Matriz, onde foi celebrada missa de corpo presente pelo Bispo e todos os vigários da Diocese. O sepultamento foi realizado no dia 21, às 16 horas, sendo o corpo transportado em carro do Corpo de Bombeiros para o Cemitério Nossa Senhora do Carmo, com acompanhamento calculado para perto de 30 mil pessoas.
          <br><br>
          🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [],
    reliquias: '',
    oracao: `Pai de bondade e misericórdia, nós, vossos filhos e filhas, vos suplicamos, se for de Vossa santa vontade poder reconhecer Vossa Santidade e Vossos dons na vida de Padre Albino, que vos serviu neste mundo como presbítero inteiramente dedicado a conduzir vosso povo à Vossa graça santificadora.

    Nós somos testemunhas de que sua vida foi inteiramente consagrada à evangelização e promoção da vida dos mais pobres e necessitados, sobretudo através da criação de organismos e instituições de saúde, educação e obras sociais.

    Senhor, ajuda-nos a seguir o testemunho de vida de Padre Albino para que, imitando seus exemplos, sejamos também nós construtores do Vosso Reino. Que possamos alcançar do Vosso paternal amor a graça de que tanto necessitamos (faça aqui seu pedido) para, cada vez mais, consagrarmos a Vós nossas vidas.

    — Pai-nosso, Ave-Maria e Glória.
    (Com aprovação eclesiástica)

    Aos que receberam ou vierem a receber graças pela intercessão de Padre Albino solicitamos a gentileza de nos comunicar, pois será de grande importância para o Processo de Beatificação que está em andamento. Rezemos para que em breve o Venerável Padre Albino Alves da Cunha e Silva receba a tão merecida glória e honra dos altares.

    Para nos informar sobre graças alcançadas ligue:
    Cúria Diocesana de Catanduva/SP - (17) 3521-6501
    ou procure o pároco de sua Paróquia.`,
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'alderigi-maria-torriani': {
    nome: 'Alderigi Maria Torriani',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/MonsenhorA.png',
    bio: `SERVO DE DEUS PADRE ALDERIGI MARIA TORRIANI

      É assim que muitos fiéis se recordam do Servo de Deus Padre Alderigi Maria Torriani, sacerdote da Arquidiocese de Pouso Alegre – MG, falecido em 1977: Um homem de Deus, perseverante na oração; um homem da Igreja totalmente dedicado ao progresso espiritual do seu povo; um homem que se fez pobre para doar-se inteiramente aos pobres; um presente de Deus que passou por este mundo fazendo o bem.

      O DESPERTAR DE UMA VOCAÇÃO
      Filho de imigrantes italianos, Alderigi nasceu em Jacutinga (MG) em 13 de novembro de 1895. Desde pequeno, sentiu-se chamado por Deus para a vida sacerdotal. Cultivou a semente da vocação através da oração, da vida comunitária em sua paróquia e da constante participação nos sacramentos.
      Depois dos estudos no Seminário de Pouso Alegre, foi ordenado sacerdote em 1920. Já no início de seu ministério sacerdotal, exerceu importantes funções. Em Pouso Alegre (MG), foi Vigário Cooperador na Catedral e Diretor do Ginásio Diocesano, atual Colégio São José. Logo depois, foi nomeado Vigário de Brasópolis (MG), onde permaneceu por alguns meses. Por um curto período, esteve também à frente da paróquia de Camanducaia (MG), onde lançou sementes de reconciliação e de paz.

      UM PASTOR ZELOSO EM SANTA RITA DE CALDAS
      Em 1927, foi transferido para Santa Rita de Caldas (MG). Esta pequena e pacata cidade jamais imaginava que, ao receber aquele jovem sacerdote, estaria acolhendo um astro que irradiaria, de maneira clara e evidente, a bondade do grande Senhor e Salvador Jesus Cristo.
      De fato, Padre Alderigi, com sabedoria e amor, dedicou toda sua vida ao povo desta paróquia e aos peregrinos que por ali passavam. A pequena igreja matriz tornou-se um santuário onde milhares de peregrinos iam para apresentar a Deus, por intercessão de Santa Rita, seus pedidos e necessidades.

      Ao mesmo tempo, neste santuário, encontravam a acolhida calorosa do bom pároco que, com sua batina preta, seu olhar penetrante, seu sorriso sincero e transparente, sua pregação catequética e sua marcante personalidade, a todos encantava. Prova disto é que, certa vez, uma pessoa amiga escreveu-lhe um bilhetinho dizendo: “Monsenhor, sorria ao ser fotografado!”, ao que ele respondeu com uma frase que marcou sua vida: “A minha vida é um sorriso: sou pároco de Santa Rita de Caldas!”.

      APÓSTOLO DO CONFESSIONÁRIO
      Este santuário, graças ao zelo do bom pastor Padre Alderigi, tornou-se lugar de muitas graças e copiosas bênçãos de Deus. Mas, antes de celebrar a Santa Missa ou dar a bênção ao povo, Padre Alderigi convidava todos a um profundo exame de consciência e a se confessarem.
      Desse modo, ele foi apóstolo do confessionário. Nele, passava horas e horas atendendo, com carinho e, às vezes, energicamente, as confissões dos fiéis. Ele sabia que somente um coração que reconhece seus pecados diante de Deus e dos irmãos e recebe o sacramento da penitência pode estar aberto para acolher as graças que vêm dos céus!
      Por isso, o santuário e o confessionário tornaram-se sua casa. Ali, nos domingos e festas, Padre Alderigi se alimentava e passava o dia todo esperando e acolhendo as pessoas.

      REFÚGIO DOS NECESSITADOS E CARIDADE
      Além de celebrar os mistérios da fé católica, Padre Alderigi cuidava também das necessidades materiais de seus fiéis. Todos aqueles que passavam por aflições espirituais e temporais recorriam a ele e sempre encontravam uma via segura para solucionar seus problemas. Suas grandes mãos, além de abençoar, nada retinham para si. Tudo o que possuía era distribuído a quem pedia.
      Para acudir seus pobres, Padre Alderigi abriu uma conta na farmácia. Quando alguém o procurava e pedia alguma coisa, imediatamente, ele dizia para que comprasse o necessário e colocasse em sua conta. Ao final do mês, quando não tinha dinheiro para pagar tais gastos, Padre Alderigi rezava e colocava os boletos debaixo da imagem de Santa Rita. Sua confiança e esperança em Deus eram de tal modo inabaláveis que nunca lhe faltou o dinheiro necessário para saldar seus débitos.

      TRIGO LANÇADO NA TERRA: A PÁSCOA
      No final de sua vida, embora doentio e já cansado pelo peso da idade, Padre Alderigi continuava seus compromissos pastorais com dedicação e alegria. Muitas são as fotos daquele tempo que o retratam celebrando missas, casamentos e batizados sentado em uma cadeira, já que não podia se manter de pé.
      Por alguns dias, esteve internado em Poços de Caldas (MG), mas teve alta e quis voltar para o seio de seu amado povo. Chegando na cidade, passou pelo santuário e foi para sua pobre casa. Pelas 23h30 repousou na paz do Senhor, com seus 82 anos, no dia 3 de outubro de 1977. A notícia abalou a cidade que parecia ter perdido um pai que a sustentou por tantos anos na fé e na caridade.
      No dia seguinte, uma multidão de pessoas se reuniu para a missa de corpo presente e para o seu sepultamento na capela de São Miguel Arcanjo, no cemitério da cidade.

      FAMA DE SANTIDADE
      Em vida, Padre Alderigi já possuía uma difundida fama de santidade. No dia de sua morte, os poucos pertences que possuía foram divididos entre o povo que queria conservar uma relíquia do querido pároco. Ainda hoje, as pessoas levam tais relíquias até aqueles que se encontram gravemente enfermos e muitíssimos são os relatos de graças alcançadas através da intercessão de Padre Alderigi. Depois de sua morte, tal fama continua a se espalhar, atingindo não só o sul de Minas, mas todo o Brasil.

      O PROCESSO DE BEATIFICAÇÃO E CANONIZAÇÃO
      Devido a esta tão grande fama de santidade, o Arcebispo de Pouso Alegre, Dom Ricardo Pedro Chaves Pinto Filho, decretou a introdução do Processo de Canonização. A partir da abertura deste processo, Padre Alderigi passou a ser chamado Servo de Deus.

      * **Exumação e Translado (2008):** Foi realizada a exumação dos restos mortais do Servo de Deus para o reconhecimento canônico e o translado do cemitério para o santuário de Santa Rita. Essa celebração foi realizada de 01 a 04 de agosto de 2008. Os restos mortais foram transladados em procissão para o Santuário, onde repousam para sempre junto ao povo que ele tanto amou.
      * **Encerramento da Fase Diocesana (2018):** Em 22 de dezembro de 2018, foi celebrado o encerramento da fase Diocesana do processo no Santuário de Santa Rita de Caldas, com a participação do clero arquidiocesano e de centenas de fiéis.

      A FASE ROMANA E ATUALIDADE
      Após o início da fase romana, a Congregação para as Causas dos Santos nomeou um relator que acompanhou a redação da "Positio" (texto que conta sobre a vida e virtudes de santidade). Segundo o postulador da causa, Paolo Vilotta, a cópia pública foi entregue para a redação da "Positio super virtutibus".
      Vilotta ressalta que a canonização depende de circunstâncias legais e tempo, mas reforça: "Nunca devemos pensar que o trabalho pela causa da canonização termina quando os procedimentos do inquérito estiverem em Roma. O coração pulsante e vivo permanece sempre o da diocese competente. Portanto, é necessário continuar a divulgar a vida e as virtudes do Monsenhor Alderigi Torriani".

      Padre Alderigi Maria Torriani deixou um legado que continua vivo na Arquidiocese de Pouso Alegre. O exemplo de Padre Alderigi nos lembra que a santidade é construída em ações diárias de amor, serviço e sacrifício.

      Conte-nos de uma graça recebida através da oração: https://alderigi.com.br/graca-recebida-atraves-da-oracao/`,
    milagres: [],
    reliquias: '',
    oracao: `Ó Deus, Uno e Trino, que, em vossa infinita bondade, inspirastes a vosso servo Alderigi, sacerdote exemplar, um grande desejo de santidade e o cumulastes de tantas graças, concedei-me imitar seu ardente amor ao Santíssimo Sacramento, sua devoção filial a Maria Santíssima, sua entrega total ao serviço da Igreja, seu espírito de sacrifício, seu zelo pelas vocações sacerdotais e religiosas e sua dedicação generosa para com os pobres.

    Senhor, eu vos peço, em conformidade com vossa santíssima vontade, que ele seja incluído no número dos vossos santos e que, por sua intercessão, eu venha a alcançar a graça que solicito. Amém.

    (Diga, neste momento, a graça que deseja alcançar!)

    — Pai Nosso, Ave Maria e Glória ao Pai.
    (Com aprovação eclesiástica)`,
    cor: 'red',
    categoria: 'servos'
  },

  'aleixo-delgado': {
    nome: 'Aleixo Delgado',
    titulo: 'Os Quarenta Mártires do Brasil',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/40M.png',
    bio: `Nascido em Elvas, Portugal, em 1555. Filho de um cego, a quem servia de guia. Como era pobre, entrou para o Colégio de Évora servindo e estudando ao mesmo tempo.

      Passando o Pe. Inácio por Évora, admitiu-o na Companhia de Jesus para ir para o Brasil, com apenas 14 anos de idade. Era bom cantor. Foi lançado vivo ao mar.
      <br><br>
🎥 <span class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</span>`,
    milagres: [],
    reliquias: '',
    oracao: 'Senhor, Deus dos Exércitos, concedei-nos pelos méritos, exemplo e intercessão dos santos 40 mártires de Sebaste que sejamos leais combatentes no Vosso amor, unidos, soldados uns aos outros pela mesma Fé, para vitoriosamente queimar tudo aquilo que, na carne, possa nos consumir o espírito. Por Nosso Senhor Jesus Cristo e Maria, Nossa e Vossa Mãe, que não hesitou em imolar o Seu Filho natural para a salvação dos Seus filhos adotados, acompanhando-O e apoiando-O até o fim. Amém.',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'alfredo-bernardo-maria-haasler': {
    nome: 'Alfredo Bernardo Maria Haasler',
    titulo: 'Missionário do Sertão',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/PeAlfredo.png',
    bio: bio = `
<h3>Servo de Deus Padre Alfredo Haasler (1907–1997)</h3>
<h4>O "Missionário do Sertão"</h4>

<p>Conhecido como "Missionário do Sertão" e comparado por muitos à Irmã Dulce por sua dedicação aos pobres, Padre Alfredo Haasler viveu por mais de 50 anos no sertão da Bahia. Missionário da Ordem dos Cistercienses, ele marcou a história de Jacobina e região com um legado de obras sociais, educativas e uma vida de virtudes heroicas.</p>

<h3>Origem e Vocação</h3>
<p>Bernardo Maria Haasler nasceu em 5 de agosto de 1907, na Áustria. Filho de Ana e Josef Haasler, era o caçula de sete irmãos. Sua infância foi marcada pela fé e pela superação:</p>
<ul>
  <li><strong>Vida Monástica:</strong> Cresceu em uma casa anexa ao Mosteiro Cisterciense de Heiligenkreuz (Baixa Áustria), onde seu pai era sacristão.</li>
  <li><strong>Infância:</strong> Perdeu o pai aos 2 anos de idade. A mãe, viúva, criou os filhos mantendo firme a tradição católica.</li>
  <li><strong>O Chamado:</strong> Inspirado pelas celebrações de envio de missionários que assistia na infância, Bernardo ingressou na Ordem Cisterciense em 1928, adotando o nome religioso de Alfredo.</li>
</ul>
<p>Foi ordenado padre em 1933, aos 26 anos. Após uma breve missão nos Estados Unidos (1934) e um retorno à Áustria para atuar no colégio cisterciense (1935), recebeu o chamado que mudaria sua vida: a missão no Brasil.</p>

<h3>Chegada ao Brasil e Desafios</h3>
<p>Em 1938, Padre Alfredo embarcou de navio para o Brasil com a missão de assumir o cargo de vigário na Paróquia de Santo Antônio, na Igreja Matriz de Jacobina (a 337 km de Salvador).</p>
<p><strong>O Contexto de Jacobina na época:</strong> A região vivia sob a predominância de uma economia agrária de subsistência e extração de ouro, marcada por graves crises econômicas, secas, pobreza extrema e desigualdade social. O poder político era concentrado nas elites locais e havia escassez de saúde e educação.</p>
<p><strong>Resistência Inicial:</strong> A chegada não foi fácil. Padre Alfredo enfrentou a desconfiança do povo (devido a experiências anteriores negativas com religiosos estrangeiros expulsos, como franciscanos e jesuítas) e perseguição por parte da elite local, chegando a ser preso. No entanto, através de acordos estratégicos e muita persistência, ele conseguiu reverter a situação, obtendo apoio e doações de terras para viabilizar suas obras.</p>

<h3>A Obra Social e Evangelizadora</h3>
<p>Padre Alfredo guiava-se por um princípio claro, relembrado pelo amigo Padre José Hehenberger: <em>“Não posso evangelizar em uma região onde o povo não sabe ler e passa fome; antes de evangelizar, é preciso cuidar dos pobres.”</em></p>
<p><strong>Atuação Prática:</strong></p>
<ul>
  <li><strong>Educação:</strong> Fundou mais de 45 escolas pelo sertão de Jacobina.</li>
  <li><strong>Saúde e Assistência:</strong> Distribuía medicamentos gratuitos aos doentes e utilizava o dinheiro enviado pelo mosteiro da Áustria (destinado a férias na terra natal) para ajudar os necessitados locais.</li>
  <li><strong>Itinerância:</strong> Percorria toda a região montado em um jumento, sem luxos, visitando uma comunidade por dia para levar a Palavra de Deus e auxílio material.</li>
</ul>
<p>Sua figura era descrita como rígida com as leis da Igreja, mas extremamente caridosa. Padre Áureo Sampaio, ex-sacristão, define: "Quem conheceu o Padre Alfredo sabe que foi um santo vivo. Um trabalho idêntico ao que a Irmã Dulce fazia em Salvador, ele fazia aqui."</p>

<h3>Rumo aos Altares: O Processo de Beatificação</h3>
<p>Padre Alfredo faleceu em 16 de junho de 1997, deixando uma fama de santidade que perdura até hoje. Em resposta aos pedidos do povo, a Diocese de Senhor do Bonfim iniciou oficialmente o processo de beatificação em 2022.</p>
<p><strong>Status Atual (Outubro de 2024):</strong> O processo avançou uma etapa crucial com a emissão do ‘Nihil Obstat’ (nada impede) pela Congregação para a Causa dos Santos, no Vaticano. Atualmente, ele detém o título de <strong>Servo de Deus</strong>.</p>
<p><strong>Próximos Passos (Fase Diocesana):</strong></p>

</ul>

<p><em>“Servo de Deus Alfredo Haasler, iluminai-nos!”</em></p>
`,
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'aloisio-sebastiao-boeing': {
    nome: 'Aloísio Sebastião Boeing',
    titulo: 'Fundador da Fraternidade Mariana do Coração de Jesus',
    genero: 'Masculino',
    data: '',
    imagem: './Imagens/PeAloisio.png',
    bio: `
<h3>Venerável Padre Aloísio Sebastião Boeing (1913–2006)</h3>
<h4>Sacerdote, Mestre de Noviços e Fundador da Fraternidade Mariana do Coração de Jesus</h4>

<p>Conhecido pelo seu carisma, grande dedicação à Igreja e fama de santidade, Padre Aloísio Sebastião Boeing dedicou sua vida à formação de sacerdotes, ao acolhimento dos fiéis e à fundação de uma comunidade religiosa. Em 23 de fevereiro de 2023, o Papa Francisco reconheceu suas virtudes heroicas, declarando-o <strong>Venerável</strong>.</p>

<h3>Origem, Família e Infância</h3>
<p>Aloísio nasceu no dia 24 de dezembro de 1913, às 23h, em Vargem do Cedro, na época município de Imaruí (SC), hoje pertencente a São Martinho. Foi o primogênito de João Boeing e Josephina Effting Boeing. Foi batizado em 26 de dezembro do mesmo ano com o nome de Sebastião (na religião adotaria Aloísio) e crismado em 22 de janeiro de 1914, na Paróquia São Sebastião.</p>
<p>Cresceu em um lar de pais piedosos, de missa e terço diários, que partilhavam o que tinham com os necessitados. A família era numerosa e musical; gostavam de cantar canções alemãs nos recreios e viagens. Além de Aloísio, a família foi um celeiro de vocações:</p>
</ul>
<p>Padre Aloísio costumava dizer: <em>"Para alguém fazer essa viagem, era preciso ter vocação. E se alguém ainda não tivesse vocação, certamente a teria no fim da viagem..."</em>.</p>

<h3>Formação e Ordenação Sacerdotal</h3>
<p>Sua formação ocorreu basicamente em Brusque (SC), onde fez a primeira profissão religiosa em 16 de janeiro de 1934, e Taubaté (SP), onde cursou Teologia (1938–1941). Emitiu os votos perpétuos em 16 de janeiro de 1938.</p>
<p>Foi ordenado sacerdote em <strong>1º de dezembro de 1940</strong>, em Taubaté, por Dom André Arcoverde. A cerimônia foi marcada pelo sacrifício: os ordenandos caminharam 5 km a pé até a Catedral sob sol forte e voltaram também a pé, fatigados de fome e sede.</p>
<p><strong>A Primeira Missa (8 de dezembro):</strong> Viajou para Vargem do Cedro para sua Primeira Missa Solene. A viagem foi cheia de dificuldades; viajou de trem, ônibus e caminhão. O caminhão quebrou e chegaram com três horas de atraso, mas foram recebidos com festa. Sua mãe, ao abraçá-lo, disse apenas: <em>"- Finalmente!"</em>.</p>

<h3>Trajetória Pastoral e Educativa</h3>
<p>Iniciou seu ministério na Paróquia Divino Espírito Santo em Varginha (MG). Em seguida, retornou a Corupá (SC) como professor e orientador espiritual por nove anos. Era conhecido por sua disciplina (levantava às 5h para nadar no rio, inverno ou verão) e pela amabilidade com os seminaristas.</p>
<p><strong>O Mestre de Noviços (Jaraguá do Sul):</strong></p>
<p>Dedicou grande parte de sua vida à formação em Jaraguá do Sul, atuando como Mestre de Noviços durante 24 anos. Tornou-se um formador exímio, firme, devoto e zeloso. Por sua iniciativa e grande devoção mariana, o Noviciado recebeu o nome de Nossa Senhora de Fátima.</p>

<h3>O Carisma do Acolhimento e Aconselhamento</h3>
<p>O maior dom que Deus lhe concedeu foi o aconselhamento espiritual. Padre Aloísio nunca deixou de atuar no campo pastoral:</p>
<ul>
  <li><strong>Disponibilidade Total:</strong> Dia e noite, atendia em sua casa ou por telefone. Saía da mesa de refeições para atender quem batia à porta.</li>
  <li><strong>Conselheiro Universal:</strong> Jovens, casais, religiosos, empresários, pobres e até bispos o procuravam. Não impunha nada; queria somar e ajudar.</li>
  <li><strong>Bênçãos e Curas:</strong> No fim da vida, mesmo doente e de cama, atendia deitado os casos urgentes. Era ungido com o poder da intercessão e sentia profunda compaixão pelos doentes e idosos.</li>
</ul>
<p>Dom Orlando Brandes definiu: <em>"Padre Aloísio foi como uma flor escondida que exalou seu perfume em todas as direções."</em></p>

<h3>Fundação da Fraternidade Mariana do Coração de Jesus</h3>
<p>Inspirado a formar um grupo de moças que vivessem o Evangelho no seio da comunidade, Padre Aloísio fundou a Fraternidade Mariana do Coração de Jesus em <strong>2 de agosto de 1974</strong>, em Jaraguá do Sul.</p>
<p><strong>A Espiritualidade da Fraternidade:</strong></p>
<ul>
  <li><strong>Carisma:</strong> Viver a vida evangélica na realidade do mundo, com espírito de amor, reparação e misericórdia. O sacrário é a meta de todo o agir do grupo.</li>
  <li><strong>Modelos:</strong> A Família de Nazaré (Jesus submisso e Maria guardando tudo no coração) e a Família de Betânia (Lázaro, Marta e Maria - união de oração e serviço).</li>
  <li><strong>Histórico:</strong> Inicialmente eram quatro jovens professoras e estudantes. O grupo cresceu, tornando-se uma Associação Pública de Fiéis reconhecida pela Igreja, atuando como o "Cirineu e a Verônica" dos amores de Pe. Aloísio: os pecadores, os aflitos, os pobres e os sacerdotes.</li>
</ul>

<h3>Anos Finais em Nereu Ramos</h3>
<p>Em 1984, Padre Aloísio mudou-se para o bairro Nereu Ramos (Jaraguá do Sul). Ali viveu até o fim de sua vida como vigário da Capela do Rosário e diretor do Centro Shalom. Dedicou-se intensamente à Fraternidade e ao atendimento incansável do povo que formava filas para vê-lo.</p>
<p>Faleceu santamente no dia <strong>17 de abril de 2006</strong>. Sentindo a partida, disse: <em>"Vocês me encontrarão na Eucaristia"</em>. Foi sepultado no jardim ao lado da Igreja Nossa Senhora do Rosário, local que hoje é ponto de orações e peregrinação.</p>

<h3>Rumo aos Altares: O Processo de Beatificação</h3>
<p>A fama de santidade de Padre Aloísio cresceu após sua morte, com muitos relatos de graças alcançadas. Todo dia 17 de cada mês celebra-se a missa da Misericórdia em sua memória.</p>
<p><strong>Cronologia do Processo:</strong></p>
<ul>
  <li><strong>2013:</strong> Abertura da Fase Diocesana na Catedral de Joinville.</li>
  <li><strong>2015:</strong> Encerramento da Fase Diocesana e envio à Roma.</li>
  <li><strong>2023 (23 de Fevereiro):</strong> Papa Francisco promulga o decreto reconhecendo suas <strong>Virtudes Heroicas</strong>, declarando-o <strong>Venerável</strong>.</li>
</ul>
<p><strong>Próximos Passos:</strong> Aguarda-se a comprovação de um milagre para a Beatificação e, posteriormente, um segundo milagre para a Canonização.</p>

<p><em>"Perdemos um padre muito querido, mas ganhamos um santo no céu!"</em> (Pe. Osnildo C. Klann, SCJ)</p>
`,

    milagres: [],
    reliquias: '',
    oracao: 'Deus de amor e misericórdia, chamastes o Venerável Padre Aloísio, para continuar a obra de vosso Filho. Como fiel sacerdote do Coração de Jesus, ele acolhia, aconselhava e abençoava, como pai e amigo, procurando conduzir as pessoas ao encontro de Vosso Filho Jesus Cristo Eucarístico e da Virgem Maria. Confiando em sua intercessão, peço-vos a graça de que necessito,E para o louvor e a glória da Santíssima Trindade, fazei que ele seja elevado à honra dos altares. Amém',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'amaro-vaz': {
    nome: 'Amaro Vaz',
    titulo: 'Os Quarenta Mártires do Brasil',
    genero: 'Masculino',
    data: ' É celebrado dia 03 de outubro',
    imagem: './Imagens/40M.png',
 bio: `Nascido em Benviver, distrito do Porto, Portugal, em 1553, o Beato Amaro Vaz entrou para a Companhia de Jesus com apenas 16 anos. Realizou sua preparação missionária na Quinta de Val de Rosal (Caparica), juntando-se à expedição do Pe. Inácio de Azevedo rumo ao Brasil.

Em 1570, durante a viagem, a nau "Santiago" foi interceptada por corsários huguenotes nas Ilhas Canárias. Amaro Vaz foi apunhalado pelos invasores e, em seguida, atirado ainda vivo ao mar, consumando seu martírio junto aos demais companheiros. É venerado como um dos 40 Mártires do Brasil.`,
    milagres: [],
    reliquias: '',
    oracao: 'Senhor, Deus dos Exércitos, concedei-nos pelos méritos, exemplo e intercessão dos santos 40 mártires de Sebaste que sejamos leais combatentes no Vosso amor, unidos, soldados uns aos outros pela mesma Fé, para vitoriosamente queimar tudo aquilo que, na carne, possa nos consumir o espírito. Por Nosso Senhor Jesus Cristo e Maria, Nossa e Vossa Mãe, que não hesitou em imolar o Seu Filho natural para a salvação dos Seus filhos adotados, acompanhando-O e apoiando-O até o fim. Amém.',
    cor: 'yellow',
    categoria: 'beatos'
  },

'ambrosia-sabatovych': {
  nome: "Ambrósia Sabatovych",
  titulo: 'Irmã Ambrósia',
  genero: 'Feminino',
  data: '28 de fevereiro',
  imagem: './Imagens/Ambrosina.png',

  bio: `
    <p><strong>Nascimento e Imigração:</strong> Nascida Ana Sabatovych em 02 de agosto de 1894, na aldeia de Turynka (Zhovkva), Ucrânia. Filha de Nicolau Sabatovycz e Justina Skoropad, lavradores que, buscando melhores condições de vida, imigraram para o Brasil em setembro de 1895. A família estabeleceu-se em Arroio Paulista, interior de Prudentópolis (PR), onde Ana cresceu educada na fé cristã e na cultura de seus antepassados.</p>

    <p><strong>Vocação Religiosa:</strong> Em 1911, a jovem Ana testemunhou a chegada das primeiras Irmãs Missionárias Servas de Maria Imaculada ao Brasil. Inspirada pelo exemplo delas e sentindo o chamado divino, ingressou na Congregação em 28 de agosto de 1917, aos 22 anos. Recebeu o nome religioso de Ambrósia e emitiu seus Votos Perpétuos em 22 de dezembro de 1925.</p>

    <p><strong>Vida Missionária:</strong> Irmã Ambrósia dedicou sua vida ao serviço do próximo. Atuou como professora, catequista, enfermeira e nos serviços domésticos. Passou por diversas comunidades, incluindo Iracema (SC), Colônia Marcelino (onde ajudou a iniciar a comunidade em 1931), Curitiba, Dorizon e, finalmente, Rio das Antas (Cruz Machado - PR).</p>

    <p><strong>Martírio e Heroísmo:</strong> Na madrugada de 28 de fevereiro de 1943, um incêndio devastador atingiu o orfanato em Rio das Antas. Após alertar as outras irmãs para que se salvassem, Irmã Ambrósia correu para tentar resgatar as alunas internas que dormiam no andar superior. As chamas consumiram a escada, impedindo sua saída. Ela faleceu num ato de extrema caridade, abraçada à menor das órfãs, de apenas cinco anos. Seis meninas também pereceram no incêndio.</p>

    <p><strong>Processo de Beatificação:</strong> Sua fama de santidade cresceu devido ao seu sacrifício heroico e às graças alcançadas por fiéis que visitam seu túmulo. O processo de beatificação foi aberto oficialmente em 30 de maio de 2008 e retomado com vigor em 2024.</p>
  `,

  milagres: [],
  reliquias: 'Seus restos mortais encontram-se no cemitério da localidade de Rio das Antas, em Cruz Machado (PR), local de frequentes peregrinações.',
  oracao: 'Senhor, Jesus Cristo, que dissestes: "Ninguém tem maior amor do que aquele que dá a sua vida pelos seus amigos", aceitai o meu louvor...',
  cor: 'red',
  categoria: 'servos'
},


  'ambrosio-francisco-ferro': {
    nome: "Ambrósio Francisco Ferro",
    titulo: 'Protomártires do Brasil',
    genero: 'Santo',
    data: '03 de outubro',
    imagem: './Imagens/Ambrosio.png',
    bio: `
      <p><strong>Origens e Missão:</strong> Santo Ambrósio Francisco Ferro, natural dos Açores (Portugal), assumiu a missão de ir além-fronteiras para evangelizar. No Brasil, atuou como vigário paroquial da Paróquia Nossa Senhora da Apresentação, localizada no território da atual Arquidiocese de Natal.</p>

      <p><strong>O Bom Pastor:</strong> Como verdadeiro pastor seguindo o exemplo de Jesus, o sacerdote não abandonou seus fiéis diante do perigo. Ele permaneceu unido ao seu rebanho, escolhendo sofrer junto com aqueles que eram perseguidos simplesmente por professarem a fé católica.</p>

      <p><strong>Resistência e Martírio em Uruaçu:</strong> Após o massacre ocorrido na cidade de Cunhaú, Santo Ambrósio e seus paroquianos buscaram abrigo e resistiram por cerca de 16 dias. No entanto, em 3 de outubro de 1645, foram capturados em Uruaçu. O grupo, composto por cerca de 80 pessoas, sofreu torturas brutais. Devido à sua condição sacerdotal, Ambrósio teve uma morte ainda mais humilhante e dolorosa; relatos indicam que as tropas holandesas cortaram as línguas das vítimas para impedí-las de rezar.</p>

      <p><strong>Legado e Canonização:</strong> O martírio de Santo Ambrósio e seus companheiros banhou de sangue o solo potiguar, semeando coragem e santidade. Esse testemunho contribuiu para o florescimento de uma Igreja missionária viva no Nordeste. Ele foi canonizado pelo Papa Francisco em 15 de outubro de 2017, sendo reconhecido como um dos "Protomártires do Brasil", os primeiros a darem a vida pela fé em terras brasileiras.</p>
    `,
    milagres: [], 
    reliquias: 'O Monumento dos Mártires em Uruaçu e a Capela de Cunhaú (Canguaretama) são os principais locais de peregrinação no Rio Grande do Norte.',
    oracao: 'Senhor nosso Deus, que nos fazeis participar do mistério da paixão e morte do vosso Filho através da oferta do martírio, unindo o nosso sangue ao seu preciosíssimo sangue, lavando as vestes da nossa vida neste sangue imaculado, pelo testemunho do venerável Santo Ambrósio Francisco Ferro, sacerdote e Mártir, dai-nos alcançar da vossa infinita bondade o alívio das tristezas presentes, conforto nas nossas tribulações e, de modo especial, alcançar a graça que agora apresentamos (fazer um pedido). Senhor misericordioso, que pelo sacrifício do vosso servo, Santo Ambrósio Francisco Ferro, nos dais um grande intercessor diante da vossa presença, dignai-vos agora e para sempre socorrer-nos nas nossas necessidades.Vós, que viveis e reinais com o Vosso Filho, na unidade do Espírito Amém. Protomártires do Brasil, rogai por nós!',
    cor: 'red',
    categoria: 'santos'
  },

  'amalia-de-jesus-flagelado': {
    nome: 'Amália de Jesus Flagelado',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'ananias-de-paula-vieira': {
    nome: 'Ananias de Paula Vieira',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'anatolia-bodnar': {
    nome: 'Anatólia Bodnar',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'andre-botolameotti': {
    nome: 'André Botolameotti',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'andre-goncalves': {
    nome: 'André Gonçalves',
    titulo: 'Os Quarenta Mártires do Brasil',
    genero: 'Masculino',
    data: ' É celebrado dia 03 de outubro',
    imagem: './Imagens/40M.png',
    bio: `Nascido em Viana de Alvito, Portugal, o Beato Antônio Soares havia realizado seus estudos na Universidade de Évora. Foi admitido na Companhia de Jesus pelo próprio Pe. Inácio de Azevedo, sendo destinado diretamente para a missão no Brasil.

Durante o ataque à nau Santiago em 1570, foi barbaramente apunhalado pelos corsários e, em seguida, lançado ao mar, entregando sua vida como um dos 40 Mártires do Brasil.

<br><br>
🎥 <a href="https://www.youtube.com/watch?v=HImk5BiJuFk" target="_blank" class="text-indigo-600 hover:underline font-bold">Assista ao vídeo sobre sua história</a>`,
    milagres: [],
    reliquias: '',
    oracao: 'Senhor, Deus dos Exércitos, concedei-nos pelos méritos, exemplo e intercessão dos santos 40 mártires de Sebaste que sejamos leais combatentes no Vosso amor, unidos, soldados uns aos outros pela mesma Fé, para vitoriosamente queimar tudo aquilo que, na carne, possa nos consumir o espírito. Por Nosso Senhor Jesus Cristo e Maria, Nossa e Vossa Mãe, que não hesitou em imolar o Seu Filho natural para a salvação dos Seus filhos adotados, acompanhando-O e apoiando-O até o fim. Amém.',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'andre-de-soveral': {
    nome: 'André de Soveral',
    titulo: 'Santo',
    genero: 'Masculino',
    data: 'Festa litúrgica: 3 de outubro',
    imagem: placeholderImage,
    bio: `
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Origens e missão</h3>
      <p>Nascido em 16 de julho de 1572, em São Vicente, André de Soveral ingressou na Companhia de Jesus e participou da missão de evangelização no Nordeste. Em 1597, missionários jesuítas e sacerdotes diocesanos iniciaram esse trabalho no Rio Grande do Norte. Mais tarde, André deixou a Companhia de Jesus e tornou-se sacerdote diocesano.</p>

      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Pároco em Cunhaú</h3>
      <p>André serviu como pároco em Cunhaú, comunidade formada ao redor de um engenho de açúcar, na atual Canguaretama, no Rio Grande do Norte. Na Capela de Nossa Senhora das Candeias, celebrou a missa e acompanhou a comunidade local.</p>

      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">O martírio</h3>
      <p>Em 16 de julho de 1645, durante a missa dominical em Cunhaú, soldados holandeses e indígenas aliados invadiram a capela e atacaram os fiéis. André, que celebrava a missa, rezou com os companheiros pelas pessoas que agonizavam. Ele e os demais mártires identificados naquele episódio morreram durante o ataque.</p>

      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Beatificação e canonização</h3>
      <p>André de Soveral foi beatificado por São João Paulo II em 5 de março de 2000, junto com outros mártires de Cunhaú e Uruaçu. Em 15 de outubro de 2017, o Papa Francisco canonizou André, Ambrósio Francisco Ferro, Mateus Moreira e seus companheiros. A festa litúrgica dos Protomártires do Brasil é celebrada em 3 de outubro.</p>

      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-2">Fontes</h3>
      <ul>
        <li><a href="https://www.vaticannews.va/pt/igreja/news/2021-10/santo-andre-de-soveral-e-companheiros-protomrtires.html" target="_blank">Vatican News — Santo André de Soveral e Companheiros</a></li>
        <li><a href="https://www.vatican.va/archive/aas/documents/2019/acta-marzo2019.pdf" target="_blank">Santa Sé — Decreto de canonização</a></li>
        <li><a href="https://www.vatican.va/news_services/liturgy/libretti/2017/20171015-libretto-canonizzazione.pdf" target="_blank">Santa Sé — Celebração da canonização (2017)</a></li>
      </ul>`,
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'antonieta-farani': {
    nome: 'Antonieta Farani',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'antonio-baracho': {
    nome: 'Antônio Baracho',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'antonio-campelo-de-aragao': {
    nome: 'Antônio Campelo de Aragão',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'antonio-correia': {
    nome: 'Antônio Correia',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'antonio-fernandes': {
    nome: 'Antônio Fernandes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'antonio-ferreira-vicoso': {
    nome: 'Antônio Ferreira Viçoso',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'antonio-soares': {
    nome: 'Antônio Soares',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'antonio-vilela-o-jovem': {
    nome: 'Antônio Vilela (o jovem)',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'antonio-vilela-cid': {
    nome: 'Antônio Vilela Cid',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'antonio-da-rocha-marmo': {
    nome: 'Antônio da Rocha Marmo',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'antonio-de-almeida-lustosa': {
    nome: 'Antônio de Almeida Lustosa',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'assunta-marchetti': {
    nome: 'Assunta Marchetti',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'benigna-cardoso-da-silva': {
    nome: 'Benigna Cardoso da Silva',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'benigna-victima-de-jesus': {
    nome: 'Benigna Victima de Jesus',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'bento-dias-pacheco': {
    nome: 'Bento Dias Pacheco',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'bento-de-castro': {
    nome: 'Bento de Castro',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'bruno-linden': {
    nome: 'Bruno Linden',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'bras-ribeiro': {
    nome: 'Brás Ribeiro',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'barbara-maix': {
    nome: 'Bárbara Maix',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'caetano-de-messina': {
    nome: 'Caetano de Messina',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'cecilia-do-coracao-de-maria': {
    nome: 'Cecília do Coração de Maria',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'clemencia-de-oliveira': {
    nome: 'Clemência de Oliveira',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'companheiros-de-joao-martins': {
    nome: 'Companheiros de João Martins',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'cicero-romao-batista': {
    nome: 'Cícero Romão Batista',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'damiao-de-bozzano': {
    nome: 'Damião de Bozzano',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'daniel-de-samarate': {
    nome: 'Daniel de Samarate',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'danilo-rossato': {
    nome: 'Danilo Rossato',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'diogo-pereira': {
    nome: 'Diogo Pereira',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'diogo-pires': {
    nome: 'Diogo Pires',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'diogo-de-andrade': {
    nome: 'Diogo de Andrade',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'domingos-chohachi-nakamura': {
    nome: 'Domingos Chohachi Nakamura',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'domingos-evangelista-pinheiro': {
    nome: 'Domingos Evangelista Pinheiro',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'domingos-fernandes': {
    nome: 'Domingos Fernandes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },


  'edmundo-armando-saintclair-igreja': {
    nome: 'Edmundo Armando Saint’Clair Igreja',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'egidio-maria-moscini': {
    nome: 'Egídio Maria Moscini',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'eliseu-maria-coroli': {
    nome: 'Eliseu Maria Coroli',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'esposa-antonio-vilela': {
    nome: 'Esposa Antônio Vilela',
    titulo: 'Santo',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'esposa-de-manuel-rodrigues-moura': {
    nome: 'Esposa de Manuel Rodrigues Moura',
    titulo: 'Santo',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'estevao-machado-de-miranda': {
    nome: 'Estêvão Machado de Miranda',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'estevao-de-zurara': {
    nome: 'Estêvão de Zurara',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'eustaquio-van-lieshout': {
    nome: 'Eustáquio van Lieshout',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'ezequiel-ramin': {
    nome: 'Ezequiel Ramin',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'fernando-sanchez': {
    nome: 'Fernando Sánchez',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'filha-1-de-estevao-machado-de-miranda': {
    nome: 'Filha 1 de Estêvão Machado de Miranda',
    titulo: 'Santo',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'filha-2-de-estevao-machado-de-miranda': {
    nome: 'Filha 2 de Estêvão Machado de Miranda',
    titulo: 'Santo',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'filha-de-francisco-dias-o-jovem': {
    nome: 'Filha de Francisco Dias (o jovem)',
    titulo: 'Santo',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'floripes-dornelas-de-jesus---lola': {
    nome: 'Floripes Dornelas de Jesus - Lola',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'francisca-de-paula-de-jesus---nha-chica': {
    nome: 'Francisca de Paula de Jesus - Nhá Chica',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'francisco-expedito-lopes': {
    nome: 'Francisco Expedito Lopes',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'francisco-mendes-pereira': {
    nome: 'Francisco Mendes Pereira',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'francisco-perez-godoy': {
    nome: 'Francisco Pérez Godoy',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'francisco-de-bastos': {
    nome: 'Francisco de Bastos',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'francisco-de-magalhaes': {
    nome: 'Francisco de Magalhães',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'francisco-de-paula-victor': {
    nome: 'Francisco de Paula Victor',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'francisco-alvares': {
    nome: 'Francisco Álvares',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'franz-de-castro-holzwarth': {
    nome: 'Franz de Castro Holzwarth',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'gabriel-paulino-bueno-couto': {
    nome: 'Gabriel Paulino Bueno Couto',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'gabriel-de-frazzano': {
    nome: 'Gabriel de Frazzanò',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'gaspar-alvares': {
    nome: 'Gaspar Álvares',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'gilberto-maria-defina': {
    nome: 'Gilberto Maria Defina',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'ginetta-calliari': {
    nome: 'Ginetta Calliari',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'goncalo-henriques': {
    nome: 'Gonçalo Henriques',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'gregorio-escribano': {
    nome: 'Gregório Escribano',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'guido-vidal-franca-schaffer': {
    nome: 'Guido Vidal França Schäffer',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'helder-pessoa-camara': {
    nome: 'Helder Pessoa Câmara',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'inocencio-lopez-santamaria': {
    nome: 'Inocêncio López Santamaria',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'inacio-joao-dal-monte': {
    nome: 'Inácio João Dal Monte',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'inacio-de-azevedo': {
    nome: 'Inácio de Azevedo',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'inacio-do-santissimo-sacramento-martinez-madrid': {
    nome: 'Inácio do Santíssimo Sacramento Martinez Madrid',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'isabel-cristina-mrad-campos': {
    nome: 'Isabel Cristina Mrad Campos',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'jeronimo-de-castro-abreu-magalhaes': {
    nome: 'Jerônimo de Castro Abreu Magalhães',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'joaquim-arnobio-de-andrade': {
    nome: 'Joaquim Arnóbio de Andrade',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-antonio-de-maria-ibiapina': {
    nome: 'José Antônio de Maria Ibiapina',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'jose-antonio-do-couto': {
    nome: 'José Antônio do Couto',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-calvi': {
    nome: 'José Calvi',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-carlos-parra-pires': {
    nome: 'José Carlos Parra Pires',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-erlei-de-almeida': {
    nome: 'José Erlei de Almeida',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-gumercindo-santos': {
    nome: 'José Gumercindo Santos',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-marchetti': {
    nome: 'José Marchetti',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'jose-silverio-horta': {
    nome: 'José Silvério Horta',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-tiaraju---sepe': {
    nome: 'José Tiaraju - Sepé',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'jose-de-anchieta': {
    nome: 'José de Anchieta',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'jose-do-porto': {
    nome: 'José do Porto',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'joao-adaucto': {
    nome: 'João Adaucto',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'joao-batista-reus': {
    nome: 'João Batista Reus',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'joao-benvegnu': {
    nome: 'João Benvegnú',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'joao-fernandes': {
    nome: 'João Fernandes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'joao-francisco-de-siqueira-andrade': {
    nome: 'João Francisco de Siqueira Andrade',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'joao-lostao-navarro': {
    nome: 'João Lostão Navarro',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'joao-luiz-pozzobon': {
    nome: 'João Luiz Pozzobon',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'joao-maria-cavalcanti-de-brito': {
    nome: 'João Maria Cavalcanti de Brito',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'joao-martins': {
    nome: 'João Martins',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'joao-pedro-de-sexto-sao-joao': {
    nome: 'João Pedro de Sexto São João',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'joao-schiavo': {
    nome: 'João Schiavo',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'joao-da-silveira': {
    nome: 'João da Silveira',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'joao-de-castillo': {
    nome: 'João de Castillo',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'joao-de-mayorga': {
    nome: 'João de Mayorga',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'joao-de-sao-martinho': {
    nome: 'João de São Martinho',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'joao-de-zafra': {
    nome: 'João de Zafra',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'julio-maria-de-lombaerde': {
    nome: 'Júlio Maria de Lombaerde',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'lafayette-da-costa-coelho': {
    nome: 'Lafayette da Costa Coelho',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'leonia-milito': {
    nome: 'Leônia Milito',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'liberio-rodrigues-moreira': {
    nome: 'Libério Rodrigues Moreira',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'lindalva-justo-de-oliveira': {
    nome: 'Lindalva Justo de Oliveira',
    titulo: 'Bem-aventurado',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'luciano-pedro-mendes-de-almeida': {
    nome: 'Luciano Pedro Mendes de Almeida',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'luso-de-barros-matos': {
    nome: 'Luso de Barros Matos',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'luis-cecchin': {
    nome: 'Luís Cecchin',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'luis-correia': {
    nome: 'Luís Correia',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'luis-gonzaga-do-monte': {
    nome: 'Luís Gonzaga do Monte',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'luis-rodrigues': {
    nome: 'Luís Rodrigues',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },


  'manuel-fernandes': {
    nome: 'Manuel Fernandes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'manuel-gomez-gonzalez': {
    nome: 'Manuel Gómez González',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'manuel-pacheco': {
    nome: 'Manuel Pacheco',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'manuel-rodrigues': {
    nome: 'Manuel Rodrigues',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'manuel-rodrigues-moura': {
    nome: 'Manuel Rodrigues Moura',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'manuel-alvares': {
    nome: 'Manuel Álvares',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'marcelo-henrique-camara': {
    nome: 'Marcelo Henrique Câmara',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'marciano-bernardes-da-fonseca': {
    nome: 'Marciano Bernardes da Fonseca',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'marcos-caldeira': {
    nome: 'Marcos Caldeira',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'maria-imaculada-da-santissima-trindade---maezinha': {
    nome: 'Maria Imaculada da Santíssima Trindade - Mãezinha',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-jose-bezerra-de-melo': {
    nome: 'Maria José Bezerra de Melo',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-jose-de-jesus': {
    nome: 'Maria José de Jesus',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-milza-dos-santos-fonseca': {
    nome: 'Maria Milza dos Santos Fonseca',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-teodora-voiron': {
    nome: 'Maria Teodora Voiron',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'maria-teresa-de-jesus-eucaristico': {
    nome: 'Maria Teresa de Jesus Eucarístico',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'maria-de-lourdes-benedita-nogueira-fontao---lourdinha-fontao': {
    nome: 'Maria de Lourdes Benedita Nogueira Fontão - Lourdinha Fontão',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-de-lourdes-guarda': {
    nome: 'Maria de Lourdes Guarda',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-de-lourdes-de-santa-rosa': {
    nome: 'Maria de Lourdes de Santa Rosa',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-do-carmo-da-santissima-trindade': {
    nome: 'Maria do Carmo da Santíssima Trindade',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'maria-do-santissimo-sacramento---zelia-pedreira-abreu-magalhaes': {
    nome: 'Maria do Santíssimo Sacramento - Zélia Pedreira Abreu Magalhães',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'maria-dos-anjos-de-santa-teresa': {
    nome: 'Maria dos Anjos de Santa Teresa',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'mariano-de-la-mata-aparicio': {
    nome: 'Mariano de La Mata Aparício',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'martinho-maria-de-porres-ward': {
    nome: 'Martinho Maria de Porres Ward',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'mateus-moreira': {
    nome: 'Mateus Moreira',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'matheus-van-herkhuizen': {
    nome: 'Matheus van Herkhuizen',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'miguel-angelo-serafim': {
    nome: 'Miguel Ângelo Serafim',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'miguel-angelo-de-marenella-pigotti': {
    nome: 'Miguel Ângelo de Marenella Pigotti',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'nazareno-lanciotti': {
    nome: 'Nazareno Lanciotti',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'nelson-santana': {
    nome: 'Nelson Santana',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'nemesio-bernardi': {
    nome: 'Nemésio Bernardi',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'nicolau-dinis': {
    nome: 'Nicolau Dinis',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'odette-vidal-cardoso': {
    nome: 'Odette Vidal Cardoso',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'orlando-alvares-da-silva': {
    nome: 'Orlando Álvares da Silva',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'othon-motta': {
    nome: 'Othon Motta',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'outro': {
    nome: 'Outro',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'paolino-maria-baldassari': {
    nome: 'Paolino Maria Baldassari',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },


  'pedro-balzi': {
    nome: 'Pedro Balzi',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'pedro-fuss': {
    nome: 'Pedro Fuss',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'pedro-nunes': {
    nome: 'Pedro Nunes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'pedro-de-fontoura': {
    nome: 'Pedro de Fontoura',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'pelagio-sauter': {
    nome: 'Pelágio Sauter',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'ramiro-leite-felicio-dos-santos': {
    nome: 'Ramiro Leite Felício dos Santos',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'roberto-giovanni': {
    nome: 'Roberto Giovanni',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'rodolfo-komorek': {
    nome: 'Rodolfo Komorek',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'rodolfo-lunkenbein': {
    nome: 'Rodolfo Lunkenbein',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'roque-gonzalez': {
    nome: 'Roque González',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'rosita-paiva': {
    nome: 'Rosita Paiva',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'salvador-pinzetta': {
    nome: 'Salvador Pinzetta',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'serafina-cinque': {
    nome: 'Serafina Cinque',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'simao-correia': {
    nome: 'Simão Correia',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'simao-cristino-koge-kudugodu---simao-bororo': {
    nome: 'Simão Cristino Koge Kudugodu - Simão Bororo',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'simao-lopes': {
    nome: 'Simão Lopes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'simao-da-costa': {
    nome: 'Simão da Costa',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'tereza-margarida-do-coracao-de-maria': {
    nome: 'Tereza Margarida do Coração de Maria',
    titulo: 'Venerável',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'tomas-vaquero': {
    nome: 'Tomás Vaquero',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'vicenta-guilarte-alonso': {
    nome: 'Vicenta Guilarte Alonso',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'vicente-de-souza-pereira': {
    nome: 'Vicente de Souza Pereira',
    titulo: 'Santo',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'indigo',
    categoria: 'santos'
  },

  'vital-goncalves-de-oliveira': {
    nome: 'Vital Gonçalves de Oliveira',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'vitoria-da-encarnacao': {
    nome: 'Vitória da Encarnação',
    titulo: 'Servo de Deus',
    genero: 'Feminino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'vitor-coelho-de-almeida': {
    nome: 'Vítor Coelho de Almeida',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'waldir-lopes-de-castro': {
    nome: 'Waldir Lopes de Castro',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'outro-joao-fernandes': {
    nome: 'outro João Fernandes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'alvaro-mendes': {
    nome: 'Álvaro Mendes',
    titulo: 'Bem-aventurado',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'yellow',
    categoria: 'beatos'
  },

  'angelo-angioni': {
    nome: 'Ângelo Angioni',
    titulo: 'Venerável',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'gray',
    categoria: 'veneraveis'
  },

  'angelo-frosi': {
    nome: 'Ângelo Frosi',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  },

  'angelo-possidio-caru': {
    nome: 'Ângelo Possidio Carù',
    titulo: 'Servo de Deus',
    genero: 'Masculino',
    data: '',
    imagem: placeholderImage,
    bio: 'Biografia em desenvolvimento.',
    milagres: [],
    reliquias: '',
    oracao: '',
    cor: 'red',
    categoria: 'servos'
  }

};


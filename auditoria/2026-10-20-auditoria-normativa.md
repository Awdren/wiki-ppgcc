# Auditoria normativa da Wiki PPGCC — 20/10/2026

Registro da auditoria integral da Wiki do PPGCC/FACOM/UFMS feita com base nos quatro documentos oficiais fornecidos. Este arquivo fica fora do site publicado (`docs/`) e serve para retomar e rastrear a revisão.

- **Branch:** `fix/auditoria-normativa`
- **Base comparada:** `main` em `009c38b`
- **Abreviações:** R1035 = Res. nº 1.035-COPP/2025; R1212 = Res. nº 1.212-COPP/2026; R1295 = Res. nº 1.295-COPP/2026; R258 = Res. nº 258-CPOS/CCO/FACOM/2022.

---

## A. Diagnóstico executivo

| Dimensão | Avaliação antes da correção | Situação após a correção |
|---|---|---|
| Confiabilidade normativa | **Boa na maior parte do conteúdo**, com 3 erros de alto risco: (1) prorrogação de prazo de qualificação sem base normativa; (2) cronograma de mestrado com qualificação no 3º semestre, depois do prazo de 12 meses; (3) limite de "aproveitamento externo" de 4/8 créditos que confunde a convalidação (art. 39) com a comprovação alternativa de áreas (art. 27). | Os três erros foram corrigidos. Restam 16 pendências de validação institucional (seção E). |
| Clareza | Boa. Havia conceitos misturados (abono × compensação, desistência × desligamento, "área de concentração" × "área de formação") e procedimentos administrativos apresentados como regras. | Termos padronizados; procedimentos e informações vindas de editais sinalizados no texto. |
| Completude das jornadas | Lacunas nas consequências de perder prazos (qualificação, proficiência, renovação, versão final) e nos requisitos da prorrogação. | Consequências e condições incluídas com citação de artigo. |
| Consistência entre páginas | Divergências sobre renovação de matrícula, nomes das áreas de formação, impedimentos de banca e referência à estrutura curricular (Res. 1.134 × 1.295). | Divergências resolvidas; o reingresso passou a ter uma página de referência única. |
| Arquitetura da informação | Navegação clara por público, mas sem página de base normativa, e a página inicial afirmava usar "exclusivamente" as resoluções, o que não era verdade. | Nova página **Base Normativa**; página inicial e rodapé corrigidos; índice de Discentes completado. |

**Principais riscos remanescentes:** a resolução específica com o detalhamento dos veículos qualificados ainda não foi publicada (P08 respondida: até lá vale o Regulamento); a forma de escolha da área do Estudo Dirigido (P05); e os limites de convalidação (P07). As pendências P02, P04, P08 e P14 foram respondidas pela Coordenação em 20/10/2026 (seção E.1).

---

## B. Inventário de cobertura

### B.1 Documentos analisados (4)

| Documento | Órgão | Data | Vigência | Abrangência | Temas | Relação com os demais |
|---|---|---|---|---|---|---|
| R1035 — Regulamento dos Cursos de Pós-Graduação *Stricto Sensu* da UFMS | Conselho de Pesquisa e Pós-Graduação (Copp) | 23/06/2025 (assinatura 10/07/2025) | Em vigor em **1º/01/2026** (art. 3º); revoga as Res. 458/2021 e 663/2023 | Todos os PPGs *stricto sensu* da UFMS | Corpo docente, orientação, gestão, ingresso, matrícula, trancamento, créditos, conceitos, prazos, CCD/CCND, proficiência, convalidação, desligamento, bolsas, qualificação, defesa, diploma, estágio docência | Norma geral; o art. 84 manda adaptar os regulamentos dos programas em 120 dias |
| R1212 — Regulamento do PPGCC | Presidente do Copp, ***ad referendum*** | 06/05/2026 | Em vigor na publicação, com efeitos retroativos a **2/01/2026** (art. 3º); revoga a Res. 704/2023 | PPGCC (Mestrado e Doutorado) | Objetivos, perfil, orientação, credenciamento, organização didática, proficiência, admissão, matrícula, desligamento, requerimentos, convalidação, qualificação, defesa, bolsas | Específica; aplica a R1035 nos aspectos gerais (art. 1º) |
| R1295 — Estrutura Curricular e ementas | Presidente do Copp, ***ad referendum*** | 17/07/2026 | Altera a estrutura **a contar de 1º/01/2026** | PPGCC | Lista de CCD/CCND, níveis, CH, créditos e ementas | Editada com base no art. 57 da R1035; detalha os arts. 22–24 da R1212 |
| R258 — Trilha Graduação-Mestrado | Colegiado de Curso do PPGCC | 09/02/2022 | Em vigor em 2/03/2022; revoga a Res. 140/2021 | Estudantes de graduação da UFMS candidatos à Trilha | Requisitos, condição de estudante especial, ingresso como regular | Anterior à R1035 e à R1212; não é citada por nenhuma delas |

**Vigência:** R1212 e R1295 foram editadas *ad referendum*; a Coordenação confirmou que **já foram referendadas** (P14). Para a Trilha, valem os requisitos do **edital da Trilha** publicado pela Facom (P04).

### B.2 Páginas examinadas (25 de 25 existentes, mais 1 criada)

| Seção | Páginas | Situação da verificação |
|---|---|---|
| Início | `index.md` | Verificada |
| Discentes (15) | `index`, `admissao-matricula`, `estrutura-curricular`, `disciplinas`, `planejamento-creditos`, `prazos-e-desempenho`, `proficiencia`, `qualificacao`, `defesa`, `ccnd-siscad`, `bolsas-e-estagio`, `requerimentos`, `desligamento`, `qualis-eventos`, `qualis-periodicos` | Verificadas contra os anexos. Em `ccnd-siscad`, o fluxo do SISCAD vem de documentos da PROPP **fora** deste conjunto; só os trechos normativos foram conferidos. Nas páginas Qualis, os dados JSON da Capes **não** foram auditados |
| Docentes (5) | `index`, `credenciamento`, `atribuicoes`, `orientacao`, `bancas` | Verificadas |
| Programa (4) | `index`, `colegiado`, `identidade`, `planejamento` | `index` e `colegiado` verificadas. **`identidade` e `planejamento` não são verificáveis**: baseiam-se no Planejamento Estratégico 2025–2028, que não foi anexado. Os quadros "Conexão com o Planejamento Estratégico" das demais páginas também não são verificáveis |
| Nova | `base-normativa.md` | Criada nesta auditoria |

As 27 ementas do Catálogo de Disciplinas foram comparadas **texto a texto** com o Anexo II da R1295: são idênticas. A lista de componentes (27 optativas e 11 CCNDs) confere com o Anexo I.

### B.3 Temas sem fundamentação documental suficiente

Datas e periodicidade dos editais; nota mínima e procedimento da prova de inglês; dispensa por exame externo; canal SEI para requerimentos em geral; emissão de declaração para servidores; Eduroam; agências de fomento; como se escolhe a área do Estudo Dirigido; registro das CCNDs com crédito; critérios de veículo qualificado para a defesa; conteúdo do Planejamento Estratégico.

---

## B'. Matriz de rastreabilidade normativa

| Tema | Dispositivos |
|---|---|
| Ingresso e seleção | R1035 arts. 3º, 28–30, 44; R1212 arts. 28–29; R258 arts. 1º–4º |
| Mudança de nível | R1035 art. 29, § 2º; art. 63, VII; R1212 art. 28, § 4º |
| Matrícula e renovação | R1035 arts. 31, 37, 39, 59; R1212 arts. 30–31, 35, 36, I |
| Estudante especial e ouvinte | R1035 art. 33; R1212 arts. 32, 34, 40; R258 art. 3º |
| Disciplinas em outros cursos da UFMS | R1035 art. 32; R1212 art. 33 |
| Trancamento, cancelamento e regime especial | R1035 arts. 40–43 |
| Créditos e estrutura curricular | R1035 arts. 46–47, 54–58; R1212 arts. 22–25; R1295 Anexo I |
| Comprovação das áreas de formação | R1212 art. 27 |
| Conceitos, frequência, abono e compensação | R1035 arts. 48–52 |
| Convalidação | R1035 arts. 45, 61–62; R1212 arts. 39–40 |
| Proficiência | R1035 art. 60; R1212 art. 26 |
| Orientação e coorientação | R1035 arts. 13–18, 27; R1212 arts. 7º–10, 19 |
| Prazos e prorrogação | R1035 art. 53; R1212 arts. 5º, 38, 41 |
| Qualificação | R1035 arts. 68–72; R1212 arts. 41–44 |
| Requisitos e produção para a defesa | R1035 art. 73; R1212 arts. 45, 46, § 5º, 47, § 4º |
| Bancas | R1035 arts. 23, XXII, 70, 74; R1212 arts. 44, 46–48 |
| Defesa e pós-defesa | R1035 arts. 74–78; R1212 arts. 49–50 |
| Diploma e certidão | R1035 arts. 78–80 |
| Desligamento e reingresso | R1035 arts. 38, 63; R1212 art. 36 |
| Bolsas | R1035 arts. 64–67; R1212 arts. 51–53 |
| Estágio docência | R1035 arts. 82–83; R1212 arts. 22, § 4º, 23–24 |
| Corpo docente e credenciamento | R1035 arts. 8º–12; R1212 arts. 6º, 11–21 |
| Colegiado e coordenação | R1035 arts. 19–24; R1212 art. 54 |
| Casos omissos | R1035 art. 85; R1212 art. 54; R258 art. 5º |

### Conflitos e lacunas entre normas

| # | Situação | Análise |
|---|---|---|
| C1 | A R258 (art. 1º, II, *a*) **recomenda** 50% da graduação concluída; a R1035 (art. 33, § 1º, IV) exige **no mínimo 75%** para que um graduando seja estudante especial. Pela R258 (art. 3º), os alunos da Trilha são estudantes especiais. | **Resolvido (P04):** valem os requisitos do edital da Trilha publicado pela Facom |
| C2 | A R1035 (art. 63, I) desliga quem tiver "D" em **duas disciplinas obrigatórias**; a R1212 (art. 22, § 1º) só tem disciplinas **optativas**. | **Resolvido (P02):** a Coordenação confirmou que a regra se aplica ao PPGCC |
| C3 | Nome da área MTC: "Metodologia e Técnica de Computação" (R1212) × "Métodos e Técnicas da Computação" (R1295). | Mesma sigla; a wiki adota a R1295 e registra a diferença |
| C4 | A R1035 (art. 69, parágrafo único) admite aprovação na qualificação por produtos qualificados; a R1212 (art. 41) exige apresentação perante banca. | A forma de avaliação cabe ao Regulamento do Programa (R1035 art. 68): P10 |
| C5 | A orientação da PROPP diz que CCNDs não têm matrícula, nota ou frequência; a R1035 (art. 83, §§ 4º e 9º) prevê requerimento de matrícula e registro no histórico do Estágio Docência. | P06 |
| C6 | Na R1212, o art. 47, § 4º, IV (doutorado) fala em "projeto de **Dissertação**". | Provável erro material: P09 |
| C7 | A prorrogação do art. 53 da R1035 é do prazo do curso; o art. 38 da R1212 a condiciona à qualificação aprovada. Nenhuma norma prevê prorrogação do prazo de qualificação. | P01 |

---

## C. Matriz consolidada de problemas

Severidade: **C** = crítica, **A** = alta, **M** = média, **B** = baixa. Confiança: grau de fundamentação documental do diagnóstico.

| ID | Página | Trecho original | Categoria | Evidência | Diagnóstico | Impacto | Sev. | Correção | Conf. | Situação |
|---|---|---|---|---|---|---|---|---|---|---|
| A01 | qualificacao | "o prazo para o Exame de Qualificação pode ser prorrogado: M 6 meses, D 12 meses" | Incorreta | R1035 art. 53; R1212 arts. 38, 41; R1035 art. 63, IV | A prorrogação prevista é do prazo de conclusão do curso e exige qualificação já aprovada. Não há prorrogação de prazo de qualificação. | Estudante perde o prazo de 12/24 meses achando que pode prorrogar → desligamento | C | Seção substituída por explicação correta e aviso de desligamento | Alta | Corrigido; P01 |
| A02 | planejamento-creditos | Mestrado: "3º semestre: Exame de Qualificação" | Incorreta | R1212 art. 41, I; R1035 art. 63, IV | O cronograma sugerido coloca a qualificação depois do prazo máximo de 12 meses | Estudante que segue a sugestão é desligado | C | Cronogramas refeitos com os marcos obrigatórios (qualificação, 75%/60% dos créditos, proficiência) | Alta | Corrigido |
| A03 | planejamento-creditos | "Aproveitamento externo máximo: 4cr no mestrado e 8cr no doutorado" (também nos cenários M-4/D-4 e no comparativo) | Incorreta | R1212 arts. 27, §§ 1º–2º; 39; 40 | Confunde a comprovação alternativa de áreas (art. 27) com a convalidação (art. 39: até 50% dos créditos em disciplinas, conceito ≥ B); omite o conceito mínimo | Pedidos de convalidação mal planejados ou não feitos; expectativa de aprovação sem conceito B | A | Regras separadas, com limites, conceito e equivalência | Alta | Corrigido; P07 |
| A04 | defesa | "Excepcionalmente, mediante justificativa fundamentada do orientador [...] o prazo para a defesa pode ser prorrogado" | Incompleta | R1212 art. 38; art. 36, II; R1035 art. 53 | Omite a exigência de qualificação aprovada e de anuência do orientador; "justificativa fundamentada do orientador" não está na norma; não diz que é o prazo do curso | Pedido indeferido ou feito fora das condições | A | Seção reescrita com as três condições e a consequência | Alta | Corrigido |
| A05 | admissao-matricula | "O não cumprimento do prazo de renovação de matrícula implica desistência, exceto se houver solicitação de trancamento aprovada." | Inconsistente / Incompleta | R1035 art. 37; R1212 art. 36, I | Contradiz a página Desligamento e omite a janela de 30 dias para justificar | Estudante não usa o prazo de justificativa | A | Quadro com as duas regras e orientação de ação | Alta | Corrigido |
| A06 | admissao-matricula | Trilha: "seleciona estudantes regulares [...] dos cursos de graduação da Facom para cursarem [...] uma disciplina" | Incorreta / Incompleta | R258 arts. 1º–4º | A Trilha admite alunos de outras Unidades; os requisitos não estavam descritos; "uma disciplina" não consta da norma; faltava a condição de estudante especial e a exigência de processo seletivo | Exclusão indevida de candidatos; expectativa de ingresso automático | A | Tabela com as regras da R258 e aviso de que valem os requisitos do edital | Alta | Corrigido; P04 respondida |
| A07 | prazos-e-desempenho, desligamento | "Obter 'D' em duas disciplinas obrigatórias [...] gera desligamento" | Ambígua | R1035 art. 63, I; R1212 art. 22, § 1º | O PPGCC não tem disciplinas obrigatórias (CCD) | Falsa segurança ou falso alarme | M | Texto informa que a regra se aplica ao PPGCC; efeito sobre bolsa (art. 66) | Alta | Corrigido; P02 respondida |
| A08 | index (início), disciplinas, planejamento-creditos | "Res. nº 1.134-COPP/UFMS [...] Estrutura Curricular vigente" | Desatualizada | R1295 (efeitos desde 1º/01/2026) | A estrutura vigente foi alterada pela R1295 | Consulta ao documento errado | M | Referências trocadas para a R1295; a R1134 citada só como histórico | Alta | Corrigido; P03 |
| A09 | index (início) | "baseado exclusivamente [...] sem acréscimo de informações externas" | Incorreta | Conteúdo da própria wiki | A wiki tem informações de editais, sistemas e orientações da PROPP | Usuário trata informação de edital como norma | M | Texto reescrito e lista de fontes completada | Alta | Corrigido |
| A10 | proficiencia, prazos-e-desempenho | Falta de consequência por perder o prazo de proficiência | Incompleta | R1212 arts. 26 e 36, III | Não informava a previsão de desligamento por descumprir exigência no prazo | Perda de prazo | M | Avisos incluídos | Alta | Corrigido |
| A11 | qualificacao | Falta de consequência por não qualificar no prazo; canal SEI; aprovação do parecer | Incompleta | R1035 arts. 23, X, e 63, IV; R1212 art. 44 | Omissões relevantes | Perda de prazo; fluxo errado | M | Avisos e base incluídos | Alta | Corrigido |
| A12 | prazos-e-desempenho | "Não há abono de faltas — exceto nos casos abaixo" seguido da tabela de compensação | Ambígua | R1035 arts. 51–52 | Mistura abono (só por legislação federal) com compensação (hipóteses do art. 52) | Pedido de abono indevido | M | Seção reescrita | Alta | Corrigido |
| A13 | estrutura-curricular, disciplinas, planejamento-creditos | "Estudo Dirigido da sua própria área de concentração"; "conteúdo definido conforme a linha de pesquisa" | Não verificável / terminologia | R1212 arts. 22, § 3º, 23–24 | A norma diz "dependendo da área de formação" e não define como a área é escolhida; "área de concentração" não é o termo da norma | Matrícula no Estudo Dirigido errado | M | Termo padronizado, regra literal citada e aviso para confirmar | Alta | Corrigido; P05 |
| A14 | disciplinas, ccnd-siscad, planejamento-creditos | "CCNDs não exigem matrícula, registro de notas ou frequência" (sem ressalva) | Ambígua | R1035 art. 83, §§ 4º e 9º; art. 54, § 4º | A regra vem de orientação da PROPP e diverge do tratamento dado ao Estágio Docência | Registro incorreto do estágio | M | Atribuída à PROPP, com ressalva para o estágio | Média | Corrigido; P06 |
| A15 | defesa, qualis-* | Requisito de artigo "qualificado" sem remissão à resolução do Colegiado | Incompleta | R1212 arts. 45, § 1º, 46, § 5º, IV, 47, § 4º, IV | Estudante pode usar o Qualis como critério; no doutorado só vale periódico | Artigo que não cumpre o requisito | M | Avisos em Defesa e nas páginas Qualis: até a resolução específica, vale o Regulamento | Alta | Corrigido; P08 respondida |
| A16 | admissao-matricula | "O ingresso [...] ocorre exclusivamente por Processo Seletivo Unificado", seguido de outras formas de ingresso | Inconsistente | R1212 art. 28; R1035 art. 44 | Contradição interna | Confusão | M | Texto reescrito | Alta | Corrigido |
| A17 | admissao-matricula | "Falsidade ideológica: A comprovação de documentação falsa ou incompleta, a qualquer tempo, resulta em eliminação" | Ambígua | R1212 art. 30, parágrafo único; R1035 art. 31, § 5º e parágrafo único | Mistura duas regras com consequências e garantias diferentes | Interpretação equivocada de sanções | M | Duas regras separadas | Alta | Corrigido |
| A18 | requerimentos | Lista de requerimentos incompleta; "Regime especial: Colegiado / Propp" | Incompleta / Ambígua | R1035 arts. 15, III, 24, V, 38, 42, 61, 67, 82, § 3º; R1212 arts. 27, 28, § 4º, 37–39 | Faltavam convalidação, comprovação alternativa, mudança de nível, dispensa de estágio, atividade remunerada e reingresso; a instância do regime especial não tinha base | Dúvida sobre o caminho do pedido | M | Tabela com instância e base de cada pedido | Alta | Corrigido; P15 |
| A19 | desligamento | Prazo excedido sem remissão às condições da prorrogação | Incompleta | R1212 arts. 36, II, e 38 | Quem não qualificou não pode pedir prorrogação | Desligamento | M | Aviso incluído | Alta | Corrigido |
| A20 | orientacao | "A distribuição de estudantes por orientador segue, nesta ordem:" | Incorreta | R1212 arts. 7º e 8º | O art. 7º não estabelece ordem; só o art. 8º é sequencial | Critério aplicado de forma divergente | B | Texto corrigido | Alta | Corrigido |
| A21 | planejamento-creditos | `#convalidação-de-créditos` | Link quebrado | Verificação do build | A âncora gerada não tem acentos | Link não leva à seção | B | Âncora corrigida | Alta | Corrigido |
| A22 | estrutura-curricular, disciplinas | "Metodologia e Técnica de Computação" / "Metodologia e Técnicas da Computação" | Terminologia | R1212 art. 22, § 1º; R1295 | Três grafias diferentes | Confusão | B | Padronizado pela R1295, com nota | Alta | Corrigido |
| A23 | qualificacao, defesa | Impedimentos sem "separado judicialmente" e "consanguinidade, afinidade ou adoção" | Inconsistente | R1212 art. 48 | Texto divergente da página Bancas | Baixo | B | Texto completado | Alta | Corrigido |
| A24 | prazos-e-desempenho | "Envio da ata e documentos para emissão do diploma: até 30 dias" | Incompleta | R1035 art. 80, § 2º | Sem responsável e sem a condição de depósito no repositório | Baixo | B | Tabela com responsáveis e bases | Alta | Corrigido |
| A25 | prazos-e-desempenho | Prorrogação sem "anuência do orientador" | Incompleta | R1212 art. 38 | Omissão | Baixo | B | Incluído | Alta | Corrigido |
| A26 | admissao-matricula | Datas de editais, candidatos sem diploma, inscrição única, estudante especial em fevereiro/julho | Não verificável | — | Não constam dos anexos | Baixo | B | Sinalizados como informação de edital | — | Corrigido (sinalização) |
| A27 | proficiencia | Nota 7,0, AVA, dispensa por exame externo | Não verificável | — | Não constam dos anexos | Baixo | B | Sinalizados como regra de edital | — | Corrigido (sinalização); P13 |
| A28 | admissao-matricula | "Transferência compulsória — destinada a servidores públicos federais removidos de ofício" | Incompleta | R1035 art. 44 | A norma trata de estudantes regulares de IES nacionais, em razão de remoção de servidor federal civil ou militar | Baixo | B | Texto alinhado à norma | Alta | Corrigido |
| A29 | admissao-matricula, desligamento | Reingresso descrito em duas páginas | Duplicação | R1035 art. 38 | Risco de divergência (uma versão omitia a aprovação do Colegiado) | Baixo | B | Página Desligamento como referência única | Alta | Corrigido |
| A30 | admissao-matricula | Convalidação sem equivalência e sem base | Incompleta | R1035 art. 61, § 1º | Omissão | Baixo | B | Coluna de base e linha de equivalência | Alta | Corrigido |
| A31 | defesa | Diploma: "O estudante não precisa fazer a solicitação"; declaração para servidores | Não verificável | R1035 art. 80 | Procedimento da Secretaria, não regra | Baixo | B | Sinalizado como prática; base do art. 80 incluída | Média | Corrigido |
| A32 | defesa | Sem menção a sessão fechada, depósito protegido ou autoria exclusiva | Incompleta | R1035 arts. 74, § 2º, 77, § 3º, 78 | Omissão | Baixo | B | Seções incluídas | Alta | Corrigido |
| A33 | estrutura-curricular | Sem previsão de matrícula em disciplinas de outros cursos da UFMS; sem a exceção ao mínimo de 5 alunos | Incompleta | R1035 arts. 32, 58, § 5º; R1212 art. 33 | Omissão | Baixo | B | Incluído | Alta | Corrigido |
| A34 | admissao-matricula | Sem menção ao doutorado direto | Incompleta | R1035 arts. 3º e 29, § 1º | Omissão | Baixo | B | Quadro informativo | Alta | Corrigido; P16 |
| A35 | ccnd-siscad | Lista de 6 formas de CCND sem indicar quais o PPGCC adota | Incompleta | R1212 art. 22, § 2º | O PPGCC adota 4 | Baixo | B | Parágrafo incluído | Alta | Corrigido |
| A36 | colegiado | Faltavam atribuições XV e XVIII e os casos omissos | Incompleta | R1035 art. 23; R1212 art. 54 | Omissão | Baixo | B | Incluído | Alta | Corrigido |
| A37 | credenciamento | "ampliamente"; sem o art. 11 da R1035 | Editorial / Incompleta | R1035 arts. 10–11 | Erro de digitação e omissão | Baixo | B | Corrigido | Alta | Corrigido |
| A38 | bolsas-e-estagio | Estágio sem relação com os créditos de Estágio I e II | Incompleta | R1212 arts. 22, § 4º, 23–24 | Omissão | Baixo | B | Parágrafo incluído | Alta | Corrigido |
| A39 | config.ts, índices | Rodapé e "Fonte normativa" listavam só a R1035 e a R1212 | Incompleta | R1295, R258 | Omissão | Baixo | B | Rodapé atualizado e link para Base Normativa | Alta | Corrigido |
| A40 | estrutura-curricular, planejamento-creditos | Bolsista: "18 créditos" / "28 créditos" | Ambígua (na norma) | R1212 arts. 23–24 | Leitura aritmética da distribuição; o caput fala em "no mínimo 16/24" | Baixo | B | Mantido, com explicação | Média | Requer validação: P12 |
| A41 | prazos-e-desempenho, qualificacao | "Até 12/24 meses após o ingresso" | Ambígua | R1212 art. 41; R1035 art. 53 | O art. 41 não define o marco inicial | Baixo | B | Mantido | Média | Requer validação: P11 |
| A42 | defesa | "O orientador preenche e encaminha à Secretaria o formulário" | Procedimento não documentado | R1035 art. 74; R1212 arts. 46–47 | A norma fala em requerimento ao Colegiado | Baixo | B | Norma citada primeiro; formulário apresentado como prática | Média | Corrigido; P17 |
| A43 | identidade, planejamento e quadros "Conexão com o Planejamento" | Metas, missão, valores | Não verificável | Planejamento Estratégico (não anexado) | Sem fonte nos anexos; não normativo | Baixo | B | Nenhuma | — | Pendente (fora do escopo) |
| A44 | estrutura-curricular × planejamento | Meta de "20% de créditos flexíveis até 2026–2027" × "2026" | Inconsistente | — | Datas diferentes para a mesma meta, ambas sem fonte nos anexos | Baixo | B | Nenhuma | — | Pendente (fora do escopo) |
| A45 | qualis-* | Dados de classificação (JSON) | Não verificável | Planilhas da Capes (não anexadas) | Não auditados | Baixo | B | Aviso sobre o uso para a defesa | — | Pendente |
| A46 | ccnd-siscad | Fluxo no SISCAD | Fonte externa ao conjunto | Orientações e tutorial SEAAR/PROPP | Conferido na sessão anterior com os PDFs da PROPP; fora deste conjunto | Baixo | B | Nenhuma | Média | Verificado na fonte original |
| A47 | discentes/index | Resumo sem as condições da prorrogação, os créditos de bolsista e o tipo de veículo | Incompleta | R1212 arts. 23–24, 38, 46–47 | Omissão em página de entrada | Baixo | B | Resumo completado; tabela de páginas completada | Alta | Corrigido |

**Total:** 47 registros — 2 críticos, 4 altos, 13 médios e 28 baixos. Desses, 41 foram corrigidos (alguns também têm pendência associada), 2 requerem validação (A40, A41), 3 ficaram pendentes por falta de fonte (A43–A45) e 1 foi verificado na fonte original (A46).

---

## D. Relatório de alterações implementadas

As alterações estão na branch `fix/auditoria-normativa`. O texto anterior e o novo de cada trecho podem ser vistos com `git diff main -- docs/`.

| Página | Alteração | Motivo (ID) |
|---|---|---|
| `discentes/qualificacao.md` | Seção de "prorrogação" substituída; desligamento por prazo; SEI; aprovação de parecer; banca "pelo menos"; impedimentos completos | A01, A11, A23 |
| `discentes/planejamento-creditos.md` | Cronogramas refeitos; convalidação × comprovação alternativa; "área de formação"; recomendações sinalizadas; FAQ corrigido; âncora corrigida | A02, A03, A13, A21 |
| `discentes/defesa.md` | Requerimento ao Colegiado; periódico × conferência; aviso sobre veículo qualificado; sessão fechada; prorrogação reescrita; diploma com base legal; procedimento sinalizado | A04, A15, A23, A31, A32, A42 |
| `discentes/admissao-matricula.md` | Formas de ingresso; transferência; doutorado direto; mudança de nível; estudante especial e ouvinte; Trilha (R258); documentação; renovação e desligamento; trancamento e convalidação com base; reingresso por remissão | A05, A06, A16, A17, A26, A28–A30, A34 |
| `discentes/prazos-e-desempenho.md` | Prorrogação com anuência; trancamento conta no prazo; "D" e bolsa; abono × compensação; consequências; tabela pós-defesa com responsáveis | A07, A10, A12, A24, A25 |
| `discentes/proficiencia.md` | Base legal; apresentação ao Colegiado; consequência; regras de edital sinalizadas | A10, A27 |
| `discentes/estrutura-curricular.md` | Base normativa; nomes das áreas; regra literal do Estudo Dirigido; Estágio I/II; outros cursos; exceção ao mínimo de alunos | A13, A22, A33, A38 |
| `discentes/disciplinas.md` | Referência à R1295; MTC; Estudo Dirigido; ressalva da orientação da PROPP | A08, A13, A14, A22 |
| `discentes/requerimentos.md` | Tabela de pedidos com instância e base; prorrogação; canal SEI qualificado | A18 |
| `discentes/desligamento.md` | Aviso de prorrogação; desistência e cancelamento; nota sobre disciplinas obrigatórias; base do reingresso | A07, A19, A29 |
| `discentes/bolsas-e-estagio.md` | Bases dos arts. 51–53; Estágio I/II; agências sinalizadas | A38 |
| `discentes/ccnd-siscad.md` | 4 formas de CCND no PPGCC; ressalva sobre o estágio | A14, A35 |
| `discentes/qualis-periodicos.md`, `qualis-eventos.md` | Avisos sobre o requisito de defesa | A15 |
| `discentes/index.md` | Resumo com condições; tabela completada; aviso de desligamento; remissão à Base Normativa | A39, A47 |
| `docentes/orientacao.md` | Limites com base; critérios sem ordem (art. 7º) e em sequência (art. 8º); atribuições completas | A20 |
| `docentes/bancas.md` | Qualificação: SEI, parecer, sessão; defesa: requerimento, aprovação, sessão fechada | A32, A42 |
| `docentes/credenciamento.md` | Erro de digitação; art. 11 da R1035 | A37 |
| `docentes/index.md` | Fonte normativa → Base Normativa | A39 |
| `programa/colegiado.md` | Coordenador completo; atribuições e casos omissos | A36 |
| `index.md` | Fontes corrigidas; aviso de que a wiki não substitui as normas | A08, A09 |
| `.vitepress/config.ts` | Menu e barra lateral com Base Normativa; rodapé | A39 |
| `base-normativa.md` (nova) | Inventário, hierarquia, documentos não analisados, tipos de informação | Fases 1 e 5 |

**Alterações propostas e não implementadas:** ver seção F.

---

## E. Pendências de validação institucional

### E.1 Respostas recebidas da Coordenação (20/10/2026)

| ID | Resposta | Efeito na wiki |
|---|---|---|
| P02 | A regra de desligamento por "D" em duas disciplinas obrigatórias **se aplica** ao PPGCC. | Prazos e Desempenho e Desligamento informam que a regra se aplica |
| P04 | Para a Trilha Graduação-Mestrado, **vale o que está no edital da Trilha** da Facom. | Admissão e Matrícula e Base Normativa remetem ao edital |
| P08 | **Vale o que já está no Regulamento**; o detalhamento virá em resolução específica do Colegiado. | Defesa, Qualis e Base Normativa explicam o critério atual |
| P14 | As Res. nº 1.212/2026 e nº 1.295/2026 **já foram referendadas**. | Base Normativa atualizada |

### E.2 Pendências em aberto

As pendências P02, P04, P08 e P14 foram respondidas (E.1) e permanecem na tabela abaixo só como registro.

| ID | Para | Pergunta objetiva | Relacionado |
|---|---|---|---|
| P01 | Colegiado | Existe alguma possibilidade de ampliar o prazo do Exame de Qualificação (12/24 meses), por exemplo como caso omisso (R1212 art. 54)? Se sim, em que condições? | A01 |
| P02 | Coordenação | A regra de desligamento por "D" em duas disciplinas obrigatórias (R1035 art. 63, I) se aplica ao PPGCC, cujas disciplinas são todas optativas? As CCNDs com crédito (Estudo Dirigido, Estágio) contam como obrigatórias para esse fim? | A07 |
| P03 | Secretaria | A Res. nº 1.134/2026 foi revogada ou substituída pela Res. nº 1.295/2026? Qual documento deve ser citado como estrutura vigente? | A08 |
| P04 | Colegiado | A Res. nº 258/2022 (Trilha) continua em vigor? Para ser estudante especial pela Trilha vale o mínimo de 75% da graduação (R1035 art. 33, § 1º, IV) ou a recomendação de 50% (R258)? O limite de "uma disciplina" por semestre tem base em edital? | A06 |
| P05 | Coordenação | Como se define a área do Estudo Dirigido de cada estudante (linha de pesquisa, escolha, orientador)? No doutorado, o Estudo Dirigido e o Estudo Dirigido II são obrigatoriamente da mesma área? Quem define o conteúdo? | A13 |
| P06 | Secretaria / PROPP | Como são registradas as CCNDs com crédito (Estudo Dirigido e Estágio): há matrícula e conceito? Existem os regulamentos específicos previstos no art. 54, § 4º, da R1035? | A14 |
| P07 | Colegiado | Na convalidação (R1212 art. 39), "créditos exigidos em disciplinas" são 12 (M) e 16 (D)? O limite de 50% se soma ao de 75% para créditos de estudante especial (art. 40)? Disciplinas do mestrado do próprio PPGCC entram no art. 39 para o doutorado? | A03 |
| P08 | Colegiado | Qual é a resolução específica vigente com os critérios de veículos qualificados para a defesa (número, tipo e estrato)? Ela pode ser publicada na wiki? | A15 |
| P09 | Coordenação | O "projeto de Dissertação" no art. 47, § 4º, IV, da R1212 (doutorado) é erro material, devendo ser lido como "projeto de Tese"? | C6 |
| P10 | Colegiado | O PPGCC admite a aprovação na qualificação por produtos qualificados (R1035 art. 69, parágrafo único), ou só a apresentação perante banca (R1212 art. 41)? | C4 |
| P11 | Secretaria | O prazo de qualificação (12/24 meses) conta a partir da matrícula de ingresso? | A41 |
| P12 | Coordenação | Para bolsistas, o mínimo é de 18 créditos (M) e 28 (D), com o Estágio somado aos 16/24? | A40 |
| P13 | Coordenação | Qual documento fixa a nota mínima de 7,0 na prova de inglês, a lista de exames externos aceitos e o prazo para pedir dispensa? | A27 |
| P14 | PROPP | As Res. nº 1.212/2026 e nº 1.295/2026 (*ad referendum*) já foram referendadas pelo Copp? | B.1 |
| P15 | PROPP | Qual norma regula o regime especial (R1035 art. 42) e qual instância decide o pedido? | A18 |
| P16 | Coordenação | O PPGCC aceita doutorado direto? Em que condições (ato da Propp, art. 3º da R1035)? | A34 |
| P17 | Secretaria | Qual é o fluxo formal do pedido de defesa: formulário à Secretaria, requerimento via SEI ao Colegiado, ou ambos? | A42 |

---

## F. Recomendações de evolução

1. **Publicar as resoluções específicas do Colegiado** (veículos qualificados, comprovação alternativa, mudança de nível, credenciamento, bolsas). Elas são a maior lacuna documental da wiki.
2. **Organizar por jornada:** criar páginas "Primeiro semestre", "Rumo à qualificação" e "Rumo à defesa", cada uma com um checklist de prazos e links para as páginas de referência.
3. **Página de referência única por tema.** Composição de bancas e impedimentos aparecem em três páginas (Qualificação, Defesa, Bancas). Manter o texto completo só em Bancas e usar resumo com link nas demais.
4. **Padrão editorial para páginas normativas:** objetivo e público; regra com artigo; requisitos; prazos com marco inicial; responsáveis; etapas; exceções; consequências; referências; data da última verificação. Aplicar de forma gradual, sem criar seções vazias.
5. **Data de verificação por página:** ativar `lastUpdated` do VitePress ou adicionar uma linha "Verificado em" nas páginas normativas.
6. **Governança:** revisar a wiki sempre que houver nova resolução do Copp ou do Colegiado; usar os modelos de issue já existentes; registrar cada revisão neste diretório `auditoria/`.
7. **Separar visualmente o conteúdo estratégico** (quadros "Conexão com o Planejamento") do conteúdo normativo, por exemplo com um estilo próprio. Anexar o Planejamento Estratégico como fonte.
8. **Verificação automática de links** no CI (o script usado nesta auditoria pode virar um passo do workflow de deploy).
9. **Dados do Qualis:** registrar a origem e a data das planilhas e validar a importação.

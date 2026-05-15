import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  lang: 'pt-BR',
  title: 'Wiki PPGCC',
  description: 'Regulamentos do Programa de Pós-Graduação em Ciência da Computação — FACOM/UFMS',

  themeConfig: {
    siteTitle: 'Wiki PPGCC',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Discentes', link: '/discentes/' },
      { text: 'Docentes', link: '/docentes/' },
      { text: 'O Programa', link: '/programa/identidade' },
    ],

    sidebar: {
      '/discentes/': [
        {
          text: 'Para Discentes',
          items: [
            { text: 'Visão Geral', link: '/discentes/' },
            { text: 'Admissão e Matrícula', link: '/discentes/admissao-matricula' },
            { text: 'Estrutura Curricular', link: '/discentes/estrutura-curricular' },
            { text: 'Catálogo de Disciplinas', link: '/discentes/disciplinas' },
            { text: 'Planejamento de Créditos', link: '/discentes/planejamento-creditos' },
            { text: 'Prazos e Desempenho', link: '/discentes/prazos-e-desempenho' },
            { text: 'Proficiência em Inglês', link: '/discentes/proficiencia' },
            { text: 'Exame de Qualificação', link: '/discentes/qualificacao' },
            { text: 'Defesa de Dissertação ou Tese', link: '/discentes/defesa' },
            { text: 'Bolsas e Estágio Docência', link: '/discentes/bolsas-e-estagio' },
            { text: 'Requerimentos', link: '/discentes/requerimentos' },
            { text: 'Desligamento', link: '/discentes/desligamento' },
            { text: 'Qualis Eventos', link: '/discentes/qualis-eventos' },
            { text: 'Qualis Periódicos', link: '/discentes/qualis-periodicos' },
          ],
        },
      ],
      '/docentes/': [
        {
          text: 'Para Docentes',
          items: [
            { text: 'Visão Geral', link: '/docentes/' },
            { text: 'Credenciamento', link: '/docentes/credenciamento' },
            { text: 'Atribuições', link: '/docentes/atribuicoes' },
            { text: 'Orientação e Coorientação', link: '/docentes/orientacao' },
            { text: 'Bancas Examinadoras', link: '/docentes/bancas' },
          ],
        },
      ],
      '/programa/': [
        {
          text: 'Identidade e Estratégia',
          items: [
            { text: 'Missão, Visão e Valores', link: '/programa/identidade' },
            { text: 'Horizontes Estratégicos 2025–2028', link: '/programa/planejamento' },
          ],
        },
        {
          text: 'Sobre o Programa',
          items: [
            { text: 'Objetivos e Perfil do Egresso', link: '/programa/' },
            { text: 'Colegiado e Coordenação', link: '/programa/colegiado' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    footer: {
      message:
        'Baseado na Res. nº 1.212-COPP/UFMS (06/05/2026) e Res. nº 1.035-COPP/UFMS (23/06/2025).',
      copyright: 'PPGCC — Faculdade de Computação — UFMS',
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo',
    },

    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Mudar para modo claro',
    darkModeSwitchTitle: 'Mudar para modo escuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo',

    outline: {
      label: 'Nesta página',
      level: [2, 3],
    },
  },
})

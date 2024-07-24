type Exercicio = {
  nome: string
  series: number | string
  repeticoes: number | string
  descanso: string
}

type TreinoDia = {
  dia: string
  exercicios: Exercicio[]
}

type TreinoData = {
  [key: string]: TreinoDia[]
}

export const treinoData: TreinoData = {
  mulheres: [
    {
      dia: 'Segunda',
      exercicios: [
        {
          nome: 'Agachamento',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Leg Press',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Extensão de Quadril',
          series: 3,
          repeticoes: 15,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Terça',
      exercicios: [
        {
          nome: 'Flexão de Braço',
          series: 4,
          repeticoes: 10,
          descanso: '90s',
        },
        {
          nome: 'Supino',
          series: 4,
          repeticoes: 10,
          descanso: '120s',
        },
        {
          nome: 'Desenvolvimento com Halteres',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Quarta',
      exercicios: [
        {
          nome: 'Corrida',
          series: 'N/A',
          repeticoes: '30 minutos',
          descanso: 'N/A',
        },
        {
          nome: 'Abdominais',
          series: 4,
          repeticoes: 20,
          descanso: '90s',
        },
      ],
    },
    {
      dia: 'Quinta',
      exercicios: [
        {
          nome: 'Agachamento Búlgaro',
          series: 3,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Passada',
          series: 3,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Extensão de Quadril',
          series: 4,
          repeticoes: 15,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Sexta',
      exercicios: [
        {
          nome: 'Tríceps Corda',
          series: 4,
          repeticoes: 12,
          descanso: '90s',
        },
        {
          nome: 'Rosca Direta',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Remada Curvada',
          series: 4,
          repeticoes: 10,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Sãobado',
      exercicios: [
        {
          nome: 'Yoga',
          series: 'N/A',
          repeticoes: '60 minutos',
          descanso: 'N/A',
        },
        {
          nome: 'Pilates',
          series: 'N/A',
          repeticoes: '60 minutos',
          descanso: 'N/A',
        },
      ],
    },
    {
      dia: 'Domingo',
      exercicios: [
        {
          nome: 'Descanso',
          series: 'N/A',
          repeticoes: 'N/A',
          descanso: 'N/A',
        },
      ],
    },
  ],
  homens: [
    {
      dia: 'Segunda',
      exercicios: [
        {
          nome: 'Supino',
          series: 4,
          repeticoes: 10,
          descanso: '120s',
        },
        {
          nome: 'Desenvolvimento com Halteres',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Tríceps Francês',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Terça',
      exercicios: [
        {
          nome: 'Agachamento',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Leg Press',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Extensão de Quadril',
          series: 3,
          repeticoes: 15,
          descanso: '90s',
        },
      ],
    },
    {
      dia: 'Quarta',
      exercicios: [
        {
          nome: 'Corrida',
          series: 'N/A',
          repeticoes: '30 minutos',
          descanso: 'N/A',
        },
        {
          nome: 'Abdominais',
          series: 4,
          repeticoes: 20,
          descanso: '90s',
        },
      ],
    },
    {
      dia: 'Quinta',
      exercicios: [
        {
          nome: 'Rosca Direta',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Rosca Martelo',
          series: 4,
          repeticoes: 12,
          descanso: '120s',
        },
        {
          nome: 'Remada Curvada',
          series: 4,
          repeticoes: 10,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Sexta',
      exercicios: [
        {
          nome: 'Elevação Lateral',
          series: 4,
          repeticoes: 12,
          descanso: '90s',
        },
        {
          nome: 'Encolhimento',
          series: 4,
          repeticoes: 15,
          descanso: '120s',
        },
        {
          nome: 'Desenvolvimento Arnold',
          series: 4,
          repeticoes: 10,
          descanso: '120s',
        },
      ],
    },
    {
      dia: 'Sãobado',
      exercicios: [
        {
          nome: 'HIIT',
          series: 'N/A',
          repeticoes: '20 minutos',
          descanso: 'N/A',
        },
        {
          nome: 'Abdominais',
          series: 4,
          repeticoes: 20,
          descanso: '90s',
        },
      ],
    },
    {
      dia: 'Domingo',
      exercicios: [
        {
          nome: 'Descanso',
          series: 'N/A',
          repeticoes: 'N/A',
          descanso: 'N/A',
        },
      ],
    },
  ],
}

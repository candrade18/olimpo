<template>
    <div>
        <Header-Component />
        <div class="page-name">
            <div class="container">
                <h1>SERVIÇOS - OLIMPO FACILITIES </h1>
            </div>
        </div>
        <div class="tabs">
            <div class="container">
                <div class="tab-item" :class="{'active': tabActive === 1}" @click="changeTab(1)">
                    <svg width="27px" height="31px">
                        <path fill-rule="evenodd"  fill="rgb(19, 189, 225)"
                        d="M-0.000,31.000 L1.967,17.858 L25.032,17.858 L27.000,31.000 L-0.000,31.000 ZM6.499,12.017 L20.500,12.017 C22.583,12.017 24.357,13.563 24.703,15.667 L2.297,15.667 C2.643,13.563 4.417,12.017 6.499,12.017 ZM11.368,2.190 C11.368,0.980 12.323,-0.000 13.500,-0.000 C14.677,-0.000 15.631,0.980 15.631,2.190 L15.631,9.826 L11.368,9.826 L11.368,2.190 Z"/>
                    </svg>
                    <h2>OLIMPO Facilities <span style="color: #13bde1">+ Eficiência</span></h2>
                </div>
                <div class="tab-item" :class="{'active': tabActive === 2}" @click="changeTab(2)">
                    <svg width="30px" height="34px">
                        <path fill-rule="evenodd"  fill="rgb(75, 182, 138)"
                        d="M29.950,8.751 C29.909,7.857 29.909,7.003 29.909,6.150 C29.909,5.459 29.373,4.930 28.673,4.930 C23.526,4.930 19.614,3.467 16.360,0.336 C15.866,-0.111 15.125,-0.111 14.631,0.336 C11.378,3.467 7.465,4.930 2.318,4.930 C1.618,4.930 1.082,5.459 1.082,6.150 C1.082,7.003 1.082,7.857 1.041,8.751 C0.877,17.288 0.630,28.996 15.084,33.915 L15.496,33.996 L15.907,33.915 C30.321,28.996 30.115,17.329 29.950,8.751 ZM14.507,20.581 C14.260,20.784 13.972,20.906 13.642,20.906 L13.601,20.906 C13.272,20.906 12.942,20.744 12.737,20.500 L8.907,16.312 L10.760,14.686 L13.766,17.979 L20.437,11.719 L22.126,13.508 L14.507,20.581 Z"/>
                    </svg>
                    <h2>OLIMPO Security  <span style="color: #4bb68a">+ Proteção</span></h2>
                </div>
                <div class="tab-item" :class="{'active': tabActive === 3}" @click="changeTab(3)">
                    <svg width="54px" height="30px">
                        <path fill-rule="evenodd"  fill="rgb(230, 194, 23)"
                        d="M20.009,21.060 C17.516,21.060 15.502,23.064 15.502,25.533 C15.502,27.996 17.516,29.999 20.009,29.999 C22.502,29.999 24.516,27.996 24.516,25.533 C24.516,23.064 22.502,21.060 20.009,21.060 ZM20.009,27.766 C18.763,27.766 17.755,26.761 17.755,25.533 C17.755,24.298 18.763,23.300 20.009,23.300 C21.255,23.300 22.263,24.298 22.263,25.533 C22.263,26.761 21.255,27.766 20.009,27.766 ZM54.005,17.756 L54.005,22.525 C54.005,23.715 53.031,24.679 51.831,24.679 L49.505,24.679 C49.084,21.821 46.599,19.624 43.599,19.624 C40.606,19.624 38.120,21.821 37.700,24.679 L25.909,24.679 C25.489,21.821 23.003,19.624 20.011,19.624 C17.018,19.624 14.532,21.821 14.112,24.679 L11.199,24.679 C9.998,24.679 9.025,23.715 9.025,22.525 L9.025,17.756 L54.005,17.756 L54.005,17.756 ZM43.604,21.060 C41.111,21.060 39.090,23.064 39.090,25.533 C39.090,27.996 41.112,29.999 43.604,29.999 C46.090,29.999 48.112,27.996 48.112,25.533 C48.112,23.064 46.090,21.060 43.604,21.060 ZM43.604,27.766 C42.358,27.766 41.350,26.761 41.350,25.533 C41.350,24.298 42.358,23.300 43.604,23.300 C44.843,23.300 45.858,24.298 45.858,25.533 C45.858,26.761 44.843,27.766 43.604,27.766 ZM53.148,12.954 L44.604,4.583 C44.061,4.052 43.329,3.750 42.568,3.750 L38.256,3.750 L38.256,2.149 C38.256,0.957 37.285,-0.005 36.082,-0.005 L11.197,-0.005 C10.001,-0.005 9.023,0.957 9.023,2.149 L9.023,2.486 L0.201,3.494 L15.833,5.510 L-0.002,7.069 L15.778,9.292 L-0.002,10.647 L9.024,12.334 L9.023,16.566 L54.003,16.566 L54.003,14.993 C54.003,14.225 53.692,13.493 53.148,12.954 ZM49.423,13.235 L41.155,13.235 C40.967,13.235 40.814,13.083 40.814,12.897 L40.814,6.572 C40.814,6.385 40.967,6.234 41.155,6.234 L42.727,6.234 C42.814,6.234 42.901,6.270 42.967,6.328 L49.655,12.653 C49.880,12.861 49.728,13.235 49.423,13.235 Z"/>
                    </svg>
                    <h2>OLIMPO Express  <span style="color: #e6c217">+ Agilidade</span></h2>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <div class="tab" v-if="tabActive === 1">
                    <div class="tab-info" v-for="item in protecao" :key="item.id">
                        <h3>{{ item.titulo }}</h3>
                        <p>{{ item.descricao }}</p>
                    </div>
                </div>
                <div class="tab" v-if="tabActive === 2">
                    <div class="tab-info" v-for="item in eficiencia" :key="item.id">
                        <h3>{{ item.titulo }}</h3>
                        <p>{{ item.descricao }}</p>
                    </div>
                </div>
                <div class="tab" v-if="tabActive === 3">
                    <div class="tab-info" v-for="item in agilidade" :key="item.id">
                        <h3>{{ item.titulo }}</h3>
                        <p>{{ item.descricao }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="orcamento">
            <div class="container">
                <div>
                    <p><strong>Quer um orçamento sem compromisso?</strong></p>
                    <p>Nós entramos em contato com você</p>
                </div>
                <div>
                    <input type="text" placeholder="E-mail">
                    <button>Quero um orçamento</button>
                </div>
            </div>
        </div>
        <Footer-Component />
    </div>
</template>


<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        'Header-Component': Header,
        'Footer-Component': Footer
    },

    data() {
        return {
            tabActive: 1,
            eficiencia: [
                {
                    "id": 1,
                    "titulo": "Limpeza",
                    "descricao": "Mão de obra especializada para serviços de limpeza e conservação para empresas e eventos. Utilização de equipamentos de última geração e produtos de alta qualidade."
                },
                {
                    "id": 2,
                    "titulo": "Limpeza Hospitalar",
                    "descricao": "Serviço de limpeza com o foco em evitar as infecções locais, promovendo a seguridade de pacientes, funcionários, familiares e visitantes."
                },
                {
                    "id": 3,
                    "titulo": "Limpeza de Fachada Predial",
                    "descricao": "A limpeza nas alturas (limpeza de fachada, estrutura e tubulações) demanda atenção, segurança e cautela. A Olimpo Service segue à risca a NR35, que determina critérios para executar tal atividade."
                },
                {
                    "id": 4,
                    "titulo": "Limpeza de Caixa de Gordura e Caixa de Esgoto",
                    "descricao": "Limpeza e desentupimento de caixa de gordura e esgoto através de profissionais capacitados, utilização de produtos de alta qualidade e equipamentos específicos como caminhão e bombas de sucção."
                },
                {
                    "id": 5,
                    "titulo": "Limpeza Pós Obra",
                    "descricao": "Limpeza sustentável por profissionais altamente qualificados de todos os tipos de revestimentos existentes com a utilização dos produtos adequados, remoção de entulhos, resíduos, rejuntes, cimentos, deixando à vista todos os detalhes do acabamento para verificação da necessidade de retoques."
                },
                {
                    "id": 6,
                    "titulo": "Limpeza de Reservatório de Água",
                    "descricao": "A limpeza em espaços confinados (caixas d’água, reservatórios, etc) demandam atenção, segurança e cautela. A Olimpo segue à risca a NR33 que determina critérios para executar tal atividade."
                },
                {
                    "id": 7,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Manobrista",
                    "descricao": "Recepção e condução de veículos por manobristas capacitados com a finalidade de estacionamento, zelando pela preservação do ativo, controle de fluxo e organização do local."
                },
                {
                    "id": 9,
                    "titulo": "Motorista",
                    "descricao": "Condução de veículos por motoristas experientes para transportes de executivos e colaboradores de empresa com total segurança e discrição."
                },
                {
                    "id": 10,
                    "titulo": "Zeladoria",
                    "descricao": "Manutenção geral e predial (civil, elétrica, hidráulica) de forma esporádica, mensal, quinzenal, semanal, atendendo solicitações de pequeno e médio porte."
                },
                {
                    "id": 11,
                    "titulo": "Secretariado",
                    "descricao": "Execução de tarefas de apoio administrativo, envolvendo atendimento e filtragem de ligações, organização de agenda, pacote office e demais tarefas rotineiras."
                },
                {
                    "id": 12,
                    "titulo": "Recepção",
                    "descricao": "Atendimento personalizado por Recepcionistas capacitadas (bilíngue ou não), responsáveis pelo atendimento e encaminhamento dos visitantes, valorizando a imagem da empresa ou do evento."
                },
                {
                    "id": 13,
                    "titulo": "Portaria",
                    "descricao": "Atendimento de excelência por Porteiros capacitados, sendo responsáveis em atender as ocorrências normais e emergências, zelando pela eficiência, pontualidade e seriedade nos serviços prestados."
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 15,
                    "titulo": "Copa",
                    "descricao": "Serviço de copeiro(a) de forma atenciosa para colaboradores e visitantes, atendendo recepção, salas e reuniões, tornando o ambiente de trabalho mais confortável."
                },
            ],
            protecao: [
                {
                    "id": 1,
                    "titulo": "Limpeza 2",
                    "descricao": "Mão de obra especializada para serviços de limpeza e conservação para empresas e eventos. Utilização de equipamentos de última geração e produtos de alta qualidade."
                },
                {
                    "id": 2,
                    "titulo": "Limpeza Hospitalar",
                    "descricao": "Serviço de limpeza com o foco em evitar as infecções locais, promovendo a seguridade de pacientes, funcionários, familiares e visitantes."
                },
                {
                    "id": 3,
                    "titulo": "Limpeza de Fachada Predial",
                    "descricao": "A limpeza nas alturas (limpeza de fachada, estrutura e tubulações) demanda atenção, segurança e cautela. A Olimpo Service segue à risca a NR35, que determina critérios para executar tal atividade."
                },
                {
                    "id": 4,
                    "titulo": "Limpeza de Caixa de Gordura e Caixa de Esgoto",
                    "descricao": "Limpeza e desentupimento de caixa de gordura e esgoto através de profissionais capacitados, utilização de produtos de alta qualidade e equipamentos específicos como caminhão e bombas de sucção."
                },
                {
                    "id": 5,
                    "titulo": "Limpeza Pós Obra",
                    "descricao": "Limpeza sustentável por profissionais altamente qualificados de todos os tipos de revestimentos existentes com a utilização dos produtos adequados, remoção de entulhos, resíduos, rejuntes, cimentos, deixando à vista todos os detalhes do acabamento para verificação da necessidade de retoques."
                },
                {
                    "id": 6,
                    "titulo": "Limpeza de Reservatório de Água",
                    "descricao": "A limpeza em espaços confinados (caixas d’água, reservatórios, etc) demandam atenção, segurança e cautela. A Olimpo segue à risca a NR33 que determina critérios para executar tal atividade."
                },
                {
                    "id": 7,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Manobrista",
                    "descricao": "Recepção e condução de veículos por manobristas capacitados com a finalidade de estacionamento, zelando pela preservação do ativo, controle de fluxo e organização do local."
                },
                {
                    "id": 9,
                    "titulo": "Motorista",
                    "descricao": "Condução de veículos por motoristas experientes para transportes de executivos e colaboradores de empresa com total segurança e discrição."
                },
                {
                    "id": 10,
                    "titulo": "Zeladoria",
                    "descricao": "Manutenção geral e predial (civil, elétrica, hidráulica) de forma esporádica, mensal, quinzenal, semanal, atendendo solicitações de pequeno e médio porte."
                },
                {
                    "id": 11,
                    "titulo": "Secretariado",
                    "descricao": "Execução de tarefas de apoio administrativo, envolvendo atendimento e filtragem de ligações, organização de agenda, pacote office e demais tarefas rotineiras."
                },
                {
                    "id": 12,
                    "titulo": "Recepção",
                    "descricao": "Atendimento personalizado por Recepcionistas capacitadas (bilíngue ou não), responsáveis pelo atendimento e encaminhamento dos visitantes, valorizando a imagem da empresa ou do evento."
                },
                {
                    "id": 13,
                    "titulo": "Portaria",
                    "descricao": "Atendimento de excelência por Porteiros capacitados, sendo responsáveis em atender as ocorrências normais e emergências, zelando pela eficiência, pontualidade e seriedade nos serviços prestados."
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 15,
                    "titulo": "Copa",
                    "descricao": "Serviço de copeiro(a) de forma atenciosa para colaboradores e visitantes, atendendo recepção, salas e reuniões, tornando o ambiente de trabalho mais confortável."
                },
            ],
            agilidade: [
                {
                    "id": 1,
                    "titulo": "Limpeza 3",
                    "descricao": "Mão de obra especializada para serviços de limpeza e conservação para empresas e eventos. Utilização de equipamentos de última geração e produtos de alta qualidade."
                },
                {
                    "id": 2,
                    "titulo": "Limpeza Hospitalar",
                    "descricao": "Serviço de limpeza com o foco em evitar as infecções locais, promovendo a seguridade de pacientes, funcionários, familiares e visitantes."
                },
                {
                    "id": 3,
                    "titulo": "Limpeza de Fachada Predial",
                    "descricao": "A limpeza nas alturas (limpeza de fachada, estrutura e tubulações) demanda atenção, segurança e cautela. A Olimpo Service segue à risca a NR35, que determina critérios para executar tal atividade."
                },
                {
                    "id": 4,
                    "titulo": "Limpeza de Caixa de Gordura e Caixa de Esgoto",
                    "descricao": "Limpeza e desentupimento de caixa de gordura e esgoto através de profissionais capacitados, utilização de produtos de alta qualidade e equipamentos específicos como caminhão e bombas de sucção."
                },
                {
                    "id": 5,
                    "titulo": "Limpeza Pós Obra",
                    "descricao": "Limpeza sustentável por profissionais altamente qualificados de todos os tipos de revestimentos existentes com a utilização dos produtos adequados, remoção de entulhos, resíduos, rejuntes, cimentos, deixando à vista todos os detalhes do acabamento para verificação da necessidade de retoques."
                },
                {
                    "id": 6,
                    "titulo": "Limpeza de Reservatório de Água",
                    "descricao": "A limpeza em espaços confinados (caixas d’água, reservatórios, etc) demandam atenção, segurança e cautela. A Olimpo segue à risca a NR33 que determina critérios para executar tal atividade."
                },
                {
                    "id": 7,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Camareira",
                    "descricao": "As camareiras são responsáveis pelo bem estar dos hóspedes em seus apartamentos, realizando a arrumação, limpeza e higienização do quarto."
                },
                {
                    "id": 8,
                    "titulo": "Manobrista",
                    "descricao": "Recepção e condução de veículos por manobristas capacitados com a finalidade de estacionamento, zelando pela preservação do ativo, controle de fluxo e organização do local."
                },
                {
                    "id": 9,
                    "titulo": "Motorista",
                    "descricao": "Condução de veículos por motoristas experientes para transportes de executivos e colaboradores de empresa com total segurança e discrição."
                },
                {
                    "id": 10,
                    "titulo": "Zeladoria",
                    "descricao": "Manutenção geral e predial (civil, elétrica, hidráulica) de forma esporádica, mensal, quinzenal, semanal, atendendo solicitações de pequeno e médio porte."
                },
                {
                    "id": 11,
                    "titulo": "Secretariado",
                    "descricao": "Execução de tarefas de apoio administrativo, envolvendo atendimento e filtragem de ligações, organização de agenda, pacote office e demais tarefas rotineiras."
                },
                {
                    "id": 12,
                    "titulo": "Recepção",
                    "descricao": "Atendimento personalizado por Recepcionistas capacitadas (bilíngue ou não), responsáveis pelo atendimento e encaminhamento dos visitantes, valorizando a imagem da empresa ou do evento."
                },
                {
                    "id": 13,
                    "titulo": "Portaria",
                    "descricao": "Atendimento de excelência por Porteiros capacitados, sendo responsáveis em atender as ocorrências normais e emergências, zelando pela eficiência, pontualidade e seriedade nos serviços prestados."
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 14,
                    "titulo": "Jardinagem",
                    "descricao": "Profissionais treinados garantindo a manutenção e a preservação do ambiente, com fornecimento de projetos para áreas verdes e matéria prima. "
                },
                {
                    "id": 15,
                    "titulo": "Copa",
                    "descricao": "Serviço de copeiro(a) de forma atenciosa para colaboradores e visitantes, atendendo recepção, salas e reuniões, tornando o ambiente de trabalho mais confortável."
                },
            ]
        }
    },

    methods: {
        changeTab(tab) {
            this.tabActive = tab
        }
    }
}
</script>

<style lang="scss" scoped>
.page-name {
    background-image: url(../assets/header-internas.png);
    background-repeat: no-repeat;
    height: 247px;
    width: 100%;
    margin-top: -20px;
    z-index: -2;
    position: relative;
    display: flex;
    align-items: center;

    h1  {
        color: #ffffff;
        font-size: 40px;
        font-weight: bold;
        text-transform: uppercase;

        @include media-mobile() {
            font-size: 30px;
            padding: 0 20px;
        }
    }
}


.tabs {
    margin-top: 75px;
    .container {
        display: flex;
        justify-content: space-between;


        @include media-mobile() {
            flex-direction: column;
            margin-bottom: 20px;
        }

        .tab-item {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            margin-left: 15px;
            display: flex;
            height: 60px;
            margin-top: -20px;
            transition: height 300ms ease-in-out;
            width: 33%;

            @include media-mobile() {
                margin: 0 0 30px 0;
                width: 100%;
            }

            &.active {
                height: 70px;
            }

            

            &:nth-child(1) {
                margin-left: 0px;
            }

            svg {
                margin-right: 20px;
            }

            h2 {
                font-size: 18px;
            }
        }
    }
}

.content {
    .container {
        background-color: #f5f5f5;

        .tab {
            display: flex;
            flex-wrap: wrap;
            padding: 45px 30px 0 30px;
            margin-bottom: 30px;

            @include media-mobile() {
                flex-direction: column;
            }

            .tab-info {
                padding: 0 20px;
                margin-bottom: 45px;
                width: 33.33%;

                @include media-mobile() {
                    width: 100%;
                }

                h3 {
                    color: #13bde1;
                    font-size: 17px;
                    margin-bottom: 20px;
                }

                p {
                    color: #5b5b5b;
                }
            }
        }
    }
}

.orcamento {
    background-color: #13bde1;
    height: 160px;

    @include media-mobile () {
      height: 200px;
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      @include media-mobile () {
        justify-content: space-around;
        flex-direction: column;
      }

      div {
        &:nth-child(2) {
          @include media-mobile () {
            display: flex;
          }
        }
      }

      p {
        font-size: 18px;
        color: #ffffff;

        strong {
          font-weight: bold;
        }
      }

      input {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #1d5f7b;
          height: 45px;
          padding: 0 20px;
          width: 300px;

          @include media-mobile() {
            width: 210px;
          }
      }

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ffffff;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ffffff;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: #ffffff;
      }

      button {
        background-color: #1d5f7b;
        border: none;
        color: #ffffff;
        padding: 0 20px;
        height: 45px;
      }
    }
  }
</style>

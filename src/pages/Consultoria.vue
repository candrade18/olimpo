<template>
    <div>
        <Header-Component />
        <div class="page-name">
            <div class="container">
                <h1>CONSULTORIA</h1>
            </div>
        </div>
        <div class="container content">
            <p class="texto-apoio">A consultoria organizacional identifica e propõe soluções dentro de empresas, instituições e eventos. Tem como finalidade entender a necessidade de cada operação ou organização, diagnosticar os principais problemas referentes aos controles internos, sejam: acesso e segurança patrimonial, limpeza e conservação, apoio administrativo e demais operações de facilities, principalmente, propor e implantar ações que gerem melhorias, alta performance, aumento de produtividade e a efetividade nos resultados.</p>
            <span class="line"></span>

            <div class="wrapper-box">
                <div class="box">
                    <div class="box-header">
                        <img src="@/assets/icon-consultoria1.png" alt="">
                        <h2>MAPEAMENTO <br> DE PROCESSOS</h2>
                    </div>
                    <p>Levantar dados e recursos fundamentais sobre a empresa e seus principais problemas e aspectos que precisam ser melhorados, apontando os pontos fortes e os pontos de melhoria da organização. </p>
                </div>
                <div class="box">
                    <div class="box-header">
                        <img src="@/assets/icon-consultoria2.png" alt="">
                        <h2>NORMAS E <br> PROCEDIMENTOS</h2>
                    </div>
                    <p>Estabelecer os métodos e ferramentas que serão abordados e utilizados durante o processo. Nesta etapa todas as ações são planejadas e priorizadas, os procedimentos são padronizados ou otimizados e validados.</p>
                </div>
                <div class="box">
                    <div class="box-header">
                        <img src="@/assets/icon-consultoria3.png" alt="">
                        <h2>TREINAMENTO <br> E EXECUÇÃO</h2>
                    </div>
                    <p>Treinar todas as pessoas envolvidas e colocar em práticas as melhorias identificadas. Importante que todos estejam engajados e tenham disciplina no cumprimento das ações traçadas.</p>
                </div>
            </div>

            <div class="container">
                <div class="wrapper-banner">
                    <p>A consultoria organizacional oferece estratégias capazes de subsidiar a tomada de decisões dos gestores e líderes especialistas das operações. A união dessas forças é fundamental para o alcance dos objetivos da organização.</p>
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

.content {
    padding-top: 50px;

    .texto-apoio {
        font-size: 17px;
        line-height: 32px;
        margin-bottom: 58px;
    }

    .line {
        display: block;
        width: 100%;
        background-color: #13bde1;
        height: 1px;
    }

    .wrapper-box {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 100px;

        @include media-mobile() {
            flex-direction: column;
        }

        .box {
            width: 30%;

            @include media-mobile() {
                width: 100%;
            }   

            .box-header {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f2f2f2;
                margin-bottom: 22px;
                height: 80px;

                img {
                    margin-right: 10px;
                }

                h2 {
                    color: #1d5f7b;
                    font-weight: 600;
                }
            }

            p { 
                line-height: 30px;
            }
        }
    }

    .wrapper-banner {
        display: flex;
        align-items: center;
        background-image: url(../assets/banner-consultoria.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: 267px;
        width: 100%;

        @include media-mobile() {
            background-image: none;
            background-color: #f2f2f2;
            padding: 20px;
            height: auto;
        }   

        p {
            font-size: 17px;
            line-height: 30px;
            margin-left: 40px;
            width: 60%;

            @include media-mobile() {
                width: 100%;
                margin-left: 0px;
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

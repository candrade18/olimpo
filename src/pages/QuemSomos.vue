<template>
    <div>
        <Header-Component />
        <div class="page-name">
            <div class="container">
                <h1>Quem Somos</h1>
            </div>
        </div>
        <div class="container">
            <div class="content">
                <div class="item-left">
                    <img src="@/assets/10anos-quem.png" alt="">
                    <p>A OLIMPO SERVICE é uma empresa prestadora de serviço e de consultoria engajada com o crescimento de seus clientes, parceiros e funcionários, Para isso, dedica sua atuação de forma inovadora, como uma ferramenta  completa de soluções em facilities e o modo tradicional em manter a disciplina, pontualidade e segurança das informações e execução de cada atividade. </p>
                    <p>Os serviços prestados vão desde a alocação de mão-de-obra e terceirização de serviços em qualquer especialidade  que o cliente necessite, até a execução completa de atividades como limpeza e conservação, trasnportes de documentos e entregas rápidas, segurança patrimonial e pessoal, CFTV, escolta armada e segurança em eventos. </p>
                    <p>A Olimpo conta com uma equipe altamente capacitada de gestão, operação ou execução, proporcionando aos seus clientes atendimento personalizado, de alto conhecimento técnico-estratégico e com habilidade ímpar para solucionar os mais diversos problemas. Todo o trabalho desenvolvido é pautado por procedimentos previamente definidos, tendo como valores o foco no resultado, fortalecimento de parcerias e a satisfação do cliente.</p>
                </div>
                <div class="item-right">
                    <div class="box">
                        <img src="@/assets/icon-service-1.png" alt="">
                        <h2>OLIMPO Security <br> <span style="color: #4bb68a">+ Proteção</span> </h2>
                    </div>
                    <div class="box">
                        <img src="@/assets/icon-service-2.png" alt="">
                        <h2>OLIMPO Facilities <br> <span style="color: #13bde1">+ Eficiência</span> </h2>
                    </div>
                    <div class="box">
                        <img src="@/assets/icon-service-3.png" alt="">
                        <h2>OLIMPO Express<br> <span style="color: #e6c217">+ Agilidade</span> </h2>
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

.content {
    display: flex;
    padding-top: 75px;

    @include media-mobile() {
        flex-direction: column;
        align-items: center;
    }

    .item-left {
        width: 60%;

        @include media-mobile() {
            padding: 0 20px;
            width: 100%;
        }

        img {
            margin-bottom: 40px;

            @include media-mobile() {
                max-width: 100%;
            }
        }

        p {
            line-height: 28px;
            margin-bottom: 30px;
            font-size: 17px;
        }
    }

    .item-right {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 40px;

        @include media-mobile() {
            padding: 0 20px;
            align-items: center;
            width: 100%;
        }

        .box {
            align-items: center;
            justify-content: center;
            background-image: url(../assets/servico-1.jpg);
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            font-weight: bold;
            flex-direction: column;
            margin-bottom: 30px;
            width: 290px;
            height: 210px;

            img {
                margin-bottom: 15px;
            }

            h2 {
                color: #747474;
                text-align: center;
                font-weight: normal;
                font-size: 24px;

                span {
                    font-weight: bold;
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

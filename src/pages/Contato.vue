<template>
    <div>
        <Header-Component />
        <div class="page-name">
            <div class="container">
                <h1>CONTATO</h1>
            </div>
        </div>
        <div class="content container">
            <div class="left">
                <p><strong>Trabalhe Conosco</strong></p>
                <p>A Olimpo Service realiza um trabalho contínuo de desenvolvimento e qualificação das nossas equipes, garantindo assim a excelência na administração e prestação de serviços. Venha fazer parte do nosso time.</p>
                <a href="#">enviar curriculo</a>
            </div>
            <div class="right">
                <p><strong>Ouvidoria</strong></p>
                <p>Ouvidoria
                    Para a Olimpo Service é de extrema importância saber o que o público pensa sobre seu trabalho e ações. A Ouvidoria é a porta de entrada para opiniões, críticas, elogios e comentários em relação aos serviços e atendimentos da empresa. Também por este canal sua opinião será encaminhada para a área responsável, devendo responder de forma adequada ao usuário. 
                    Entre em contato conosco através do email <a href="emailto:ouvidoria@olimposervice.com.br">ouvidoria@olimposervice.com.br</a>, sua opinião é importante.</p>
            </div>
        </div>

        <div class="content-mapa container">
            <p><strong>Mapa</strong></p>
            <p>Endereço aqui</p>
        </div>

        <div class="mapa">
            <img src="@/assets/mapa.png" alt="">
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
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    margin-bottom: 40px;


    @include media-mobile() {
        flex-direction: column;
        margin-top: 40px;
    }

    .left {
        width: 40%;

        @include media-mobile() {
            margin-bottom: 30px;
            width: 100%;
        }
        
        p {
            font-size: 17px;
            margin-bottom: 20px;
            line-height: 30px;
            strong {
                color: #1d5f7b;
                font-weight: bold;
            }
        }

        a {
            background-color: #0088a5;
            display: flex;
            justify-content: center;
            height: 50px;
            align-items: center;
            color: #ffffff;
            width: 100%;
        }
    }

    .right {
        width: 40%;

        @include media-mobile() {
            margin-bottom: 30px;
            width: 100%;
        }

        p {
            font-size: 17px;
            margin-bottom: 20px;
            line-height: 30px;
            strong {
                color: #1d5f7b;
                font-weight: bold;    
            }

            a {
                color: #0088a5;
            }
        }
    }
}

.content-mapa {
    margin-bottom: 30px;

    p {
        strong {
            color: #1d5f7b;
            font-weight: bold;
        }
    }
}

.mapa {
    margin: 0 auto;
    display: block;
    width: 100%;


    img {
        object-fit: cover;
        height: 543px;
        max-width: 100%;
        margin: 0 auto;
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

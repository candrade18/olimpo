<template>
    <div>
        <Header-Component />
        <div class="page-name">
            <div class="container">
                <h1>ORÇAMENTO</h1>
            </div>
        </div>
        <div class="container wrapper">
            <div class="texto-apoio">
                <p><strong>Será um prazer atende-lo! Solicite um orçamento.</strong></p>
                <p>Somos referência em terceirização de mão de obra e prestação de serviços como: limpeza e conservação, segurança, logística, facilities, etc. Solicite uma visita para apresentarmos o diferencial da Olimpo Service.</p>
            </div>
        </div>

        <div class="container">
            <div class="form">
                <div class="dados">
                    <input type="text" placeholder="Nome">
                    <input type="text" placeholder="E-mail">
                    <input type="text" placeholder="Telefone">
                </div>
                <div class="submit-form">
                    <button>solicitar</button>
                </div>
            </div>

            <div class="contato">
                <p>Se preferir, contate-nos em um dos nossos telefones a baixo ou via e-mail.</p>
                <div class="wrapper-numeros">
                    <div class="numero">
                        <p>(61) 9 8514.9406</p>
                    </div>
                    <div class="numero">
                        <p>(61) 9 8617.0018</p>
                    </div>
                    <div class="numero">
                        <p>(61) 9 9157.5173</p>
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
        <Footer-Component/>
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


.wrapper {
    padding-top: 50px;
    .texto-apoio {
        p {
            margin-bottom: 45px;

            strong  {
                color: #1d5f7b;
                font-weight: bold;
            }
        }
    }
}

.dados {
    display: flex;
    justify-content: space-between;

    input {
        border: 2px solid #13bde1;
        padding: 0 20px;
        height: 48px;
        width: 30%;
    }
}

.submit-form {
    margin-bottom: 135px;
    margin-top: 33px;

    button {
        cursor: pointer;
        background-color: #0088a5;
        border: none;
        color: #ffffff;
        height: 50px;
        width: 100%;

        &:hover {
            border: 1px solid #1d5f7b;
            background-color: #ffffff;
            color: #1d5f7b;
            transition: all 300ms ease-in-out;

        }
    }
}

.contato {
    p {
        margin-bottom: 40px;
    }
}

.wrapper-numeros {
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;

    @include media-mobile() {
        flex-direction: column;
    }

    .numero {
        display: flex;
        padding-top: 30px;
        justify-content: center;
        align-items: center;
        background-color: #ededed;
        height: 73px;
        width: 30%;

        @include media-mobile () {
            width: 100%;
            margin-bottom: 20px;
        }

        p {
            color: #1d5f7b;
            font-weight: bold;
            font-size: 27px;
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

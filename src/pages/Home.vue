<template>
  <div id="home-page">
    <!-- HEADER -->
    <Header-Component />
    <Carousel-Component />
    <div class="box-curriculo">
       <div class="wrap">
          <p><strong>Trabalhe conosco.</strong> Venha fazer parte do nosso time.</p>
          <router-link tag="button" to="/contato" style="cursor: pointer">Envie seu currículo</router-link>
       </div>
    </div>
    <div class="servicos">
        <div class="wrap">
          <div class="servicos-box__1 box">
            <img src="@/assets/icon-service-1.png" alt="">
            <h3>OLIMPO Security <span>+ Proteção</span></h3> 
          </div>
          <div class="servicos-box__2 box">
            <img src="@/assets/icon-service-2.png" alt="">
            <h3>OLIMPO Facilities <span> + Eficiência</span></h3>
          </div>
          <div class="servicos-box__3 box">
            <img src="@/assets/icon-service-3.png" alt="">
            <h3>OLIMPO Express <span> + Agilidade</span></h3>
          </div>
        </div>
    </div>
    <div class="quemSomos">
      <div class="container">
         <h3>Quem Somos</h3>
         <div class="box">
           <div class="box--item-left">
              <img src="@/assets/10anos.png" alt="">
           </div>
           <div class="box--item-right">
              <p>A OLIMPO SERVICE é uma empresa prestadora de serviço e de consultoria engajada com o crescimento de seus clientes, parceiros e funcionários. Para isso, dedica sua atuação de forma inovadora, como uma ferramenta completa de soluções em facilities e o modo tradicional em manter a disciplina, pontualidade e segurança das informações e execução de cada atividade.</p>
              <router-link tag="a" to="/quemSomos">Veja mais</router-link>
           </div>
         </div>
      </div>
    </div>
    <div class="consultoria">
       <div class="container">
          <h3>
            Consultoria
          </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div class="box">
            <div class="item">
              <img src="@/assets/consultoria1.png" alt="">
              <p>Mapeamento <br> de processos</p>
            </div>
            <div class="item">
              <img src="@/assets/consultoria2.png" alt="">
              <p>Normas e <br>  procedimentos</p>
            </div>
            <div class="item">
              <img src="@/assets/consultoria3.png" alt="">
              <p>Treinamento <br> e execução</p>
            </div>
          </div>
          <router-link tag="a" to="/consultoria" style="cursor: pointer">Veja mais</router-link>
       </div>
    </div>
    <div class="depoimentos">
      <div class="container">
         <h3>
            Depoimentos
         </h3>
         <div class="box">
          <div class="item">
            <img src="@/assets/depoimento-01.png" alt="">
            <p>Lorem ipsum é simplismente uma simulação de texto da industria tipografica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um.</p>
            <h4>Ricardo Brito</h4>
            <span>Diretor Executivo</span>
            <span>Nome da empresa</span>
          </div>
          <div class="item">
            <img src="@/assets/depoimento-02.png" alt="">
            <p>Lorem ipsum é simplismente uma simulação de texto da industria tipografica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um.</p>
            <h4>Júlia Martins</h4>
            <span>Gerente de Projetos</span>
            <span>Nome da empresa</span>
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
import Carousel from '@/components/CarouselHome'
import Footer from '@/components/Footer'

export default {
  components: {
    'Header-Component': Header,
    'Carousel-Component': Carousel,
    'Footer-Component': Footer
  },

  name: "home"
};
</script>

<style lang="scss" scoped>
#home-page {
  .box-curriculo {
    display: flex;
    justify-content: space-between;
    background-color: #1d5f7b;
    height: 135px;

    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 135px;
    }

    p {
      color: $color-3;
      font-size: 16px;
      strong {
        font-weight: bold;
      }
    }

     button {
        background-color: $color-4;
        border: none;
        color: $color-3;
        font-size: 13px;
        font-weight: 500;
        height: 45px;
        text-transform: uppercase;
        width: 206px;
    }
  }

  .servicos {
    padding-top: 80px;
    .wrap { 
      display: flex;
      justify-content: space-between;

      @include media-mobile() {
          flex-direction: column;
          align-items: center;
      }
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
      height: 266px;
      width: 33%;

      @include media-mobile() {
        width: 100%;
        height: 215px;
        background-position: center;
        margin-bottom: 20px;
      }

      img {
        margin-bottom: 25px;
      }

      h3 {
        color: #747474;
        font-size: 24px;
        text-align: center;
        line-height: 35px;
        width: 185px;
      }
    }
    .servicos-box__1 {
        span {
          color: #4bb68a;
        }
      }
      .servicos-box__2 {
        span {
          color: #13bde1;
        }
      }
      .servicos-box__3 {
        span {
          color: #e6c217;
        }
      }
  }

  .quemSomos {
    margin-top: 80px;
    h3 {
      color: $color-2;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      position: relative;

      &:hover {
         &::after{ 
           background-color: $color-2;
           height: 7px;
           transition: all 400ms ease-in-out;
         }
      }

      &::after{
        content: '';
        position: absolute;
        background-color: #13bde1;
        height: 5px;
        width: 100px;
        bottom: -13px;
        left: 0;
        right: 0px;
        margin: 0 auto; 
      }
    }

    .box {
        display: flex;
        margin-top: 80px;

        @include media-mobile() {
          flex-direction: column;
        }

        &--item-left {
          img {
            @include media-mobile() {
                width: 80%;
                margin: 0 auto 20px auto;
                display: block;
            }
          }
        }
        &--item-right {
          padding-left: 80px;

          @include media-mobile() {
            padding-left: 0;
            text-align: center;
            width: 90%;
            margin: 40px auto 0 auto;
          }

          p {
            line-height: 35px;
          }

          a {
            background-color: #13bde1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            text-align: center;
            height: 43px;
            width: 100px;

            @include media-mobile() {
                margin: 40px auto 0 auto;
                width: 300px;
            }

            &:hover {
              background-color: #1d5f7b;
              transform: translateY(-2px);
              transition: all 200ms ease-in-out;
            }
          }
        }
    }
  }

  .consultoria {
    background-color: #1d5f7b;
    margin-top: 100px;
    padding: 80px 0;


     h3 {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      position: relative;

      &:hover {
         &::after{ 
           background-color: $color-2;
           height: 7px;
           transition: all 400ms ease-in-out;
         }
      }

      &::after{
        content: '';
        position: absolute;
        background-color: #13bde1;
        height: 5px;
        width: 100px;
        bottom: -13px;
        left: 0;
        right: 0px;
        margin: 0 auto; 
      }
     }

     p {
       color: #ffffff;
       text-align: center;
       margin-top: 40px;
     }

     .box {
      display: flex;
      justify-content: space-between;
      margin-top: 75px;

       @include media-mobile() {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

       .item {
         border: 1px solid #13bde1;
         display: flex;
         align-items: center;
         justify-content: center;
         padding: 15px 0;
         width: 300px;

         @include media-mobile() {
           margin-bottom: 20px;
         }

         &:hover {
           transform: translateY(-3px);
           transition: all 300ms ease-in-out;
         }

         img {
           margin-right: 20px;
         }

         p {
            text-transform: uppercase;
            margin: 0;
            text-align: left;
         }
       }
     }

     a {
            background-color: #13bde1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px auto auto auto;
            text-align: center;
            height: 43px;
            width: 100px;

          @include media-mobile() {
            margin: 40px auto 0 auto;
            width: 300px;
          }

          &:hover {
              background-color: #ffffff;
              color: #1d5f7b;
              font-weight: bold;
              transform: translateY(-2px);
              transition: all 200ms ease-in-out;
          }
      }
  }

  .depoimentos {
    padding: 80px 0;

    h3 {
      color: $color-2;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      position: relative;

      &:hover {
         &::after{ 
           background-color: $color-2;
           height: 7px;
           transition: all 400ms ease-in-out;
         }
      }

      &::after{
        content: '';
        position: absolute;
        background-color: #13bde1;
        height: 5px;
        width: 100px;
        bottom: -13px;
        left: 0;
        right: 0px;
        margin: 0 auto; 
      }
    }


    .box {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;

      @include media-mobile() {
        flex-direction: column;
      }
      

      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        background-color: #f4f4f4;
        height: 380px;
        padding: 25px 20px;
        width: 45%;

        @include media-mobile() {
          width: 100%;
          margin-bottom: 100px;
        }        

        &::after {
          content: '';
          position: relative;
          background-color: #13bde1;
          height: 7px;
          position: absolute;
          bottom: 0px;
          width: 100%;
        }


        img {
          position: absolute;
          left: 0;
          right: 0;
          top: -55px;
          margin: 0 auto;
        }

        p {
          text-align: center;
          margin-bottom: 35px;
        }

        h4 {
          color: #1d5f7b;
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        span {
          display: block;
          font-size: 14px;
          margin-bottom: 12px;
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
}
</style>


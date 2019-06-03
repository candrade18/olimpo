<template>
    <div>           
        <!-- TOPO -->
        <div>
             <div class="top">
            <div class="wrap">
                <section class="top--info">
                    <p>Bem-vindo ao Olimpo Service </p>  
                    <p>Solicite um orçamento</p>
                </section>
            </div>
        </div>
        <div class="wrap">
            <div class="header">
                <div class="header--left">
                    <img src="@/assets/gr-logo.png" alt="Logo da Olimpo">
                </div>
                <div class="header--right">
                    <div class="header--right__contact">
                        <img src="@/assets/gr-telefone.png" alt="Ícone do telefone">
                        <p> <strong> (61) 3331.3331 / 9 9991.9991</strong> <br>
                        contato@olimposervice.com.br</p>
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <router-link tag="li" to="/" exact-active-class="active">Home</router-link>
                    <router-link tag="li" to="/quemSomos" exact-active-class="active">Quem somos</router-link>
                    <router-link tag="li" to="/servicos" exact-active-class="active">Serviços</router-link>
                    <router-link tag="li" to="/consultoria" exact-active-class="active">Consultoria</router-link>
                    <router-link tag="li" to="/orcamento" exact-active-class="active">Orçamento</router-link>
                    <router-link tag="li" to="/contato" exact-active-class="active">Contato</router-link>
                </ul>
            </div>
            <div class="menu-mobile">
                <p @click="AbrirMenu">Menu
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" @click="AbrirMenu">
                        <path fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M2 2l6.298 5.656L14.338 2"/>
                </svg>

                </p>
                <ul v-if="activeMenu">
                    <router-link tag="li" to="/" exact-active-class="active">Home</router-link>
                    <router-link tag="li" to="/quemSomos" exact-active-class="active">Quem somos</router-link>
                    <router-link tag="li" to="/servicos" exact-active-class="active">Serviços</router-link>
                    <router-link tag="li" to="/consultoria" exact-active-class="active">Consultoria</router-link>
                    <router-link tag="li" to="/orcamento" exact-active-class="active">Orçamento</router-link>
                    <router-link tag="li" to="/contato" exact-active-class="active">Contato</router-link>
                </ul>
            </div>
        </div>
        </div>
       
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    },

    data() {
        return {
            activeMenu: false
        }
    },

    methods: {
        AbrirMenu() {
            this.activeMenu= !this.activeMenu;
        }
    }
}
</script>


<style lang="scss" scoped>

.menu-mobile {
    display: none;
    padding: 20px 10px;

    p {
        position: relative;
        color: #fff;
        font-size: 17px;
        margin-left: 10px;

        svg {
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: 7px;
        }
    }

    @include media-mobile() {
        display: block;
        margin-bottom: 40px;
        background-color: #1d5f7b;
        
    }

    ul {
    margin-top: 20px;
        li {
            display: flex;
            align-items: center;
            height: 30px;
            padding: 20px 10px 20px 10px;
            color: #fff;
            margin-bottom: 20px;

            &.active {
                background-color: #0f9cbd;
                height: 30px;
            }
        }
    }
}

.top {
    background-color: #eeeeee;
    height: 29px;

    @include media_tablet() {
        height: 40px;
        display: flex;
        align-items: center;
    }

    .top--info {
      align-items: center;
      display: flex;
      height: 29px;
      justify-content: space-between;
     
      p {
        font-size: 12px;
        font-weight: 500;
        @include media_tablet() {
            font-size: 12px;
            text-align: center
        }
      }
    }
  }

.header {
    align-items: center;
    display: flex;
    height: 163px;
    justify-content: space-between;
    @include media_tablet() {
        margin-bottom: 30px;
    }
    @include media_tablet() {
        align-items: center;
        height: auto;
        flex-direction: column-reverse;
        justify-content: center;
    }
    .header--left {
        width: 50%;
        @include media_tablet() {
            display: flex;
            justify-content: center;
            width: 100%;
        }
        img {
            @include media_tablet() {
                object-fit: contain;
                height: 60px;
                width: 90px
            }
        }
    }
    .header--right {
        width: 50%;
        @include media_tablet() {
            display: flex;
            justify-content: center;
            padding: 15px 0px;
            width: 100%;
        }
        .header--right__contact {
            display: flex;
            justify-content: flex-end;
            img {
                object-fit: contain;
                margin-right: 12px;
            }    
            p {
                font-size: 15px;
                @include media_tablet() {
                    font-size: 12px;
                }
                strong {
                    font-weight: bold;
                }
            }
        }
    }
}

.menu {
    background-color: $color-2;
    @include media_tablet() {
        display: none;
    }
    ul {
        align-items: center;
        display: flex;
        height: 51px;
        li {
            cursor: pointer;
            align-items: center;
            color: #fff;
            display: flex;
            height: 100%;
            font-size: 13px;
            font-weight: 500;
            justify-content: center;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 1px;
            width: 120px;

            &.active {
                background-color: $color-4;
            }
        }
    }
}


</style>

<template>
    <div class="banners-carousel">
            <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="false" :centerMode="true">
                <slide>
                    <div class="banner-01">
                        <div class="wrap">
                            <h2>Terceirização de serviços e alocação de mão de obra</h2>
                            <p>Reduza seus custos e potencialize resultados.</p>
                            <button class="btn-azul">Solicite um orçamento</button>
                        </div>
                    </div>
                </slide>
                <slide>
                   <div class="banner-02">
                       <div class="wrap">
                            <h2>OLIMPO Security <span> + Proteção</span></h2>
                            <p>Muito mais que segurança, a garantia da sua tranquilidade.</p>
                            <button class="btn-azul">Solicite um orçamento</button>
                       </div>
                  </div>
                </slide>
                <slide>
                   <div class="banner-03">
                       <div class="wrap">
                            <h2>OLIMPO Facilities <span>+ Eficiência</span></h2>
                            <p>A solução completa em serviços. Gestão ideal e a excelência na execução.</p>
                            <button class="btn-azul">Solicite um orçamento</button>
                       </div>
                  </div>
                </slide>
                <slide>
                   <div class="banner-04">
                       <div class="wrap">
                            <h2>OLIMPO Express <span>+ Agilidade</span></h2>
                            <p>Uma logística planejada e eficaz para sua demanda.</p>
                            <button class="btn-azul">Solicite um orçamento</button>
                       </div>
                  </div>
                </slide>
            </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
}
</script>


<style lang="scss" scoped>
.banner-01 {
    background-image: url(../assets/banner-1.jpg);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    height: 532px;
    max-height: 532px;
    padding-top: 130px;
    width: 100%;

    h2 {
        color: $color-2;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 24px;
        width: 520px;
        @include media_tablet() {
            font-size: 30px;
            width: 100%;
        }
    }

    p {
        font-size: 17px;
        margin-bottom: 28px;
        @include media_tablet() {
            font-size: 14px;
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
        width: 210px;
    }
}

.banner-02 {
    background-image: url(../assets/banner-2.jpg);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    height: 532px;
    max-height: 532px;
    padding-top: 130px;
    width: 100%;

    h2 {
        color: $color-2;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 24px;
        width: 520px;
        span {
            color: #4bb68a;
        }
        @include media_tablet() {
            font-size: 30px;
            width: 100%;
        }
    }

    p {
        font-size: 17px;
        margin-bottom: 28px;

        @include media_tablet() {
            font-size: 14px;
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
        width: 210px;
    }
}

.banner-03 {
    background-image: url(../assets/banner-3.jpg);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    height: 532px;
    max-height: 532px;
    padding-top: 130px;
    width: 100%;

    h2 {
        color: $color-2;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 24px;
        width: 550px;
        span {
            color: #13bde1;
        }
        @include media_tablet() {
            font-size: 30px;
            width: 100%;
        }
    }

    p {
        font-size: 17px;
        margin-bottom: 28px;

        @include media_tablet() {
            font-size: 14px;
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
        width: 210px;
    }
}

.banner-04 {
    background-image: url(../assets/banner-4.jpg);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    height: 532px;
    max-height: 532px;
    padding-top: 130px;
    width: 100%;

    h2 {
        color: $color-2;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 24px;
        width: 550px;
        span {
            color: #e6c217;
        }
        @include media_tablet() {
            font-size: 30px;
            width: 100%;
        }
    }

    p {
        font-size: 17px;
        margin-bottom: 28px;

        @include media_tablet() {
            font-size: 14px;
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
        width: 210px;
    }
}
</style>


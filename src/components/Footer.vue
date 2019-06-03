<template>
    <div class="footer">
        <div class="container">
            <div>
                <img src="@/assets/gr-logo-white.png" alt="" srcset="">
            </div>
            <div>
                <img src="@/assets/gr-whats.png" alt="">
                <p><strong>(61) 3633-3131 / 9 9999 9191</strong> <br>
                contato@olimposervice.com.br
                </p>
            </div>
        </div>
    </div>    
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.footer {
    background-color: #1d5f7b;
    padding: 35px 0 30px 0;
    .container {
        display: flex;
        justify-content: space-between;

        @include media-mobile() {
            flex-direction: column;
            align-items: center;
        }

        div {

            @include media-mobile() {
                margin-bottom: 30px;
            }

            &:nth-child(2) {
                display: flex;
                align-items: center;

                img {
                    margin-right: 15px;
                }
                
                p {
                    color: #ffffff;

                    strong {
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>

<template>
    <Page>
        <ActionBar>
            <ActionItem @tap="goToHelp"
                ios.systemIcon="9" ios.position="left"
                android.systemIcon="ic_menu_help" android.position="actionBar" />
            <GridLayout width="100%" columns="auto, *">                
                <Label class="title" text="Início"  col="1"/>
            </GridLayout>
        </ActionBar>
        <StackLayout v-if="notification">
            <Label v-if="sucess" text="Sucesso" height="70" backgroundColor="#289062"/>
            <Label v-else text="Erro, tente outra vez" height="70" backgroundColor="##e74c3c"/>
        </StackLayout>
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Menu"/>
                <Label class="drawer-item" text="Sobre"/>
            </StackLayout>
            <StackLayout ~mainContent >
                <Label class="h1" text="Viva suas histórias!"></Label>
                <Label class="divider" width="80%"></Label>
                <FlexboxLayout  flexWrap="wrap" height="90%"   columns="*" rows="*">
                    <Button class="btn hipatia" @tap="initGame(0)" width="40%" height="40%"></Button>
                    <Button class="btn frida" @tap="initGame(1)" width="40%" height="40%"></Button>
                    <Button class="btn marie" @tap="initGame(2)" width="40%" height="40%"></Button>
                    <Button class="btn mileva" @tap="initGame(3)" width="40%" height="40%"></Button>
                </FlexboxLayout>
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >

  import Game from "./Pages/Game"
  import Help from "./Pages/Help"
  import Card from './Pages/Card'
  import MyForm from './Pages/Form'
  import Modal  from './Pages/components/Modal';

  var gestures = require("tns-core-modules/ui/gestures");

  export default {
      props: ['notification', 'sucess'],
      components: {
        Card,
        Modal
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
        initGame(historyId) {
            this.$navigateTo(Game, {
                props: {
                    idStory: historyId,
                    idScenario: 0
				},
            });
        },
        goToHelp () {
            this.$navigateTo(Help);
        }

    },
    beforeCreate() {
        this.$store.dispatch('fetchCollections');

    },
    mounted () {
        if (! this.notification) return ;
        if (this.sucess) {
            alert({
                title: "Sucesso!",
                message: "Suas respostas foram salvas em nossa base, obrigado!",
                okButtonText: "Ok"
            }).then(() => {
                console.log("Alert dialog closed");
            });
        } else {
            alert({
                title: "Oops!",
                message: "Algum problema ocorreu ao salvar os dados, contate o administrador",
                okButtonText: "Ok"
            }).then(() => {
                console.log("Alert dialog closed");
            });
        }
    }
  }

</script>

<style>
    *{
        color: #2c3e50;
    }
    .h1 {
        text-align: center;
        color: #9b59b6;
        padding: 10px;
        margin-top: 20px;
        font-size: 24px;
        font-weight: 500;
    }
    ActionBar {
        background-color: #9b59b6;
        color: #ffffff;
    }
    Card {
        padding: 2.5%
    }
    .btn {
        background: url('~/assets/images/NativeScript-Vue.png') no-repeat #9b59b6;
        background-position: center center;

        border-radius: 20px;
        padding: 20%;
        margin: 3% 5%;
    }
    .hipatia {
      background: url('~/assets/images/hipatia-card.png') no-repeat #9b59b6;
      /* background-size: 360px 508px; */
    }
    .mileva {
      background: url('~/assets/images/mileva-card.png') no-repeat #9b59b6;
      /* background-size: 360px 508px; */
    }
    .marie {
      background: url('~/assets/images/marie-card.png') no-repeat #9b59b6;
      /* background-size: 360px 508px; */
    }
    .frida {
      background: url('~/assets/images/frida-card.png') no-repeat #9b59b6;
      /* background-size: 360px 508px; */
    }
    .title {
        text-align: left;
        padding-left: 16;
        color: #ffffff;
        font-weight: 900;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #9b59b6;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }

    .divider {
        width: 100%;
        height: 2px;
        background:  #9b59b6;
        margin: 10px 0;
    }
</style>

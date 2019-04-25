<template>
  <Page>
    <ActionBar>
      <ActionItem @tap="goToHelp"
                ios.systemIcon="9" ios.position="left"
                android.systemIcon="ic_menu_help" android.position="actionBar" />
      <GridLayout width="100%" columns="auto, *">
          <Label class="title" :text="history.nome"  col="1"/>
      </GridLayout>
    </ActionBar>
    <StackLayout>
      <Image horizontalAlignment="center" alignSelf="center" v-show="history.imagem" :src="history.imagem"  width="100%"  height="15%" stretch="none" />
      <ScrollView ref="scroll" orientation="vertical" height="85%"  width="100%">
        <StackLayout width="100%" orientation="vertical" heigth="85%">
          <StackLayout class="text-panel" width="100%" orientation="vertical" verticalAlignment="stretch">
            <Image horizontalAlignment="center" class="img" alignSelf="center" v-show="scenario.imagem" :src="scenario.imagem" stretch="none"/>
            <Label class="texto"  v-model="scenario.texto" editable="false" textWrap="true" />
          </StackLayout>
          <StackLayout verticalAlignment="bottom" orientation="vertical" height="20%">
            <Button class="btn-opcao" width="90%" alignSelf="center" :key="key" v-for="(val, key) in scenario.opcoes" :text="val.texto" @tap="selectedOption(key, val.destino)" ></Button>
          </StackLayout>
      </StackLayout>
      </ScrollView>

    </StackLayout>
  </Page>
</template>

<script >
import MyForm from './Form'
import Help from "./Help"
 export default {
    props: ["idStory", "idScenario"],
    data() {
      return {
        historyName: "",
        selectedOptions: [],
        idScenarioNow: this.idScenario,
        history: this.$store.getters.getStory(this.idStory)
      }
    },
    computed: {
      scenario() {
        return  this.history.cenarios[this.idScenarioNow]
      }
    },
    methods: {
      selectedOption (idOption) {

        let destino = this.scenario.opcoes[idOption].destino

        if (destino) {
          destino = destino - 1
          this.selectedOptions.push({ cenario: this.idScenarioNow, selecionado: idOption  });
          this.idScenarioNow = destino;
          this.$refs.scroll.nativeView.scrollToVerticalOffset(0, false);

        } else {
          this.$navigateTo(MyForm,  {
            props: {
              'selectedOptions': this.selectedOptions,
              'nameHistory': this.history.nome
				    },
          })
        }
      },
      goToHelp () {
        this.$navigateTo(Help);
      }
    }
  }
</script>

<style scoped>
  .img {
     margin-top: 50px;
    /* padding: 0px 20px 20px 20px */
  }
  .texto {
    font-size: 18px;
    padding: 25x;
    color: #2c3e50;
  }
  .btn-opcao {
    background: #9b59b6;
    color: white;
  }
  .text-panel {
    min-height: 800px;
  }
</style>

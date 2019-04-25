<template>
  <Page>    
    <StackLayout>      
      <ScrollView ref="scroll" orientation="vertical" width="100%">        
        <StackLayout width="100%" orientation="vertical">
          <Label class="title" text="" editable="false" textWrap="true" width="20%" />
          <Image horizontalAlignment="center" alignSelf="center" src="res://logo" height="20%" width="60%" stretch="aspectFill" />
          <Label class="title" text="Equipe" editable="false" textWrap="true" />
          <StackLayout class="text-panel" width="100%" orientation="vertical" verticalAlignment="stretch">
            <Label class="texto" text="Ieda Fraga Santos (ProfEPT) - iedafragaufs@gmail.com" editable="false" textWrap="true" />
            <Label class="texto" text="Elza Ferreira Santos (orientadora ProfEPT) - elzafesantos@gmail.com" editable="false" textWrap="true" />
            <Label class="texto" text="Renato Silva Fagundes  (Eletrotécnica/IFS) - renatosfagundes@gmail.com" editable="false" textWrap="true" />
            <Label class="texto" text="Igor Gonçalves Antão (Desenvolvedor/UFS)  - igor_goncalves@live.com" editable="false" textWrap="true" />
            <Label class="texto" text="Timoteo Alves Cruz (Ilustrador/UFS) - timoteo.cruz@yahoo.com.br" editable="false" textWrap="true" />
          </StackLayout>          
          <Label class="title" text="Imagens" editable="false" textWrap="true" />
          <StackLayout class="text-panel" width="100%" orientation="vertical" verticalAlignment="stretch">
            <Label class="texto" text="Ilustrações realizadas por Timoteo Alves Cruz" editable="false" textWrap="true" />
            <Label class="texto" text="A imagem de Hipatia que serve de plano de fundo para sua história foi retirada do livro “Little Journeys to the Homes of Great Teachers” tendo sido feita pelo escritor, artista e filósofo Elbert Hubbard. O livro está disponível para download na internet no endereço http://www.gutenberg.org/ebooks/18936." editable="false" textWrap="true" />
            <Label class="texto" text="A imagem de Frida que serve como plano de fundo para a sua história foi capturada por Bernard Silberstein em 1940 e está disponível no site do Cincinnati Art Museum no endereço https://artsandculture.google.com/exhibit/AQJSeywc0iFIIw." editable="false" textWrap="true" />
            <Label class="texto" text="A imagem de Curie que serve de plano de fundo para a sua história foi feita por Henri Manuel em 1920. A imagem está disponível no site das Bibliotecas Municipais de Paris, no endereço https://bibliotheques-specialisees.paris.fr/ark:/73873/pf0001069198." editable="false" textWrap="true" />
            <Label class="texto" text="A imagem de Mileva que serve de plano de fundo para a sua história foi feita em 1896 e está disponível no site da Wikimedia Commons, no endereço https://commons.wikimedia.org/wiki/File:Mileva_Maric.jpg." editable="false" textWrap="true" />            
          </StackLayout>
          <Label class="title" text="Financiamento" editable="false" textWrap="true" />
          <StackLayout class="text-panel" width="100%" orientation="vertical" verticalAlignment="stretch">
            <Label class="texto" text="O jogo foi elaborado em parceria e subsídios com o Projeto de Inovação “É jogando que se aprende a viver em igualdade: construção de games” - (PIBITI/PROPEX/IFS/2017). Período de abrangência do projeto - início: 23/04/2018 – final: 23/02/2018. Destaca-se que o desenvolvimento do jogo efetuou-se concomitantemente ao desenvolvimento da pesquisa de Mestrado Profissional do Programa de Pós-Graduação em Educação Profissional e Tecnológica do Instituto Federal de Sergipe - ESTUDO DE RELAÇÕES DE GÊNERO E EDUCAÇÃO PROFISSIONAL: desconstruindo estereótipos para promover a equidade." editable="false" textWrap="true" />                        
          </StackLayout>
          <StackLayout class="text-panel" width="100%" orientation="vertical" verticalAlignment="stretch">
            <Button class="btn-voltar" text="Voltar" @tap="voltar()"></Button>
          </StackLayout>        
        </StackLayout>        
      </ScrollView>
      
      
    </StackLayout>
  </Page>
</template>

<script >
import App  from '../App';

export default {   
  methods: {
    voltar () {
      this.$navigateTo(App);
    }
  }
}
</script>

<style scoped>
  .img {    
    padding: 25px 20px 25px 20px;
  }
  .texto {
    font-size: 16px;
    padding: 10x;
    margin-left: 20px;
    margin-right: 20px;
    color: #2c3e50;
  }
  .title {
    font-size: 18px;
    padding: 20x;
    color: #2c3e50;
  }
  .btn-voltar {
    background: #9b59b6;
    color: white;
  }
  .text-panel {
    min-height: 800px;
  }

</style>

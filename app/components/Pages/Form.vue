<template>
	<Page class="page">
        

        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="title" text="Agora responda!"  col="1"/>
            </GridLayout>
        </ActionBar>
        <StackLayout verticalAlign="center" row="0" height="100">
            <Progress :value="currentProgress" class="p-20" />
        </StackLayout>
		<ScrollView>
            <StackLayout class="container">                
                <StackLayout>
                    <Label class="divider"></Label>
                    <Label class="form-title">1) Perfil</Label>
                    <Label class="divider"></Label>
                    <StackLayout class="questao" v-for="(questao, index) in formPerfil" :key="index">
                        <LevelsCheck :questionText="questao.texto" v-model="questao.resp" :options="questao.options"  :others="questao.others"  orientation="vertical"/>
                    </StackLayout>
                </StackLayout>                
                <Label class="divider"></Label>
                <Button class="btn-send" :isEnabled="enabledSend" text="Finalizar" @tap="enviarDados()"></Button>
            </StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import FloatLabel  from './FloatLabel';
import LevelsCheck  from './components/LevelsCheck';
import Modal  from './components/Modal';
import formulario  from '../../data/formulario.json';
import App  from '../App';

const Parse = require('parse')
Parse.serverURL = 'https://app-mulheres.back4app.io'; // This is your Server URL
Parse.initialize(
  'mwlgA0T7jJtWlwDfFZJRbD4tZNdfzXTMM2DZSeTd', // This is your Application ID
  '0XmIT4BJekgc8wBoouC35lziUwdJ0sieKMxy0vB9' // This is your Javascript key
);

export default {
    props: ['selectedOptions', 'nameHistory'],
    components: {
        'FloatLabel': FloatLabel,
        'LevelsCheck' : LevelsCheck,
        'Modal': Modal
    },
    data () {
        return {
            formPerfil: formulario['perfil'],            
            resp: '',
            busy: false,
            currentProgress: 0
        };
    },
    computed: {
        enabledSend () {
            return !this.formPerfil.some(el => typeof el.resp === 'undefined')                
        }
    },
    methods: {        
        onBusyChanged(){
            this.busy = !this.busy;
        },
        enviarDados() {            
            if(this.enabledSend){
                const Resultado = Parse.Object.extend("Resultados")
                const resultado = new Resultado();

                resultado.set("resposta", {
                    "perfil":  this.formPerfil.map(el => ({ "pergunta": el['texto'], "resposta" : el['resp']})),                    
                    "historico": this.selectedOptions,
                    "historia": this.nameHistory
                });
                let vm = this
                resultado.save().then(function (obj) {
                    console.log("Success", obj);
                    vm.currentProgress = 100
                    vm.$navigateTo(App, {
                        props: {
                            notification: true,
                            sucess: true
                        },
                    });
                })
                .catch(function (e) {
                    vm.currentProgress = 100
                    console.log("Error saving test object!" + e.message);
                    vm.$navigateTo(App, {
                        props: {
                            notification: true,
                            sucess: false
                        },
                    });
                });                
            }
        }
    }
};
</script>

<style scoped>
    .md-24{
        width: 24%;
    }
    .md-26{
        width: 28%;
    }
    .container{
        padding: 20px 80px 30px 80px;
    }

    .questao {
        padding: 20px 0;
    }
    .form-title {
        margin: 10px 0;
        font-weight: bold;
        font-size: 18px;
    }
    .text-center{
        text-align: center;
        font-size: 10.2rem
    }

    .btn-send {
        background: #9b59b6;
        color: white;
    }

    .btn-send:disabled {
        background: white;
        color: #9b59b6;
    }


</style>

<template>
    <StackLayout  >
        <Label  class="form-title" :text="questionText" textWrap="true"></Label>
        <StackLayout :orientation="orientation || horizontal" >
            <Button v-for="(option, index) in iOptions" :key="index" :class="{ checked: isCheckeds[index], large : orientation == 'vertical' }" textWrap="true" @tap="checkButton(index)">{{ option }}</Button>
        </StackLayout>
        <FloatLabel v-if="other" v-model="otherResp" />
    </StackLayout>
</template>

<script>
import FloatLabel from '../FloatLabel'
import { watch } from 'fs';

export default {
    components: {
        "FloatLabel": FloatLabel
    },
    props: ['questionText', 'value', 'options', 'orientation'],
    data() {
        return {
            isCheckeds: this.iOptions ? this.iOptions.map(element => false) : [false,false,false,false, false],
            iOptions: this.options || ['S', 'QS', 'R', 'N'],
            selectedOption: '',
            other: false,
            otherResp: ''
        };
    },
    watch :{
        selectedOption () {
            this.other = this.selectedOption == "Outros"
        },
        otherResp () {
            this.$emit('input', this.otherResp)
        }
    },
    methods: {
        checkButton(position){
            this.isCheckeds.forEach((element, index)=> {
                this.isCheckeds.splice(index, 1, element ? false : index == position)
            });

            this.selectedOption = this.iOptions[position];

            this.$emit('input', this.selectedOption)
        },
    }
};
</script>

<style scoped>
    Button {
        width: 25%
    }
    Button.checked {
        background: #9b59b6;
        color: white;
    }
    Label {
        /* margin: 10px 0; */
        font-weight: bold;
        font-size: 18px;
    }
    .container{
        padding: 20px;
    }
    .large {
        width: 100%;
    }    
</style>

<template>
	<StackLayout height="65%" class="" backgroundColor="#9b59b6">
        <Label class="h2 text-center" text="Enviando..." />
		<Image ref="view" class="view" src="res://logo">
        </Image>
	</StackLayout>
</template>

<script>

var enums = require("tns-core-modules/ui/enums");


export default {
    data() {
        return {};
    },
    mounted () {
        // let view = this.$refs.view.nativeView;
        // view.originX = 1; // default 0.5 (center), 0 is most left, 1 is most right
        // view.originY = 0.5; // default 0.5 (middle), 0 is top, 1 is bottom
        // view.animate({
        //     rotate: 360, // will take into account originX and originY
        //     duration: 3000
        // });
    }
};
</script>

<style>
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

.view {
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.h2.text-center {
    color: white;
    margin-top: 30px;
}
Image {
    margin-top: -20px;
}
</style>

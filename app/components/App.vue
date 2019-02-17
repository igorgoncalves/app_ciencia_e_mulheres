<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Menu"/>

                <Label class="drawer-item" text="Sobre"/>
            </StackLayout>
        <GridLayout ~mainContent columns="*" rows="*">
            <Button text="Button" @tap="initGame(1)" />
        </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
    
    import Game from "./Pages/Game"

  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
        initGame(historyId) {
            this.$navigateTo(Game, {
                props: {
					item: historyId
				},
            })
        }
    }

  }
</script>

<style scoped>
    ActionBar {
        background-color: #9b59b6;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
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
</style>

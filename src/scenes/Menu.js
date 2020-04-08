class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        console.log(this);
        // Display menu text
        this.add.text(20, 20, "Rocket Patrol Menu");

        // Launch next scene
        this.scene.start("playScene");
    }
}
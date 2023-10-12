class MouseDebug extends Phaser.Scene {

    constructor()
    {
        super();
        this.text;
    }

    preload() {
        this.load.image('mouse', 'assets/retromouse.png');
        this.load.image('mouse-left-click', 'assets/retromouse_left-click.png');
        this.load.image('mouse-right-click', 'assets/retromouse_right-click.png');
        this.load.image('mouse-middle-click', 'assets/retromouse_middle-click.png');
    }

    create() {
        const canvas = game.canvas;
        this.text = this.add.text(10, 10, '', { fill: '#00ff00' });
    }

    update() {
        const pointer = this.input.activePointer;
        const canvas = game.canvas;

        this.text.setText([
            // Simple Debugging of X and Y coordinates (note these vales are rounded to the nearest 2 decimal places)
            `x: ${pointer.worldX.toFixed(2)}`,
            `y: ${pointer.worldY.toFixed(2)}`,

            // detects if pointer button is down.
            `leftButtonDown: ${pointer.leftButtonDown()}`,
            `middleButtonDown: ${pointer.middleButtonDown()}`,
            `rightButtonDown: ${pointer.rightButtonDown()}`
        ]);

        // displays different mouse image depending input (only shows one input at a time)
        if (pointer.leftButtonDown()) {
            this.add.sprite(0, 600, 'mouse-left-click').setOrigin(0, 1);
        } else if (pointer.rightButtonDown()) {
            this.add.sprite(0, 600, 'mouse-right-click').setOrigin(0, 1);
        } else if (pointer.middleButtonDown()) {
            this.add.sprite(0, 600, 'mouse-middle-click').setOrigin(0, 1);
        }

        else {
            this.add.sprite(0, 600, 'mouse').setOrigin(0, 1);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    transparent: true,
    width: 800,
    height: 600,
    disableContextMenu: true,
    scene: MouseDebug
};

const game = new Phaser.Game(config);

const monsters = {
    Emby: {
        position: {
            x:280,
            y:320
        },
        image: {
            src: './img/embySprite.png'
        },
        frames: {
            max: 4,
            hold: 40
        },
        animate: true,
        name: 'Emby',
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
        position: {
            x:680,
            y:225
        },
        image: {
            src: './img/draggleSprite.png'
        },
        frames: {
            max: 4,
            hold: 40
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}
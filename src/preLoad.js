class preLoad extends Phaser.Scene {
    constructor() {
        super('preLoad');
        
    };
     // Carrega os recursos necessários durante a pré-carga
     preload() {
        this.load.image('bgTutorial', 'src/assets/C_tutorial/tela_tutorial.png');
        this.load.image('bntTutorial', 'src/assets/C_tutorial/btn_continuar.png');
        this.load.image('bandeiraVermelha', 'src/assets/bandeiraVermelha.png');
        this.load.image('bandeiraCinza', 'src/assets/bandeiraCinza.png');
        this.load.image('bntComecar', 'src/assets/C0/bntComecar.png');
        this.load.image('bgTelainicial', 'src/assets/C0/bg00.png');
        this.load.image('bgMontanha', 'src/assets/C0/bg01.png');
        this.load.image('bgMaquina', 'src/assets/C0/bg02.png');
        this.load.image('bgSorvete', 'src/assets/C0/bg03.png');
        this.load.image('unilevel', 'src/assets/C0/unilevel.png');
        this.load.image('filtro', 'src/assets/C0/filtro.png');
        this.load.spritesheet('urso_azul','src/assets/ursofofo.png',{ frameWidth: 277, frameHeight: 357});
        this.load.spritesheet('urso_rosa','src/assets/ursofofo_rosa.png',{ frameWidth: 277, frameHeight: 357});
        this.load.spritesheet('urso_amarelo','src/assets/ursofofo_amarelo.png', { frameWidth: 277, frameHeight: 357});
        this.load.spritesheet('urso_laranja','src/assets/ursofofo_laranja.png', { frameWidth: 277, frameHeight: 357});
        this.load.image('urso_default_azul','src/assets/urso_default_azul.png');
        this.load.image('urso_default_amarelo','src/assets/urso_default_amarelo.png');
        this.load.image('urso_default_rosa','src/assets/urso_default_rosa.png');
        this.load.image('urso_default_laranja','src/assets/urso_default_laranja.png');
        this.load.image('bg1', 'src/assets/C1/bg1.png');
        this.load.image('exclamacao', 'src/assets/C1/exclamacao.png');
        this.load.image('botaoE', 'src/assets/C1/botao_E.png');
        this.load.image('chao1', 'src/assets/C1/chao1.jpeg');
        this.load.image('direcoes','src/assets/C1/direcoes.png');
        this.load.spritesheet('player','src/assets/ursofofo_azul.png',{ frameWidth: 277, frameHeight: 357});
        this.load.spritesheet('telaPiscando', 'src/assets/telapiscando.png', { frameWidth: 900, frameHeight: 600 });
        this.load.image('bgVaral','src/assets/C2/bg21.png');
        this.load.image('bgBolha','src/assets/C2/bg22.png');
        this.load.image('placa', 'src/assets/C2/placa.png');
        this.load.image('pregador','src/assets/C2/pregador.png');
        this.load.image('pregadorQuebrado', 'src/assets/C2/pregadorQuebrado.png');
        this.load.image('chao2','src/assets/C2/chao2.png');
        this.load.image('maquina','src/assets/C2/maquina.png');
        this.load.image('bacteria','src/assets/C2/bacteria.png');
        this.load.image('celular', 'src/assets/C2/celularnovo.png');
        this.load.image('grades', 'src/assets/C2/grades.png');
        this.load.spritesheet('omo','src/assets/spriteomo.png', { frameWidth: 512, frameHeight: 512});
        this.load.spritesheet('jacare','src/assets/C3/jacare_zooreta.png', {frameWidth: 332, frameHeight:327});
        this.load.spritesheet('portal', 'src/assets/C2/portalroxosprite.png', { frameWidth: 285, frameHeight: 450 });
        this.load.image('bgGameOver', 'src/assets/C_gameOver/bgGameOver.png');
        this.load.image('textoGameOver', 'src/assets/C_gameOver/gameOver.png');
        this.load.image('bntVoltar','src/assets/C_gameOver/bntVoltar.png');
        this.load.image('bgPergunta', 'src/assets/C_pergunta/bgPergunta.png');
        this.load.image('fundoPergunta', 'src/assets/C_pergunta/fundoPergunta.png');
        this.load.image('bntA', 'src/assets/C_pergunta/bntA.png');
        this.load.image('bntB', 'src/assets/C_pergunta/bntB.png');
        this.load.image('bntC', 'src/assets/C_pergunta/bntC.png');
        this.load.image('bntD', 'src/assets/C_pergunta/bntD.png');
        this.load.spritesheet('virus', 'src/assets/C_pergunta/virus.png', {frameWidth: 225, frameHeight: 180});
        this.load.image('3coracao', 'src/assets/tresCoracoes.png');
        this.load.image('2coracao', 'src/assets/doisCoracoes.png');
        this.load.image('1coracao', 'src/assets/umCoracao.png');
        this.load.image('fundomt', 'src/assets/C3/bgMaeTerra.png');
        this.load.image('montanhas', 'src/assets/C3/bg30.png');
        this.load.image('colinas', 'src/assets/C3/bg31.png');
        this.load.image('arvore', 'src/assets/C3/bg32.png');
        this.load.image('chaomt', 'src/assets/C3/chaoMaeTerra.jpeg');
        this.load.audio('musicaFundo', "src/assets/sounds/game-background-music-62671.mp3");
        this.load.image('moeda', 'src/assets/moeda.png');
        this.load.image('celularLink', 'src/assets/C_link/celularLink.png')
        this.load.audio('coletarMoeda', "src/assets/sounds/coin-collect-retro-8-bit-sound-effect-145251.mp3");
        this.load.audio('dano','src/assets/sounds/hurt_c_08-102842.mp3');
        this.load.audio('respostaErrada','src/assets/sounds/fiasco-154915.mp3');
        this.load.audio('somGameOver','src/assets/sounds/failure-2-89169.mp3');
        this.load.image('balaoDeFala', 'src/assets/C1/balaoDeFalaHacker.png');
        this.load.image('bgAcerto', 'src/assets/C_acerto/Bg_Acerto.png');
        this.load.image('bgAcerto1', 'src/assets/C_acerto/bgAcerto1.png');
        this.load.image('bgAcerto2', 'src/assets/C_acerto/bgAcerto2.png');
        this.load.image('botaoContinuar', 'src/assets/C_acerto/bntContinuar.png');
        this.load.image('tronco', 'src/assets/C3/tronco.png');
        this.load.image('besouro', 'src/assets/C3/besouro.png');
        this.load.image('cipo', 'src/assets/C3/cipo.png');
        this.load.image('bolacha', 'src/assets/C3/bolacha.png');
        this.load.image('bgChangePlayer', 'src/assets/bgChangePlayer.jpeg');
        this.load.audio('pop','src/assets/sounds/pop.mp3');
        this.load.audio('somCheckpoint','src/assets/sounds/somCheckpoint.wav');
        this.load.image('bgPergunta', 'src/assets/C_pergunta/bgPergunta.png');
        this.load.image('bntA', 'src/assets/C_pergunta/bntA.png');
        this.load.image('bntB', 'src/assets/C_pergunta/bntB.png');
        this.load.image('bntC', 'src/assets/C_pergunta/bntC.png');
        this.load.image('bntD', 'src/assets/C_pergunta/bntD.png');
        this.load.audio('SomBgQuiz','src/assets/sounds/somSceneQuiz.wav');
        this.load.audio('vitoria','src/assets/sounds/horn-stabs-entrance-14741.mp3');
        this.load.audio('SomBgMaeTerra','src/assets/sounds/game-music-loop-7-145285.mp3');
        this.load.video('CutScene1','src/assets/videos/cutscenes.mp4');
        this.load.video('CutSceneFinal','src/assets/videos/cutscene_final.mp4');
        this.load.spritesheet('Confetti','src/assets/C_acerto/Confetti.png', {frameWidth: 900, frameHeight: 600});
    }

    create() {
        this.scene.start('Scene00');
    };
}

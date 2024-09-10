let scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
    scanPeriod: 5,
    mirror: false
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]).then(() => {
            console.log("Câmera em exibição.");
            document.getElementById('preview').style.display = 'block'; // Força o vídeo a ser mostrado
        }).catch(function (e) {
            console.error("Erro ao iniciar o vídeo da câmera: ", e);
        });
    } else {
        console.error('Nenhuma câmera foi encontrada.');
    }
}).catch(function (e) {
    console.error("Erro ao acessar a câmera: ", e);
});

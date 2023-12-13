document.getElementById("mostrarInfo").addEventListener("click", function() {
    var curiosidades = [
        "Curiosidad 1: [el jugador con mas anillos es bill russel ganador de 11 campeonatos con la franquicia de los boston celtics]",
        "Curiosidad 2: [el jugador con mas puntos anotados en un partido es wilt chamberlain con un total de 100 puntos en un solo parido]",
        
        // Agrega mas curiosidades aqui
    ];

    var curiosidadAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    document.getElementById("infoNBA").textContent = curiosidadAleatoria;
});

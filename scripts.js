document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DUA: Múltiples formas de representación (Alto Contraste)
    const btnContraste = document.getElementById('btn-contraste');
    const htmlElement = document.documentElement;

    btnContraste.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'alto-contraste') {
            htmlElement.removeAttribute('data-theme');
        } else {
            htmlElement.setAttribute('data-theme', 'alto-contraste');
        }
    });

    // 2. DUA: Múltiples formas de implicación (Actividad Interactiva)
    const botonesQuiz = document.querySelectorAll('.btn-quiz');
    const feedbackDiv = document.getElementById('feedback-quiz');

    botonesQuiz.forEach(boton => {
        boton.addEventListener('click', function() {
            // Reiniciar estilos de los botones
            botonesQuiz.forEach(b => {
                b.style.borderColor = 'transparent';
                b.setAttribute('aria-pressed', 'false');
            });
            
            // Marcar el botón seleccionado
            this.setAttribute('aria-pressed', 'true');
            const esCorrecto = this.getAttribute('data-correct') === 'true';
            
            feedbackDiv.classList.remove('oculto');
            
            if (esCorrecto) {
                this.style.borderColor = 'var(--correct-color)';
                feedbackDiv.style.backgroundColor = 'rgba(40, 167, 69, 0.2)';
                feedbackDiv.style.color = 'var(--text-color)';
                feedbackDiv.innerHTML = '✅ <strong>¡Exacto!</strong> La IA refleja la información dominante en sus datos de entrenamiento. Si la base de datos está sesgada, la respuesta también lo estará. ¡Excelente pensamiento crítico!';
            } else {
                this.style.borderColor = 'var(--incorrect-color)';
                feedbackDiv.style.backgroundColor = 'rgba(220, 53, 69, 0.2)';
                feedbackDiv.style.color = 'var(--text-color)';
                feedbackDiv.innerHTML = '❌ <strong>No es exactamente así.</strong> Recuerda que la IA no tiene opiniones propias ni entiende el mundo como nosotros. Solo conecta patrones matemáticos basados en los datos que le proporcionaron los humanos. Intenta de nuevo.';
            }
        });
    });
});

// 3. DUA: Múltiples formas de representación (Lectura en voz alta)
function leerTexto(idElemento) {
    const texto = document.getElementById(idElemento).innerText;
    
    // Verificar si el navegador soporta síntesis de voz
    if ('speechSynthesis' in window) {
        // Detener cualquier lectura previa
        window.speechSynthesis.cancel();
        
        const sintesis = new SpeechSynthesisUtterance(texto);
        sintesis.lang = 'es-UY'; // Adaptado al español
        sintesis.rate = 0.9; // Una velocidad ligeramente menor facilita la comprensión
        
        window.speechSynthesis.speak(sintesis);
    } else {
        alert("Tu navegador no soporta la lectura en voz alta.");
    }
}
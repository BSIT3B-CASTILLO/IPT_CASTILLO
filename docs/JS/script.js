function typeWriter(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ""; 

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed); 
        } else {
            setTimeout(function() {
                element.innerHTML = ""; 
                i = 0; 
                typing(); 
            }, 1000); 
        }
    }

    typing(); 
}

window.onload = function() {
    typeWriter('typing-effect', 'Front-End Developer', 100);
};

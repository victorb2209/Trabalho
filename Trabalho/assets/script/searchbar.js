function pesquisar() {
    
    var termoPesquisa = document.getElementById("searchbar").value.toLowerCase();

    
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    
    var termosAdicionais = {
        "adotar cachorro": "/html/cachorros.html",
        "adotar cao": "/html/cachorros.html",
        "adotar cão": "/html/cachorros.html",
        "adotar gato": "/html/Gatos.html",
        "adotar gatos": "/html/Gatos.html",
        "sobre nos": "/html/sobreNos.html",
        "sobre nós": "/html/sobreNos.html",
        "um pouco sobre nos": "/html/sobreNos.html",
        "um pouco sobre nós": "/html/sobreNos.html",
        "cao": "/html/cachorros.html",
        "Cao": "/html/cachorros.html",
        "cão": "/html/cachorros.html",
        "Cão": "/html/cachorros.html",
        "adotar cachorro": "/html/cachorros.html"
    };

    
    for (var i = 0; i < navLinks.length; i++) {
        var linkText = navLinks[i].textContent.toLowerCase();
        
        if (linkText.includes(termoPesquisa)) {
            
            window.location.href = navLinks[i].getAttribute('href');
            return false; 
        }
    }
    
    if (termosAdicionais.hasOwnProperty(termoPesquisa)) {
        
        window.location.href = termosAdicionais[termoPesquisa];
        return false; 
    }
    
    alert("Nenhum resultado encontrado para '" + termoPesquisa + "'");
    return false; 
}
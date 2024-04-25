function searchlogo() {
    searchinp = document.getElementById('searchInput')
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        var logoResults = document.getElementById('logoResults');
        logoResults.innerHTML = ''
        var logoCard = document.createElement('div');
        logoCard.className = 'col-md-4 logo-card';
        logoCard.innerHTML = `<img src="logos/${searchTerm}.jpg" alt="No logo found in folder that you search🔍" class="img-fluid">`;
        logoResults.appendChild(logoCard);
    } else {
        searchinp.classList.add("error");
    }
}
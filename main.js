
const filterSkills = () => {
    let input = document.getElementById('filter');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('skill-elements');
    let li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var textP = li[i].getElementsByTagName('p')[0]
        var textValue = textP.textContent || textP.innerText;
        console.log('hola')
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'block'
        } 
        else 
        {
            li[i].style.display = 'none'
        }
}
}

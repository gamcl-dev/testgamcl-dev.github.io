var text = document.getElementById('animatetext');
var newDom = '';
var animationDelay = 6;

/*
for(let i = 0; i < text.innerText.length; i++)
{
    // check for new line character
    if(text.innerText[i] == '\\')
    {
        newDom += '<br/>'
    }else
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
}
*/
//text.innerHTML = newDom;
if(text != null)
{
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
}

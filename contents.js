document.body.addEventListener('keydown',
event => {
    let str = '';
    if (event.key === 'b' && event.ctrlKey) {
    str = '「<a href="'+location.href+'" target="_blank">' + $("title").html() + '</a>」';
    navigator.clipboard.writeText(str);
    }
    if (event.key === 'z' && event.ctrlKey) {
    str = $("title").html()+ "\n" + location.href;
    navigator.clipboard.writeText(str);
    }
});

document.body.addEventListener('keydown',
event => {
    if (event.key === 'v' && event.ctrlKey) {
    let str = '「<a href="'+location.href+'" target="_blank">'+$("title").html()+'</a>」';
    navigator.clipboard.writeText(str);
    }
});

async function likesFunc(event) {
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json();
    let count = response_json.count;
    let articleId = target.dataset.articleId;
    let span = document.getElementById(articleId);
    span.innerText = `Лайки: ${count}`;
    if(target.innerText === 'Дизлайк'){
        target.innerText = 'Лайк';
    }
    else{
        target.innerText = 'Дизлайк';
    }


}

function onLoadFunc() {
    let likes = document.getElementsByClassName("likes");
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click", likesFunc);
    }
}

window.addEventListener("load", onLoadFunc)
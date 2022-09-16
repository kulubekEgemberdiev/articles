async function commentLikesFunc(event) {
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json();
    let count = response_json.count;
    let commentId = target.dataset.commentId;
    let span = document.getElementById(commentId);
    span.innerText = `Лайки: ${count}`;
    if(target.innerText === 'Дизлайк'){
        target.innerText = 'Лайк';
    }
    else{
        target.innerText = 'Дизлайк';
    }


}

function onLoadFunc() {
    let likes = document.getElementsByClassName("comment-likes");
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click", likesFunc);
    }
}

window.addEventListener("load", onLoadFunc)
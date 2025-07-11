async function getsongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response)
    let element = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            sessionStorage.push(element.href)
        }
    }
    return songs
}
let songs = getsongs()
console.log(songs)
const linksSocialMedia = {
  github: 'pedrotaveira10',
  youtube: 'UCRuBkdKQUGUu6Znhr4UCj6Q',
  facebook: 'pedrohenrique.taveira',
  instagram: 'pedrohenriquetaveira'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    //children[0] acessa o primeiro elemento de li e depois o atributo href
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
//#ImaginarConstruirTransformar

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

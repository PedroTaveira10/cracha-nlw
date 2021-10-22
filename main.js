const LinksSocialMedia = {
  github: 'PedroTaveira10',
  youtube: 'channel/UCRuBkdKQUGUu6Znhr4UCj6Q',
  facebook: 'pedrohenrique.taveira',
  instagram: 'pedrohenriquetaveira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      imageProfile.src = data.avatar_url
      userbio.textContent = data.bio
      userlink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

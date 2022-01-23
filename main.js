const LinksSocialMedia = {
  girhub: 'DevSamuelAguiar',
  youtube: '',
  instagram: '',
  linkedin: '',
  twitter: ''
  // Aproveitei para criar minhas redes sociais profissionais, algumas talves demore de 1 a 2 dias para serem procurada na barra de pesquisa da respectiva rede social.
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.girhub}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

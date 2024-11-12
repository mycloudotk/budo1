const PATH = 'https://admin-backend.manta.network/media/current'

async function mediaData() {
  try {
    const res = await fetch(PATH, {
      method: 'GET',
    })
    const { data } = await res.json()

    if (data) {
      const telegram = document.querySelectorAll('.media .telegram')[0]
      const discord = document.querySelectorAll('.media .discord')[0]
      const github = document.querySelectorAll('.media .github')[0]
      const twitter = document.querySelectorAll('.media .twitter')[0]
      const youtube = document.querySelectorAll('.media .youtube')[0]
      const medium = document.querySelectorAll('.media .medium')[0]
      telegram.innerHTML = data?.telegram
      discord.innerHTML = data?.discord
      github.innerHTML = data?.github
      twitter.innerHTML = data?.twitter
      youtube.innerHTML = data?.youtube
      medium.innerHTML = data?.medium
    }

    // return data
  } catch (error) {}
}

mediaData()

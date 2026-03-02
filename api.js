console.log("JS carregado")

const dadosArtista = document.getElementById("artista")
const musicaInput = document.getElementById("musica")
const button = document.getElementById("button")
const letter = document.getElementById("letter")


const buscarMusica = async () => {
    const artista = dadosArtista.value
    const titulo = musicaInput.value

    if (!artista || !titulo) return

    letter.innerHTML = "Carregando..."

       try {
        const lyricsResponse = await fetch(
            `https://api.lyrics.ovh/v1/${encodeURIComponent(artista)}/${encodeURIComponent(titulo)}`
        )

        const lyricsData = await lyricsResponse.json()

        const letra = lyricsData.lyrics || "Letra não encontrada"

        letter.innerHTML = `
            <h2>${titulo} - ${artista}</h2>
            <pre>${letra}</pre>
        `
    } catch (error) {
        console.error(error)
        letter.innerHTML = "Erro ao buscar letra"
    }
}

button.addEventListener("click", buscarMusica)

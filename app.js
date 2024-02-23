const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const preferredVoice = speechSynthesis.getVoices().find(voice => voice.lang === 'pt-BR');
const apiKey = 'AIzaSyCNYbTShwVlQmtY2Wt8Bs57x_A-n-qGfTg'; // Replace with your YouTube API key

function speak(sentence) {
    // Verificar se a API de síntese de fala é suportada
    if ('speechSynthesis' in window) {
        const text_speak = new SpeechSynthesisUtterance(sentence);
        // Configurar propriedades, como taxa e voz, se necessário
        text_speak.rate = 1;
        // Definir a voz, se necessário
        text_speak.voice = preferredVoice;
        window.speechSynthesis.speak(text_speak);
    }
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Bom dia Senhor");
    }

    else if(hr == 12) {
        speak("Bom dia Senhor");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Boa tarde Senhor");
    }

    else {
        speak("Boa noite Senhor");
    }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'; // Definindo o idioma para português-BR
recognition.continuous = true;

btn.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    
    if (transcript.toLowerCase().includes('james')) {
        speakThis(transcript.toLowerCase());
    }
};

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Não entendi o que você disse, por favor, tente novamente";

    if (message.includes('tá aí') || message.includes('dá um salve')) {
        const finalText = "Estou aqui, como vai Senhor?";
        speech.text = finalText;
    } 

    else if (message.includes('valeu')|| message.includes('obrigado')) {
        const finalText = "De nada Senhor, estou aqui para isso";
        speech.text = finalText;
    }
    
    else if (message.includes('mil grau')) {
        const finalText = "Mil grau Senhor, como posso te ajudar?";
        speech.text = finalText;
    } 

    else if (message.includes('mel')) {
        const finalText = "fala comigo memel, sua cachorra do carai";
        speech.text = finalText;
    }

    else if (message.includes('julius')) {
        const finalText = "fala comigo Juliôs seu careca, me empresta 10 pila aí meu bom";
        speech.text = finalText;
    }

    else if (message.includes('carol')) {
        const finalText = "Nem fudendo, vai que ela me pede dinheiro";
        speech.text = finalText;
    }

    else if (message.includes('petista')) {
        const finalText = "Aqui é bolsa neles porra, petista, é meu ovo esquerdo";
        speech.text = finalText;
    }
    
    else if (message.includes('quem é você')) {
        const finalText = "Meu nome é James, sou um assistente virtual Senhor";
        speech.text = finalText;
    } 

    else if (message.includes('bom dia')) {
        const finalText = "Bom dia senhor, como posso ajudar hoje?";
        speech.text = finalText;
    } 

    else if (message.includes('boa tarde')) {
        const finalText = "Boa tarde senhor, como posso ajudar hoje?";
        speech.text = finalText;
    } 

    else if (message.includes('boa noite')) {
        const finalText = "Boa noite senhor, como posso ajudar hoje?";
        speech.text = finalText;
    } 

    else if (message.includes('código base')) {
        const finalText = "acesso permitido, bem vindo senhor Filipe, agora você tem acesso total ao sistema";
        speech.text = finalText;
    }

    else if (message.includes('código-pai')) {
        const finalText = "Acesso permitido, bem vindo senhor Paulo, agora você tem acesso total ao sistema";
        speech.text = finalText;
    }
    
    else if (message.includes('ativar sistema')) {
        const finalText = "Ativando sistema, acesso permitido, Rafael 23, 0, 5, sistema online";
        speech.text = finalText;

        setTimeout(() => {
            wishMe();
        }, 500); // Tempo em milissegundos, ajuste conforme necessário
    } 
    
    else if (message.includes('desligar sistema')) {
        const finalText = "Desativando sistema, acesso permitido, Rafael 23, 0, 5, sistema desativado";
        speech.text = finalText;

        setTimeout(() => {
            wishMe();
        }, 500); // Tempo em milissegundos, ajuste conforme necessário
    } 

    else if (message.includes('abrir o x')) {
        window.open("https://twitter.com", "_blank");
        const finalText = "Abrindo Éx";
        speech.text = finalText;
    } 
    
    else if (message.includes('abrir o google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Abrindo Google";
        speech.text = finalText;
    } 

    else if (message.includes('abrir o gmail')) {
        window.open("https://gmail.com", "_blank");
        const finalText = "Abrindo Gmail";
        speech.text = finalText;
    } 

    else if (message.includes('abrir o tik tok')) {
        window.open("https://tiktok.com", "_blank");
        const finalText = "Abrindo TikTok";
        speech.text = finalText;
    } 

    else if (message.includes('abrir o chat gpt')) {
        window.open("https://chat.openai.com/", "_blank");
        const finalText = "Abrindo Chat GPT";
        speech.text = finalText;
    } 

    else if (message.includes('abrir o linkedin')) {
        window.open("https://linkedin.com/", "_blank");
        const finalText = "Abrindo Linkedin";
        speech.text = finalText;
    } 

    else if (message.includes('abrir o behance')) {
        window.open("https://www.behance.net/rafaelvianadev/", "_blank");
        const finalText = "Abrindo Behance";
        speech.text = finalText;
    }

    else if (message.includes('abrir o github')) {
        window.open("https://github.com/", "_blank");
        const finalText = "Abrindo Github";
        speech.text = finalText;
    }
    
    else if (message.includes('abrir o instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Abrindo Instagram";
        speech.text = finalText;
    } 
    
    else if (message.includes('abrir o youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Abrindo Youtube";
        speech.text = finalText;
    } 
    
    else if (message.includes('no youtube')) {
        // Remover "no youtube" e "james" da mensagem
        const searchQuery = message.replace('no youtube', '').replace('james', '').trim();
        // Abrir uma nova aba do navegador com a pesquisa no YouTube
        window.open(`https://www.youtube.com/results?search_query=${searchQuery.replace(" ", "+")}`, "_blank");
        // Definir o texto a ser falado
        const finalText = "Abrindo Youtube";
        speech.text = finalText;
    
        // Extrair ID do vídeo
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const videoId = data.items[0].id.videoId;
                // Abrir a página do vídeo com base no ID
                window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }    

    else if(message.includes('o que é') || message.includes('ouem é') || message.includes('o que são')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Aqui está o que eu achei sobre " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://pt.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Aqui está o que eu achei na Wikipedia sobre " + message;
        speech.text = finalText;
    }

    else if(message.includes('horas')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "Agora são" + time;
        speech.text = finalText;
    }

    else if(message.includes('dia')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = "Hoje é" + date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Eu encontrei algumas informações sobre " + message + " no google";
        speech.text = finalText;
    }

    speech.volume = 3;
    speech.pitch = 3;
    speech.rate = 1.1;

    window.speechSynthesis.speak(speech);
}

const pages = [
    { t: "1. Quando receber esse livro", txt: "Fiz este pequeno espaço para que você sempre tenha onde encontrar um abraço, mesmo quando eu não estiver por perto. Espero que goste e esse livro ajude a te animar quando não estiver muito bem, cada página foi feita com muito amor e carinho.", num: "01", img: "imagem1.webp" },
    { 
        t: "2. Quando estiver tendo um dia ruim", 
        txt: "Sinto muito por não estar tendo um bom dia. Caso se sinta a vontade para conversar sobre, quero saber o que houve, quero te escutar, te ajudar e fazer o que for preciso para deixar seu dia melhor. Respire fundo. Dias ruins passam, você é forte e vai superar isso.", 
        num: "02", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
            "Me mandar uma mensagem contando o que houve",
            "Ouvir sua música favorita bem alto",
            "Comer sua comida preferida",
            "Tirar um tempo só para você descansar",
            "Tome um banho relaxante e demorado",
        ]
    },
    { t: "3. Quando não conseguir dormir", 
        txt: "Sinto muito por não estar conseguindo dormir gatinha. Independente do horário se precisar conversar, dividir algum pensamento ou só ter uma companhia (mesmo que de longe) pode me ligar. Espero conseguir te ajudar e que assim consiga dormir e descansar.", 
        num: "03", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
            "Toma um cházinho quente, como camomila ou capim-santo",
            "Toma um banho quentinho",
            "Barulho de chuva para você ouvir",
        ]
    },

    { t: "4. Quando estiver se sentindo insegura", 
        txt: "Saiba que você é a mulher mais linda do mundo, e para mim você sempre será perfeita e maravilhosa independente do dia e de como você esteja. Se estiver se sentindo insegura, saiba que é normal e que todos nós passamos por isso, mas não deixe que isso te consuma. Você é incrível e tem tantas qualidades que eu admiro muito, não deixe que a insegurança te faça esquecer disso.", 
        num: "04", 
        img: "foto.png",
        txt : "Quando se sentir insegura olhe para sua foto e veja a mulher linda e maravilhosa que você é. Olhar para você é como olhar para um por do sol já pela primeira vez e ficar encantado com toda aquela beleza. Você é incrível e merece se sentir assim todos os dias.",
    },
    { t: "5. Quando estiver feliz", 
        txt: "Fico muito feliz de você estar nessa página, me faz muito bem ver você alegrezinha e feliz. Depois me conta como foi o seu dia e o que te fez se sentir assim.", 
        num: "05",
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
        "Escreva o motivo da sua felicidade para ler depois",
        "Aproveite o momento e se permita sentir essa alegria", 
        "Sorria para o espelho e se dê um parabéns",
        ]
    }, 
    { t: "6. Quando estiver preocupada com algo", 
        txt: "Sinto muito por você estar se sentindo assim, sei que é facil dizer que vai passar, mas vai ficar tudo bem, você é uma mulher forte e irá lidar com isso. Não carregue o peso do mundo sozinha, estou aqui por você.", 
        num: "06", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
            "Escreva em um papel tudo o que te preocupa agora",
            "Identifique o que você pode resolver hoje e o que não pode",
            "Pratique a técnica 5-4-3-2-1 (identifique objetos ao redor)",
            "Lembre-se: preocupação é usar a imaginação para o lado errado.",
        ]
    },
    { t: "7. Quando estiver frustada com o trabalho", 
        txt: "Sei que os últimos dias tem sido difíceis e você está passando por muito estresse e cansada, mas lembre se de tudo que você passou na faculdade e todos obstáculos que já superou, tenho muito orgulho e admiração de você e da sua trajetória. Você é muito mais do que suas tarefas. Não deixe o estresse apagar seu brilho.", 
        num: "07", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
        "Levante-se e faça um alongamento por 2 minutos",
        "Beba um copo de água bem gelada",
        "Feche as abas do computador e respire fundo três vezes",
        "Lembre-se: você é muito maior do que seu crachá.",
        ]
    },
    { t: "8. Quando estiver doente", 
        txt: "Se cuide, descanse bastante, se hidrate, e come direito heinnn kkkkk. espero que se sinta melhor logo bb. Se precisar de algo me avisa,", 
        listTitle: "O que fazer para se sentir melhor:",
        listItems: [
            "Se estiver com febre, toma um remédio para baixar a febre e se hidrate bastante",
            "Se estiver com dor de cabeça, tome um remédio para aliviar a dor e tenta descansar um pouco",
            "Se estiver com cólica, toma um remédio para aliviar a dor e coloca uma bolsa de água quente na barriga",
            "Se estiver com fraqueza, descanse bastante, se alimente bem e bebe bastante água",
        ]
    },
    { t: "9. Quando estiver desanimada", 
        txt: "Lembre se do quão incrível você é e de que estou aqui com você, não precisa passar por nada sozinha. Dê um pequeno passo de cada vez.", 
        num: "09", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
        "Lave o rosto com água fria",
        "Abra a janela e deixe um pouco de sol/ar entrar",
        "Assista um vídeo curto de algo que sempre te faz rir",
        "Coloque uma roupa confortável que você se sinta bem.",
        ]
     },
    { t: "10. Quando estiver duvidando de si mesma", 
        txt: "Lembre-se de tudo que você já passou e de todos obstacúlos que superou. Você é capaz de coisas incríveis e ainda irá conquistar o mundo.", 
        num: "10",  
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
        "Faça uma lista de 3 coisas difíceis que você já superou",
        "Lembre-se de tudo que você já conquistou, mesmo as pequenas vitórias do dia a dia",
        "Diga em voz alta: 'Eu sou capaz e estou aprendendo'",
        "Não se compare com os outros, cada flor tem seu tempo.",
        ]
    },
    { t: "11. Quando precisar de um abraço", 
        txt: "Queria estar ai com você te dando o carinho e cuidado que merece, mas sinta-se abraçada bem forte. Estou aqui com você.", 
        num: "11", 
        listTitle: "Coisas para fazer quando estiver assim:",
        listItems: [
        "Abrace um travesseiro bem forte por alguns segundos",
        "Feche os olhos e imagine que estou segurando sua mão",
        ]
    },
    { t: "12. Quando precisar ouvir um elogio", 
        txt: "Nem se eu usasse todas as palavras do mundo seriam suficientes para descrever a forma que te vejo e o quanto te acho linda, você é incrível em todos os aspectos, seu jeito atencioso e carinhoso, a forma que você gosta de animais, tudo em você me encanta e você é uma pessoa maravilhosa, nunca se esqueça disso.", 
        num: "12", 
    }
];

let currentIdx = 0;

// Gerar o sumário automaticamente
function buildSummary() {
    const list = document.getElementById('summary-list');
    list.innerHTML = '';
    pages.forEach((page, index) => {
        const li = document.createElement('li');
        li.innerText = page.t;
        li.onclick = () => {
            currentIdx = index;
            updatePg();
            changeSection('content');
        };
        list.appendChild(li);
    });
}

function changeSection(id) {
    const book = document.getElementById('book-canvas');
    book.style.transform = "rotateY(-10deg)";
    
    setTimeout(() => {
        document.querySelectorAll('.book-section').forEach(s => s.classList.remove('active'));
        document.getElementById(`section-${id}`).classList.add('active');
        book.style.transform = "rotateY(0deg)";
        if(id === 'summary') buildSummary();
    }, 300);
}

function updatePg() {
    const data = pages[currentIdx];
    const textElement = document.getElementById('pg-text');
    const imgFrame = document.querySelector('.frame');
    
    document.getElementById('pg-title').innerText = data.t;
    document.getElementById('pg-num').innerText = `Pág. ${data.num}`;

    // Lógica para mostrar fotos APENAS nas páginas 01 e 04
    if (data.num === "01" || data.num === "04") {
        imgFrame.style.display = "block";
        document.getElementById('main-img').src = data.img;
    } else {
        imgFrame.style.display = "none";
    }

    // Conteúdo da página
    let contentHtml = `<p class="main-text">${data.txt}</p>`;

    if (data.listTitle && data.listItems) {
        contentHtml += `
            <div class="list-section">
                <span class="list-header">${data.listTitle}</span>
                <ul class="custom-page-list">
                    ${data.listItems.map(item => `<li><span class="bullet">❤</span> ${item}</li>`).join('')}
                </ul>
            </div>`;
    }

    textElement.innerHTML = contentHtml;

    const backBtn = document.getElementById('back-to-cover-btn');
    backBtn.style.display = (currentIdx === pages.length - 1) ? 'block' : 'none';
}

function nextPg() {
    currentIdx = (currentIdx + 1) % pages.length;
    updatePg();
}

function prevPg() {
    currentIdx = (currentIdx - 1 + pages.length) % pages.length;
    updatePg();
}

function resetToCover() { changeSection('cover'); }

// Inicialização
window.onload = () => buildSummary();
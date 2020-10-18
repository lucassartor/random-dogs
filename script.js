let img = document.getElementById("dog");
let opcao = document.getElementById("raca");


img.onload(trocaImg());

function trocaImg() {

    switch (opcao.selectedIndex) {
        case 0:
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));

            break;

        case 1:
            fetch('https://dog.ceo/api/breed/beagle/images/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));

            break;

        case 2:
            fetch('https://dog.ceo/api/breed/chow/images/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));

            break;

        case 3:
            fetch('https://dog.ceo/api/breed/husky/images/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));

            break;

        case 4:
            fetch('https://dog.ceo/api/breed/shihtzu/images/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));
            break;

        case 5:
            fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
                .then(res => res.json())
                .then(data => img.src = data.message)
                .catch(erro => console.log(erro));

            break;

        default:
            break;
    }


}




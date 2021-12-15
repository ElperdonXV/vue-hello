//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#prova', 
        data: { 
            message: 'Provo ad inserire il testo tramite Vue-Js, che figata',
            image: 'https://www.wikihow.com/images_en/thumb/2/29/Eat-Nutella-Step-1-Version-4.jpg/v4-460px-Eat-Nutella-Step-1-Version-4.jpg.webp'
        }
    }
);
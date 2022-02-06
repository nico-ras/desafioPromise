let mainDiv = (document.getElementById('main')) as HTMLDivElement;


const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    try {
        const response = await fetch(url);
        const data = await response.json();
        for ( let i = 0; i < 20; i ++) {
              
            let content: string = `<ul>
                                   <li>Album id: ${data[i].albumId}</li>
                                   <li>Id: ${data[i].id}</li>
                                   <li>Title: ${data[i].title}</li>
                                   <li>Url: ${data[i].url}</li>
                                   <li>Thumnail url: ${data[i].thumbnailUrl}</li> 
                                   </ul>
                                   <hr>`

                                   

            mainDiv.innerHTML += content;                       
               console.log(content); 
        }
        
    } catch (err) {
        console.log(err);
    }
}





const request = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Informacion enviada'))
    }, 3000)
})


const final = async () => {
    
    await getData();
    await request();
    //request().then((data) => data)
}

final()


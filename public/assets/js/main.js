var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let mainDiv = (document.getElementById('main'));
const getData = () => __awaiter(this, void 0, void 0, function* () {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        for (let i = 0; i < 20; i++) {
            let content = `<ul>
                                   <li>Album id: ${data[i].albumId}</li>
                                   <li>Id: ${data[i].id}</li>
                                   <li>Title: ${data[i].title}</li>
                                   <li>Url: ${data[i].url}</li>
                                   <li>Thumnail url: ${data[i].thumbnailUrl}</li> 
                                   </ul>
                                   <hr>`;
            mainDiv.innerHTML += content;
            console.log(content);
        }
    }
    catch (err) {
        console.log(err);
    }
});
const request = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Informacion enviada'));
    }, 3000);
});
const final = () => __awaiter(this, void 0, void 0, function* () {
    yield getData();
    yield request();
    //request().then((data) => data)
});
final();

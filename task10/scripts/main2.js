const trackInformationArrLike = localStorage.getItem('trackTime');
const trackInformation = JSON.parse(trackInformationArrLike);
console.log(trackInformation)
console.log(typeof trackInformation)
const ol = document.getElementsByTagName('ol')[0];
trackInformation.forEach((trackElem) => {
    const li = document.createElement('li');
    li.innerText = `Data:${trackElem.date}; Time:${trackElem.time}`;
    ol.appendChild(li);
})
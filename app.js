axios.request({
    url: "http://www.boredapi.com/api/activity/",
    method: "GET"
}).then((response) => {
    console.log(response.data);
    let activity = response.data.activity;
    let accessibility = response.data.accessibility;
    let type = response.data.type;
    let participants = response.data.participants;
    let price = response.data.price;
    let link = response.data.link;
    let key = response.data.key;
    document.getElementById("activity1").innerHTML = activity;
    document.getElementById("accessibility1").innerHTML = accessibility;
    document.getElementById("type1").innerHTML = type;
    document.getElementById("participants1").innerHTML = participants;
    document.getElementById("price1").innerHTML = price;
    document.getElementById("link1").innerHTML = link;
    document.getElementById("key1").innerHTML = key;
}).catch((error) => {
    console.log(error);
});

axios.request({
    url: "http://www.boredapi.com/api/activity?participants=1",
    method: "GET"
}).then((response) => {
    console.log(response.data);
    let activity = response.data.activity;
    let accessibility = response.data.accessibility;
    let type = response.data.type;
    let participants = response.data.participants;
    let price = response.data.price;
    let link = response.data.link;
    let key = response.data.key;
    document.getElementById("activity2").innerHTML = activity;
    document.getElementById("accessibility2").innerHTML = accessibility;
    document.getElementById("type2").innerHTML = type;
    document.getElementById("participants2").innerHTML = participants;
    document.getElementById("price2").innerHTML = price;
    document.getElementById("link2").innerHTML = link;
    document.getElementById("key2").innerHTML = key;
}).catch((error) => {
    console.log(error);
});
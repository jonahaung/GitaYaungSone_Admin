const firebaseConfig = {
    apiKey: "AIzaSyDuGBoGn4Eb5V0nmJObTzznWNXld_y1_Ss",
    authDomain: "main-373ae.firebaseapp.com",
    projectId: "main-373ae",
    storageBucket: "main-373ae.appspot.com",
    messagingSenderId: "917088618177",
    appId: "1:917088618177:web:1236ef9b99520c0f2b3640",
    measurementId: "G-WSZZSJLX4F"
};

firebase.initializeApp(firebaseConfig);

let push_to_firebase = function(){
                
    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let key = document.getElementById("key").value;
    let rawText = document.getElementById("rawText").value;
    
    if (title === "" || artist === "" || key === "" || rawText === "") {
        alert("Incompletee Informations");
        return;
    }
    
    let data = {
        "title": title,
        "artist": artist,
        "artists": [artist],
        "album": document.getElementById("album").value,
        "composer": document.getElementById("composer").value,
        "genre": document.getElementById("genre").value,
        "key": document.getElementById("key").value,
        "rawText": document.getElementById("rawText").value,
    }

    firebase.firestore().collection("songs").add({
        title: data["title"],
        artist: data["artist"],
        artists:data["artists"],
        album: data["album"],
        composer: data["composer"],
        genre: data["genre"],
        key: data["key"],
        created: firebase.firestore.Timestamp.fromDate(new Date()),
        mediaLink: "",
        tempo: "",
        createrID: "admin",
        rawText: data["rawText"],
        popularity: 0,
    }).then(function(docRef) {
        location.reload();
        alert("Successfully uploaded")
    }).catch(function(error) {
        console.error("Message could not be sent: ", error);
    });
}

document.getElementById("submit_song").addEventListener("click", push_to_firebase);
let clearScreen = function() {
    location.reload();
}
document.getElementById("clear_screen").addEventListener("click", clearScreen);
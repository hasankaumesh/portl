

function send() {
    var topic = document.getElementById('pro_topic').value;
    var catagary = document.getElementById('pro_catagary').value;
    var tag = document.getElementById('pro_tag').value;
    var description = document.getElementById('pro_description').value;
    var file = document.getElementById('files').value;


    var database = firebase.database();
    var userDetails = database.ref("Hasanka");
    console.log(userDetails);
    // insert method set or push
    userDetails.push({
        res_topic : topic,
        res_catagary : catagary,
        res_tag : tag,
        res_description : description,
        res_file : file
    });
    var ref = firebase.storage().ref('Umesh/');
    var file = document.querySelector('#files').files[0]
    var name =   file.name + '-' + (+new Date());
    var metadata = {
        contentType: file.type
    };
    var task = ref.child(name).put(file, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            document.querySelector('TagID').src = url;
        })
        .catch(console.error);
}


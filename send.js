

function send() {
    var title = document.getElementById('pro_title').value;
    var cat = document.getElementById('pro_cat').value;
    var tag = document.getElementById('pro_tag').value;
    var desc = document.getElementById('pro_desc').value;
    var file = document.getElementById('files').value;


    var database = firebase.database();
    var userDetails = database.ref("Hasanka");
    console.log(userDetails);
    // insert method set or push
    userDetails.push({
        res_title : title,
        res_cat : cat,
        res_tag : tag,
        res_desc : desc,
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


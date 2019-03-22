function get_data(){
    

    var database = firebase.database();
    var ref = database.ref('Hasanka');
    ref.on('value',gotData, errData)


}

function gotData(data) {
       
     // console.log(data.val());
    var user = data.val();
    var key = Object.keys(user);
    console.log(key);
    for (var i =0 ; i<key.length ; i++){
        var k = key[i];
        var filename = user[k].res_title;
        var file = user[k].res_file;
       // console.log(name, category)

        var para = document.createElement("span");
        var filename_node = document.createTextNode(filename);
        var file_node = document.createTextNode(file);
        //+ lineBreak + title + "\n   " + title + "\n" + disc + "\n" + note
        //var fullText = node + lineBreak + category;

            // showing name with div class
        var filename_div= document.createElement('div');
        filename_div.className = 'name';
        para.appendChild(filename_div);
        filename_div.appendChild(filename_node);
        para.appendChild(document.createElement('br'));

        // showing title with div class
        var file_div= document.createElement('div');
        file_div.className = 'title';
        para.appendChild(file_div);
        file_div.appendChild(file_node);
        para.appendChild(document.createElement('br'));


        var element = document.getElementById("showpost");
        element.appendChild(para);
    }
}
function errData(err) {
    console.log('error');
    //console.log(err);
}

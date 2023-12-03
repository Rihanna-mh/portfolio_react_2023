var server = require("http");
var url = require("url");
var file_sys = require("fs");
var form_access = require("formidable");
const { userInfo } = require("os");
var MongoClient = require("mongodb").MongoClient;


var mongodb_url = "mongodb+srv://rihanna88:xxx@cluster0.r7z6r8r.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongodb_url);

server.createServer(function(req,res){
    var u_data = url.parse(req.url, true);
    var my_host = u_data.host;
    var my_path = u_data.pathname;
    var the_string = "";
    if (my_path == "/"){
        the_string = file_sys.readFileSync("047_MyServer.html","utf8");
    }
    else if (my_path == "/data"){

        //console.log("hey man!")
        var my_form = new form_access.IncomingForm();
        my_form.parse(req, function(err,field,file){
          
          // var form_data = JSON.parse(field);
          if (Object.keys(field).length != 0){
            var user_data = {First_Name: field.first_name, Last_Name: field.last_name, Email: field.email, 
              Message_Subject: field.message_subject, Message_Text: field.message_text}
            // var form_data = JSON.parse(field);
            insert_data_into_db(user_data);
            console.log(user_data);

          }

        });

        the_string = "<h4>Your form was successfully submitted</h4><p>To go back to the form click here - </p><a href='/'>The form</a>";

    }

    else{
        the_string = "Page not found or check your url";
    }

const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/html",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if ( req.method === 'OPTIONS' ) {

        res.writeHead(200);
        res.end();
        return;
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(the_string);
    res.end();

}).listen(8083);


async function insert_data_into_db(my_data){
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        await client.db("MyFirstMongoDb").collection("ReactUserInfo").insertOne(my_data, function(err,res){
            console.log(err);
        })
      } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
      }
}



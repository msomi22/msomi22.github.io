

var items = [];
/**

**/
function writelog(item){
	var text = $(item).text();

	if(items.length < 5){
        items.push(text);

	}else{
		items.splice(0, 1);
        items.push(text);
	}

	console.log("log item is : " + items);  
	apptodiv(items);
   

}


function apptodiv(array){
 //recentLinks
 $(".recentLinks").html('');

 for(var i=0;i<array.length;i++){
 	var text = (i + 1) +' . '+ array[i] +'<br>';  

   $(".recentLinks").append(text);  
 }
}
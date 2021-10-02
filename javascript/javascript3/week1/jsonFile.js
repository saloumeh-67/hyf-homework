
// my Json file
{
   [{"name " :"short hair", "country" : "Greece"},
	{"name ":"persian cat", "country": "iran"},
	{"name ":"bengal cat",  "country": "india"},
	{"name ": "maine coon", "country": "thailand"},
	{"name ": "siamese cat", "country": "russia"},
	{"name ": "savannah cat", "country": "africa"}]
};


///API
 const api ="https://dog.ceo/api/breeds/image/random";
 const fetchRandomDogPic = () => {
	 fetch (api)
	 .then((Response)=> Response.json())
     .then((data)=>{
		 document.getElementById("dogContainer").innerHTML = 
		 `<img src="${data.message}" alt="Cute dog" />`;
	 })
	}
 fetchRandomDogPic();
fetch("https://suma-latha-505.github.io/ecommerce/data/data.json").then
(response=>{
	return response.json()
}).then(data=>{
	console.log(data)
	displayData(data)
})

function displayData(info){
	// var bodyElement=document.querySelector("body");
	// console.log(info.mobiles[
		// info.mobiles.length-1])
		// var div=document.getElementsByClassName('div');
		// console.log(div)
		// var element=document.getElementsByClassName("div");
		// console.log(element[1].innerHTML)
		// var newElement=document.createElement("h2");
		// newElement.textContent="content of h2 tag"
		// console.log(newElement)
		// bodyElement.append(newElement)
		// var sampleElement=document.createElement("img");
		// sampleElement.src="img/1.jpg";
        // sampleElement.setAttribute("id","image")
		// sampleElement.setAttribute("alt","image")
		// sampleElement.setAttribute("class","image1 image2 image3")
		// sampleElement.classList.add("class1","class2","class3")
		// sampleElement.classList.remove("class3")
		// bodyElement.append(sampleElement)
		var bodyElement=document.querySelector("body");

        var row=document.createElement("section")
        row.classList.add("row","justify-content-center")
        bodyElement.append(row)
        info.mobiles.map(value=>{
        	var column=document.createElement("article")
        	column.classList.add("col-sm-10","col-md-6","col-lg-3")
        	row.append(column)
        	// card
        	var card=document.createElement("div");
        	card.classList.add("card","mt-3")
        	// card body
        	var cardBody=document.createElement("div");
            cardBody.classList.add("card-body")
            // image
            var imageElement=document.createElement("img")
            imageElement.src=value.image;
            imageElement.classList.add("img-responsive")
            imageElement.alt=value.name;
            // name
            var name=document.createElement("h2")
            name.textContent=value.name;
            name.classList.add("text-center" ,"text-primary")
            



            // price
            var price=document.createElement("p")
            price.classList.add("text-danger","text-center","text-block")
            price.innerHTML="<s>₹"+value.price+"/-</s>";
            // original price
            var ogprice=document.createElement("p");
            ogprice.classList.add("text-danger","text-center")
            ogprice.textContent=value.ogprice;
            
            // button
            var buttonParent=document.createElement("div");
            buttonParent.classList.add("d-grid","gap-2");


            var button=document.createElement("button");
            button.classList.add("btn","btn-primary","btn-block");
            button.textContent="Add to cart"
            buttonParent.append(button)



            cardBody.append(imageElement)
            cardBody.append(name)
            cardBody.append(price)
            cardBody.append(ogprice)
            cardBody.append(buttonParent)
            card.append(cardBody)
            column.append(card)
             
            

        })

}

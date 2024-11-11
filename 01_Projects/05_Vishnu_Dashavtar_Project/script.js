

const dropdownBtn = document.querySelector(".dropdown_button");
const dropdownList = document.querySelector(".dropdown_list");

function toggleDropdown() {
    dropdownList.classList.toggle("hide_element");
}

dropdownBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleDropdown();
});


// fallowing script is used to 10 avtar images which is in home page


let output = document.getElementById('result');
let imageContainer = document.getElementById('row-image');
   
// Array of image sources
const array = [
    'https://i.pinimg.com/564x/ea/15/04/ea15041c6183f8315dd13c1e43c7a074.jpg',
    'https://i.pinimg.com/474x/40/fc/b2/40fcb2dc4409357a4cfca22691b8a1d7.jpg',
    'https://i.pinimg.com/474x/eb/3a/83/eb3a8347847db37bb6aec883fd0f0234.jpg',
    'https://i.pinimg.com/474x/24/d3/b9/24d3b9e56487712d1d2af0f696e82a14.jpg',
    'https://i.pinimg.com/736x/42/0a/29/420a299455acd33aa24429a22de12aee.jpg',
    'https://i.pinimg.com/474x/0d/09/08/0d090864362cc6d213dd63d135d28d00.jpg',
    'https://i.pinimg.com/474x/8f/2e/8e/8f2e8edba85e01ac028d4d9c3fba1ac7.jpg',
    'https://i.pinimg.com/474x/bf/4e/f7/bf4ef77992bc9d0b03a0b084f02705f8.jpg',
    'https://i.pinimg.com/474x/84/2e/d8/842ed83d06de0243fb95e8eb28db2ff7.jpg',
    'https://i.pinimg.com/474x/4a/48/ad/4a48ad0e372858344ad78485a20dffe4.jpg',
   
];

const imageNames = [
    'Matsya',
    'Kurma',
    'Varaha',
    'Narasimha',
    'Vamana',
    'Parashurama',
    'Shree Rama',
    'Shree krishna',
    'Buddha',
    'Kalki',
];

const imageUrls = [
    'Matsya.html',
    'Kurma.html',
    'Varaha.html',
    'Narasimha.html',
    'Vamana.html',
    'Parashurama.html',
    'Shree_Ram.html',
    'Shree_krishna.html',
    'Buddha.html',
    'Kalki.html',
];



// --------Create rows for images-------

   let i = 0;  // Start index
   const imagesPerRow = 4;  //4  images for per row

   while (i < array.length) {
    let images = document.createElement('div');
    images.className = 'image-row';

    // Add images for the current row
    for (let j = 0; j < imagesPerRow; j++) {
        if (i < array.length) {
            let imgContainer = document.createElement('div');
            imgContainer.style.textAlign = 'center';
           
            // Create a hyperlink for next page navigation 
            let link = document.createElement('a');
            link.href = imageUrls[i];

            let img = document.createElement('img');
            img.src = array[i];
            img.style.height = '300px';   // Style for images
            img.style.width = '250px';
            img.style.margin = '10px';
            img.style.gap = '10px';
            img.style.border='2px solid black ';

            // For image name
            let imgName = document.createElement('p');
            imgName.textContent = imageNames[i];
            imgName.style.marginTop = '5px';
            imgName.style.fontSize = '20px'; 
            imgName.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';

            link.appendChild(img); // Add the image to the link
            imgContainer.appendChild(link); // Add the link to the container
            imgContainer.appendChild(imgName); // Add the image name to the container
            images.appendChild(imgContainer); // Add the container to the row

            i++; // Move to the next image in the array
        }
    }

    imageContainer.appendChild(images); // Add the completed row to the container
}

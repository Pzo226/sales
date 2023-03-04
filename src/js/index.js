/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  

//   gsap.defaults({ease: "none"});

// const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
// tl.to("h1 span", {duration: 4, text:" is so much fun you should try it some time!"})
//   .to(".dropdown", {x:100})
//   .set(".dropdown",  {text:"I am done"})
  



  const products = [
    {
      id: 1,
      name: 'Soft Locs',
      price: 130,
      description: ['Length', 'Length  min 18in - 24in - 30in - max 36in', 'Choice of color Pink, Black, Brown, Burrgondy,'],
      image: 'product1.jpg'
    },
    {
      id: 2,
      name: 'Butterfly Locs',
      price: 200,
      description: ['min 12in - 18in - max 36in ', 'Custom Press Ons', 'Apply them for you'],
      image: 'product2.jpg'
    },
    {
      id: 3,
      name: 'Lashes/per pair',
      price: 5.55,
      description: ['Monkey', 'Panda', 'Kangaroo'],
      image: 'product3.jpg'
    }
  ];

  const productsDiv = document.getElementById('products');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let cart = [];

  function renderProducts() {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      const productImg = document.createElement('img');
      const productName = document.createElement('h2');
      const productPrice = document.createElement('p');
      const productDescription = document.createElement('main');
      const addToCartBtn = document.createElement('button');
  
      productImg.src = `images/${product.image}`;
      productName.innerText = product.name;
      productPrice.innerText = `$${product.price}`;
  
      product.description.forEach((descriptionItem, index) => {
        const descriptionItemElem = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = 'Learn More';
        descriptionItemElem.innerText = descriptionItem;
  
        // Add buttons for lengths and change their background color on hover
        // if (product.id === 1 && index === 0) {
        //   const subButtonValues = ['12in', '14in', '16in', '18in'];
        //   for (let i = 0; i < 4; i++) {
        //     const subButton = document.createElement('div');
        //     subButton.innerText = `${subButtonValues[i]}`;
        //     subButton.addEventListener('mouseover', function() {
        //       this.style.backgroundColor = getRandomDarkColor();
        //     });
        //     subButton.addEventListener('mouseout', function() {
        //       this.style.backgroundColor = '#333'; // set default background color on mouseout
        //     });
        //     descriptionItemElem.appendChild(subButton);
        //   }
        // }
        
        // Add buttons for colors in description and change their background color on hover
        if (product.id === 1 && index === 2) {
          const subButtonValues = ['Pink', 'Black', 'Brown', 'Burgundy'];
          for (let i = 0; i < 4; i++) {
            const subButton = document.createElement('div');
            subButton.classList.add('num');
            subButton.innerText = `${subButtonValues[i]}`;
            subButton.addEventListener('mouseover', function() {
              this.style.backgroundColor = getRandomDarkColor();
            });
            subButton.addEventListener('mouseout', function() {
              this.style.backgroundColor = '#333'; // set default background color on mouseout
            });
            descriptionItemElem.appendChild(subButton);
          }
        }
  
        descriptionItemElem.appendChild(button);
        productDescription.appendChild(descriptionItemElem);
      });
  
      addToCartBtn.innerText = 'Add to cart';
      addToCartBtn.addEventListener('click', () => {
        cart.push(product);
        updateCart();
      });
  
      productDiv.appendChild(productImg);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productDescription);
      productDiv.appendChild(addToCartBtn);
  
      productsDiv.appendChild(productDiv);
    });
  }
  
  function getRandomDarkColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * 15);
      color += letters[index];
    }
    return color;
  }
  

  function updateCart() {
    cartItems.innerText = `${cart.length} item(s)`;
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartTotal.innerText = `$${total}` ;
  }

  renderProducts();

// const productsDiv = document.getElementById('products');
// const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
// let cart = [];

// function updateCart() {
//   cartItems.innerText = `${cart.length} item(s)`;
//   const total = cart.reduce((acc, product) => acc + product.price, 0);
//   cartTotal.innerText = `$${total}`;
// }

// addToCartBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const productDiv = btn.parentElement;
//     const product = {
//       id: productDiv.dataset.id,
//       name: productDiv.querySelector('h2').innerText,
//       price: Number(productDiv.querySelector('p').innerText.slice(1)),
//       description: productDiv.querySelectorAll('p')[1].innerText,
//       image: productDiv.querySelector('img').getAttribute('src'),
//     };
//     cart.push(product);
//     updateCart();
//   });
// });

// updateCart();



 
  
  
  
function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  function menuTwoShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  function menuThreeShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
  }
  function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
  document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
  document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
  document.getElementById('menu-1').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
  
  
  
  function openNewPage() {
          var newPageUrl = 'item.html';
  
          window.open(newPageUrl, '_blank'); 
      }

  function openPopup() {
        var popup = document.getElementById('cart');
        popup.style.display = 'block';
    }
    
  function closePopup() {
        var popup = document.getElementById('cart');
        popup.style.display = 'none';
    }

    function openCheckOut() {
      var newPageUrl = 'checkout.html';
      window.open(newPageUrl, '_blank'); 
    }
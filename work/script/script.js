
    
    // ===== NAV CONTAINER =========
    
    var isActive = false;
    
    $('.js-menu').on('click', function() {
        if (isActive) {
            $(this).removeClass('active');
        $('body').removeClass('dark');
    
            $('body').removeClass('menu-open');
        } else {
        $(this).addClass('active');
            $('body').addClass('dark');
    
            $('body').addClass('menu-open');
        }
    
        isActive = !isActive;
    });
    
    var toggleButton = document.getElementById('toggle');
    
    toggleButton.addEventListener("click", myFunction );
    
    function myFunction(){
      document.getElementById('nav_section').style.display = "block";
    
    }
    
    toggleButton.addEventListener("dblclick", myRemove);
    
    function myRemove() {
      document.getElementById('nav_section').style.display = "none";
    }
    
    
    document.querySelector('.dropdown-menu-container').addEventListener('mouseover', () => {
        document.querySelector('.submenu-container').style.visibility = "inherit";
        document.querySelector('.submenu-container').style.opacity = "1";
    });
    
    document.querySelector('.dropdown-menu-container').addEventListener('mouseleave', () => {
        document.querySelector('.submenu-container').style.visibility = "hidden";
        document.querySelector('.submenu-container').style.opacity = "0";
    });
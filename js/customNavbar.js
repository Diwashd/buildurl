// Pages



// Navigation



function toggleNavbarLike(){

    const dropdownItems = document.querySelectorAll('.dropdown-hover')

    // if(window.innerWidth < 1000) {
    //     const menuIcon = document.querySelector('.menu')
    //     const navbar = document.querySelector('.navbar')
        
    //     menuIcon.addEventListener('click', () => {
    //         navbar.classList.toggle('change')
    
    //         if(!navbar.classList.contains('change')) {
    //             document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    //                 dropdown.style.left = '-20rem'
    //             })
    //         }
    //     })
    
    //     document.querySelectorAll('.show-dropdown').forEach(link => {
    //         link.addEventListener('click', () => {
    //             link.nextElementSibling.style.left = '0'
    //         })
    //     })
    
    //     document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
    //         headingLink.addEventListener('click', () => {
    //             headingLink.parentElement.parentElement.style.left = '-20rem'
    //         })
    //     })
    // }
    //  if {
        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener('mouseover', () => {
    
                dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
                document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right,#6A16A0, #4d0283 )'
                dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
            })
            dropdownItem.addEventListener('mouseout', () => {
                dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
                document.querySelector('.navbar-wrapper').style.background = 'none'
                dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
            })
        })
    }
    
    // window.addEventListener('resize', () => {
    //     window.location.reload()
    // })

// }
toggleNavbarLike();

setInterval(()=>{
toggleNavbarLike()
},100);


// End of Navigation
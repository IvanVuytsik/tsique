const themeToggler = document.querySelector(".theme-toggler");

function Toggler() {
  if(themeToggler) { 
    return (
        themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('light-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle("active");
        themeToggler.querySelector('span:nth-child(2)').classList.toggle("active");
        })
    )
  }
}
   
export default Toggler


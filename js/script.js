// para comentário em linha
// const é igual ao objeto ícone para trocar a cor do site
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeader = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme","dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove ("active"));
    item.classList.add("active");
  })
})


//function accordion

document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains("active");
  
        // Fecha todos os itens
        document.querySelectorAll(".accordion-item").forEach(item => {
          item.classList.remove("active");
        });
  
        // Se o item clicado não estava ativo, ativa ele
        if (!isActive) {
          currentItem.classList.add("active");
        }
      });
    });
  });

  // Envio do Formulário com Limpeza dos Campos
const form = document.querySelector(".form-contato");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); //impede a atualização da Página.

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
        let response = await fetch(action, {
            method: "POST",
            body: formData,
            headers: {"Accept": "application/json"}
        });

        if (response.ok) {
            alert("Mensagem enviada com Sucesso!");
            form.reset();
        } 
        else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
    }
});


window.addEventListener('load', () => {
    AOS.init({  //instancia
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
    })
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const destinoInput = document.getElementById("destino");

    if (!form || !destinoInput) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const destino = destinoInput.value.toLowerCase().trim();

        if (destino.includes("biblioteca")) {
            window.location.href = "trayecto_biblioteca.html";
            return;
        }

        if (destino.includes("casa")) {
            window.location.href = "trayecto_casa.html";
            return;
        }

        if (destino.includes("trabajo")) {
            window.location.href = "trayecto_trabajo.html";
            return;
        }

        // Si no hay coincidencia
        window.location.href = "error.html";
    });
});
// scroll
document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector(".app");
    const device = document.querySelector(".device");

    if (!app || !device) return;

    device.addEventListener("wheel", (e) => {
        app.scrollTop += e.deltaY;
    });
});
// redireccionar botones navbar
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetPage = btn.dataset.page;
            if (!targetPage) return;

            const currentPage = window.location.pathname.split("/").pop();

            if (currentPage !== targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});
// Botón atrás
const backBtn = document.querySelector(".back-btn");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.history.back();
    });
}
const currentPage = window.location.pathname.split("/").pop();

// Marcar botones como activos
document.querySelectorAll(".nav-btn").forEach(btn => {
    if (btn.dataset.page === currentPage) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
});

// Log-in usuario - Fake
const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulación de login correcto
    window.location.href = "index.html";
  });
}

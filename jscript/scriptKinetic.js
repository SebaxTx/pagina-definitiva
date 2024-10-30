$(document).ready(function () {
  let activeImage = null; // Almacena la última imagen activa

  // ---- PC: Efecto Hover ----
  $(".image-container").on("mouseenter", function () {
    if (!activeImage) { // Solo aplica el efecto si no hay imagen activa en móvil
      activarZoom(this);
    }
  });

  $(".image-container").on("mouseleave", function () {
    if (!activeImage) { // Desactiva el zoom solo si no hay imagen activa en móvil
      desactivarZoom(this);
    }
  });

  // ---- Móvil: Efecto Touch ----
  $(".image-container").on("touchstart", function (e) {
    e.stopPropagation(); // Evita que se propaguen los eventos
    if (activeImage && activeImage !== this) {
      desactivarZoom(activeImage); // Desactiva la imagen anterior
    }
    activarZoom(this); // Activa la imagen tocada
    activeImage = this; // Guarda la imagen activa
  });

  $(document).on("click touchstart", function (e) {
    // Desactiva cualquier imagen si se toca fuera de las imágenes activas
    if (activeImage && !$(e.target).closest(".image-container").length) {
      desactivarZoom(activeImage);
      activeImage = null;
    }
  });

  // Evitar el zoom accidental en móviles
  $(".image-container").on("touchend", function (e) {
    e.preventDefault();
  });

  // ---- Funciones de Zoom ----
  function activarZoom(element) {
    $(element).find("img").css({
      transform: "scale(1.1)",
      opacity: "0.8",
    });
  }

  function desactivarZoom(element) {
    $(element).find("img").css({
      transform: "scale(1)",
      opacity: "1",
    });
  }
});

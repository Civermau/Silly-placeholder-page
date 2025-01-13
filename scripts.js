const draggables = document.querySelectorAll(".draggable");
const draggableImage = document.querySelector(".draggable-image");

function setDraggableImageStartPosition(element) {
  element.style.left = `50%`;
  element.style.top = `65%`;
}

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  draggable.addEventListener("mousedown", (event) => {
    const rect = draggable.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    draggable.style.cursor = "grabbing";
    draggable.style.position = "absolute";

    draggable.style.left = `${event.clientX - offsetX}px`;
    draggable.style.top = `${event.clientY - offsetY}px`;

    const onMouseMove = (event) => {
      draggable.style.left = `${event.clientX - offsetX}px`;
      draggable.style.top = `${event.clientY - offsetY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
        draggable.style.cursor = "grab";
      },
      { once: true }
    );
  });
});

draggableImage.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

draggableImage.addEventListener("mousedown", (event) => {
  draggableImage.style.cursor = "grabbing";
  draggableImage.style.position = "absolute";

  draggableImage.style.left = `${event.clientX}px`;
  draggableImage.style.top = `${event.clientY}px`;

  const onMouseMove = (event) => {
    console.log(event.clientX, event.clientY);
    draggableImage.style.left = `${event.clientX}px`;
    draggableImage.style.top = `${event.clientY}px`;
  };

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener(
    "mouseup",
    () => {
      document.removeEventListener("mousemove", onMouseMove);
      draggableImage.style.cursor = "grab";
    },
    { once: true }
  );
});

setDraggableImageStartPosition(draggableImage); 
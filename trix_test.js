document.addEventListener("trix-initialize", function(event) {
  const element = event.target;
  const editor = element.editor;
  console.log(element);
  console.log(editor);
});

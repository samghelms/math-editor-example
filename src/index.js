import PDFTeX from './pdftex'

let delta2tex = require("../resources/delta2tex.min.js")
let Formula = Quill.import('formats/formula');

class FormulaAligned extends Formula { 

  preprocessor(value) {
    console.log("\\begin{aligned}"+value+"\\end{aligned}")
    return "\\begin{aligned}"+value+"\\end{aligned}";
  }
}
FormulaAligned.blotName = 'formula-aligned';
FormulaAligned.className = 'ql-formula-aligned';
FormulaAligned.tagName = 'SPAN';

Quill.register('formats/formula-aligned', FormulaAligned, true);

var bindings = {

  // There is no default binding named 'custom'
  // so this will be added without overwriting anything
  math: {
    key: 192,
    handler: function(range, context) {
      // console.log("math")
      let index = range.index + range.length;
      let value = "\u0020"

      quill.insertEmbed(index, "formula", value, "user");
      quill.insertText(index+1, " ", "user");

      let [eq, ]= quill.getLeaf(index+1);
      eq.enter([index, "initial"]);
    }
  }
};

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike', 'link'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['video', 'formula', 'image'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],
  ['mathblock'],

  ['export']                                         // remove formatting button
];

var quill = new Quill('#snow-container', {
    placeholder: 'Compose an epic...',
    theme: 'snow',
    modules: {
      keyboard: {
        bindings: bindings
      },
      toolbar: toolbarOptions
    }
});

window.quill = quill

var toolbar = quill.getModule('toolbar');
toolbar.addHandler('mathblock', ()=>console.log("toolbar"));
var customButton = document.querySelector('.ql-mathblock');

customButton.addEventListener('click', function() {
      let range = quill.getSelection(true);
      // for some reason, insert embed doesn't like empty strings
      let value = "\u0020"
      if (range != null) {
        let index = range.index + range.length;
        quill.insertEmbed(index, "formula-aligned", value, "user");
        quill.insertText(index+1, value, "user");
        let [eq, ]= quill.getLeaf(index+1);
        eq.enter([index, "initial"]);
      }

});

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }

function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', text);
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
}

function exportEditor() {
  var delta = quill.getContents();
  console.log(delta)
  const tex = delta2tex.parse(delta)

  var pdftex = new PDFTeX("pdftex-worker.js");
  // var latex_code = "" + 
  //   "\\documentclass{article}" + 
  //   "\\begin{document}" + 
  //   "\\LaTeX is great!" + 
  //   "$E = mc^2$" + 
  //   "\\end{document}"; 

  pdftex.compile(tex).then(function(pdf) {
    download("example.pdf", pdf);
  });

  // download("example.tex", tex)
}

toolbar.addHandler('export', ()=> "test");

var customButton2 = document.querySelector('.ql-export');

customButton2.addEventListener('click', function() {
    var delta = quill.getContents();
    exportEditor()

});


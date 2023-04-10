/ URL do seu arquivo ePub
var bookUrl = "meulivro.epub";

// Criando o objeto reader do Readium.js
var reader = ReadiumJS.Reader("reader", { useSimpleLoader: true });

// Carregando o livro
reader.openBook(bookUrl, function (ebook) {
    console.log("Livro carregado com sucesso!");

    // Habilitando os botões de navegação
    document.getElementById("prev").disabled = false;
    document.getElementById("next").disabled = false;

    // Função para avançar uma página
    function nextPage() {
        reader.openPageNext();
    }

    // Função para voltar uma página
    function prevPage() {
        reader.openPagePrev();
    }

    // Associando as funções aos botões de navegação
    document.getElementById("prev").addEventListener("click", prevPage);
    document.getElementById("next").addEventListener("click", nextPage);
}
ReadiumJS(
  '#viewer',
  {
    openAt: 1,
    el: 'EPUB/book.epub'
  },
  function(reader) {
    reader.openPackageDocument();
  }
)

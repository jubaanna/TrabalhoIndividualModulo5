const prompt = require("prompt-sync");
const css = prompt();

const comando = (input) => {
  let output = [];
  while (input != "sair") {
    output.push(input);
    input = css(
      "Digit a Propriedade Quer Salva ou Digite Sair(Para finalizar a aplicaçao): "
    );
  }
  let reacao = output.sort().join("\n");
  console.log(reacao);
};
comando();

function exibirResultado() {
    let vitoriasInput = document.getElementById('vitorias');
    let derrotasInput = document.getElementById('derrotas');
    let resultado = document.getElementById('result');
    let modal = document.getElementById('myModal');

    if (vitoriasInput.value === '' || derrotasInput.value === '') {
      resultado.textContent = "Por favor, preencha todos os campos.";
    } else {
      let vitorias = parseInt(vitoriasInput.value);
      let derrotas = parseInt(derrotasInput.value);

      let saldoVitorias = vitorias - derrotas;
      let nivel;

      if (vitorias < 10) {
        nivel = "Ferro";
      } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
      } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
      } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
      } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
      } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
      } else {
        nivel = "Imortal";
      }

      resultado.textContent = `O Jogador tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }

    modal.style.display = "block";
  }

  function fecharModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
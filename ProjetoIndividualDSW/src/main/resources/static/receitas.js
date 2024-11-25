async function renderReceitaTable() {
    const tableBody = document.querySelector("#receitaTable rbody");
    tableBody.innerHTML = "";
  
    try {
      const response = await fetch("http://localhost:8080/listaReceitas");
      const receitas = await response.json();
  
      receitas.forEach((receita) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${receita.id}</td>
          <td>${receita.nomeReceita}</td>
          <td>${receita.modoPreparo}</td>
          <td>${receita.ingredientes}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Erro ao carregar as receitas:", error);
      alert("Erro de conexão. Tente novamente mais tarde.");
    }
  }
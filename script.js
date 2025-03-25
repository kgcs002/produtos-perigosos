const produtos = [
    { onu: 1075, risco: 33, produto: "Gás Liquefeito de Petróleo (GLP)", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1203, risco: 33, produto: "Gasolina ⛽", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1017, risco: 26, produto: "Cloro 💧", classe: 2, descricao: "Gás tóxico e corrosivo ☠️" },
    { onu: 1005, risco: 26, produto: "Amônia Anidra 🧪", classe: 2, descricao: "Gás tóxico e corrosivo ⚠️" },
    { onu: 1993, risco: 30, produto: "Líquido Inflamável, N.E. 🛢️", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1223, risco: 33, produto: "Querosene 🔥", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1090, risco: 33, produto: "Acetona 🧴", classe: 3, descricao: "Líquido inflamável 💥" },
    { onu: 1088, risco: 33, produto: "Álcool Isopropílico 🍸", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1170, risco: 33, produto: "Etanol (Álcool Etílico) 🍷", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1824, risco: 80, produto: "Hidróxido de Sódio (Soda Cáustica) 🧼", classe: 8, descricao: "Corrosivo ⚡" },
    { onu: 1830, risco: 80, produto: "Ácido Sulfúrico 💣", classe: 8, descricao: "Corrosivo 🔥" },
    { onu: 1202, risco: 30, produto: "Óleo Diesel 🚛", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 3257, risco: 90, produto: "Asfalto líquido quente 🌡️", classe: 9, descricao: "Substância a alta temperatura 🌡️" },
    { onu: 1863, risco: 33, produto: "Peróxido de Hidrogênio (Água Oxigenada) 🧴", classe: 5, descricao: "Oxidante 💨" },
    { onu: 1977, risco: 22, produto: "Nitrogênio Líquido Refrigerado ❄️", classe: 2, descricao: "Gás inerte, risco de asfixia 💀" },
    { onu: 1724, risco: 33, produto: "Tolueno 🛢️", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1344, risco: 26, produto: "Ácido Clorídrico 🧪", classe: 8, descricao: "Corrosivo ⚡" },
    { onu: 1910, risco: 33, produto: "Propano ⛽", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1370, risco: 26, produto: "Cianeto de Hidrogênio ☠️", classe: 6, descricao: "Tóxico e venenoso 💀" },
    { onu: 1011, risco: 33, produto: "Butano ⛽", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1381, risco: 33, produto: "Álcool Metílico 🍷", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 2794, risco: 90, produto: "Sulfato de Amônio 🧂", classe: 9, descricao: "Substância não perigosa 🚫" },
    { onu: 1123, risco: 30, produto: "Gasóleo 🚛", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 2924, risco: 80, produto: "Fluoreto de Hidrogênio 🧪", classe: 6, descricao: "Tóxico e corrosivo ⚡" },
    { onu: 1451, risco: 80, produto: "Fosfato de Trióxido de Fósforo 🧪", classe: 6, descricao: "Tóxico ☠️" },
    { onu: 1873, risco: 33, produto: "Óxido de Etileno 🧪", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1942, risco: 33, produto: "Acetileno 🔥", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1010, risco: 30, produto: "Hexano 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1054, risco: 22, produto: "Fosfina 💨", classe: 2, descricao: "Gás tóxico e inflamável ☠️" },
    { onu: 1097, risco: 33, produto: "Benzeno 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1180, risco: 33, produto: "Isopreno 🔥", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1292, risco: 26, produto: "Cianuro de Hidrogênio ☠️", classe: 6, descricao: "Tóxico e venenoso 💀" },
    { onu: 1500, risco: 33, produto: "Metanol 🍸", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1057, risco: 33, produto: "Peróxido de Benzoíla 🧪", classe: 5, descricao: "Oxidante 💨" },
    { onu: 1085, risco: 30, produto: "Xileno 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1935, risco: 80, produto: "Óxido de Magnésio 🧂", classe: 8, descricao: "Corrosivo ⚡" },
    { onu: 1244, risco: 33, produto: "Acetato de Etilo 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1098, risco: 22, produto: "Fosfato de Amônio 🧂", classe: 9, descricao: "Substância não perigosa 🚫" },
    { onu: 1032, risco: 80, produto: "Ácido Nítrico 💥", classe: 8, descricao: "Corrosivo ⚡" },
    { onu: 1263, risco: 33, produto: "Óleo de Turma 🚛", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1227, risco: 30, produto: "Propanol 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1351, risco: 26, produto: "Ácido Acético 🧴", classe: 8, descricao: "Corrosivo ⚡" },
    { onu: 1364, risco: 33, produto: "Benzina 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1252, risco: 33, produto: "Líquido Refrigerante ❄️", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1888, risco: 80, produto: "Sulfeto de Hidrogênio 🧪", classe: 6, descricao: "Tóxico e inflamável ☠️" },
    { onu: 2925, risco: 80, produto: "Fenol 💥", classe: 6, descricao: "Substância corrosiva e tóxica ⚠️" },
    { onu: 2870, risco: 22, produto: "Tetrafluoreto de Carbono ❄️", classe: 2, descricao: "Gás inerte 💨" },
    { onu: 2589, risco: 33, produto: "Acrilonitrila 💨", classe: 6, descricao: "Substância tóxica e inflamável 💀" },
    { onu: 2556, risco: 22, produto: "Monóxido de Carbono 💨", classe: 2, descricao: "Gás asfixiante 💀" },
    { onu: 1823, risco: 33, produto: "Metil Etil Cetona 🧴", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1387, risco: 30, produto: "Isobutano ⛽", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1245, risco: 33, produto: "Álcool Etílico 🍸", classe: 3, descricao: "Líquido inflamável 🔥" },
    { onu: 1908, risco: 22, produto: "Hélio 🎈", classe: 2, descricao: "Gás inerte 💨" },
    { onu: 2222, risco: 33, produto: "Ciclopropano 🔥", classe: 2, descricao: "Gás inflamável 💥" },
    { onu: 1060, risco: 22, produto: "Argônio 💨", classe: 2, descricao: "Gás inerte 💨" },
    { onu: 2115, risco: 26, produto: "Fosgeno 💨", classe: 6, descricao: "Gás venenoso e tóxico ☠️" }
];  

function buscarPorONU() {
    const codigo = document.getElementById('codigoInput').value;
    const resultado = produtos.find(p => p.onu == codigo);
    exibirResultado(resultado, "ONU 🔎");
}

function buscarPorRisco() {
    const risco = document.getElementById('riscoInput').value;
    const encontrados = produtos.filter(p => p.risco == risco);
    
    if (encontrados.length > 0) {
        let html = `<strong>Resultados encontrados pelo número de risco 🔎:</strong><br>`;
        encontrados.forEach(p => {
            html += `
              <br>🔍 <strong>Produto:</strong> ${p.produto}
              <br><strong>Número ONU:</strong> ${p.onu}
              <br><strong>Classe de Risco:</strong> ${p.classe}
              <br><strong>Descrição:</strong> ${p.descricao}<br>
            `;
        });
        document.getElementById('resultado').innerHTML = html;
    } else {
        document.getElementById('resultado').innerHTML = `<span style="color:red;">Nenhum produto encontrado com esse número de risco.</span>`;
    }
}

function exibirResultado(resultado, tipo) {
    const divResultado = document.getElementById('resultado');
    if (resultado) {
        divResultado.innerHTML = `
          <strong>Produto encontrado por ${tipo}:</strong><br><br>
          <strong>Produto:</strong> ${resultado.produto}<br>
          <strong>Número ONU:</strong> ${resultado.onu}<br>
          <strong>Número de Risco:</strong> ${resultado.risco}<br>
          <strong>Classe:</strong> ${resultado.classe}<br>
          <strong>Descrição:</strong> ${resultado.descricao}
        `;
    } else {
        divResultado.innerHTML = `<span style="color:red;">Produto não encontrado com esse número ${tipo}.</span>`;
    }
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('codigoInput').value = "";
    document.getElementById('riscoInput').value = "";
}

// Aguarda o carregamento do DOM
window.addEventListener("DOMContentLoaded", () => {
  const selectColor = document.getElementById("selectColor");
  const productSelect = document.getElementById("productSelect");
  const selectSize = productSelect.querySelector("select");

  const titleEl = document.querySelector("[data-componente='titulo']");
  const imgEl = document.querySelector("[data-componente='imagem']");
  const precoEl = document.querySelector("[data-componente='comparado']");
  const buyBtn = document.querySelector(".btn-comprar");

  let apiResponse;

  // Fetch da API
  fetch('https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-1.json')
    .then((response) => response.json())
    .then((data) => {
      apiResponse = data;
      
      console.log(apiResponse)

      const cores = apiResponse.values[1]; // ['preto', 'azul']
      const tamanhos = apiResponse.values[0]; // ['p', 'm', 'g']

      // Preenche infos do produto
      titleEl.textContent = apiResponse.title;
      imgEl.src = apiResponse.image_url;
      precoEl.textContent = `R$ ${apiResponse.variants[0].price}`;

      // Preenche o select de cores
      selectColor.innerHTML = '<option value="">Selecione uma cor</option>';
      cores.forEach((cor) => {
        const option = document.createElement("option");
        option.value = cor;
        option.textContent = cor.charAt(0).toUpperCase() + cor.slice(1);
        selectColor.appendChild(option);
      });

      // Evento: ao selecionar cor, exibe tamanhos
      selectColor.addEventListener("change", () => {
        if (selectColor.value) {
          // Limpa e preenche os tamanhos
          selectSize.innerHTML = '<option value="">Selecione um tamanho</option>'; // Primeira opção
          tamanhos.forEach((tamanho) => {
            const option = document.createElement("option");
            option.value = tamanho;
            option.textContent = tamanho.toUpperCase();
            selectSize.appendChild(option);
          });

          productSelect.classList.remove("display-none");
        } else {
          productSelect.classList.add("display-none");
        }
      });

      // Quando selecionar um tamanho, atualiza preço e estoque
      selectSize.addEventListener("change", () => {
        const corSelecionada = selectColor.value;
        const tamanhoSelecionado = selectSize.value;

        if (corSelecionada && tamanhoSelecionado) {
          const variant = apiResponse.variants.find(
            (v) => v.values.includes(corSelecionada) && v.values.includes(tamanhoSelecionado)
          );

          if (variant) {
            precoEl.textContent = `R$ ${variant.price}`;
            imgEl.src = variant.image_url;
            buyBtn.dataset.variantId = variant.id;
            buyBtn.disabled = false;

            alert(`Estoque disponível: ${variant.inventory_quantity}`);
          } else {
            precoEl.textContent = 'Produto indisponível';
            buyBtn.disabled = true;

            alert("Essa combinação não está disponível no momento.");
          }
        }
      });

      // Compra
      buyBtn.addEventListener("click", () => {
        const variantId = buyBtn.dataset.variantId;
        const variant = apiResponse.variants.find(v => v.id == variantId);

        if (!variant) {
          alert("Selecione uma variante válida.");
          return;
        }

        const payload = [{
          values: variant.values,
          quantity: 1,
          product_id: apiResponse.id,
          variant_id: variant.id,
        }];

        // Exibe os dados antes de enviar
        // console.log("Enviando para o checkout:", JSON.stringify(payload));

        fetch("api-front-test.vercel.app/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        .then(res => res.text())
        .then(url => {
          // console.log(url)
          window.location.href = JSON.parse(url).redirect_url;
        })
        .catch(() => alert("Erro ao enviar a compra."));
      });

    })
    .catch((err) => {
      console.warn('Erro ao carregar a API.', err);
    });
});
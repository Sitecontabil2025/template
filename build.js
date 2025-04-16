const fs = require("fs");
const path = require("path");

const projectRoot = __dirname;

const folders = ["assets/scss", "assets/css", "assets/js", "assets/images"];

folders.forEach(folder => {
    const folderPath = path.join(projectRoot, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📂 Pasta criada: ${folderPath}`);
    }
});

const files = ["header.php", "index.php", "footer.php", "dados.php"];

const fileContents = {
    "header.php": `<!DOCTYPE html>
<html lang="pt-br">
<?php require_once("dados.php"); ?>
<?php $json = (isset($url_json)) ? get_materias($url_json) : NULL; ?>
<?php $json_ler = (isset($url_json_ler)) ? get_materias($url_json_ler) : NULL; ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title><?= $escritorio; ?> - <?= $titulo_pagina; ?></title>

    <!-- FAVICON -->
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">

    <!-- SEO META TAGS -->
    <meta property="og:title" content="<?= $titulo_pagina; ?>" />
    <meta property="og:description" content="<?= $descricao_pagina; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="<?= $escritorio; ?>" />
    <meta property="og:image" content="assets/images/og-img.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="600">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="content-language" content="pt-BR" />
    <meta name="author" content="<?= $escritorio; ?>" />
    <meta name="contact" content="<?= $email; ?>" />
    <meta name="copyright" content="Copyright (c) <?= date("Y"); ?> - <?= $escritorio; ?>." />
    <meta name="description" content="<?= $descricao; ?>" />
    <meta name="keywords" content="<?= $keywords; ?>" />
    <meta name="resource-type" content="website" />

    <!-- ARQUIVOS CSS -->
    <link rel="stylesheet" href="assets/css/jquery-confirm.min.css">
    <link rel="stylesheet" href="assets/css/aos.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/style.min.css?v=<?= time() ?>">

    <!-- ARQUIVOS JS -->
    <script src="assets/js/jquery.min.js"> </script>
    <script src="https://www.google.com/recaptcha/api.js" async defer> </script>
    
</head>
<body>`,

    "index.php": `<?php include 'header.php';?>

<?php include 'footer.php'; ?>`,

    "footer.php":
        `<a id="whatsapp" class="d-flex align-items-center justify-content-center" href="<?= whatsapp('Estou entrando em contato pelo site!') ?>" style="position:fixed; width:55px;height:55px;bottom:10px;right:10px;background-color:#25d366;color:#FFF;border-radius:50px; font-size:25px;z-index:1000;" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.7.1/css/all.css">
<!-- <script src="assets/js/cookie.min.js" data-position="left" data-hide="true" data-cor="var(--bs-primary)"></script> -->
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/aos.js"></script>
<script src="assets/js/jquery.mask.min.js"></script>
<script src="assets/js/jquery-confirm.min.js"></script>
<script src="assets/js/script.min.js"></script>

</body>
</html>`,

    "dados.php": `<?php
\$escritorio = "Escritório Contábil";
\$descricao = "Atuamos no mercado auxiliando as empresas, quanto a sua constituição, administração, consultorias e quando necessário, no encerramento das mesmas. Possuímos uma equipe de profissionais gabaritados nas áreas contábil, fiscal, trabalhista e de assessoria.";
\$keywords = "contabilidade, contábil, escritório, serviços";
\$crc = 'CRC/UF 00000-0';

\$endereco = "Nome da Rua, nº 00";
\$bairro = "Bairro";
\$cidade = "Cidade/UF";
\$cep = "CEP. 00000-000";
\$mapa_link = "https://maps.app.goo.gl/5gF94fPtCJJj9DR68";
\$email = "contato@dominio.com.br";
\$telefone = "(00) 0000-0000";
\$telefone_link = (isset($telefone) && !empty($telefone)) ? "+55" . str_replace(array('(', ')', ' ', '-', '.'), "", $telefone) . "" : NULL;
\$whatsapp = "(00) 9.0000-0000";

function whatsapp($texto = null, $num = null)
{
    global $whatsapp;
    $whats = $num ?: $whatsapp;
    $whats = str_replace(array('(', ')', ' ', '-', '.'), "", $whats);
    $link = 'https://wa.me/55';

    if (!empty($texto)):
        return $link . $whats . '?text=' . $texto;
    else:
        return $link . $whats;
    endif;
}

// LINKS DAS REDES SOCIAIS
$facebook = "https://www.facebook.com/";
$instagram = "https://www.linkedin.com/";
$linkedin = "https://www.instagram.com/";

// ANO DESENVOLVIMENTO DO SITE
$ano_dev = 2024;

// VERIFICANDO SE EXISTE TÍTULO E DESCRIÇÃO DE PÁGINA
if (!isset($titulo_pagina)):
    $titulo_pagina = "Bem-vindo ao nosso site";
endif;

if (!isset($descricao_pagina)):
    $descricao_pagina = $descricao;
endif;

// FUNÇÃO PARA CRIAR RESUMO DE TEXTO
function limitar_texto($texto, $limite = 250)
{
    $contador = strlen($texto);
    if ($contador >= $limite) :
        $texto = substr($texto, 0, strrpos(substr($texto, 0, $limite), " ")) . "...";
        return trim($texto);
    else :
        return trim($texto);
    endif;
}

// FUNÇÃO PARA CRIAR CARREGAR NOTÍCIAS JSON
function get_json($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    $result = curl_exec($ch);
    curl_close($ch);

    if ($result) return $result;
    else return null;
}

// FUNÇÃO PARA PEGAR MATÉRIAS
function get_materias($url = "https://sitecontabil.com.br/json/?db=sc_noticias&limite=10")
{
    return json_decode(get_json($url));
}

// FUNÇÃO PARA MODIFICAR A REGIÃO
setlocale(LC_TIME, "pt_BR", "pt_BR.utf-8", "pt_BR.utf-8", "portuguese");
date_default_timezone_set("America/Sao_Paulo");

// FUNÇÃO PARA MOSTRAR DATAS
function mostra_data($data = 'today', $formato = 'Publicado em %d de %B de %Y')
{
    return utf8_encode(strftime($formato, strtotime($data)));
}

// REGIÃO DO BRASIL
$regiao = array(
    'brasil' => 'Brasil',
    'ac' => 'Acre',
    'al' => 'Alagoas',
    'am' => 'Amazonas',
    'ap' => 'Amapá',
    'ba' => 'Bahia',
    'ce' => 'Ceará',
    'df' => 'Distrito Federal',
    'es' => 'Espírito Santo',
    'go' => 'Goiás',
    'ma' => 'Maranhão',
    'mt' => 'Mato Grosso',
    'ms' => 'Mato Grosso do Sul',
    'mg' => 'Minas Gerais',
    'pa' => 'Pará',
    'pb' => 'Paraíba',
    'pr' => 'Paraná',
    'pe' => 'Pernambuco',
    'pi' => 'Piauí',
    'rj' => 'Rio de Janeiro',
    'rn' => 'Rio Grande do Norte',
    'rs' => 'Rio Grande do Sul',
    'ro' => 'Rondônia',
    'rr' => 'Roraima',
    'sc' => 'Santa Catarina',
    'sp' => 'São Paulo',
    'se' => 'Sergipe',
    'to' => 'Tocantins',
);
`
};

files.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, fileContents[file]);
        console.log(`📄 Arquivo criado: ${filePath}`);
    }
});

// Criar arquivos SCSS
const scssFiles = {
    "style.scss": `@charset "utf-8";

@import "_import";
@import "_base";`,

    "_variables.scss": `// URLs
$urlFont: '../fonts/';
$urlImg: '../images/';

// FONT-FAMILY
$fontFamily: "Roboto", sans-serif;
$poppins: "Poppins", sans-serif;

// COLORS
$primary:     #007381; 
$secondary:   #8a8c4f;


// SPACERS ARRAY --------------------
$spacer: 1rem;
$spacers: (
    0: 0,
    1: $spacer * .25,
    2: $spacer * .5,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
    6: $spacer * 4,
    7: $spacer * 5,
    8: $spacer * 6.25,
    9: $spacer * 7.5,
    10: $spacer * 9.375,
);

:root{
    --bs-white: #FFFFFF;
    --bs-black: #000000;
}
`,

    "_base.scss": `body {
    scroll-behavior: smooth;
    font-family: $fontFamily;
}

a {
    color: currentColor;
    text-decoration: none !important;
    transition: all ease .7s !important;
    &:hover {
        color: $secondary;
    }
}

input, button, textarea, select {
    &:focus {
        outline: none !important;
        box-shadow: none !important;
    }
}

button {
    background: transparent;
    border: none;
    transition: all ease .7s;
}

::selection {
    background-color: darken($primary, 10%);
    color: var(--bs-white);
}`,

    "_import.scss": `@import "_variables";
@import "../../node_modules/bootstrap/scss/bootstrap";`
};

Object.keys(scssFiles).forEach(file => {
    const filePath = path.join(projectRoot, "assets/scss", file);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, scssFiles[file]);
        console.log(`📄 SCSS criado: ${filePath}`);
    }
});

function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copiado: ${src} → ${dest}`);
}

const assets = [
    { src: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", dest: "assets/js/bootstrap.bundle.min.js" },
    { src: "node_modules/jquery/dist/jquery.min.js", dest: "assets/js/jquery.min.js" },
    { src: "node_modules/swiper/swiper-bundle.min.css", dest: "assets/css/swiper-bundle.min.css" },
    { src: "node_modules/swiper/swiper-bundle.min.js", dest: "assets/js/swiper-bundle.min.js" },
    { src: "node_modules/aos/dist/aos.css", dest: "assets/css/aos.css" },
    { src: "node_modules/aos/dist/aos.js", dest: "assets/js/aos.js" },
    { src: "node_modules/jquery-confirm/dist/jquery-confirm.min.css", dest: "assets/css/jquery-confirm.min.css" },
    { src: "node_modules/jquery-mask-plugin/dist/jquery.mask.min.js", dest: "assets/js/jquery.mask.min.js" },
    { src: "node_modules/cookie/cookie.min.js", dest: "assets/js/cookie.min.js" }
];

assets.forEach(asset => {
    copyFile(asset.src, path.join(projectRoot, asset.dest));
});

console.log("🚀 Build concluída!"); 65
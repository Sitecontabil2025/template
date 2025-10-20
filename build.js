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

const files = ["header.php", "index.php", "footer.php", "dados.php", "enviar.php"];

const args = process.argv.slice(2);

const escritorio = args[0] || "Escritório Contábil";
const endereco = args[1] || "Nome da Rua, nº 00";
const bairro = args[2] || "Bairro";
const cidade = args[3] || "Cidade/UF";
const cep = args[4] || "CEP. 00000-000";
const mapaLink = args[5] || "https://maps.app.goo.gl/5gF94fPtCJJj9DR68";
const mapa = args[6] || '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4995075802503!2d-49.6248452891247!3d-22.89493983736129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c06a39daf95555%3A0x4243758b396d07a2!2sSitecontabil!5e0!3m2!1spt-BR!2sbr!4v1728559990162!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
const email = args[7] || "contato@dominio.com.br";
const telefone = args[8] || "(00) 0000-0000";
const whatsapp = args[9] || "(00) 9.0000-0000";
const facebook = args[10] || "https://www.facebook.com/";
const instagram = args[11] || "https://www.instagram.com/";
const linkedin = args[12] || "https://www.linkedin.com/";
const cor1 = args[13] || "#007381;";
const cor2 = args[14] || "#8a8c4f";
const dominio = args[15] || "dominio.com.br"

const fileContents = {
    "header.php": `<!DOCTYPE html>
<html lang="pt-br">
<?php require_once("dados.php"); ?>
<?php $json = (isset($url_json)) ? get_materias($url_json) : NULL; ?>
<?php $json_ler = (isset($url_json_ler)) ? get_materias($url_json_ler) : NULL; ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        `<a id="whatsapp" class="btn-whatsapp shadow" href="<?= whatsapp('Estou entrando em contato pelo site!') ?>" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.7.1/css/all.css">
<!-- <script src="assets/js/cookie.min.js" data-position="left" data-hide="true" data-cor="var(--bs-primary)"></script> -->
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/aos.js"></script>
<script src="assets/js/sweetalert2.all.min.js"></script>
<script src="assets/js/script.min.js"></script>

</body>
</html>`,

    "dados.php": `<?php
$escritorio = "${escritorio}";
$descricao = "Atuamos no mercado auxiliando as empresas, quanto a sua constituição, administração, consultorias e quando necessário, no encerramento das mesmas. Possuímos uma equipe de profissionais gabaritados nas áreas contábil, fiscal, trabalhista e de assessoria.";
$keywords = "contabilidade, contábil, escritório, serviços";
$crc = 'CRC/UF 00000-0';

$endereco = "${endereco}";
$bairro = "${bairro}";
$cidade = "${cidade}";
$cep = "${cep}";
$mapa_link = "${mapaLink}";
$mapa_iframe = '${mapa}';
$email = "${email}";
$telefone = "${telefone}";
$whatsapp = "${whatsapp}";

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
function phone_link($phone)
{
    $url = 'tel:';
    $phone = preg_replace("/[^0-9]/", '', $phone);
    $retorno = $url . $phone;
    return $retorno;
}

// LINKS DAS REDES SOCIAIS
$facebook = "${facebook}";
$instagram = "${instagram}";
$linkedin = "${linkedin}";

// ANO DESENVOLVIMENTO DO SITE
function ano_copy($ano = 2025)
{
    if ($ano < date('Y')):
        return $ano . ' - ' . date('Y');
    else:
        return $ano;
    endif;
}

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
`,
    "enviar.php": `<?php
// ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

ob_start();
session_start();


if (empty($_POST['g-recaptcha-response'])):
    $retorno = "";
    $retorno .= "O campo <strong>Re'Captcha</strong> é de preenchimento obrigatório.<br>";
    $resposta = array('tipo' => 'orange', 'mensagem' => $retorno);
    echo json_encode($resposta);
else:

    $captcha = $_POST['g-recaptcha-response'];

    $secret_key = '6LenHswpAAAAANV2onVScenPGA_y9jOOmnw2h8F-';
    $response = $captcha;
    // $remoteip = $_SERVER['REMOTE_ADDR'];
    $remoteip = $_SERVER['HTTP_CLIENT_IP'];

    $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secret_key . '&response=' . $response . '&remoteip=' . $remoteip;
    $file = file_get_contents($url);
    $data = json_decode($file);

    if ($data->success != '1'):

        $retorno = "";
        $retorno .= "O campo <strong>Re'Captcha</strong> foi negado.<br>";
        $resposta = array('tipo' => 'orange', 'mensagem' => $retorno);
        echo json_encode($resposta);

    else:
        // Pegando os dados do formulário de contato
        $formnome = $_POST['nome'];
        $formemail = $_POST['email'];
        $formcelular = $_POST['celular'];
        $formmensagem = $_POST['mensagem'];

        // verificando se os campos foram todos digitados
        if (empty($formnome) || empty($formemail) || empty($formcelular) || empty($formmensagem)) :
            $campos = array();
            if (empty($formnome)) $campos[] = "nome";
            if (empty($formemail)) $campos[] = "email";
            if (empty($formcelular)) $campos[] = "celular";
            if (empty($formmensagem)) $campos[] = "mensagem";

            $retorno = "";
            foreach ($campos as $campo):
                $retorno .= "O campo <strong>$campo</strong> é de preenchimento obrigatório.<br>";
            endforeach;

            // passando o tipo do alerta e a mensagem
            $resposta = array('tipo' => 'orange', 'mensagem' => $retorno);
            echo json_encode($resposta);
        elseif (!filter_var($formemail, FILTER_VALIDATE_EMAIL)) :
            // passando o tipo do alerta e a mensagem
            $resposta = array('tipo' => 'orange', 'mensagem' => 'O e-mail inserido não é válido.');
            echo json_encode($resposta);
        else :
            // Não esquecer de alterar esta linha com o domínio do cliente
            $site = "https://${dominio}"; // URL completa do site com o http:// ou https://

            // E-mail que irá receber o formulário
            $destinatario = "${email}";

            // Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
            require_once("phpmailer/PHPMailerAutoload.php");

            // Inicia a classe PHPMailer
            $mail = new PHPMailer();

            // SMTPDebug 0, 1, 2 e 3
            $mail->SMTPDebug = 0;

            // Conexões menos seguras
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            // Define os dados do servidor e tipo de conexão
            $mail->IsSMTP(); // Define que a mensagem será SMTP
            $mail->Host = "mail.${dominio}"; // Endereço do servidor SMTP
            $mail->SMTPAuth = true; // Usa autenticação SMTP?

            // Usuário do servidor SMTP
            $mail->Username = 'formulario@${dominio}';

            // Senha do servidor SMTP
            $mail->Password = 'email@1234';

            // Caso o servidor use uma porta e uma autenticação diferente
            $mail->Port = 587;
            // $mail->SMTPSecure = 'ssl';
            // $mail->SMTPSecure = "tls";
            $mail->SMTPAutoTLS = false;

            // Define o remetente
            $mail->setFrom('formulario@${dominio}'); // E-mail do destinatário

            // Copia Oculta
            // $mail->AddBCC("");

            // Define os destinatário(s) (Tem de estar no mesmo servidor)
            $mail->AddAddress($destinatario); // Quem vai receber o e-mail
            $mail->AddReplyTo($formemail);

            // Define os dados técnicos da Mensagem
            $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
            $mail->CharSet = 'utf-8'; // Charset da mensagem
            //$mail->CharSet = 'iso-8859-1'; // Charset da mensagem

            // Define os anexos (Basta colocar o caminho do arquivo)
            //$mail->AddAttachment('caminho-do-arquivo.txt');

            date_default_timezone_set('America/Sao_Paulo');
            if (date('H') > 0 && date('H') < 12):
                $saudacao = "Bom dia";
            elseif (date('H') >= 12 && date('H') < 18):
                $saudacao = "Boa tarde";
            else:
                $saudacao = "Boa noite";
            endif;

            // Escrevendo a mensagem do e-mail
            $mensagem = "<html>";
            $mensagem .= "<head>";
            $mensagem .= "<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />";
            $mensagem .= "<title></title>";
            $mensagem .= "</head>";
            $mensagem .= "<body style='font-size:16px; background-color:#f7f7f7; margin:0; padding:0; overflow:hidden;'>";
            $mensagem .= "<div style='font-family:sans-serif; width:610px; padding:15px; border-radius:5px; background-color:#fff; margin-top:30px; margin-bottom:30px; margin-left:auto; margin-right:auto;'>";
            $mensagem .= "<h1 style='font-size:20px; margin-top:0;'>E-MAIL ENVIADO DE UM FORMULÁRIO DE CONTATO</h1>";
            $mensagem .= "<hr>";
            $mensagem .= "<p>$saudacao,</p>
                <p>Foi preenchido um novo formulário de contato no site <a href='$site'>$site</a>.</p>
                <p><strong>Nome:</strong> $formnome<br>
                <strong>E-mail:</strong> $formemail<br>
                <strong>Celular:</strong> $formcelular<br></p>
                <p>
                $formmensagem</p>";
            $mensagem .= "<hr>";
            $mensagem .= "<p style='margin:0; font-size:14px;'>Este e-mail foi enviado pelo formulário de contato do site <a href='$site'>$site</a>.</p>";
            $mensagem .= "</div>";
            $mensagem .= "</body>";
            $mensagem .= "</html>";

            // Escrevendo a mensagem alternativa caso o cliente de e-mail não suporte html
            $mensagem2 = "E-MAIL ENVIADO DE UM FORMULÁRIO DE CONTATO\r\n \r\n";
            $mensagem2 .= "$saudacao,\r\n \r\n
                Foi preenchido um novo formulário de contato no site $site.\r\n \r\n
                Nome: $formnome\r\n
                E-mail: $formemail\r\n
                Celular: $formcelular\r\n;
                Mensagem enviada:\r\n
                $formmensagem\r\n \r\n
                Este e-mail foi enviado pelo formulário de contato do site $site.";

            // Define a mensagem (Texto e Assunto)
            $mail->Subject = "FORMULÁRIO DE CONTATO"; // Assunto da mensagem
            $mail->Body = $mensagem;
            $mail->AltBody = $mensagem2;

            // Envia o e-mail
            $enviado = $mail->Send();

            // Limpa os destinatários e os anexos
            $mail->ClearAllRecipients();
            $mail->ClearAttachments();

            // verifica se o e-mail foi enviado
            if ($enviado) :
                // passando o tipo do alerta e a mensagem
                $resposta = array('tipo' => 'green', 'mensagem' => 'Seu e-mail foi enviado com sucesso.');
                echo json_encode($resposta);
            else :
                // passando o tipo do alerta e a mensagem
                $resposta = array('tipo' => 'red', 'mensagem' => 'Seu e-mail não pode ser enviado. Erro: ' . $mail->ErrorInfo);
                echo json_encode($resposta);
            endif;
        endif;
    endif;
endif;
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
@import "_base";
@import "_buttons"`,

    "_variables.scss": `// URLs
$urlImg: '../images/';

// FONT-FAMILY
$fontFamily: "Roboto", sans-serif;
$poppins: "Poppins", sans-serif;

// COLORS
$primary:     ${cor1}; 
$secondary:   ${cor2};


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
    $min-contrast-ratio: 2 !default;
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
        color: var(--bs-primary);
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
@import "../../node_modules/bootstrap/scss/bootstrap";`,
    "_buttons.scss": `.btn{
    &-whatsapp{
        width: 55px;
        height: 55px;
        @include rfs(25px);
        text-align: center;
        align-content: center;
        color: var(--bs-white);
        background-color: #25d366;
        border-radius: 50%;
        border: 2px solid var(--bs-white);
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
        &:hover{
            color: var(--bs-white);
        }
    }
}
`
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

const scriptJsPath = path.join(projectRoot, "assets/js", "script.js");

const scriptJsContent = `document.addEventListener("DOMContentLoaded", function () {
    // Máscara para celular
    const masks = document.querySelectorAll('.celular-mask');
    masks.forEach(input => {
        input.addEventListener('input', function () {
            let value = this.value.replace(/\D/g, '');
            if (value.length <= 10) {
                this.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                this.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
        });
    });

    // Loading customizado com SweetAlert2
    const loading = Swal.mixin({
        title: 'Enviando sua mensagem...',
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
        showConfirmButton: false
    });

    const form = document.querySelector('#formcontato');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const dados = new FormData(form);

        loading.fire(); // Abre o loading

        fetch('enviar.php', {
            method: 'POST',
            body: dados
        })
            .then(res => res.json())
            .then(resposta => {
                Swal.close(); // Fecha o loading

                let icon = 'error';
                if (resposta.tipo === 'green') icon = 'success';
                if (resposta.tipo === 'orange') icon = 'warning';

                Swal.fire({
                    icon: icon,
                    html: resposta.mensagem,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#007381'
                }).then(result => {
                    if (resposta.tipo === 'green') {
                        window.location.href = "https://${dominio}";
                    }
                });
            })
            .catch(() => {
                Swal.close();
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: 'Um erro desconhecido aconteceu e sua mensagem não pode ser enviada.'
                });
            });
    });
});
`;

if (!fs.existsSync(scriptJsPath)) {
    fs.writeFileSync(scriptJsPath, scriptJsContent);
    console.log(`📄 Arquivo criado: ${scriptJsPath}`);
}


const assets = [
    { src: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", dest: "assets/js/bootstrap.bundle.min.js" },
    { src: "node_modules/jquery/dist/jquery.min.js", dest: "assets/js/jquery.min.js" },
    { src: "node_modules/swiper/swiper-bundle.min.css", dest: "assets/css/swiper-bundle.min.css" },
    { src: "node_modules/swiper/swiper-bundle.min.js", dest: "assets/js/swiper-bundle.min.js" },
    { src: "node_modules/aos/dist/aos.css", dest: "assets/css/aos.css" },
    { src: "node_modules/aos/dist/aos.js", dest: "assets/js/aos.js" },
    { src: "node_modules/sweetalert2/dist/sweetalert2.all.min.js", dest: "assets/js/sweetalert2.all.min.js" },
    { src: "node_modules/cookie/cookie.min.js", dest: "assets/js/cookie.min.js" }
];

assets.forEach(asset => {
    copyFile(asset.src, path.join(projectRoot, asset.dest));
});

console.log("🚀 Build concluída!");

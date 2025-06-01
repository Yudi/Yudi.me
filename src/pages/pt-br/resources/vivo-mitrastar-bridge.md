---
layout: ../../../layouts/MarkdownPostLayout-pt.astro
title: Como colocar o modem MitraStar da Vivo em bridge sem perder TV e telefone
date: 2025-01-17
tags: ["networking", "vivo"]
---

A página de configuração padrão do modem MitraStar (HGU) fornecido pela Vivo possui um modo bridge, mas ele não é implementado corretamente. Quando ativado, o HGU não fornece mais os serviços de VOIP e IPTV.

Para corrigir isso, você também precisa saber como desbloquear a página `/padrao` de configurações avançadas do modem, que é bloqueada pela operadora. Isso pode ser feito com os seguintes passos:

**Desbloqueio da página de configurações avançadas:**

1. Desconecte o cabo de fibra do modem
1. Faça um hard reset no modem

   - Mantenha pressionado o botão de reset – que esta atrás do modem – até que todas as luzes se apaguem

1. Conecte-se à rede do modem via Wi-Fi ou cabo Ethernet

1. Acesse a página do técnico em [192.168.15.1/instalador](http://192.168.15.1/instalador)

   - Faça login com `support` como nome de usuário. A senha é a mesma do usuário `admin`, que está impressa na etiqueta embaixo do modem

1. Altere a região da sua rede e salve as configurações

   - Se for "VIVO1", mude para "VIVO2" ou vice-versa

1. Após o modem reiniciar, altere a região de volta para a original

1. Acesse a página de configurações avançadas em [192.168.15.1/padrao](http://192.168.15.1/padrao)

   - Faça login com `support` como nome de usuário e a senha impressa na etiqueta embaixo do modem

1. Vá em `Manutenção` > `TR-069 Client` > `CWMP` e desative a opção. Também desative o `MGMT Remoto`

   - Isso impedirá que a Vivo altere remotamente as configurações do modem, o que redefiniria as opções alteradas e removeria a página de configurações avançadas

**Configuração do bridge:**

1. Vá para `Configuração de Rede` > `WAN` e modifique o item "Internet":

   1. Altere o "Name" (nome) para "bridge"
   1. Altere o "Mode" (modo) para "Bridge"

   - Se sua rede é a VIVO1, o ID da VLAN deve ser 10. Se for VIVO2, deve ser 600.

1. Reconecte o cabo de fibra

1. Configure o seu próprio roteador com as seguintes credenciais PPPoE:

   - Usuário: `cliente@cliente`
   - Senha: `cliente`

Pronto! Agora você tem o modem MitraStar da Vivo em bridge sem perder os serviços de TV e telefone.

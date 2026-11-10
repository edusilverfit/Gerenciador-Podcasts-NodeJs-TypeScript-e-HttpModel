# Podcast Manager

### Descrição

Um app ao estilo Netflix onde eu possa centralizar diferentes episódios separados por categoria

### Domínio

Podcasts feito em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilding, mentalidade, humor]
- Filtrar episódios por nome de podcasts


## Como

#### Feature:
    Listar os episódios podcasts em sessões de categorias
### Como vou implementar:
    GET: retorna lista de episódios

    response: 


```js
[
{
    podcastName: "flow"
    episode: "CBUM - Flow # 319"
    videoId: "pQSuQmUfS30"
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q"
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygURZmxvdyBwb2RjYXN0IGNidW3SBwkJQQwBhyohjO8%3D"
    category: ["saúde", "bodybuilding"]
},
{
    podcastName: "flow"
    episode: "RUBENS BARRICHELO - Flow # 339"
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A"
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUfZmxvdyBwb2RjYXN0IHJ1YmVucyBiYXJyaWNoZWxsbw%3D%3D"
    category: ["esporte", "corrida"]
},
]
```
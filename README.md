# CyberPokeAPI

# learned

favicon wasn't reloading because it was cached, adding '?v=1.1' to the end so that it's like href="favicon.ico?v=1.1" fixed it by forcing it to update

- need break statements after switch cases because you can have multiple cases associated with the same block
```js
case 'A':
case 'B':
case 'C':
    doSomething();
    break;

case 'D':
case 'E':
    doSomethingElse();
    break;
```

[SO:Why do we need break after case statements?](https://stackoverflow.com/questions/2710300/why-do-we-need-break-after-case-statements)
[SO: Find object by id in array of JavaScript objects](https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects)
[SO:favicon not showing on local server](https://stackoverflow.com/questions/43401937/favicon-not-showing-locally-on-express)

# relevant links

[emoji favicons](https://favicon.io/)

# midjourney

I think it's interesting how it has a concept of the more popular monsters. It had zero cocnept of arbok, but knew exactly what beedrill was.

- sometimes upscaling to max looks worse. i found myself saving the first iterationg of them to disk if i liked them before upscaling to max because the web client doesn't allow you to access the non-max version

- you can have it use any image as a reference by including it as the first argument

- writing 'cute' will basically always result in something small

- had a ton of trouble with cloyster, but eventually got it. i'm unsure if it starts to understand me more as i make requests in the same session

- i'm always astounded how there's ALWAYS way to get what you're looking for. diglett is a good example

- some keywords carry a lot more weight by default. for example if you put 'flying', almost every single render will have clouds in it, even if it's one word among a 10 word prompt. using the ::1 weight parameters really helps. For this project, the word 'cyberpunk' holds a LOT of weight, so I often got much better results by just including it as ::.2 and the others as high as ::2 sometimes. It also depends on whether you want your render to be 'influenced' by a keyword, or to literally be that. In my case I want a cyberpunk influence, not a subject, sort of.
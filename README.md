# easy snow for websites!!!

ever wanted to make snow effects on your website??

it's easier than ever now!!

just add this css to your website:

```css
@keyframes snow {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100vh);
  }
}

.snow {
  position: fixed;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.snow1 {
  animation: snow 10s linear infinite;
}

.snow2 {
  animation: snow 8s linear infinite;
}

.snow3 {
  animation: snow 6s linear infinite;
}

.snow4 {
  animation: snow 4s linear infinite;
}
```

and add this js to your website:

```javascript
setInterval(() => {
  const snow = document.createElement("div");

  const size = Math.max(4, Math.ceil(Math.random() * 30) - 9);

  snow.style.width = size + "px";
  snow.style.height = size + "px";

  const x = Math.floor(Math.random() * window.innerWidth - size);
  const y = Math.floor(Math.random() * window.innerHeight);

  snow.style.left = x + "px";
  snow.style.top = "0px";

  snow.classList.add("snow");

  const lifeSpan = Math.floor(Math.random() * 4);

  snow.classList.add("snow" + (lifeSpan + 1));

  document.body.appendChild(snow);

  // snow truck
  setTimeout(() => {
    snow.remove();
  }, [10, 8, 6, 4][lifeSpan] * 1000);
}, 200);
```

and you're done!!

alternatively, you can also import the css and js file in your \<head\>:

```html
<link rel="stylesheet" href="https://tobycm.github.io/easy-snow/snow.css" />
<script src="https://tobycm.github.io/easy-snow/snow.js"></script>
```
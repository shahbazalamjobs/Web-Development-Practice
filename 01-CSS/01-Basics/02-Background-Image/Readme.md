# Background in CSS

## Basics
1. Set background color to light blue
```
body {
  background-color: lightblue;
}
```

2. Set background image

2.1: Simple (but it repeats in all direction)
```
body {
  background: url(Image.jpg);
}
```
![image](https://user-images.githubusercontent.com/125631878/233771417-11a74f88-a587-41b0-b812-93407f979d24.png)

2.2 Simple but no repeat
```
body {
  background: url(Image.jpg) no-repeat;
}
```
![image](https://user-images.githubusercontent.com/125631878/233771448-5d058420-da24-428f-813a-f8cac5dd025a.png)

3.1 Linear Gradients
```
body {
  background: linear-gradient(black, white);
}
```

3.2 Radial Gradients
```
body {
  background: radial-gradient(circle, black, white);
}
```
![image](https://user-images.githubusercontent.com/125631878/233773530-5be1c57b-1186-431f-b5cd-a161e4bca9a9.png)

**********
[Note]: If background image fails to load or the browser doesn't support gradient then browser looks for fallback color
```
body {
  background: url(sweettexture.jpg) blue;
}
```

**********
## Several ways to reduce HTTP requests for background images. Here are a few techniques you can try:

- Use CSS sprites: CSS sprites allow you to combine multiple images into a single image, which can be downloaded with a single HTTP request. Then, you can use CSS to display the specific portion of the image you want as your background image. This reduces the number of HTTP requests made to the server, thus improving the page's load time.

- Use data URIs: Instead of downloading a separate image file, you can encode the image data directly into the CSS file using data URIs. This technique can be useful for small images because it eliminates the need for a separate HTTP request.

- Use a single background image for multiple elements: If you have several elements on a page that require the same background image, you can use a single image for all of them. This reduces the number of HTTP requests and can also save bandwidth.

- Use lazy loading: Lazy loading is a technique where images are loaded only when they are needed, such as when they are in the viewport. This can reduce the number of HTTP requests made at page load time, which can improve page speed.

- Use caching: Caching can be used to store images in the browser cache so that they don't have to be downloaded every time a page is loaded. This can reduce the number of HTTP requests and improve page speed for returning visitors.

**********

- Sprite: CSS sprites help in reducing HTTP requests by combining multiple small images into a single larger image. By doing this, the browser only needs to make one HTTP request to download the single larger image, rather than multiple HTTP requests to download each individual small image.

- After downloading the single image, CSS is used to display the specific portion of the image needed for each element on the page. This technique significantly reduces the number of HTTP requests made to the server, which can improve the page's load time and overall performance.


**********

- Background Image Properties

| Property | Description |
| ---|-----|
| `background-image`   | Used to add a background image to an HTML element                                               |
| `background-repeat`  | Controls how the image is repeated. Values include `repeat`, `repeat-x`, `repeat-y`, and `no-repeat` |
| `background-position`| Controls the position of the background image. Values include `left top`, `center center`, and `right bottom` |
| `background-size`    | Controls the size of the background image. Values include `cover`, `contain`, and a specific width and height in pixels or percentages |
| `background-color`   | Sets a background color for the element, visible if the image doesn't cover the entire element |
| `background-attachment`| Controls whether the background image scrolls with the element or stays fixed |
| `background`         | Shorthand property that sets multiple background properties at once |

**********

- Background repeat attributes

| Attribute | Description |
| --- | --- |
| `background-repeat` | Controls how a background image is repeated. |
| Default value | `repeat`, which repeats the image both horizontally and vertically to cover the entire element. |
| `no-repeat` value | Prevents the background image from being repeated, and it will only appear once in the element. |
| `repeat-x` value | Repeats the image only horizontally. |
| `repeat-y` value | Repeats the image only vertically. |
| Examples | `background-repeat: repeat;`<br>`background-repeat: no-repeat;`<br>`background-repeat: repeat-x;`<br>`background-repeat: repeat-y;` |


*****

1. Background Image to cover full screen 

i. <br>
```
  html,body {
    height: 100%;
    margin: 0;
  }

  img.background {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
```

- The object-fit property is used to control how an image fits inside its container. 
- When we set it to cover, the image is scaled to fit the container as large as possible without being stretched or cropped. 
- This means that the image fills the available space completely, while maintaining its aspect ratio, which ensures that the image does not look distorted or stretched out.


ii. <br>
```
  .container {
      background-image: url("Image.png");
      height: 100vh;
      background-repeat: no-repeat;
      width: 100%;
      background-size: cover;
      background-position: center;
  }
```



![image](https://user-images.githubusercontent.com/125631878/233698273-4e22c42e-3ce0-4552-b2a1-fe3da371aea5.png)


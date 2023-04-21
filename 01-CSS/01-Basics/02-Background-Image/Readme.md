# Background Image in CSS

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

- The object-fit property is used to control how an image fits inside its container. 
- When we set it to cover, the image is scaled to fit the container as large as possible without being stretched or cropped. 
- This means that the image fills the available space completely, while maintaining its aspect ratio, which ensures that the image does not look distorted or stretched out.

![image](https://user-images.githubusercontent.com/125631878/233698273-4e22c42e-3ce0-4552-b2a1-fe3da371aea5.png)

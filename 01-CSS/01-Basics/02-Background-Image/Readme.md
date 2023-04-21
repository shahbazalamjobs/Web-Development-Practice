# Background Image in CSS

1. Background Image to cover full screen
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

![image](https://user-images.githubusercontent.com/125631878/233698273-4e22c42e-3ce0-4552-b2a1-fe3da371aea5.png)

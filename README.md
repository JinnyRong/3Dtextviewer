# 3D text Viewer
#### Video Demo:  <https://youtu.be/BN4BEhnIu-o>
#### Description:
I work with 3D industry and would love to explore more about WebXR, then this is a good chance for me to start the first step. There are mainly two javascript libraries for generating 3D content on Web, which are three.js and babylon.js. I chose three.js just because I did not know about babylon.js until in the middle of the project.

For starting, I started to create a box and then thinking for the final project, I should make something interactively. Therefore, I decided to maka a 3D text Viewer, which allows user to view the text in 3D real time.

My final project is a website for viewing the 3D text, you can type whatever text and it will generate geometry for you. You are also able to change the color and the texture with roughness and metalness.

For the control panel, I create it by using css and html, futhermore, to pass the input value from user to javascript to make the live-time change.
In HTML, I create several divs to make parameters for user to control. And also use id on input value for passing information to javascript. Also have different class and id for css Style.

To generate the geometry, I use three.js library, which allows me to create a scene and apply material on the text geometry. For generating 3D on website, it will need a scene, an object, a camera and a light. Therefore, I create those by using functions in Three.js like Scene(), Perspectivecamera(), WebGLRenderer().

Three other javascript libraries that I used is 1. fontloader.js, which can change the font of the text, 2. textgeometry.js, which generate the text geometry, and 3. orbitcontrols.js, which make the user can navigate and look at 3D text 360 degrees by using mouse and also zoom in and zoom out.

Then I mainly used getElementById and addEventListener to get the value from user and update the 3D text.
I also created a function to update text lively according to the user input value, and also to lively change the value shows on the roughness and metalness slider.

The project can be developed more and I would love to do it too. I would like to make it become a 3D model Viewer. The user will be able to upload their 3D model and material maps, then look how the geometry looks like with the material the upload, or just apply a single color and change the roughness and metalness by using the sliders on the control panel.

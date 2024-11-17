# 3D text Viewer
#### Video Demo:  <https://youtu.be/BN4BEhnIu-o>
#### Description:
This is a website for viewing the 3D text, you can type whatever text and it will generate geometry for you.
You are also able to change the color and the texture with roughness and metalness.

For the control panel, I create it by using css and html, futhermore, to pass the input value from user to javascript to make the live-time change.

To generate the geometry, I use three.js library, which allows me to create a scene and apply material on the text geometry. Three other javascript libraries that I used is 1. fontloader.js, which can change the font of the text, 2. textgeometry.js, which generate the text geometry, and 3. orbitcontrols.js, which make the user can navigate and look at 3D text 360 degrees.

Then I mainly used getElementById and addEventListener to get the value from user and update the 3D text.

# AngularJS-Pong-Addon V0.0.0 5/8/15
This will allow you to add an invisible button to your webpage that you can click and play the classic game Pong.

# Requirements: (Versions of requirements coming soon)
- AngularJS
- ngStorage
- ui-Bootstrap
- Font Awesome
- Bootstrap

# How to Install
1.Add the PongAddon folder to your root folder for any website.
2.Edit SetupPong.js to reference your AngularJS App
3.Paste the following code into the end of your header
```html
  <link rel="stylesheet" type="text/css" href="PongAddon/pong.css" />
  <script type="text/javascript" src="PongAddon/SetupPong.js"></script>
  <script type="text/javascript" src="PongAddon/pong.js"></script>
```
4.Paste the following code into the top of your body
```html
  <div ng-include="'PongAddon/PongBody.html'"></div>
```
5.Play Pong

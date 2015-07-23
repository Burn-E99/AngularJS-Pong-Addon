# AngularJS-Pong-Addon V0.0.1 7/22/15
This will allow you to add an invisible button to your webpage that you can click and play the classic game Pong.  If you have anything that you want to add to this, or any features, please use the Pull Request feature!

Notice: This game will look best on a screen with a 16:9 screen ratio, but other ratios, like 5:4 also work.

# Requirements: (Not official, and subject to change.)
- AngularJS v1.2.28 (This is the version I am developing with, later versions should be supported, unless if something drastic changed)
- ngStorage (For saving local High Scores of you and your friends)
- ui-Bootstrap (May not need?)

# How to Install
1. Add the PongAddon folder to your root folder for your website.
2. Edit the index.html of your website to include the latest versions of the requirements.
3. Edit SetupPong.js to reference your AngularJS App
4. Paste the following code into the end of your header
```html
  <link rel="stylesheet" type="text/css" href="PongAddon/pong.css" />
  <script type="text/javascript" src="PongAddon/SetupPong.js"></script>
  <script type="text/javascript" src="PongAddon/pong.js"></script>
```
5.Paste the following code into the top of your body
```html
  <div ng-include="'PongAddon/PongBody.html'"></div>
```
6.Play Pong

# Contact
If you have any comments or questions about this (or anything else I have worked on), please email me (Ean Milligan) at ean.milligan@gmail.com and I will be sure to reply to you!

# TargetSum

##

Add-sum based mathematic game! Select four numbers to correctly sum to the number at the top. Selecting the correct four numbers updates the top number's container green. Incorrectly selecting four numbers updates the top number's container red. Not selecting four numbers before the timer runs out updates the top number's container red. Good luck!

## Local Development

Use [nvm](https://github.com/nvm-sh/nvm) for managing versions of Node.js across Javascript projects.

1. In a terminal window, navigate to your local copy of `TargetSum`.
2. Ensure you have the following installed: Homebrew, Node, Watchman, Cocoapods, ReactNative
3. Download Xcode, open Preferences > Locations and install tools by selecting the most recent version in the Command Line Tools dropdown.
```
$ cd ios
$ pod install
$ cd ..
$ npx react-native start
$ npx react-native run-ios
```

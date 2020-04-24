# Vue Storefront Open in Editor Module

Open in editor middleware, drop in module for Vue Store Front.

This is a drop in Vue Storefront module that allows component code to be opened directly in the editor of your choice from within the browser using [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).

![Open in editor](https://media.screenpages.com/github/vsf/vsf-open-in-editor-small.gif?v=1)


## Prerequisite
You must have the cli command for your editor installed that allows you to loaunch the editor form the terminal. 

This setup varies, please refer to the documentation for you editor.

examples:

[VS Code - Launching from the command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)



## Usage

1. Install Vue.js devtools

[Vue.js devtools - for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 

[Vue.js devtools - for Firefox](https://addons.mozilla.org/en-GB/firefox/addon/vue-js-devtools/)

2. Install this module into your Vue Store Front project under `src/modules/`
````
git clone https://github.com/screenpages/vsf-open-in-editor.git src/modules/vsf-open-in-editor
````
3. Install dependencies by running
````
yarn install
```` 
from the poject root


4. Default editor is VS Code (please see the table below for supported editors). 

To change the editor, add the follwing to your `config/local.json`
````
  "openInEditor": { 
    "editor": "phpstorm"
  }
  ...
````
and change the *editor* value according to the table.

5. Start dev server as normal
````
yarn dev
````

Once enabled the 'Open in editor' link in Vue.js devtools will open to the correct local file for the component you have selected.


### Supported editors

| Value | Editor | Linux | Windows | OSX |
|--------|------|:------:|:------:|:------:|
| `appcode` | [AppCode](https://www.jetbrains.com/objc/) |  |  |✓|
| `atom` | [Atom](https://atom.io/) |✓|✓|✓|
| `atom-beta` | [Atom Beta](https://atom.io/beta) |  |  |✓|
| `brackets` | [Brackets](http://brackets.io/) |✓|✓|✓|
| `clion` | [Clion](https://www.jetbrains.com/clion/) |  |✓|✓|
| `code` | [Visual Studio Code](https://code.visualstudio.com/) |✓|✓|✓|
| `code-insiders` | [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/) |✓|✓|✓|
| `emacs` | [Emacs](https://www.gnu.org/software/emacs/) |✓| | |
| `idea` | [IDEA](https://www.jetbrains.com/idea/) |✓|✓|✓|
| `notepad++` | [Notepad++](https://notepad-plus-plus.org/download/v7.5.4.html) | |✓| |
| `pycharm` | [PyCharm](https://www.jetbrains.com/pycharm/) |✓|✓|✓|
| `phpstorm` | [PhpStorm](https://www.jetbrains.com/phpstorm/) |✓|✓|✓|
| `rubymine` | [RubyMine](https://www.jetbrains.com/ruby/) |✓|✓|✓|
| `sublime` | [Sublime Text](https://www.sublimetext.com/) |✓|✓|✓|
| `vim` | [Vim](http://www.vim.org/) |✓| | |
| `visualstudio` | [Visual Studio](https://www.visualstudio.com/vs/) | | |✓|
| `webstorm` | [WebStorm](https://www.jetbrains.com/webstorm/) |✓|✓|✓|

### Acknowledgements
This projects is based on the hard work of Evan You:
[Launch Editor](https://github.com/yyx990803/launch-editor)

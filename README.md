# Web server bin

Binary for running a simple web server to allow you to view static web content locally.

Made to allow customers to try static HTML sites without having to open the terminal.

### Usage

Download the correct binary for your platform into the parent directory you want to host locally. Make sure the directory of you files is called `dist`:

```
web-server-win-x64.exe
dist/
  index.html
  app.css
  app.js
```

Double click (or run from terminal) the file for your system and navigate to `127.0.0.1:8080` in your browser to view your web site.

### Install

Use `pkg` if you want to build your own packages:

```
# Install pkg
npm i -g pkg

# Build web server binaries
npm run build
```

The built binaries will appear in the `build` directory.

### Config

Currently only `x64` versions are built. The pkg config is defined in `pkg.json`:

```json
{
  "pkg": {
    "targets": [
      "node16-linux-x64",
      "node16-macos-x64",
      "node16-win-x64"
    ],
    "outputPath": "build"
  }
}
```

If you need to build for `arm` you can add the targets to `pkg.json` like so:

```json
{
  "pkg": {
    "targets": [
      "node16-linux-x64",
      "node16-macos-x64",
      "node16-win-x64",
      "node16-linux-arm64",
      "node16-macos-arm64",
      "node16-win-arm64"
    ],
    "outputPath": "build"
  }
}
```

and then run:
```
npm run build
```

ISC Licensed. Enjoy!

# Nun Installer

A small, portable installer for [Nun](https://github.com/o9ll/nun) — a Discord client mod. It patches your Discord installation by swapping `app.asar`, and can just as easily restore the original.

Built with **Electron** + **Svelte**. Works on **Windows** and **macOS**.

## Features

- One-click install / uninstall for **Discord**, **Discord PTB**, and **Discord Canary**
- Automatically detects installed Discord variants
- Closes Discord before patching and restarts it afterwards
- Keeps a backup of the original `app.asar`, so uninstalling is safe
- Ships as a single portable `.exe` (Windows) or `.dmg` (macOS) — no setup, just run it
- Optional command-line interface for scripting

## Download

Grab `nun.exe` from the releases, or build it yourself (see below). 

## Command-line usage

The same executable can run headless, without opening a window:

```sh
# Windows
nun.exe --install <variant>
nun.exe --uninstall <variant>

# macOS (inside the app bundle)
"Nun Installer.app/Contents/MacOS/Nun Installer" --install <variant>
```

`<variant>` is one of `stable`, `ptb`, or `canary`.

```sh
# Install Nun on Discord Stable
nun.exe --install stable

# Remove Nun from Discord Canary
nun.exe --uninstall canary
```

It exits with code `0` on success and `1` on failure.

## Development

Requires [Node.js](https://nodejs.org).

```sh
npm install      # install dependencies
npm run dev      # run with Vite HMR + Electron
npm start        # build the renderer and launch Electron
```

## Building

```sh
npm run build       # Windows portable .exe
npm run build:mac   # macOS .dmg (run on macOS)
```

The artifacts are written to `release/` — `nun.exe` on Windows and
`nun.dmg` on macOS. Each platform must be built on its own OS.

## License

See [LICENSE](LICENSE).

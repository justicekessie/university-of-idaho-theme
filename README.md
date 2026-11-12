# University of Idaho Theme

University of Idaho-inspired dark and light color themes for **Positron** and **Visual Studio Code**. Bring black-and-gold accents to your editor, terminal, and syntax highlighting.

## Included themes

| Theme | Appearance |
| --- | --- |
| University of Idaho — Black & Gold | Dark background with gold accents and syntax highlighting. |
| University of Idaho — Dual Gold/White/Black | White editor background with dark text and gold accents. |

## Install in Positron

1. Open the **Extensions** view and search for **University of Idaho Theme**.
2. If the extension is available in your configured registry, select **Install**.
3. Otherwise, obtain a `.vsix` package from this repository or build one locally. Open the Command Palette, run **Extensions: Install from VSIX...**, and select the package.
4. Run **Preferences: Color Theme** and choose one of the two theme names above.

Installing a VSIX makes the extension available locally; it does not publish the extension to Positron’s registry. Positron-specific panes may inherit default colors where this theme has no explicit styling.

## Install in Visual Studio Code

Open the **Extensions** view, search for **University of Idaho Theme**, and select **Install**. You can also use **Extensions: Install from VSIX...** to install a local package.

Run **Preferences: Color Theme** from the Command Palette to switch between the dark and light variants.

## Color direction

The confirmed palette for the next color refresh is:

| Color | Hex |
| --- | --- |
| Gold | `#F1B300` |
| Gray | `#808080` |
| Charcoal | `#191919` |
| White | `#FFFFFF` |

Brand reference: [University of Idaho brand guide](https://www.uidaho.edu/brand).

The current theme files still use the original palette, including `#FFCC00` gold and `#000000` black. The palette above describes the planned refresh, not a completed change in this documentation release. A metallic gold value has not been confirmed.

## Customize

In Positron or VS Code, open **Preferences: Open User Settings (JSON)** and add overrides such as:

```json
{
  "workbench.colorCustomizations": {
    "[University of Idaho — Black & Gold]": {
      "editor.background": "#191919",
      "editorCursor.foreground": "#F1B300",
      "focusBorder": "#F1B300"
    }
  }
}
```

Use `editor.tokenColorCustomizations` to adjust syntax highlighting separately.

## Feedback

[Report an issue or request an improvement](https://github.com/justicekessie/university-of-idaho-theme/issues). For color or readability issues, include your editor version, selected theme, language, and a screenshot without private information.

## License

[MIT](LICENSE). This project is inspired by the University of Idaho; it does not claim university endorsement.

Go Vandals!

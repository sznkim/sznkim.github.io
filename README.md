# Fixed self-contained portfolio

This build fixes the two common causes of a broken GitHub Pages layout:

1. All CSS is embedded directly inside `index.html`.
2. A real `assets/images/profile.jpg` file is included.

## Upload correctly

Upload the **contents** of this folder to the root of `sznkim.github.io`:

- index.html
- .nojekyll
- robots.txt
- assets/

Do not upload the ZIP itself, and do not upload the outer folder as one nested directory.

## Replace the profile image

Replace:

`assets/images/profile.jpg`

with your actual photo, keeping the same filename.

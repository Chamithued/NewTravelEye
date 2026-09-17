# Recovery from the deployed build

The missing frontend changes were reconstructed from the supplied root `dist/` folder. That folder was preserved and is still the reference deployment.

Recovered changes include the navigation and Beautiful Sri Lanka logo, updated homepage wording and ordering, the Beautiful People and Media and Press homepage sections, the Local & Global Alignment page, changes to the Beautiful People page, and updates to other page text, links, and images.

The recovery changed 22 existing JSX files, restored the deployed `Beautiful Sri Lanka.jpg`, and recovered additional images under `frontend/src/assets/recovered/`.

The build did not contain source maps. The recovered files are editable JSX, but original comments and some variable and helper names could not be recovered. Backend changes, unused source files, and development settings that were never included in the build cannot be recovered from this deployment.

Validation compared rendered page content for all 56 route paths with the deployed application, normalizing image URLs by their file content and excluding generated image preload tags. All 56 matched. Custom component CSS and each custom base rule also matched after minification. The final production build and ESLint checks for all 22 recovered JSX files passed. This was a server rendering comparison, not an interactive browser or responsive screenshot test.

Run the recovered application:

```powershell
cd frontend
npm run dev
```

Build it for deployment:

```powershell
cd frontend
npm run build
```

The new deployment output is `frontend/dist/`. The supplied root `dist/` remains separate.

Local evidence, intermediate builds, comparison scripts, and copies of replaced GitHub source files are in `recovery/`. Those files and the temporary frontend verification helpers are ignored by Git. Route comparison results are in `recovery/verification.json`.

Commit the recovered source and images to GitHub after reviewing the site so these changes are backed up independently of deployment output.

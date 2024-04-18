## Running the project

```
yarn install && yarn dev
```
Open localhost:3000 in your browser

## Node version used while developing this

```
❯ node -v
v21.1.0
```

### Explainations

```

/my-nextjs-project
│
├── .github
│   └── workflows
│       └── nextjs.yml          # GitHub Actions workflow for CI/CD
│
├── public                      # Static files like images, favicon, and robots.txt
│   ├── images
│   │   └── ...                 # Image files
│   ├── favicon.ico
│   └── robots.txt              ## Later
│
├── src                         # Source code for the project
│   ├── components              # Reusable components
│   │   └── Body                # Body component with Redux store provider
│   │   └── Card                # Card component with Overlay and Image component with title
│   │   └── DnD                 # Drag and Drop component which enables dragging and dropping of passed children, no states used to avoid re-rendering
│   │   └── Loaders             # Loaders component with images fallback loader in base:64 encoded string
│   │   └── Overlay             # Overlay component which enables children to open in overlay when clicked
│   ├── app                     # Pages of your app, each file corresponds to a route
│   │   ├── page.tsx            # all the logic of api calls and state updates are written here so that when updating all logics are at single location
│   │   └── layout.tsx          # layout of the app
│   │   └── loading.tsx         # loading component with 5 cards animation
│   └── lib                     # Redux code
│       └── features
│             └── homeApi.ts    # api call to fetch data, api call is mocked here. when it fails it returns fallback json data
│             └── homeSlice.ts  # reducer and actions
│             └── fallbackJson.ts # fallback json data
│
├── next.config.js              # Next.js configuration file
├── package.json                # Project metadata and dependencies
├── README.md                   # Project overview and documentation
└── yarn.lock or package-lock.json # Dependency lock file

```

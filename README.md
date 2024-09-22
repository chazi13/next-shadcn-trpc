Here’s the updated `README.md` to reflect your use of `pnpm` and Node.js 22:

---

# Next.js Starter Template with ShadCN and tRPC

This is a starter template for building web applications using [Next.js](https://nextjs.org/), [ShadCN](https://shadcn.dev/), and [tRPC](https://trpc.io/). It provides a basic setup with pre-configured tools and libraries to help you get started with a modern, type-safe, and scalable web application.

## Features

- **Next.js** for React-based server-side rendering and static site generation.
- **ShadCN** for building reusable components with Tailwind CSS.
- **tRPC** for end-to-end type-safe APIs without needing to write separate client code.
- **TypeScript** for type safety throughout the project.
- **ESLint** and **Prettier** for code quality and formatting.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 22.x)
- pnpm (>= 9.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chazi13/next-shadcn-trpc.git
   cd next-shadcn-trpc
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Running the Development Server

You can start the development server with the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

### Building for Production

To build the app for production:

```bash
pnpm build
```

## Project Structure

Here's an overview of the project structure:

```
.
├── public/                # Static assets
├── src/
│   ├── pages/             # Next.js pages
│   ├── components/        # Reusable UI components (with ShadCN)
│   ├── server/            # tRPC routers and procedures
│   ├── styles/            # Global styles (including Tailwind setup)
│   └── utils/             # Utility functions
├── .eslintrc.json         # ESLint configuration
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## Available Scripts

- `pnpm dev` – Start the development server.
- `pnpm build` – Create a production build.
- `pnpm start` – Start the production server.
- `pnpm lint` – Run ESLint to check code for issues.

## Contributing

Feel free to open issues or submit pull requests if you find bugs or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

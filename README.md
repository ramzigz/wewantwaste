# WeWantWaste App

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a responsive and interactive one-page app designed to help users choose the most suitable skip size for their needs. The app provides clear visual indicators for restrictions, dynamic updates based on user selection, and a modern design using Tailwind CSS.

---

## Features

- **Responsive Grid Layout**  
  Displays skip options in 1 column on small screens, 2 on medium, and 3 on large. Smooth transitions provide a seamless user experience.

- **Interactive Skip Cards**  
  Each skip is rendered with a reusable `SkipCard` component. Cards react to clicks with animations and selection highlights.

- **Dynamic Footer**  
  Updates in real-time:
  - Prompts the user when no skip is selected.
  - Shows skip details (size, hire period, restrictions, price) once selected.
  - Includes a "Proceed" button.

- **Restrictions Indicators**  
  Icons and labels indicate restrictions such as:
  - ⚠️ "Not Allowed on Road"
  - 🗑️ "Heavy Waste Not Allowed"

- **Modern Design**  
  Sleek dark theme with gradient backgrounds and teal accents. Includes scalable SVG icons.

- **Accessibility**  
  Supports keyboard navigation and includes descriptive `aria-label` attributes for screen readers.

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ramzigz/wewantwaste.git
   cd wewantwaste
   ```

2. Install dependencies using your preferred package manager:

   ```bash
   npm install
   ```

   Alternatively:
   ```bash
   yarn install
   ```

   Or:
   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Alternatively:
   ```bash
   yarn dev
   ```

   Or:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Editing the Code

The main entry point for the app is located in `app/page.tsx`. You can modify this file to customize the layout, content, or functionality. The app uses **Tailwind CSS** for styling, so you can easily adjust the design using utility classes.

---

## Code Style and Linting

- **ESLint** is used for linting. Run `npm run lint` to check for issues.
- **Prettier** is used for code formatting. Run `npm run format` to format the codebase.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## Learn More

To learn more about the technologies used in this project:

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Documentation**: [https://react.dev](https://react.dev)

---

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

Alternatively, you can deploy the app to other platforms like Netlify, AWS, or GitHub Pages. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

---

## Folder Structure

- `app/`: Contains the main application code.
  - `page.tsx`: The main page component.
  - `components/`: Reusable components like `SkipCard`.
  - `data/`: Static data (e.g., skip details).
  - `types/`: Shared type definitions (e.g., `Skip`, `SkipCardProps`).
  - `context/`: Context providers for global state management.
- `public/`: Static assets like images.
- `package.json`: Lists dependencies and scripts.

---

## License

This project is licensed under the MIT License.  
See the `LICENSE` file for details.